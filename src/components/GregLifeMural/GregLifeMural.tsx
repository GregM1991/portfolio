import Image from 'next/image'
import styles from './gregLifeMural.styles.module.css'
import babyLaptop from '@/assets/images/greg-and-cat-with-baby-laptop.jpg'
import barossa from '@/assets/images/greg-and-cat-in-barossa.jpg'
import gesture from '@/assets/images/greg-making-a-gesture.jpg'
import { Typography } from '..'

/* TODO: rename these classNames for the love of god */
export function GregLifeMural() {
	return (
		<div className={styles.wrapper}>
			<Image
				src={babyLaptop}
				alt="Greg and wife Cat holding baby laptop toy"
				className={styles.mainImg}
			/>
			<Image
				src={barossa}
				alt="Greg and wife Cat in barossa valley"
				className={styles.secondImg}
			/>
			<Image
				src={gesture}
				alt="Greg making a silly gesture with his hands"
				className={styles.thirdImg}
			/>
			<Typography type="span" color="white" className={styles.text}>
				#GregLife
			</Typography>
		</div>
	)
}
