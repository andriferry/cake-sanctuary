import type { PrivateFormContext } from 'vee-validate'
import type { HTMLAttributes, Ref } from 'vue'

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


export { global }
