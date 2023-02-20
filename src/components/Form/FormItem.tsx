import React, { useState } from 'react'
import { Input, Cell, Picker } from '@nutui/nutui-react-taro';
import { FormInput, FormPickerType } from './FormItemProps'

const cellStyle = { padding: 4 }
const inputStyle = { padding: '4px 22px' }

export const FormInputItem: React.FC<FormInput> = (props) => {
    const { name, value, formchange, label, required, validate, ...rest } = props

    const inputChange = (v) => {
        if (formchange) formchange(v)
    }

    return <Cell style={cellStyle} key={name} className='ItemBox'>
        <Input
            required={required}
            error={required && validate?.findIndex(o => o === name) !== -1 && !value}
            // errorMessage={required && validate?.findIndex(o => o === name) !== -1 && !value ? '该项必填' : ''}
            style={inputStyle}
            name={name}
            label={label}
            defaultValue={value || ''}
            placeholder="请输入"
            onChange={inputChange}
            border={false}
            {...rest}
        />
    </Cell>
}

export const FormPickerItem: React.FC<FormPickerType> = (props) => {
    const {
        name,
        value,
        formchange,
        label,
        required,
        validate,
        options = [],
        ...rest
    } = props

    const [visible, setVisible] = useState(false)

    const confirmPicker = (values: (string | number)[], options) => {
        if (formchange) formchange(options[0])
    }

    return <Cell style={cellStyle} key={name} className='ItemBox'>
        <Input
            onClick={() => setVisible(true)}
            readonly
            required={required}
            error={required && validate?.findIndex(o => o === name) !== -1 && !value}
            style={inputStyle}
            name={name}
            label={label}
            defaultValue={value ? value?.text : ''}
            placeholder="请选择"
            border={false}
            {...rest}
        />
        <Picker
            defaultValueData={value ? [value.value] : []}
            isVisible={visible}
            listData={[options]}
            onConfirm={(values, list) => confirmPicker(values, list)}
            onClose={() => setVisible(false)}
        />
    </Cell>
}

