import { component$ } from "@builder.io/qwik";

const steps = [
  {
    number: 1,
    title: "Discover",
    description:
      "We dig into your business, users, and goals. Research and interviews to understand the real problem.",
  },
  {
    number: 2,
    title: "Blueprint",
    description:
      "Architecture, wireframes, and technical planning. We map every feature before writing a line of code.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Iterative development in 2-week sprints. You see progress constantly and give feedback early.",
  },
  {
    number: 4,
    title: "Launch & Scale",
    description:
      "Deployment, monitoring, and optimization. We stay on to ensure everything runs smoothly at scale.",
  },
];

const delayClasses = ["delay-0", "delay-1", "delay-2", "delay-3"];

export const Process = component$(() => {
  return (
    <section id="process" class="wrap py-16 sm:py-20 lg:py-32">
      <div>
        <p class="font-syne text-xs font-medium uppercase tracking-[0.2em] text-accent">
          How We Work
        </p>
        <h2 class="mt-2 font-syne text-3xl font-bold text-ink sm:text-4xl">
          From idea to launch
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} class={`animate-fade-up ${delayClasses[i]}`}>
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-syne text-sm font-bold text-white">
              {step.number}
            </div>
            <h3 class="mt-4 font-syne text-lg font-bold text-ink">
              {step.title}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});
