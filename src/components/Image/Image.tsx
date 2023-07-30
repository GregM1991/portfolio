import NextImage, { ImageProps } from 'next/image'
import styles from './image.styles.module.css'

export function Image({ className, ...delegated }: ImageProps) {
	return <NextImage {...delegated} className={`${styles.image} ${className}`} />
}
