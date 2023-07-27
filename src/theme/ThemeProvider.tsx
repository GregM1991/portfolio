import { createContext, useContext, useLayoutEffect, useRef } from "react";
import { toVarNames, toVars } from "@/utils";
import { theme, Theme } from '@/theme'

interface ThemeProviderProps {
	children: React.ReactNode
}

const variables = toVarNames(theme)

const ThemeContext = createContext<Theme>(theme)

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const root = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		const vars = toVars(theme)
		if (root.current !== null) {
			for (const [key, value] of Object.entries(vars)) {
				root.current.style.setProperty(key, value)
			}
		}
	}, [])

	return (
		<ThemeContext.Provider value={theme}>
			<div ref={root}>{children}</div>
		</ThemeContext.Provider>
	)
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme, variables };
