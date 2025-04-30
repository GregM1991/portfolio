"use server";
import * as dootNotesImgs from "@/assets/images/doot-notes";
import { AnimatedLink, Typography } from "@/components";
import Link from "next/link";
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
const userSearch = {
  src: dootNotesImgs.userSearch,
  alt: "A screenshot of the user search page"
};
const images = [
  {
    key: 1,
    src: dootNotesImgs.editNote,
    alt: "A screenshot of the user editing a note",
    gridName: "edit",
    caption: (
      <Typography size="xs">
        If a user is logged in and viewing their own notes page, they have the
        power to create/read/update/delete their notes.{" "}
        <AnimatedLink href="https://dootnotes.com/users/grug_grug/notes/cm0my5gpo0004vf5k6z5m8luc">
          Check it out here
        </AnimatedLink>
        , or check out the code{" "}
        <AnimatedLink href="https://github.com/GregM1991/doot-notes/tree/main/src/routes/users/%5Busername%5D/notes">
          here
        </AnimatedLink>
        . You&apos;ll need to be logged in to view this page, but you can create
        an account if you please!
      </Typography>
    )
  },
  {
    key: 2,
    src: dootNotesImgs.notesList,
    alt: "A screenshot of the user notes page",
    gridName: "list",
    caption: (
      <Typography size="xs">
        This is the main area of the application where users can view notes by a
        user. If they are the owner of the notes, they are given CRUD
        capabilites{" "}
        <AnimatedLink href="https://dootnotes.com/users/grug_grug/notes">
          Check it out here
        </AnimatedLink>
        , or check out the code{" "}
        <AnimatedLink href="https://github.com/GregM1991/doot-notes/tree/main/src/routes/users/%5Busername%5D/notes">
          here
        </AnimatedLink>
      </Typography>
    )
  },
  {
    key: 3,
    src: dootNotesImgs.profilePage,
    alt: "A screenshot of the user profile page",
    gridName: "profile",
    caption: (
      <Typography size="xs">
        The profile page, where users can change their username, email or
        password. Enable 2FA, view sessions across browsers and more.{" "}
        <AnimatedLink href="https://dootnotes.com/settings/profile">
          Check it out here
        </AnimatedLink>{" "}
        (you won&apos;t be able to view this one unless you&apos;ve created an
        account and are logged in), or check out the code{" "}
        <AnimatedLink href="https://github.com/GregM1991/doot-notes/blob/main/src/routes/settings/profile/%2Bpage.svelte">
          here
        </AnimatedLink>
      </Typography>
    )
  }
];
const links = [
  {
    key: "1",
    linkTooltipText: "Visit the Doot Notes website",
    href: "https://dootnotes.com/",
    icon: <FaArrowUpRightFromSquare />,
    screenReader: "A link to the Doot Notes website"
  },
  {
    key: "2",
    linkTooltipText: "Visit the Doot Notes Github repository",
    href: "https://github.com/GregM1991/doot-notes",
    icon: <FaGithub />,
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
    "SQLite",
    "LiteFS",
    "Cloudflare S2",
    "fly.io"
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
      copy: "There are still so many more things I want to try and implement in a solo project like this, but having recently brought a baby girl into this world, time is rather short. Some things up next are Role-Based Access Control, caching, end-to-end testing, error monitoring. Most of all I'm just looking forward to jazzing everything up with animations and transitions to make a fun experience for the user."
    },
    {
      key: "3",
      copy: `The last goal for this website was to have it be fully operational without JavaSript. The idea of progressive enhancement is something that jives with me, being able to have my web app work for the widest array of users possible, and doing it using with the standard web technologies.`
    }
  ],
  sectionAriaLabel: "Purpose and Goals of the Doot Notes project"
};

const overview = {
  heading: "Challenges & Lessons Learned/Learning",
  body: [
    {
      key: "1",
      copy: "One of the goals I mentioned was to keep the site fully accessible to users without JS. Doing this with SvelteKit wasn't hard at all, as it's very intuitive to SSR pages (it works much like Remix which I'm familiar with, using loaders and actions). The challenge came with making sure everything was accounted for, with Forms being properly handled with validation and error messages. Making sure I wasn't sending anything sensitive back to the client."
    },
    {
      key: "2",
      copy: "The other challenge was around SvelteKit's less mature ecosystem (compared to React) and finding third party tools to help me out. It wasn't crazy difficult, but there were quirks and bits and bobs I needed to get the hang of. I used a Form validation library Superforms, which is fantastic, but when it came to handling images, the only solution for validation was to perform a client side fetch call to send the data instead of a native web form submission."
    }
  ],
  sectionAriaLabel: "Overview of the Doot Notes project"
};

export async function getDootNoteContent() {
  return {
    openingBody,
    images,
    userSearch,
    links,
    techStack,
    purposeAndGoals,
    overview
  };
}
