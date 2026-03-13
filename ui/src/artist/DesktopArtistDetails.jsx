import React, { useState } from 'react'
import { Typography, Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import ArtistExternalLinks from './ArtistExternalLink'
import config from '../config'
import { LoveButton, RatingField } from '../common'
import Lightbox from 'react-image-lightbox'
import ExpandInfoDialog from '../dialogs/ExpandInfoDialog'
import AlbumInfo from '../album/AlbumInfo'
import subsonic from '../subsonic'
import { SafeHTML } from '../common/SafeHTML'

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      padding: '0',
      position: 'relative',
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      filter: 'blur(20px) brightness(0.4)',
      transform: 'scale(1.1)',
      zIndex: 0,
    },
    details: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
    },
    biography: {
      display: 'inline-block',
      marginTop: '1em',
      float: 'left',
      wordBreak: 'break-word',
      cursor: 'pointer',
      minHeight: '4.5em',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '14rem',
      height: '14rem',
      borderRadius: '50%',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease',
      objectFit: 'cover',
      border: `3px solid ${theme.palette.primary.main}`,
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      '&:hover': {
        transform: 'scale(1.03)',
      },
    },
    coverLoading: {
      opacity: 0.5,
    },
    artistImage: {
      maxHeight: '14rem',
      minHeight: '14rem',
      width: '14rem',
      minWidth: '14rem',
      backgroundColor: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'none',
    },
    artistDetail: {
      flex: '1',
      padding: '2em',
      display: 'flex',
      minHeight: '12rem',
      position: 'relative',
      zIndex: 1,
      borderRadius: 12,
      overflow: 'hidden',
    },
    button: {
      marginLeft: '0.9em',
    },
    loveButton: {
      top: theme.spacing(-0.2),
      left: theme.spacing(0.5),
    },
    rating: {
      marginTop: '5px',
    },
    artistName: {
      wordBreak: 'break-word',
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
  }),
  { name: 'NDDesktopArtistDetails' },
)

const DesktopArtistDetails = ({ artistInfo, record, biography }) => {
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles()
  const title = record.name
  const [isLightboxOpen, setLightboxOpen] = React.useState(false)
  const [imageLoading, setImageLoading] = React.useState(false)
  const [imageError, setImageError] = React.useState(false)

  // Reset image state when artist changes
  React.useEffect(() => {
    setImageLoading(true)
    setImageError(false)
  }, [record.id])

  const handleImageLoad = React.useCallback(() => {
    setImageLoading(false)
    setImageError(false)
  }, [])

  const handleImageError = React.useCallback(() => {
    setImageLoading(false)
    setImageError(true)
  }, [])

  const handleOpenLightbox = React.useCallback(() => {
    if (!imageError) {
      setLightboxOpen(true)
    }
  }, [imageError])

  const handleCloseLightbox = React.useCallback(
    () => setLightboxOpen(false),
    [],
  )

  return (
    <div className={classes.root}>
      <Card className={classes.artistDetail}>
        <Card className={classes.artistImage}>
          {artistInfo && (
            <CardMedia
              key={record.id}
              component="img"
              src={subsonic.getCoverArtUrl(record, 300)}
              className={`${classes.cover} ${imageLoading ? classes.coverLoading : ''}`}
              onClick={handleOpenLightbox}
              onLoad={handleImageLoad}
              onError={handleImageError}
              title={title}
              style={{
                cursor: imageError ? 'default' : 'pointer',
              }}
            />
          )}
        </Card>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              component="h5"
              variant="h5"
              className={classes.artistName}
            >
              {title}
              <LoveButton
                className={classes.loveButton}
                record={record}
                resource={'artist'}
                size={'default'}
                aria-label="artist context menu"
                color="primary"
              />
            </Typography>
            {config.enableStarRating && (
              <div>
                <RatingField
                  record={record}
                  resource={'artist'}
                  size={'small'}
                  className={classes.rating}
                />
              </div>
            )}
            <Collapse
              collapsedHeight={'4.5em'}
              in={expanded}
              timeout={'auto'}
              className={classes.biography}
            >
              <Typography
                variant={'body1'}
                onClick={() => setExpanded(!expanded)}
              >
                <span>
                  <SafeHTML>{biography}</SafeHTML>
                </span>
              </Typography>
            </Collapse>
          </CardContent>
          <Typography component={'div'} className={classes.button}>
            {config.enableExternalServices && (
              <ArtistExternalLinks artistInfo={artistInfo} record={record} />
            )}
          </Typography>
        </div>
        {isLightboxOpen && !imageError && (
          <Lightbox
            imagePadding={50}
            animationDuration={200}
            imageTitle={record.name}
            mainSrc={subsonic.getCoverArtUrl(record)}
            onCloseRequest={handleCloseLightbox}
          />
        )}
      </Card>
      <ExpandInfoDialog content={<AlbumInfo />} />
    </div>
  )
}

export default DesktopArtistDetails
