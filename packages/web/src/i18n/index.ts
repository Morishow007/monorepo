import { I18n, TranslateOptions } from 'i18n-js'
import memoize from 'lodash.memoize'

import { enUS } from './locales/ptPT'
export type Locales = 'ptPT' | string

type AllKeys<T> = T extends object
  ? T extends infer O
    ?
        | keyof O
        | {
            [K in Extract<keyof O, string>]: K | `${K}.${AllKeys<O[K]>}`
          }[Extract<keyof O, string>]
    : never
  : never

type Scope = AllKeys<typeof enUS>

const initLocaleLoaded = 'ptPT'
const locales = {
  ptPT: enUS,
}

export const i18n = new I18n(locales, {
  defaultLocale: initLocaleLoaded,
  locale: initLocaleLoaded,
})

export const t = memoize(
  (key: Scope, config?: TranslateOptions): string => i18n.t(key, config),
  (key: Scope, config?: TranslateOptions) =>
    config ? key.concat(JSON.stringify(config)) : key,
)
