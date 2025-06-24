import { Typography } from "@/components";
import styles from "../../../(homeGroup)/loading.module.css";

export default function CanvaLoading() {
  return (
    <main className={styles.container}>
      <div className={styles.spinner} style={{ borderTopColor: '#8b5cf6' }} />
      <Typography type="h2" size="lg" canva>
        Loading Canva Portfolio...
      </Typography>
      <Typography canva>
        Preparing the Greg life experience
      </Typography>
    </main>
  );
}