import { ReactNode } from "react"

type FormPropsType = {
    formRef: any,
    children: ReactNode
}

type FromInstance = {
    getValues: (value?: string[]) => void,
    setValues: (value?: { [key: string]: string }) => void,
    reset: () => void
}

type FormItemType = {
    name: string,
    label: string | ReactNode,
    required?: boolean,
    children?: ReactNode
}

export {
    FormPropsType,
    FromInstance,
    FormItemType
}