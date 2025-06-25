import {
  Typography,
  AnimatedTypography,
  AnimatedImage,
  CanvaSection,
  VisuallyHidden,
} from "@/components";
import Link from "next/link";
import { CUBIC_BEZIER, DURATION, fadeInVariants } from "@/constants/animation";
import { APP_CONFIG } from "@/config/appConfig";
import canvaRooftop from "@/assets/images/greg-at-canva-peace-sign.jpg";
import cuddleCats from "@/assets/images/greg-cuddling-cats-with-grin.jpg";
import purpleDoodle from "@/assets/svg/purple-heading-doodle.svg";
import yellowDoodle from "@/assets/svg/hero-default-doodle-2.svg";
import styles from "./gregLife.styles.module.css";

export function GregLife() {
  return (
    <CanvaSection
      variant="hero"
      ariaLabel="An opening welcome from Greg to visitors of his portfolio site"
      className={`${styles.wrapper} container`}
    >
      <span id="greg-life" className="anchor" />
      <div className={styles.imageWrapper}>
        <AnimatedImage
          alt="Greg holding his two cats Sesame and Rame and smiling excitedly"
          src={cuddleCats}
          priority
          sizes="(max-width: 768px) 102px, (max-width: 1200px) 150px, 190px"
          initial={{ x: APP_CONFIG.animation.gregLife.imageTranslateOffset, y: APP_CONFIG.animation.gregLife.imageYOffset, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            ease: CUBIC_BEZIER,
            duration: DURATION,
          }}
          className={styles.cuddleCats}
        />
        <AnimatedImage
          alt="Greg sitting on the sunny Canva rooftop eating a cookie giving the peace sign"
          src={canvaRooftop}
          priority
          sizes="(max-width: 768px) 270px, (max-width: 992px) 400px, (max-width: 1400px) 42vw, 600px"
          initial={{ x: APP_CONFIG.animation.gregLife.imageTranslateOffset, y: APP_CONFIG.animation.gregLife.imageYOffset, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            ease: CUBIC_BEZIER,
            duration: DURATION,
            delay: APP_CONFIG.animation.gregLife.imageDelay,
          }}
          className={styles.canvaRooftop}
        />
        <AnimatedImage
          src={yellowDoodle}
          alt="Yellow doodle"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: APP_CONFIG.animation.gregLife.doodleInitialScale }}
          transition={{
            ease: CUBIC_BEZIER,
            duration: APP_CONFIG.animation.gregLife.doodleDuration,
            delay: APP_CONFIG.animation.gregLife.doodleDelay,
          }}
          className={styles.yellowDoodle}
        />
      </div>
      <div className={styles.type}>
        <AnimatedTypography
          type="h1"
          variant="h1Lead"
          variants={fadeInVariants}
          initial="initial"
          animate="target"
        >
          Greg life
          <AnimatedImage
            src={purpleDoodle}
            alt="Purple doodle"
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: APP_CONFIG.animation.gregLife.doodleInitialScale }}
            transition={{
              ease: CUBIC_BEZIER,
              duration: APP_CONFIG.animation.gregLife.doodleDuration,
              delay: APP_CONFIG.animation.gregLife.doodleDelay,
            }}
            className={styles.purpleDoodle}
          />
        </AnimatedTypography>
        <Typography canva className={styles.pLead}>
          Sometimes the chance comes along to be part of something truly
          special. With a cheeky smile and a huge passion for the industry, I
          offer a willingness and dedication to eat up all there is to learn. I
          want to be empowered by the best workers at the best workplace, which
          of course, is Canva. This personalised portfolio is my love letter to
          you. Peek behind the curtain{" "}
          <Link
            href={APP_CONFIG.contact.portfolioRepo}
            className={styles.link}
          >
            here
            <VisuallyHidden>on my GitHub</VisuallyHidden>
          </Link>{" "}
          👀
        </Typography>
      </div>
    </CanvaSection>
  );
}
