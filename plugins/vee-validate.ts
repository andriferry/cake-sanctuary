import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import { all } from '@vee-validate/rules'
import { Field, Form, configure, defineRule } from 'vee-validate'

export default defineNuxtPlugin(nuxtApp => {
  Object.entries(all).forEach(([name, rule]) => {
    defineRule(name, rule)
  })

  configure({
    validateOnChange: true,
    generateMessage: localize({
      en,
    }),
  })

  nuxtApp.vueApp.component('FormObserver', Form)

  nuxtApp.vueApp.component('FieldProvider', Field)
})
