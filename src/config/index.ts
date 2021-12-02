import { ComponentItem } from "@/types"


export const components: ComponentItem[] = [
  {
    type: 'input',
    label: '输入框',
    icon: 'document',
    value: '',
    field: 'inputValue',
    required: true,
    labelWidth: 90,
    showLabel: true,
    suffix: '',
    prefix: '',
    attrs: {
      type: 'text',
      maxlength: '',
      showWordLimit: false,
      placeholder: '请输入',
      clearable: true,
      showPassword: false,
      disabled: false,
      readonly: false,
      size: '',
      prefixIcon: '',
      suffixIcon: '',
      rows: 2,
      autosize: false,
      resize: 'none',
    }
  },
  {
    type: 'button',
    label: '按钮',
    icon: 'Notification',
    showLabel: true,
    labelWidth: 90,
    attrs: {
      text: '按钮',
      size: '',
      type: 'primary',
      plain: false,
      round: false,
      circle: false,
      loading: false,
      disabled: false,
      autofocus: false,
      autoInsertSpace: false,
      icon: '',
      nativeType: 'button'
    }
  }
]