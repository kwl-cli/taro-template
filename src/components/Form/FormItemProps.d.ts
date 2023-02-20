type FormItem = {
    name: string,
    label: string,
    required?: boolean,
    value?: string | number,
    validate?: string[] | number[],
    formchange?: (value: any) => void,
}

type FormInput = {

} & FormItem

export {
    FormItem, FormInput
}