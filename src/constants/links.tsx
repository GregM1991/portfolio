import { NavLink, SocialLink } from '@/types/links'
import {
	FileIcon,
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
} from '@radix-ui/react-icons'

const ICON_SIZE = '25'

export const NAV_LINKS: NavLink[] = [
	{
		key: crypto.randomUUID(),
		linkText: 'Greg Life',
		href: '/canva/#greg-life',
	},

	{
		key: crypto.randomUUID(),
		linkText: 'My contribution',
		href: '/canva/#my-contribution',
	},
	{
		key: crypto.randomUUID(),
		linkText: "Greg's values",
		href: '/canva/#gregs-values',
	},
	{
		key: crypto.randomUUID(),
		linkText: 'A place for projects',
		href: '/canva/#projects',
	},
	{
		key: crypto.randomUUID(),
		linkText: '#GregLife',
		href: '/canva/#greg-life-mural',
	},
	{
		key: crypto.randomUUID(),
		linkText: 'Testimonials',
		href: '/canva/#testimonials',
	},
	{
		key: crypto.randomUUID(),
		linkText: 'Be hired?',
		href: '/canva/#be-hired',
	},
]

export const SOCIAL_LINKS: SocialLink[] = [
	{
		key: crypto.randomUUID(),
		linkTooltipText: 'GitHub',
		href: 'https://github.com/GregM1991',
		icon: (
			<GitHubLogoIcon aria-hidden="true" height={ICON_SIZE} width={ICON_SIZE} />
		),
		screenReader: 'Navigate to Gregs Linked-in page',
	},
	{
		key: crypto.randomUUID(),
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
		key: crypto.randomUUID(),
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
		key: crypto.randomUUID(),
		linkTooltipText: 'Resume',
		href: '/Greg_Martin_Resume_2023.pdf',
		icon: <FileIcon aria-hidden="true" height={ICON_SIZE} width={ICON_SIZE} />,
		screenReader: 'Download a pdf version of Gregs resume',
		attributes: {
			download: 'Greg_Martin_Resume_2023',
		},
	},
]
