import createBaneyDarkTheme from './baneyDark'
import createBaneyLightTheme from './baneyLight'
import LightTheme from './light'
import DarkTheme from './dark'
import ExtraDarkTheme from './extradark'
import GreenTheme from './green'
import SpotifyTheme from './spotify'
import LigeraTheme from './ligera'
import MonokaiTheme from './monokai'
import ElectricPurpleTheme from './electricPurple'
import NordTheme from './nord'
import GruvboxDarkTheme from './gruvboxDark'
import CatppuccinMacchiatoTheme from './catppuccinMacchiato'
import DraculaTheme from './dracula'
import NuclearTheme from './nuclear'
import AmusicTheme from './amusic'
import SquiddiesGlassTheme from './SquiddiesGlass'
import NautilineTheme from './nautiline'

// BaneyMusic themes are created with the default accent color.
// They are regenerated dynamically in useCurrentTheme when a custom accent is set.
const BaneyDarkTheme = createBaneyDarkTheme()
const BaneyLightTheme = createBaneyLightTheme()

export { createBaneyDarkTheme, createBaneyLightTheme }

export default {
  // BaneyMusic default themes
  BaneyDarkTheme,
  BaneyLightTheme,

  // Classic themes
  LightTheme,
  DarkTheme,

  // Community themes (alphabetic order)
  AmusicTheme,
  CatppuccinMacchiatoTheme,
  DraculaTheme,
  ElectricPurpleTheme,
  ExtraDarkTheme,
  GreenTheme,
  GruvboxDarkTheme,
  LigeraTheme,
  MonokaiTheme,
  NautilineTheme,
  NordTheme,
  NuclearTheme,
  SpotifyTheme,
  SquiddiesGlassTheme,
}
