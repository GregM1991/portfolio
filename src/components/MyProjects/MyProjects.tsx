import { Section, Project, Typography } from '@/components'
import projectImage from '@/assets/images/delicious-black-nectar-of-the-gods.jpg'
import styles from './myProjects.styles.module.css'

const PROJECTS = [
	{
		title: 'Faethm',
		copy: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat aut harum. Quas eos unde atque aliquam ea distinctio, aperiam modi quos in sit officia a? A voluptas expedita ab.',
		imageSrc: projectImage,
		imageAltText: 'Faethm image alt text goes here',
	},
	{
		title: 'eQ8',
		copy: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat aut harum. Quas eos unde atque aliquam ea distinctio, aperiam modi quos in sit officia a? A voluptas expedita ab.',
		imageSrc: projectImage,
		imageAltText: 'eQ8 image alt text goes here',
	},
	{
		title: 'eQ8',
		copy: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat aut harum. Quas eos unde atque aliquam ea distinctio, aperiam modi quos in sit officia a? A voluptas expedita ab.',
		imageSrc: projectImage,
		imageAltText: 'eQ8 image alt text goes here',
	},
]

export function MyProjects() {
	return (
		<Section
			bgColor="light-pink"
			ariaLabel="My projects"
			className={styles.wrapper}
		>
			<Typography
				type="h2"
				color="dark-red"
				variant="h2Rich"
				className={styles.header}
			>
				A place for <br /> projects <a id="projects" />
			</Typography>
			{PROJECTS.map((project, i) => {
				const { title, copy, imageSrc, imageAltText } = project
				// TODO: will need to find a better key replacement
				return (
					<Project
						key={title}
						title={title}
						copy={copy}
						imageSrc={imageSrc}
						imageAltText={imageAltText}
						layout={(i + 1) % 2 === 0 ? 'right' : 'left'}
					/>
				)
			})}
		</Section>
	)
}
