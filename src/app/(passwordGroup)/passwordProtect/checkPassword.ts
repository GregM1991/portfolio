'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function checkPassword(formData: FormData) {
	const password = formData.get('password')

	if (password === process.env.CANVA_PASSWORD) {
		cookies().set('login', 'true', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
		})
		redirect('/')
	} else {
		return { message: 'Invalid password' }
	}
}
