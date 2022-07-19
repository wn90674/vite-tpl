import { createI18n } from 'vue-i18n'
import enCommon from './locale/en/common.json'
import zhCommom from './locale/zh/common.json'
export default createI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    en: {
      common: enCommon
    },
    zh: {
      common: zhCommom
    }
  }
})
