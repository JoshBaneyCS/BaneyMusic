import React from 'react'
import { useTranslate } from 'react-admin'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Box, Typography, IconButton } from '@material-ui/core'
import { setAccentColor } from '../actions'
import { BANEY_BLUE } from '../themes/tokens'

const presetColors = [
  { name: 'BaneyMusic Blue', color: BANEY_BLUE },
  { name: 'Purple', color: '#9C27B0' },
  { name: 'Teal', color: '#009688' },
  { name: 'Orange', color: '#FF9800' },
  { name: 'Pink', color: '#E91E63' },
  { name: 'Green', color: '#4CAF50' },
  { name: 'Red', color: '#F44336' },
  { name: 'Indigo', color: '#3F51B5' },
]

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: '100%',
    maxWidth: 256,
  },
  label: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontSize: '0.75rem',
  },
  swatches: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: theme.spacing(1),
  },
  swatch: {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: '2px solid transparent',
    cursor: 'pointer',
    padding: 0,
    transition: 'transform 0.15s ease, border-color 0.15s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  swatchActive: {
    borderColor: theme.palette.text.primary,
    transform: 'scale(1.1)',
  },
  customInput: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  colorInput: {
    width: 40,
    height: 32,
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    padding: 0,
    backgroundColor: 'transparent',
  },
}))

export const AccentColorPicker = () => {
  const translate = useTranslate()
  const dispatch = useDispatch()
  const classes = useStyles()
  const currentAccent = useSelector(
    (state) => state.settings?.accentColor || BANEY_BLUE,
  )
  const currentTheme = useSelector((state) => state.theme)

  // Only show for BaneyMusic themes
  const isBaneyTheme =
    currentTheme === 'BaneyDarkTheme' ||
    currentTheme === 'BaneyLightTheme' ||
    currentTheme === 'AUTO_THEME_ID'

  if (!isBaneyTheme) return null

  const handleColorChange = (color) => {
    dispatch(setAccentColor(color))
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.label}>
        {translate('menu.personal.options.accentColor', {
          _: 'Accent Color',
        })}
      </Typography>
      <Box className={classes.swatches}>
        {presetColors.map(({ name, color }) => (
          <IconButton
            key={color}
            className={`${classes.swatch} ${currentAccent === color ? classes.swatchActive : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
            title={name}
            size="small"
          />
        ))}
      </Box>
      <Box className={classes.customInput}>
        <input
          type="color"
          value={currentAccent}
          onChange={(e) => handleColorChange(e.target.value)}
          className={classes.colorInput}
          title="Custom color"
        />
        <Typography variant="caption" color="textSecondary">
          {translate('menu.personal.options.customColor', {
            _: 'Custom color',
          })}
        </Typography>
      </Box>
    </Box>
  )
}
