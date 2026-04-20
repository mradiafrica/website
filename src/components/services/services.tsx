import { component$ } from "@builder.io/qwik";

const services = [
  {
    emoji: "🛠",
    title: "Product Engineering",
    description:
      "Full-stack web and mobile applications. From MVP to production-grade systems built for scale.",
  },
  {
    emoji: "☁️",
    title: "Platform & Infrastructure",
    description:
      "Cloud architecture, CI/CD pipelines, containerization, and DevOps automation.",
  },
  {
    emoji: "🤖",
    title: "AI Integration",
    description:
      "LLM integration, RAG pipelines, embeddings, and intelligent automation for your workflows.",
  },
  {
    emoji: "🎨",
    title: "Design & UX",
    description:
      "User research, interaction design, design systems, and pixel-perfect implementation.",
  },
  {
    emoji: "🔍",
    title: "Code Audit & Rescue",
    description:
      "Legacy codebase modernization, performance optimization, and security hardening.",
  },
  {
    emoji: "📐",
    title: "Technical Strategy",
    description:
      "Fractional CTO services, architecture planning, tech stack selection, and team hiring.",
  },
];

const delayClasses = [
  "delay-0",
  "delay-1",
  "delay-2",
  "delay-3",
  "delay-4",
  "delay-5",
];

export const Services = component$(() => {
  return (
    <section id="services" class="wrap py-16 sm:py-20 lg:py-32">
      <div>
        <p class="font-syne text-xs font-medium uppercase tracking-[0.2em] text-accent">
          What We Do
        </p>
        <h2 class="mt-2 font-syne text-3xl font-bold text-ink sm:text-4xl">
          Services
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={service.title}
            class={`border-border animate-fade-up rounded-card border bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${delayClasses[i]}`}
          >
            <span class="mb-4 block text-3xl">{service.emoji}</span>
            <h3 class="font-syne text-lg font-bold text-ink">
              {service.title}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});
