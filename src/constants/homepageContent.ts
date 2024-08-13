const introP1 =
  "Hello there 👋🏻 Welcome to my place! I'm a Full-Stack Engineer with a Front-End specialisation. In a past life, I was a Graphic Designer, which has given me a unique ability to ride the line between design and engineering.";
const introP2 =
  "As I've grown over my career, I've worked with an amazing set of Designers and Developers who have contributed to my skill set and reinforced my love for front-end engineering.";
const introP3 =
  "Through these experiences, I've had the opportunity to help shape and create memorable and easy-to-use products, written in a way that's maintainable and easy to understand.";

export const INTRO_COPY = {
  title: "Greg's Place",
  tagLine: [
    { key: crypto.randomUUID(), copy: "Just a Full-Stack Engineer, " },
    { key: crypto.randomUUID(), copy: "standing in front of JavaScript," },
    { key: crypto.randomUUID(), copy: " asking it to love him." },
  ],

  body: [introP1, introP2, introP3],
};

export const SKILLS_COPY = {
  title: "My Skills",
  body: [
    "I kicked off my career as a full-stack developer traversing both ends of the technology spectrum. I believe this has hugely improved my scope of technical understanding. Knowledge of how the front and back end interact with each other is, of course, key to defining your structural and architectural needs. But my heart is truly with the front end as it allows me to express my creative side and build beautiful, articulate software.",
  ],
};

export const PROJECTS_COPY = {
  title: "What I've been working on",
  body: "Throughout my career as a Full-Stack Engineer, I've taken on significant roles in developing core features, refactoring legacy systems into React, and leading the creation of a custom UI Component Library. I've collaborated closely with UI/UX teams, mentored junior engineers, and been instrumental in key projects like API development and enhancing user authentication processes. I've also recently started on some personal projects, this portfolio included!",
};
