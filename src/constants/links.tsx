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
		icon: <LinkedInLogoIcon height={ICON_SIZE} width={ICON_SIZE} />,
	},
	{
		linkTooltipText: 'Instagram',
		icon: <InstagramLogoIcon height={ICON_SIZE} width={ICON_SIZE} />,
	},
	{
		linkTooltipText: 'Resume',
		icon: <FileIcon height={ICON_SIZE} width={ICON_SIZE} />,
	},
]
