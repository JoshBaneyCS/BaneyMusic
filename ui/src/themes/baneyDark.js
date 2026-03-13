import { createTokens, BANEY_BLUE } from './tokens'
import createBaneyDarkStylesheet from './baneyDark.css.js'

export default function createBaneyDarkTheme(accent = BANEY_BLUE) {
  const t = createTokens(accent, 'dark')

  return {
    themeName: 'BaneyDark',
    palette: {
      primary: {
        main: t.accent,
        light: t.accentLight,
        dark: t.accentDark,
      },
      secondary: {
        main: t.accent,
        light: t.accentLight,
        dark: t.accentDark,
      },
      type: 'dark',
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
      MuiFormGroup: {
        root: {
          color: t.textPrimary,
        },
      },
      MuiButton: {
        textPrimary: {
          color: t.textPrimary,
        },
        containedPrimary: {
          backgroundColor: t.accent,
          '&:hover': {
            backgroundColor: t.accentDark,
          },
        },
      },
      MuiFilledInput: {
        root: {
          backgroundColor: t.bgInput,
          '&$disabled': {
            backgroundColor: t.bgInput,
          },
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: t.border,
        },
      },
      NDLogin: {
        systemNameLink: {
          color: t.accent,
        },
        icon: {},
        welcome: {
          color: t.textSecondary,
        },
        card: {
          minWidth: 300,
          backgroundColor: t.bgCard + 'ed',
          borderRadius: t.radiusLg,
          boxShadow: t.shadowLg,
        },
        avatar: {},
        button: {
          boxShadow: t.shadowMd,
        },
      },
      NDMobileArtistDetails: {
        bgContainer: {
          background: `linear-gradient(to bottom, rgba(18 18 18 / 72%), ${t.bgPrimary})!important`,
        },
      },
    },
    player: {
      theme: 'dark',
      stylesheet: createBaneyDarkStylesheet(t.accent),
    },
  }
}
