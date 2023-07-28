import { theme } from '@/theme'
import { toVarNames, toVars } from '@/utils'

export const DEV_VARS = toVarNames(theme)
export const CSS_VARS = toVars(theme)
