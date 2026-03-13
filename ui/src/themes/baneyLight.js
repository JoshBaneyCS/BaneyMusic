import { createTokens, BANEY_BLUE } from './tokens'
import createBaneyLightStylesheet from './baneyLight.css.js'

export default function createBaneyLightTheme(accent = BANEY_BLUE) {
  const t = createTokens(accent, 'light')

  return {
    themeName: 'BaneyLight',
    palette: {
      primary: {
        main: t.accent,
        light: t.accentLight,
        dark: t.accentDark,
      },
      secondary: {
        main: t.accentDark,
        light: t.accent,
        dark: t.accentDark,
        contrastText: '#fff',
      },
      background: {
        default: t.bgPrimary,
        paper: t.bgSecondary,
      },
      text: {
        primary: t.textPrimary,
        secondary: t.textSecondary,
      },
      divider: t.divider,
    },
    overrides: {
      MuiFilledInput: {
        root: {
          backgroundColor: t.bgInput,
          '&$disabled': {
            backgroundColor: t.bgInput,
          },
        },
      },
      MuiButton: {
        containedPrimary: {
          backgroundColor: t.accent,
          '&:hover': {
            backgroundColor: t.accentDark,
          },
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: t.border,
        },
      },
      NDLogin: {
        main: {
          '& .MuiFormLabel-root': {
            color: t.textPrimary,
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: t.accent,
          },
          '& .MuiFormLabel-root.Mui-error': {
            color: '#f44336',
          },
          '& .MuiInput-underline:after': {
            borderBottom: `2px solid ${t.accent}`,
          },
        },
        card: {
          minWidth: 300,
          marginTop: '6em',
          backgroundColor: '#ffffffe6',
          borderRadius: t.radiusLg,
          boxShadow: t.shadowLg,
        },
        avatar: {},
        icon: {},
        button: {
          boxShadow: t.shadowMd,
        },
        systemNameLink: {
          color: t.accent,
        },
      },
      NDMobileArtistDetails: {
        bgContainer: {
          background: `linear-gradient(to bottom, rgb(255 255 255 / 51%), ${t.bgPrimary})!important`,
        },
      },
    },
    player: {
      theme: 'light',
      stylesheet: createBaneyLightStylesheet(t.accent),
    },
  }
}
