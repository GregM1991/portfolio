type IndexableObject = { [key: string]: any };

export const toVarNames = <T extends IndexableObject>(
	obj: T,
	prefix: string = '-',
): T => {
	const vars: any = {}
	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === 'object') {
			vars[key] = toVarNames(value, `${prefix}-${key}`)
		} else {
			vars[key] = `var(${prefix}-${key})`
		}
	}
	return vars as T
}