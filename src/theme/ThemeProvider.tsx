'use client'
import { createContext, useContext } from 'react'
import { theme } from './theme'

const ThemeContext = createContext(theme)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
