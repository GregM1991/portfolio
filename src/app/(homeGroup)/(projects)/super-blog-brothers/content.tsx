import superBlogBrothersSplash from "@/assets/images/super-blog-brothers/super-blog-brothers-splash.png";
import animatedBlocks from "@/assets/images/super-blog-brothers/blocks.png";
import animatedBlogList from "@/assets/images/super-blog-brothers/blog-hover-image-animation.gif";
import { SocialLink } from "@/types/links";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { Typography } from "@/components";
import Link from "next/link";

const openingBody = [
  {
    key: "1",
    copy: `Super Blog Brothers was a fun build, I met Andy and George through a friend of mine, and we hit it off due to our love of games. They told me about their plan to start a video game blog and the conversation flowed on to a site I could build for them.`,
  },
  {
    key: "2",
    copy: `The brief they gave me was largely open, having been through a Bachelor of Comms design they trusted me with the look and feel. I talked them into some 3d assets (using Threlte JS) to help them with personlisation and they loved that, bringing this feel of game assets to a website about games. I got to build the site using my favourite framework SvelteKit, so the DX was really nice for me. I opted for a CMS, Prismic, so that Andy and George could take control of the content side and add/remove posts as they wanted.`,
  },
];

const links: SocialLink[] = [
  {
    key: "1",
    linkTooltipText: "Visit the Super Blog Brothers website",
    href: "https://video-game-blog-lbm4vcmxo-gregm1991s-projects.vercel.app/",
    icon: FaArrowUpRightFromSquare,
    screenReader: "A link to the Super Blog Brothers website",
  },
  {
    key: "2",
    linkTooltipText: "Visit the Super Blog Brothers Github repository",
    href: "https://github.com/GregM1991/portfolio",
    icon: FaGithub,
    screenReader: "A link to the Super Blog Brothers Github repository",
  },
];

const techStack = [
  "SvelteKit",
  "Threelte JS",
  "Prismic",
  "Typescript",
  "GSAP",
  "Tailwind",
];
const techSectionAriaLabel =
  "The tech stack used in the Super Blog Brothers project";

const purposeAndGoals = {
  heading: "Purpose and Goals",
  body: [
    {
      key: "1",
      copy: `My endgame for the Super Blog Brothers was to create a nice modern looking website that had a sense of fun about it. I wanted to replicate the kind of interest and wonder you get from playing a great video game, so I naturally was drawn towards animations and 3d.`,
    },
    {
      key: "2",
      copy: `The site also needed to be easily updated and editable, so that the Brothers could add/update/delete their blog posts at will. For this I needed a CMS, and I've had some small experience with Prismic, so I went with this. I remember there being a bit of a learning curve with the old Prismic, but given the Brothers would just be using it as a content creation for blog posts, and their background in games development, I didn't think it too much of an issue.`,
    },
  ],
  sectionAriaLabel: "Purpose and Goals of the Super Blog Brothers project",
};

const superBlogBrothersSplashImage = {
  src: superBlogBrothersSplash,
  alt: `Super Blog Brothers written on a dark background with floating geometry`,
};

const images = [
  {
    key: 1,
    src: animatedBlocks,
    alt: "A screenshot of the whole of the home portfolio page",
    caption: (
      <Typography size="xs">
        These blocks give a fun sense of play to the splash screen and are
        interactive.{" "}
        <Link href="https://video-game-blog-6zt3lzda0-gregm1991s-projects.vercel.app/">
          Check them out here
        </Link>
        , or check out the code{" "}
        <Link href="https://github.com/GregM1991/video-game-blog/blob/main/src/lib/slices/Hero/index.svelte#L72">
          here
        </Link>
      </Typography>
    ),
    gridName: "blocks",
  },
  {
    key: 2,
    src: animatedBlogList,
    alt: "A gif of the blog list page showing the animation between image hovers",
    caption: (
      <Typography size="xs">
        The blog list page has a fun hover effect on the images, showing a
        preview of the cover art of the game being reviewed.{" "}
        <Link href="https://video-game-blog-beta.vercel.app/blog">
          Check them out here
        </Link>
        , or check out the code{" "}
        <Link href="https://github.com/GregM1991/video-game-blog/blob/main/src/lib/slices/ContentIndex/ContentList.svelte">
          here
        </Link>
      </Typography>
    ),
    gridName: "blogList",
  },
  {
    key: 2,
    src: animatedBlogList, // TODO: Change this to the correct image (animated topics)
    alt: "A gif of the writing topics page showing the scroll animation",
    caption: (
      <Typography size="xs">
        I wanted the topics that Andy and George write about to be a little more
        interesting than just a static list, so I added a scoll animation.{" "}
        <Link href="https://video-game-blog-beta.vercel.app/about">
          Check it out here
        </Link>
        , or check out the code{" "}
        <Link href="https://github.com/GregM1991/video-game-blog/blob/main/src/lib/slices/TopicList/index.svelte">
          here
        </Link>
      </Typography>
    ),
    gridName: "topics",
  },
];

export const overview = {
  sectionAriaLabel:
    "The challenges and lessons Greg learned building Super Blog Brothers",
  heading: "Challenges and Lessons Learned",
  body: [
    {
      key: "1",
      copy: "The biggest challenge for me came to me towards the end, and that's having a solid outline from the start. I think with a project with such an open brief it's nice to have a little wiggle room, but without structure and planning it can blow out the timeline as I get carried away with trying out all the cool things I can do. There's also a lesson that goes hand in hand with this kind of issue and that's not to let the perfect be the enemy of the good. I found myself losing time trying to optimise everything, or make things pixel perfect when it really wasn't necessary to do so.",
    },
  ],
};

const content = {
  superBlogBrothersSplashImage,
  images,
  openingBody,
  links,
  techStack,
  techSectionAriaLabel,
  purposeAndGoals,
  overview,
};
export default content;
