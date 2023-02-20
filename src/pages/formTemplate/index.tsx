import React, { useRef } from 'react'
import { View } from '@tarojs/components-react'
import Form, { FormInput } from '../../components/Form'
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

    return <View>
        <Form onFinish={onFinish} ref={ref}>
            <FormInput name='index' label="test阿萨分" required />
            <FormInput name='123' label="test阿萨分" />
        </Form>
        <Button onClick={onSubmit}>提交</Button>
    </View>
}

export default FormTemplate