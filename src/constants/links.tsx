import {
	FileIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
} from '@radix-ui/react-icons'

const ICON_SIZE = '25'

export const NAV_LINKS = [
	{
		linkText: 'Greg Life',
		href: '/#greg-life',
	},

	{
		linkText: 'My contribution',
		href: '/#my-contribution',
	},
	{
		linkText: "Greg's values",
		href: '/#gregs-values',
	},
	{
		linkText: 'A place for projects',
		href: '/#projects',
	},
	{
		linkText: '#GregLife',
		href: '/#greg-life-mural',
	},
	{
		linkText: 'Testimonials',
		href: '/#testimonials',
	},
	{
		linkText: 'Be hired?',
		href: '/#be-hired',
	},
]

export const SOCIAL_LINKS = [
	{
		linkTooltipText: 'linkedIn',
		href: 'https://www.linkedin.com/in/greg-martin-76688678/',
		icon: (
			<LinkedInLogoIcon
				aria-hidden="true"
				height={ICON_SIZE}
				width={ICON_SIZE}
			/>
		),
		screenReader: 'Navigate to Gregs Linked-in page',
	},
	{
		linkTooltipText: 'Instagram',
		href: 'https://www.instagram.com/grillustration_/',
		icon: (
			<InstagramLogoIcon
				aria-hidden="true"
				height={ICON_SIZE}
				width={ICON_SIZE}
			/>
		),
		screenReader: 'Navigate to Gregs Instagram page',
	},
	{
		linkTooltipText: 'Resume',
		href: '/Greg_Martin_Resume_2023.pdf',
		icon: <FileIcon aria-hidden="true" height={ICON_SIZE} width={ICON_SIZE} />,
		screenReader: 'Download a pdf version of Gregs resume',
		attributes: {
			download: 'Greg_Martin_Resume_2023',
		},
	},
]
