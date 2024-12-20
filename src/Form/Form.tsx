import { useConfig } from 'an-mobile/ConfigProvider';
import { NativeProps } from 'an-mobile/utils/native-props';
import { mergeProps } from 'an-mobile/utils/with-default-props';
import type {
  FormInstance as RCFormInstance,
  FormProps as RcFormProps,
} from 'rc-field-form';
import merge from 'deepmerge'
import RcForm from 'rc-field-form';
import { ForwardedRef, forwardRef, ReactNode, useMemo } from 'react';
import List from "../List"
import { traverseReactNode } from 'an-mobile/utils/traverse-react-node';
import React from 'react';
import { Header } from './Header';

const classPrefix = 'adm-form';

export type FormInstance = Pick<
RCFormInstance,
| 'getFieldValue'
| 'getFieldsValue'
| 'getFieldError'
| 'getFieldsError'
| 'isFieldTouched'
| 'isFieldsTouched'
| 'resetFields'
| 'setFields'
| 'setFieldValue'
| 'setFieldsValue'
| 'submit'
| 'validateFields'
>;

export type FormProps = Pick<
  RcFormProps,
  | 'form'
  | 'initialValues'
  | 'name'
  | 'preserve'
  | 'validateMessages'
  | 'validateTrigger'
  | 'onFieldsChange'
  | 'onFinish'
  | 'onFinishFailed'
  | 'onValuesChange'
  | 'children'
> &
  NativeProps<
    '--border-inner' | '--border-top' | '--border-bottom' | '--prefix-width'
  >;

const defaultProps =  defaultFormContext;
export const Form = forwardRef<FormInstance, FormProps>(p, ref)=> {
    const props = mergeProps(defaultProps,p)
    const {
        className,
        style,
        hasFeedback,
        children,
        layout,
        footer,
        mode,
        disabled,
        requiredMarkStyle,
        ...formProps
      } = props
    const { locale } = useConfig()
    const validateMessages = useMemo(
        () =>
          merge(
            locale.Form.defaultValidateMessages,
            formProps.validateMessages || {}
          ),
        [locale.Form.defaultValidateMessages, formProps.validateMessages]
      )
    const lists: ReactNode[] = []
    let currentHeader: ReactNode = null
    let items: ReactNode[] = []
    let count = 0

    function collect(){
        if(items.length ===0 ){
            return
        }
        count+=1
        lists.push(<List header={currentHeader} key={count} mode={mode}></List>)
        items = []
    }
    traverseReactNode(props.children as ReactNode, child => {
        if (React.isValidElement(child)) {
          if (child.type === Header) {
            collect()
            currentHeader = child.props.children
            return
          }
          if (child.type === FormArray) {
            collect()
            lists.push(child)
            return
          }
        }
        items.push(child)
      })
      collect()

    return <RcForm {...props}    ref={ref} />
})