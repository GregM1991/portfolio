import { Introduction, Skills, Projects, Testimonials } from "@/components";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Skills />
      <Projects />
      <Testimonials variant="home" />
    </main>
  );
}
