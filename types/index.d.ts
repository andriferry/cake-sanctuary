import type { Align } from '@/components/ui/table'
import type { PrivateFormContext } from 'vee-validate'
import type {
  HTMLAttributes,
  Ref,
} from 'vue'

import '@tanstack/vue-table'

declare global {
    type UserValidation = PrivateFormContext

    type VueHtmlAttributes = HTMLAttributes

    interface ErrorMessage {
      statusCode: number
      message: string
    }

    interface DBUser {
      id: number
      email: string
      password: string
      picture: string
    }

    /**
     * Support items-align tailwindcss
     */
    interface THead {
      title: string
      align?: Align
      sortable?: boolean
      key: string
    }

    interface UseUtils {
      passWordField: Ref<string>
      passwordIcon: Ref<string>
      passwordFieldConfirm: Ref<string>
      passwordConfirmIcon: Ref<string>
      isPasswordVisible: Ref<boolean>
      isPasswordConfirmVisible: Ref<boolean>
    }

    interface Theme {
      icon: string
      value: string
    }

    interface Lang {
      title: string
      value: string
      changeValue: 'en' | 'fr'
    }
}

declare module '#auth-utils' {
  interface User {
    name: string
    email: string
    picture: string
  }
}
declare module '@tanstack/vue-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    title?: string
    align?: Align
    sortable?: boolean
    key?: string
  }
}
