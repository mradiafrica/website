import { component$, useStore, $, useOnDocument } from "@builder.io/qwik";

const projects = [
  {
    emoji: "🐄",
    title: "Dairy HQ",
    description:
      "Multi-tenant dairy farm management platform. Track milk production, manage farmers, process payments — all in one SaaS.",
    tags: ["Web App", "AgriTech", "SaaS"],
    stack: ["Next.js", "Go", "PostgreSQL"],
    built: [
      "Multi-tenant dashboard for farm owners",
      "Milk collection & production tracking",
      "Farmer management & payments",
      "Real-time analytics & reporting",
      "Mobile-responsive progressive web app",
    ],
    gradient: "from-accent-light to-white",
  },
  {
    emoji: "📊",
    title: "Hesabu",
    description:
      "Business accounting and finance management system. Invoicing, expense tracking, and financial reporting made simple.",
    tags: ["Web App", "Fintech"],
    stack: ["React", "Node.js", "PostgreSQL"],
    built: [
      "Double-entry bookkeeping engine",
      "Invoice generation & management",
      "Expense categorization & tracking",
      "Financial reports & dashboards",
      "Multi-currency support",
    ],
    gradient: "from-gray-100 to-gray-50",
  },
];

export const Projects = component$(() => {
  const state = useStore<{ selectedProject: number | null }>({
    selectedProject: null,
  });

  const close$ = $(() => {
    state.selectedProject = null;
  });

  useOnDocument(
    "keydown",
    $((e) => {
      if ((e as KeyboardEvent).key === "Escape") {
        state.selectedProject = null;
      }
    }),
  );

  return (
    <section id="work" class="wrap py-16 sm:py-20 lg:py-32">
      <p class="font-syne text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Selected Work
      </p>
      <h2 class="mt-2 font-syne text-3xl font-bold text-ink sm:text-4xl">
        Projects we're proud of
      </h2>

      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={project.title}
            class="border-border cursor-pointer overflow-hidden rounded-card border bg-bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            onClick$={$(() => {
              state.selectedProject = i;
            })}
          >
            <div
              class={`flex aspect-video items-center justify-center bg-gradient-to-br ${project.gradient}`}
            >
              <span class="text-5xl">{project.emoji}</span>
            </div>
            <div class="p-6">
              <h3 class="font-syne text-xl font-bold text-ink">
                {project.title}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-2">
                {project.description}
              </p>
              <div class="mt-4 flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    class="rounded-full bg-accent-light px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {state.selectedProject !== null && (
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick$={close$}
        >
          <div
            class="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-card bg-bg-card p-8"
            onClick$={$((e: Event) => {
              e.stopPropagation();
            })}
          >
            <div class="flex items-start justify-between">
              <span class="text-6xl">
                {projects[state.selectedProject].emoji}
              </span>
              <button
                class="text-ink-3 transition-colors hover:text-ink"
                onClick$={close$}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <h3 class="mt-4 font-syne text-2xl font-bold text-ink">
              {projects[state.selectedProject].title}
            </h3>

            <div class="mt-3 flex gap-2">
              {projects[state.selectedProject].tags.map((tag) => (
                <span
                  key={tag}
                  class="rounded-full bg-accent-light px-2.5 py-1 text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p class="mt-4 leading-relaxed text-ink-2">
              {projects[state.selectedProject].description}
            </p>

            <h4 class="mt-6 font-syne text-lg font-bold text-ink">
              What we built
            </h4>
            <ul class="mt-2 space-y-2">
              {projects[state.selectedProject].built.map((item) => (
                <li
                  key={item}
                  class="flex items-start gap-2 text-sm text-ink-2"
                >
                  <span class="mt-1 text-accent">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <h4 class="mt-6 font-syne text-lg font-bold text-ink">
              Tech Stack
            </h4>
            <div class="mt-2 flex flex-wrap gap-2">
              {projects[state.selectedProject].stack.map((tech) => (
                <span
                  key={tech}
                  class="border-border rounded-full border bg-bg px-3 py-1 text-sm font-medium text-ink-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
});
