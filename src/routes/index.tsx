import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Nav } from "~/components/nav/nav";
import { Hero } from "~/components/hero/hero";
import { Marquee } from "~/components/marquee/marquee";
import { Projects } from "~/components/projects/projects";
import { Services } from "~/components/services/services";
import { Process } from "~/components/process/process";
import { About } from "~/components/about/about";
import { Testimonials } from "~/components/testimonials/testimonials";
import { Contact } from "~/components/contact/contact";
import { Footer } from "~/components/footer/footer";

export default component$(() => {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Mradi Africa — Software Development Agency",
  meta: [
    {
      name: "description",
      content:
        "Mradi Africa is a Nairobi-based software studio. We design, build, and ship digital products — from concept to scale.",
    },
  ],
};
