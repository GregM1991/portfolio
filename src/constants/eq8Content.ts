import eq8Gang from "@/assets/images/eq8-pub.jpg";
import {
  dcOld,
  dcSegmentExpanded,
  dcSegmentExpandedEdit,
  dcDriverView,
} from "@/assets/images/demand-config-screens";
import {
  supplyUploadFileSelected,
  supplyUploadFileNotSelected,
  filterSelection,
  uploadInProgress,
  uploadInProgress2,
} from "@/assets/images/global-supply-screens";

export const EQ8_TECH = {
  sectionAriaLabel: "Technologies used at eQ8",
  techStack: [
    "C#",
    "dotnet",
    "Azure functions",
    "gRPC",
    "SQL + noSQL databases",
    "Razor pages",
    "React with Typescript",
    "Zustand",
  ],
};

const DEMAND_CONFIG_SCREENS = [
  {
    key: crypto.randomUUID(),
    src: dcOld,
    alt: "Legacy view of demand configuration",
    imageDescription:
      "A view of the old demand configuration page, there was a lot to the page, a bunch of sliders and buttons.",
  },
  {
    key: crypto.randomUUID(),
    src: dcSegmentExpanded,
    alt: "Updated view of demand configuration with segment expanded",
    imageDescription:
      "Here is the new view, it was designed to look more simple on intial view, with the option open an UI shelf that houses the segments associations.",
  },
  {
    key: crypto.randomUUID(),
    src: dcSegmentExpandedEdit,
    alt: "Updated view of demand configuration with segment expanded and in edit mode",
    imageDescription:
      "There is an edit mode for the segment that allows drivers to be created, read, updated and deleted all from the one spot.",
  },
  {
    key: crypto.randomUUID(),
    src: dcDriverView,
    alt: "Updated view of demand configuration in driver view",
    imageDescription:
      "There is an alternate view wherein the user can view their associations by the driver, instead of the segment.",
  },
];

const GLOBAL_SUPPLY_SCREENS = [
  {
    key: crypto.randomUUID(),
    src: supplyUploadFileNotSelected,
    alt: "View of the global supply upload",
    imageDescription:
      "A view of the global supply upload page, without a file selected.",
  },
  {
    key: crypto.randomUUID(),
    src: supplyUploadFileSelected,
    alt: "View of the global supply upload where a file is selected for upload",
    imageDescription:
      "View of the global supply upload where a file is selected for upload.",
  },
  {
    key: crypto.randomUUID(),
    src: filterSelection,
    alt: "A page shown where filters can be selected",
    imageDescription:
      "Here the user can filter based on what columns was entered in the global supply upload. The filtered selections will form the subset of data for the scneraio.",
  },
  {
    key: crypto.randomUUID(),
    src: uploadInProgress,
    alt: "A page showing updated progress on a users data upload",
    imageDescription:
      "A portion of the UI is dedicated to show the user feedback on their upload.",
  },
  {
    key: crypto.randomUUID(),
    src: uploadInProgress2,
    alt: "A page showing updated progress on a users data upload",
    imageDescription:
      "A portion of the UI is dedicated to show the user feedback on their upload.",
  },
];

export const OPENING = {
  heading: "Working at eQ8",
  tldr: "At eQ8, I had a fantastic time with a fun team. The startup environment taught me valuable lessons about optimizing product usability and speeding up its launch.",
  body: [
    {
      key: crypto.randomUUID(),
      copy: "I had a great experience working at eQ8, the team there are a fun bunch of people and we were never short of a good time, you can see a few of my workmates pictured below.",
    },
    {
      key: crypto.randomUUID(),
      copy: "EQ8 is in the start-up phase and the environment showed this. The lessons I learned at my time there had a lot to do with what's necessary for the product to maximise use-ability and minimise time-to-market.",
    },
  ],
  imageSrc: eq8Gang,
  imageAlt: "Greg, Annisa and Aaron smiling and having a beer in the sunshine",
  sectionAriaLabel: "Description and introduction to the eq8 project page",
};

export const GOALS = {
  sectionAriaLabel: "Gregs goals at eq8",
  heading: "Goals at eQ8",
  body: [
    {
      key: crypto.randomUUID(),
      copy: "I had set myself a few goals when deciding to leave for eQ8. I'd spent most of my career working with JS and wanted to have a crack at a new language, and I'd heard good things about C#. I was brought on to the team however for my knowledge of React, and the front end. So with that, I wanted to enhance my ability to share knowledge and mentor less experienced devs, as well as fine-tune my React.",
    },
    {
      key: crypto.randomUUID(),
      copy: "I also wanted to step out of my comfort zone, like I said I've spent a lot of my career working with JavaScript, so I wanted something new. I was also heading from a somewhat established company (Faethm had been acquired by Pearson) to a start-up, to help get a feel for the wider industry.",
    },
  ],
  tldr: "I joined eQ8 to explore C# after mainly working with JS and to enhance my React skills. I aimed to mentor junior devs and step out of my comfort zone by transitioning from an established company to a startup, seeking a broader industry perspective.",
};

export const CHALLENGES = {
  heading: "Challenges and Growth",
  body: [
    {
      key: crypto.randomUUID(),
      copy: "Working at eq8 was a rollercoaster of growth and challenges. One of the things that stood out was the pace of the projects. Everything moved so quickly that I didn't get as much time as I'd hoped to dive deep into C#. It was a bit of a bummer, but it also taught me to adapt and prioritize based on the team's immediate needs. Speaking of pace, the environment was high-energy and high-pressure. While this could be intense, it pushed me to hone my skills in managing stress, multitasking, and delivering quality work within tight deadlines.",
    },
    {
      key: crypto.randomUUID(),
      copy: "Every workplace has their legacy code, and eQ8 was no different. We were dealing with razor pages, MVC, and the monumental task of splitting the services from the main app. It was challenging to integrate new features without disrupting the existing architecture. However, this experience was invaluable. It taught me the importance of documentation, understanding the history of code decisions, and the delicate art of modernizing without breaking things.",
    },
    {
      key: crypto.randomUUID(),
      copy: "All in all, my time at eq8 was filled with learning curves that shaped me into a more resilient and adaptable engineer.",
    },
  ],
  tldr: "At eq8, the rapid project pace limited my deep dive into C#, teaching me adaptability and prioritization. The high-energy environment improved my stress management and multitasking abilities. I tackled challenges like integrating features into legacy code, learning the significance of documentation and careful modernization. Overall, eq8's challenges made me a stronger, more adaptable engineer.",
  sectionAriaLabel: "Gregs challenges at eq8",
};

export const DEMAND_CONFIG = {
  heading: "Refactor of Legacy Demand Configuration",
  description:
    "Demand configuration is a feature that allows clients to associate Demand Drivers to different Segments in their business. We needed to update and refresh the UI/UX of this page as it was a bane for customers. We also split out the APIs and business logic required for the feature into services.",
  screens: DEMAND_CONFIG_SCREENS,
  contribution: {
    heading: "Contribution",
    body: [
      {
        key: crypto.randomUUID(),
        copy: "While the original system on C# Razor pages served its purpose, we aimed for a more dynamic and user-friendly experience. We rebuilt the feature with React and Typescript, utilising React APIs like useContext and useReducer to handle each segment's complex state. This transition enhanced the system's responsiveness and set the stage for a more intuitive user interface.",
      },
      {
        key: crypto.randomUUID(),
        copy: "As we delved into the refactoring process, design blueprints for the configuration interface were in a state of flux. Adapting to these evolving designs was both a challenge and an opportunity. It allowed me to be part of iterative design discussions, offering feedback and insights to ensure that the final design was not only visually appealing but also met our functional requirements. My role wasn't confined to just coding; it was about understanding and contributing to the design ethos of the refactored system.",
      },
      {
        key: crypto.randomUUID(),
        copy: "I also contributed to the creation of our CRUD APIs. Our services to handle these operations were being stripped out of the MVC app and moved to their own services driven by events, so making sure our services and the MVC app were kept in sync was crucial.",
      },
    ],
  },
  tldr: "We transitioned from C# Razor pages to a more responsive system using React and Typescript, enhancing user experience. Amid evolving designs, I actively contributed to design discussions, and ensured synchronization between our new CRUD APIs and the MVC app.",
};

export const GLOBAL_SUPPLY_UPLOAD = {
  heading: "Global Supply Upload",
  description:
    "Global Supply Upload allowed for our clients to upload a global supply dataset that they could then create scenarios from. They would apply filters to the global dataset and a subset would be created from those filters for the scenario. Before they needed to create their own dataset manually, and upload that each time.",
  screens: GLOBAL_SUPPLY_SCREENS,
  contribution: {
    heading: "Contribution",
    body: [
      {
        key: crypto.randomUUID(),
        copy: "A significant part of this project was the creation of a user-friendly interface. I took the lead in building out greenfield designs for the page, allowing users to seamlessly segment the global dataset using various filters. This intuitive design ensured that clients could easily derive specific subsets from their global data, streamlining their planning processes.",
      },
      {
        key: crypto.randomUUID(),
        copy: "Beyond the frontend, I collaborated closely with the team on the backend infrastructure. I helped flesh out the design and implementation of APIs that efficiently segmented and stored data. This ensured that the Global Supply Upload feature was not only user-friendly but also backed by a robust and efficient data management system.",
      },
    ],
  },
  tldr: "I spearheaded the creation of an intuitive interface for users to filter global datasets, enhancing their planning processes. Collaborating on the backend, I contributed to the design of APIs, ensuring efficient data management for the Global Supply Upload feature.",
};

export const OVERVIEW = {
  heading: "Overview",
  body: [
    {
      key: crypto.randomUUID(),
      copy: "Working at eQ8 was a whirlwind experience; the environment was hectic and fast-paced, pushing me out of my comfort zone and catalyzing my growth. It was incredibly rewarding to witness my progress with React and to have the opportunity to share that knowledge with the team. I was surrounded by talented individuals from whom I learned immensely, and their camaraderie made the journey even more fulfilling. A special shoutout to Hina and Annisa for their invaluable support and guidance throughout.",
    },
  ],
  tldr: "At eQ8, the dynamic environment accelerated my growth, especially in React, and I cherished sharing insights with my skilled colleagues. A huge shoutout to Hina and Annisa for their awesome support and skills.",
  sectionAriaLabel: "An overview of Gregs time at eq8",
};
