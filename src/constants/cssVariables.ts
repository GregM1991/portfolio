import { theme } from '@/theme'
import { themeLg } from '@/theme/themeLg'
import { toVarNames, toVars } from '@/utils'

export const DEV_VARS = toVarNames(theme)
export const CSS_VARS = toVars(theme)
export const CSS_VARS_LG = toVars(themeLg)
