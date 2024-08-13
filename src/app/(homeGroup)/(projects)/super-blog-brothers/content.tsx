import superBlogBrothersSplash from "@/assets/images/super-blog-brothers/super-blog-brothers-splash.png";
import animatedBlocks from "@/assets/images/super-blog-brothers/blocks.png";
import animatedBlogList from "@/assets/images/super-blog-brothers/blog-hover-image-animation.gif";
import { SocialLink } from "@/types/links";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const imageAltTxt = `Super Blog Brothers written on a dark background with floating geometry`;
const openingBody = [
  {
    key: "2",
    copy: `Super Blog Brothers was a fun build, I met Andy and George through a friend of mine, and we hit it off due to our love of games. They told me about their plan to start a video game blog and the conversation flowed on to a site I could build for them.`
  },
  {
    key: "2",
    copy: `The brief they gave me was largely open, having been through a Bachelor of Comms design they trusted me with the look and feel. I talked them into some 3d assets (using Threlte JS) to help them with personlisation and they loved that, bringing this feel of game assets to a website about games. I got to build the site using my favourite framework SvelteKit, so the DX was really nice for me. I opted for a CMS, Prismic, so that Andy and George could take control of the content side and add/remove posts as they wanted.`
  }
];

const links: SocialLink[] = [
  {
    key: "1",
    linkTooltipText: "Visit the Super Blog Brothers website",
    href: "https://video-game-blog-lbm4vcmxo-gregm1991s-projects.vercel.app/",
    icon: FaArrowUpRightFromSquare,
    screenReader: "A link to the Super Blog Brothers website"
  },
  {
    key: "2",
    linkTooltipText: "Visit the Super Blog Brothers Github repository",
    href: "https://github.com/GregM1991/portfolio",
    icon: FaGithub,
    screenReader: "A link to the Super Blog Brothers Github repository"
  }
];

const techStack = [
  "SvelteKit",
  "Threelte JS",
  "Prismic",
  "Typescript",
  "GSAP",
  "Tailwind"
];
const techSectionAriaLabel =
  "The tech stack used in the Super Blog Brothers project";

const purposeAndGoals = {
  heading: "Purpose and Goals",
  body: [
    {
      key: "1",
      copy: `My endgame for the Super Blog Brothers was to create a nice modern looking website that had a sense of fun about it. I wanted to replicate the kind of interest and wonder you get from playing a great video game, so I naturally was drawn towards animations and 3d.`
    },
    {
      key: "2",
      copy: `The site also needed to be easily updated and editable, so that the Brothers could add/update/delete their blog posts at will. For this I needed a CMS, and I've had some small experience with Prismic, so I went with this. I remember there being a bit of a learning curve with the old Prismic, but given the Brothers would just be using it as a content creation for blog posts, and their background in games development, I didn't think it too much of an issue.`
    }
  ],
  sectionAriaLabel: "Purpose and Goals of the Super Blog Brothers project"
};

export const overview = {
  sectionAriaLabel:
    "The challenges and lessons Greg learned building Super Blog Brothers",
  heading: "Challenges and Lessons Learned",
  body: [
    {
      key: "1",
      copy: "The biggest challenge for me came to me towards the end, and that's having a solid outline from the start. I think with a project with such an open brief it's nice to have a little wiggle room, but without structure and planning it can blow out the timeline as I get carried away with trying out all the cool things I can do. There's also a lesson that goes hand in hand with this kind of issue and that's not to let the perfect be the enemy of the good. I found myself losing time trying to optimise everything, or make things pixel perfect when it really wasn't necessary to do so."
    }
  ]
};

const content = {
  images: { superBlogBrothersSplash, animatedBlocks, animatedBlogList },
  openingBody,
  imageAltTxt,
  links,
  techStack,
  techSectionAriaLabel,
  purposeAndGoals,
  overview
};
export default content;
