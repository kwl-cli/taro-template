import React, { useEffect, useRef } from 'react'
import { View } from '@tarojs/components-react'
import Form, { FormInput, FormPicker } from '../../components/Form'
import { Button } from '@nutui/nutui-react-taro'

const FormTemplate = () => {
    const ref = useRef<any>()

    const onFinish = (v) => {
        console.log('v, v', v);
    }

    const onSubmit = () => {
        if (ref.current) {
            ref.current.submit()
        }
    }

    const options = [
        { value: 1, text: '111' },
        { value: 2, text: '222' },
        { value: 3, text: '333' },
    ]

    return <View>
        <Form onFinish={onFinish} ref={ref}>
            <FormInput name='index' label="test阿萨分" required />
            <FormInput name='123' label="发撒发扶" />
            <FormPicker required options={options} name='pick1' label="pick1" />
            <FormPicker required options={options} name='pick2' label="pick2" />
        </Form>
        <Button onClick={onSubmit}>提交</Button>
    </View>
}

export default FormTemplate