import { Typography } from "@/components";
import dootNotesStyles from "./dootNotes.styles.module.css";

const content = {
  inProgress: {
    title: "In Progress"
  },
  todo: {
    title: "ToDo"
  }
};

type RoadMapListProps = {
  listItems: string[];
  type: "inProgress" | "todo";
};

export const RoadMapList = ({ listItems, type }: RoadMapListProps) => (
  <>
    <Typography type="span">
      This is what&apos;s currently{" "}
      <span className={`${dootNotesStyles.highlight} ${dootNotesStyles[type]}`}>
        {content[type].title}
      </span>
      :
    </Typography>
    <ul className={dootNotesStyles.roadMapList}>
      {listItems.map((item: string) => (
        <li
          className={`${dootNotesStyles.roadMapListItem} ${dootNotesStyles[type]}`}
          key={item}
        >
          <Typography type="span" size="xs">
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  </>
);
