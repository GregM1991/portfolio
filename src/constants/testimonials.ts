import andy from '@/assets/images/andy.png'
import karin from '@/assets/images/karin.jpg'
import aaron from '@/assets/images/aaron.jpg'
import hina from '@/assets/images/hina.jpg'

export const TESTIMONIALS = [
	{
		key: crypto.randomUUID(),
		img: karin,
		imgAltText: 'Karin smiling on a beach in front of a white beach shack',
		leadText:
			'Working with Greg made me feel like we were the Dynamic Duo of the design and engineering world.',
		bodyText:
			"When it comes to frontend development, Greg's skils are off the charts, and effortlessly brings my design ideas to life with a touch of humor that made every day at work an enjoyable experience. His exceptional communication skills foster a productive collaboration between design and engineering",
		name: 'Karin Uli (She/ Her)',
		role: 'Snr Product Designer, Faethm by Pearson',
	},
	{
		key: crypto.randomUUID(),
		img: hina,
		imgAltText: 'Hina looking at the camera and smiling',
		leadText:
			"I really admire Greg's impressive skills and remarkable attention to detail as a Frontend engineer.",
		bodyText:
			'His ability to transform designs into captivating user experiences is truly commendable. Moreover, his collaborative spirit and teamwork greatly contribute to a harmonious and efficient development process. His techincal brilliance and team-orientated mindset is a rarity that any organisation would be fortunate to have',
		name: 'Hina Shahid',
		role: 'Snr Full-Stack Engineer, eq8',
	},
	{
		key: crypto.randomUUID(),
		img: aaron,
		imgAltText: 'Aaron kneeling in the Australian bush, smiling with a hat on.',
		leadText:
			'I am confident when I say he is the perfect blend of charm, banter and pixel-perfect artistry.',
		bodyText:
			"If you're looking for the deal of the century; a skilled engineer with the keen eye of a diligent designer, look no further than this one!",
		name: 'Aaron Lewis (He/Him)',
		role: 'Full-Stack Enigneer, eQ8',
	},
	{
		key: crypto.randomUUID(),
		img: andy,
		imgAltText:
			'Andy smiling at the camera in a north face jacket with trees in the background',
		leadText:
			'Our time working together at Office-Hub was a ball, Greg brought a great vibe to the small team',
		bodyText:
			"If you're looking for a Software Engineer comfortable across the full stack (with a penchant for frontend), I can't recommend Greg highly enough. He's a dream to work with - very creative and has a great eye for detail.",
		name: 'Andy Muprhy (He/Him)',
		role: 'Snr Software Engineer, Domain',
	},
]
