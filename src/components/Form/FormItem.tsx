import React from 'react'
import { Input, Cell } from '@nutui/nutui-react-taro';
import { FormInput } from './FormItemProps'

const cellStyle = { padding: 4 }
const inputStyle = { padding: '4px 22px' }

const FormInputItem: React.FC<FormInput> = (props) => {
    const { name, value, formchange, label, required, validate, ...rest } = props

    const inputChange = (v) => {
        if (formchange) formchange(v)
    }

    return <Cell style={cellStyle} key={name} className='ItemBox'>
        <Input
            required={required}
            error={required && validate?.findIndex(o => o === name) !== -1 && !value}
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

export { FormInputItem }

