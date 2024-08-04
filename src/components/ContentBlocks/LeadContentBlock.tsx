import { GenericContentBlock } from "@/components";
import { LeadContentBlockProps } from "./types";
import Image from "next/image";
import styles from "./contentBlocks.styles.module.css";

// TODO: These content blocks aren't working, need to rethink implementation
export function LeadContentBlock({
  heading,
  headingProps,
  body,
  tldrString,
  sectionAriaLabel,
  imageSrc,
  imageAlt,
  links,
  children
}: LeadContentBlockProps) {
  return (
    <GenericContentBlock
      heading={heading}
      headingProps={{ type: "h1", size: "2xl", ...headingProps }}
      body={body}
      sectionAriaLabel={sectionAriaLabel}
      tldrString={tldrString}
      links={links} // TODO: This is so stinky, passing links down to the generic content block
    >
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            sizes="100vw"
            placeholder="blur"
          />
        </div>
      )}
      {children}
    </GenericContentBlock>
  );
}
