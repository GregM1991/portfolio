import userSearch from "@/assets/images/doot-notes/users-search.png";
import { SocialLink } from "@/types/links";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const openingBody = [
  {
    key: "1",
    copy: `Doot Notes was created as I wanted to try SvelteKit as a framework for building a full-stack, server-rendered application. It's nothing special, just a simple note-taking app that allows users to create, read, update, and delete notes. Due to the simple nature of the application, a simple note app, I wanted to add a robust feature set to really test the framework. It's a work in progress with a low priority on my things to finish, but I'm happy with how it's tracking and incredibly impressed with SvelteKit as a full-stack framework.`
  },
  {
    key: "2",
    copy: `The app is built using SvelteKit, Typescript and plain old CSS. The features I've currently implemented are user authentication, user search, CRUD operations on notes, and a user profile page. The user profile page gives users the ability to change their username and password, with email verification for all sensitive account operations. They have the ability to view all sessions currently open as well as log out of all sessions bar the current one. Lastly the user can download all data associated with their account as well as delete the account entirely.`
  }
];
const images = {
  userSearch: {
    src: userSearch,
    alt: "A screenshot of the user search page"
  }
};
const links: SocialLink[] = [
  {
    key: "1",
    linkTooltipText: "Visit the Doot Notes website",
    href: "https://video-game-blog-lbm4vcmxo-gregm1991s-projects.vercel.app/",
    icon: FaArrowUpRightFromSquare,
    screenReader: "A link to the Doot Notes website"
  },
  {
    key: "2",
    linkTooltipText: "Visit the Doot Notes Github repository",
    href: "https://github.com/GregM1991/portfolio",
    icon: FaGithub,
    screenReader: "A link to the Doot Notes Github repository"
  }
];

const techStack = {
  tech: [
    "SvelteKit",
    "Typescript",
    "Prisma",
    "Web Standards Authentication",
    "Resend",
    "Melt UI",
    "Vitest & Testing Library",
    "MSW",
    "zod",
    "sveltekit-superforms",
    "SQLite"
  ],
  sectionAriaLabel: "The tech stack used in the Doot Notes project"
};

const purposeAndGoals = {
  heading: "Purpose and Goals",
  body: [
    {
      key: "1",
      copy: `The purpose of this project was really just to have fun playing around with a new full-stack framework. I've spent my career honing my skills in React (having tried out Remix which I love) and thought I'd try out something new and different. Given the rave reviews people have for SvelteKit I decided this was the one.`
    },
    {
      key: "2",
      copy: "There are still so many more things I want to try and implement in a solo project like this, but having recently brought a baby girl into this world, time is rather short. Some things up next are Role-Based Access Control, caching, end-to-end testing, error monitoring."
    }
  ],
  sectionAriaLabel: "Purpose and Goals of the Doot Notes project"
};
const content = { openingBody, images, links, techStack, purposeAndGoals };

export default content;
