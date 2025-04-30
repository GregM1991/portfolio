# Portfolio

<details>
  <summary>Getting started</summary>
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

</details>

## Personalised for Canva

Welcome to my write up of my custom-built portfolio for Canva. I'm gonna dive in to the details of why I built this and hopefully keep things interesting for whoever wants to read this, feel free to ignore this entire readme though!

**TLDR: I want a job at Canva.. I'm hoping this impresses someone enough to get me into the interview process.**

So it's been a while since I looked at my portfolio, about 3 years. I'm sure this is common for most developers but I took a look at it and it's borked. So it needed a touch up to say the least.

Since I started doing Software Engineering, Canva has been the unicorn, the place to work, the Holy Grail. So when I was scrolling through their [canva-life](https://www.lifeatcanva.com/en/canva-life/) page and I had an interesting idea to take the page, and map my portfolio content on to it. I did this for a few reasons:

- First and foremost I thought it would help me stand out in the thousands of applicants Canva receives. I've heard from friends and strangers on the web about how difficult it is, and thought this might help
- I thought it would be fun! Canva has an awesome style and design system and I wanted to build something in their style, a love letter so-to-speak
- I hoped it would be different. It's been a while since I've done a splash page from top to bottom, I'm usually bogged down in nitty gritty product details, building/working on components that fill out a specific product feature.
- I wanted to try some new technologies, this one doesn't really have much to do with Canva specifically, but I wanted to try out Next 13 (now updated to 15) with server components.

So that's about it for the reasons, let's get into some details.

### Technologies

**TLDR: I wanted to see what the fuss was about with Next JS, as well as get my head around server components**

- [Next JS 13](https://nextjs.org/) - I wanted to get my head around React Server components and how they work
- [Typescript](https://www.typescriptlang.org/)
- [css-modules](https://github.com/css-modules/css-modules) - styled-components are usually my go to for styling, but with them needing a JS runtime on the client, it would be counter-intuitive with trying to learn SSR
- [framer-motion](https://www.framer.com/motion/) - now I know what I just said above ^, but I also wanted to get some practice in with animating with Framer motion

### Things I've learnt

- CSS Modules:
  - **TLDR: Had a blast, lost out on some DX, would use preprocessor next time**
  - I love handling CSS, I often find that CSS frameworks can cause issues after they've been used for a long time, and they often-times lead to [div soup](https://www.chillybin.co/would-you-like-another-bowl-of-div-soup/). So when I realised I couldn't use styled-components (reasonably) I gave css-modules a go. What I missed out on (or need to learn more about css-modules) was theming, and the ability to build and reference objects that hold my styles. I also missed my nesting styles and queries, so time-permitting I'll bring in Sass.
- It's difficult to set up a theme without a design system doc to go off of. I spent a fair amount of time just auditing the canva-life page, figuring out what spacing was used and where, how large the type was etc.

### Things I'd do with more time

**TLDR: Spent a lot of time on this, and wanted to call it somewhere.**

- Implement a proper theme
- Use a CSS preprocessor (Sass most likely)
- There are a few components, like the Modal and Typography, that could be more generic.
- My values and testimonials sections aren't currently swipeable on mobile, and it'd be nice to have that.
- Explore more server-component patterns, like having server components compose client components

```Typescript
function ServerComponent({children}) {
  // Fetching data / server things
  return (
    // server rendered markup
      {children}
    // server rendered markup
  )
}

function App() {
  return (
    <ServerComponent>
      <ClientComponent />
    </ServerComponent>
  )
}
```

So I spent more time on this than I thought I would. With learning how server components work, and getting used to the Next JS way of doing things, I went a little bit over time 😅. So with the way it's looking as I write this (1/09/2023), I figure I call it presentable for now.
