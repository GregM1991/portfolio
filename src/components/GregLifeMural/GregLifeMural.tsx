import Image from 'next/image'
import styles from './gregLifeMural.styles.module.css'
import babyLaptop from '@/assets/images/greg-and-cat-with-baby-laptop.jpg'
import barossa from '@/assets/images/greg-and-cat-in-barossa.jpg'
import gesture from '@/assets/images/greg-making-a-gesture.jpg'
import { Typography } from '@/components'

export function GregLifeMural() {
	return (
		<>
			<a id="greg-life-mural" className="anchor" />
			<div className={styles.wrapper}>
				<Image
					src={babyLaptop}
					alt="Greg and wife Cat holding baby laptop toy"
					className={styles.babyLaptop}
				/>
				<Image
					src={barossa}
					alt="Greg and wife Cat in barossa valley"
					className={styles.barossa}
				/>
				<Image
					src={gesture}
					alt="Greg making a silly gesture with his hands"
					className={styles.gesture}
				/>
				<Typography type="span" color="white" className={styles.text}>
					#GregLife
				</Typography>
			</div>
		</>
	)
}
