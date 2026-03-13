import {
  SET_NOTIFICATIONS_STATE,
  SET_OMITTED_FIELDS,
  SET_TOGGLEABLE_FIELDS,
  SET_ACCENT_COLOR,
  SET_UI_DENSITY,
  SET_SHOW_DUPLICATES,
} from '../actions'

const initialState = {
  notifications: false,
  toggleableFields: {},
  omittedFields: {},
  accentColor: null, // null = use default BaneyMusic blue
  uiDensity: 'comfortable', // 'compact' | 'comfortable' | 'spacious'
  showDuplicates: false, // false = hide duplicates by default
}

export const settingsReducer = (previousState = initialState, payload) => {
  const { type, data } = payload
  switch (type) {
    case SET_NOTIFICATIONS_STATE:
      return {
        ...previousState,
        notifications: data,
      }
    case SET_TOGGLEABLE_FIELDS:
      return {
        ...previousState,
        toggleableFields: {
          ...previousState.toggleableFields,
          ...data,
        },
      }
    case SET_OMITTED_FIELDS:
      return {
        ...previousState,
        omittedFields: {
          ...previousState.omittedFields,
          ...data,
        },
      }
    case SET_ACCENT_COLOR:
      return {
        ...previousState,
        accentColor: data,
      }
    case SET_UI_DENSITY:
      return {
        ...previousState,
        uiDensity: data,
      }
    case SET_SHOW_DUPLICATES:
      return {
        ...previousState,
        showDuplicates: data,
      }
    default:
      return previousState
  }
}
