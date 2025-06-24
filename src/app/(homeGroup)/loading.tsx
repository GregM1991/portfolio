import { Typography } from "@/components";
import styles from "./loading.module.css";

export default function HomeLoading() {
  return (
    <main className={styles.container}>
      <div className={styles.spinner} />
      <Typography type="h2" size="lg">
        Loading Portfolio...
      </Typography>
    </main>
  );
}