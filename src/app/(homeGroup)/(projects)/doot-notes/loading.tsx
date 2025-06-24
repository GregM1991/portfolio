import { Typography } from "@/components";
import projectStyles from "@/app/(homeGroup)/project.styles.module.css";
import styles from "../../loading.module.css";

export default function DootNotesLoading() {
  return (
    <main className={projectStyles.wrapper}>
      <div className="container">
        <div className={styles.container} style={{ minHeight: '50vh' }}>
          <div className={styles.spinner} />
          <Typography type="h2" size="lg">
            Loading Doot Notes...
          </Typography>
          <Typography color="gray-dark">
            Fetching project data and roadmap items
          </Typography>
        </div>
      </div>
    </main>
  );
}