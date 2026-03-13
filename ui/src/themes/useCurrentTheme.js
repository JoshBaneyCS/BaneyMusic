import { useSelector } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import themes, { createBaneyDarkTheme, createBaneyLightTheme } from './index'
import { AUTO_THEME_ID } from '../consts'
import config from '../config'
import { useEffect, useMemo } from 'react'

const isBaneyTheme = (name) =>
  name === 'BaneyDarkTheme' || name === 'BaneyLightTheme'

const useCurrentTheme = () => {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  const accentColor = useSelector((state) => state.settings?.accentColor)

  const themeName = useSelector((state) => {
    if (state.theme === AUTO_THEME_ID) {
      return prefersLightMode ? 'BaneyLightTheme' : 'BaneyDarkTheme'
    }
    return (
      Object.keys(themes).find((t) => t === state.theme) ||
      Object.keys(themes).find(
        (t) => themes[t].themeName === config.defaultTheme,
      ) ||
      'BaneyDarkTheme'
    )
  })

  // Regenerate BaneyMusic themes with custom accent color if set
  const theme = useMemo(() => {
    if (isBaneyTheme(themeName) && accentColor) {
      return themeName === 'BaneyLightTheme'
        ? createBaneyLightTheme(accentColor)
        : createBaneyDarkTheme(accentColor)
    }
    return themes[themeName] || themes.BaneyDarkTheme
  }, [themeName, accentColor])

  useEffect(() => {
    const styles = document.getElementsByTagName('style')
    let style
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].id === 'nd-player-style-override') {
        style = styles[i]
      }
    }
    if (theme.player.stylesheet) {
      if (style === undefined) {
        style = document.createElement('style')
        style.id = 'nd-player-style-override'
        style.innerHTML = theme.player.stylesheet
        document.head.appendChild(style)
      } else {
        style.innerHTML = theme.player.stylesheet
      }
    } else {
      if (style !== undefined) {
        document.head.removeChild(style)
      }
    }

    // Set body background color to match theme (fixes white background on pull-to-refresh)
    const isDark = theme.palette?.type === 'dark'
    const bgColor =
      theme.palette?.background?.default || (isDark ? '#303030' : '#fafafa')
    document.body.style.backgroundColor = bgColor
  }, [theme])

  return theme
}

export default useCurrentTheme
