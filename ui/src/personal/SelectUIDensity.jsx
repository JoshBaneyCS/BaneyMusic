import { SelectInput, useTranslate } from 'react-admin'
import { useDispatch, useSelector } from 'react-redux'
import { setUIDensity } from '../actions'

const densityChoices = [
  { id: 'compact', name: 'Compact' },
  { id: 'comfortable', name: 'Comfortable' },
  { id: 'spacious', name: 'Spacious' },
]

export const SelectUIDensity = (props) => {
  const translate = useTranslate()
  const dispatch = useDispatch()
  const currentDensity = useSelector(
    (state) => state.settings?.uiDensity || 'comfortable',
  )
  const currentTheme = useSelector((state) => state.theme)

  // Only show for BaneyMusic themes
  const isBaneyTheme =
    currentTheme === 'BaneyDarkTheme' ||
    currentTheme === 'BaneyLightTheme' ||
    currentTheme === 'AUTO_THEME_ID'

  if (!isBaneyTheme) return null

  return (
    <SelectInput
      {...props}
      source="uiDensity"
      label={translate('menu.personal.options.uiDensity', {
        _: 'UI Density',
      })}
      defaultValue={currentDensity}
      translateChoice={false}
      choices={densityChoices}
      onChange={(event) => {
        dispatch(setUIDensity(event.target.value))
      }}
    />
  )
}
