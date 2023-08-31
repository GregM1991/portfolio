import { NextRequest, NextResponse } from 'next/server'

const isPasswordEnabled = !!process.env.CANVA_PASSWORD

export async function middleware(req: NextRequest) {
	const isLoggedIn = req.cookies.has('login')
	const isPathPasswordProtect = req.nextUrl.pathname.startsWith(
		'/canva/passwordProtect',
	)
	if (isPasswordEnabled && !isLoggedIn && !isPathPasswordProtect) {
		const redirectURL = new URL('/canva/passwordProtect', req.url)
		return NextResponse.redirect(redirectURL)
	}
	return NextResponse.next()
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|favicon.ico).*)',
	],
}
