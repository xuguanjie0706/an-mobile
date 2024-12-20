
import { attachPropertiesToComponent } from 'an-mobile/utils/attach-properties-to-component'
import './CheckBox.less'

export type { CheckBoxProps,CheckboxRef,CheckboxValue } from './CheckBox'

export default attachPropertiesToComponent(CheckBox, {
  Group: CheckBoxGroup,
})
