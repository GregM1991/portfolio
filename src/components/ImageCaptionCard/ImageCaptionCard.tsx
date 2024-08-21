import Image, { type StaticImageData, type ImageProps } from "next/image";
import styles from "./imageCaptionCard.styles.module.css";
import { Typography, VisuallyHidden } from "@/components";
import clsx from "clsx";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

interface ImageCaptionCardProps {
  caption?: string | React.ReactNode;
  isScreenCap?: boolean;
  linkToCode?: string;
  imageProps: ImageProps;
  style?: React.CSSProperties;
}

export function ImageCaptionCard({
  imageProps,
  caption,
  isScreenCap = false,
  linkToCode,
  style
}: ImageCaptionCardProps) {
  const imageClasses = clsx(styles.image, { [styles.shadow]: isScreenCap });
  return (
    <figure className={styles.wrapper} style={style}>
      <Image {...imageProps} alt={imageProps.alt} className={imageClasses} />
      {caption && (
        <figcaption className={styles.figcaption}>
          <Typography size="xs" type="span">
            {caption}{" "}
          </Typography>
          {linkToCode && (
            <Link href={linkToCode}>
              <VisuallyHidden>click here to</VisuallyHidden>View code
              <FaGithub />
            </Link>
          )}
        </figcaption>
      )}
    </figure>
  );
}
