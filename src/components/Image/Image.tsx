import NextImage, { ImageProps } from 'next/image'
import styles from './image.styles.module.css'

function Image({ ...delegated }: ImageProps) {
	return <NextImage {...delegated} className={styles.image} />
}

export default Image
