import {
  darken,
  lighten,
  alpha,
} from '@material-ui/core/styles/colorManipulator'

// Default BaneyMusic brand blue (from the logo)
export const BANEY_BLUE = '#42AAFF'

/**
 * Generate a complete design token set from a single accent color.
 * @param {string} accent - Hex color string (e.g. '#42AAFF')
 * @param {'dark'|'light'} mode - Theme mode
 * @returns {object} Design tokens
 */
export function createTokens(accent = BANEY_BLUE, mode = 'dark') {
  const isDark = mode === 'dark'

  return {
    accent,
    accentLight: lighten(accent, 0.2),
    accentDark: darken(accent, 0.2),
    accentAlpha: alpha(accent, 0.16),
    accentAlphaHover: alpha(accent, 0.24),

    // Backgrounds
    bgPrimary: isDark ? '#121212' : '#fafafa',
    bgSecondary: isDark ? '#1e1e1e' : '#ffffff',
    bgCard: isDark ? '#252525' : '#ffffff',
    bgSidebar: isDark ? '#1a1a1a' : '#f5f5f5',
    bgPlayer: isDark ? '#181818' : '#ffffff',
    bgInput: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',

    // Text
    textPrimary: isDark ? '#ffffff' : '#212121',
    textSecondary: isDark ? '#b3b3b3' : '#666666',
    textMuted: isDark ? '#808080' : '#999999',

    // Borders
    border: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    divider: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',

    // Radii
    radiusSm: 4,
    radiusMd: 8,
    radiusLg: 12,
    radiusXl: 16,

    // Shadows
    shadowSm: isDark
      ? '0 1px 3px rgba(0,0,0,0.4)'
      : '0 1px 3px rgba(0,0,0,0.08)',
    shadowMd: isDark
      ? '0 4px 12px rgba(0,0,0,0.5)'
      : '0 4px 12px rgba(0,0,0,0.1)',
    shadowLg: isDark
      ? '0 8px 24px rgba(0,0,0,0.6)'
      : '0 8px 24px rgba(0,0,0,0.12)',
  }
}
