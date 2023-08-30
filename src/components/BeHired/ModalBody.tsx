import { Typography } from '@/components'
import Link from 'next/link'

export const ModalBody = () => (
	<div>
		<Typography type="span">
			Email 📧: <Link href="mailto:gregm31@live.com">gregm31@live.com</Link>
		</Typography>
		<Typography type="span">Phone 📱: +61 407 670 950</Typography>
	</div>
)
