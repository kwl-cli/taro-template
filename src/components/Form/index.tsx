import { View } from '@tarojs/components'
import React, { cloneElement, useEffect, Children, useState, forwardRef, useImperativeHandle } from 'react'
import { CellGroup, Cell } from '@nutui/nutui-react-taro';

import { FormInputItem } from './FormItem'

export const FormInput = (props) => <FormInputItem {...props}></FormInputItem>

const FormIndex = (props, formRef) => {
    const validate: string[] = []
    const { onFinish } = props

    useImperativeHandle(formRef, () => ({
        getValues,
        submit
    }))

    const [formData, setFormData] = useState({});
    const [errorValidate, setErrorValidate] = useState<string[]>([]);

    const onValueChange = (value) => {
        setFormData(v => ({ ...v, ...value }))
    }

    const getValues = (v?: string[]) => {
        if (v) {
            const obj = {}
            v.forEach((item) => {
                obj[item] = formData[item]
            })
            return obj
        }
        return formData;
    }

    const submit = () => {
        const arr: string[] = [];
        validate.forEach((item) => {
            if (!formData[item]) {
                arr.push(item)
            }
        })

        setErrorValidate(arr)

        if (!!arr.length) return
        if (onFinish) onFinish(formData)
    }

    return <View>
        <CellGroup>
            {Children.map(props.children, (child: any) => {
                const props = {
                    ...child.props,
                    formchange: (v) => onValueChange({ [child.props.name]: v }),
                    value: formData[child.props.name] || '',
                    validate: errorValidate
                }
                if (child.props.required) {
                    validate.push(child.props.name)
                }
                return cloneElement(child, props)
            })}
        </CellGroup>
    </View>
}

const Form = forwardRef(FormIndex)
export default Form