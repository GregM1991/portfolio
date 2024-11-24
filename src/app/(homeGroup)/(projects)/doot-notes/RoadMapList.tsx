import { Typography } from "@/components";
import dootNotesStyles from "./dootNotes.styles.module.css";

const content = {
  inProgress: {
    title: "In Progress",
    tagLine: "This is what's currently "
  },
  todo: {
    title: "ToDo",
    tagLine: "This is what's currently in "
  }
};

type RoadMapListProps = {
  listItems: string[];
  type: "inProgress" | "todo";
};

export const RoadMapList = ({ listItems, type }: RoadMapListProps) => (
  <>
    <Typography type="span">
      {content[type].tagLine}
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
