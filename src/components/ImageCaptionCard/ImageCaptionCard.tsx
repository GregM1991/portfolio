import Image, { StaticImageData } from "next/image";
import styles from "./imageCaptionCard.styles.module.css";
import { Typography, VisuallyHidden } from "@/components";
import clsx from "clsx";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

interface ImageCaptionCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  caption?: string | React.ReactNode;
  isScreenCap?: boolean;
  linkToCode?: string;
}

export function ImageCaptionCard({
  imageSrc,
  imageAlt,
  caption,
  isScreenCap = false,
  linkToCode,
}: ImageCaptionCardProps) {
  const imageClasses = clsx(styles.image, { [styles.shadow]: isScreenCap });
  return (
    <figure className={styles.wrapper}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        sizes="100vw"
        placeholder="blur"
        className={imageClasses}
      />
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
