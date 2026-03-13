export const SET_NOTIFICATIONS_STATE = 'SET_NOTIFICATIONS_STATE'
export const SET_TOGGLEABLE_FIELDS = 'SET_TOGGLEABLE_FIELDS'
export const SET_OMITTED_FIELDS = 'SET_OMITTED_FIELDS'
export const SET_ACCENT_COLOR = 'SET_ACCENT_COLOR'
export const SET_UI_DENSITY = 'SET_UI_DENSITY'

export const setNotificationsState = (enabled) => ({
  type: SET_NOTIFICATIONS_STATE,
  data: enabled,
})

export const setToggleableFields = (obj) => ({
  type: SET_TOGGLEABLE_FIELDS,
  data: obj,
})

export const setOmittedFields = (obj) => ({
  type: SET_OMITTED_FIELDS,
  data: obj,
})

export const setAccentColor = (color) => ({
  type: SET_ACCENT_COLOR,
  data: color,
})

export const setUIDensity = (density) => ({
  type: SET_UI_DENSITY,
  data: density,
})
