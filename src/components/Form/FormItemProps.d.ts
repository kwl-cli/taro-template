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

type OptionsType = { text: string, value: string  }
type FormPickerType = {
    options: OptionsType[],
    value: OptionsType
} & FormItem

export {
    FormItem, FormInput, FormPickerType
}