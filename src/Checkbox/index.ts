import './Checkbox.less'
import { attachPropertiesToComponent } from '../utils/attach-properties-to-component'
import { Group } from './Group'
import { Checkbox } from './Checkbox'

export type { CheckboxValue, CheckboxProps, CheckboxRef } from './Checkbox'
export type { CheckboxGroupProps } from './Group'

export default attachPropertiesToComponent(Checkbox, {
  Group,
})
