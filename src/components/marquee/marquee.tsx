import { component$ } from "@builder.io/qwik";

const items = [
  "Next.js",
  "React",
  "Go",
  "PostgreSQL",
  "Flutter",
  "Python",
  "TypeScript",
  "Docker",
  "AWS",
  "Figma",
  "Tailwind CSS",
  "Node.js",
];

const ItemList = component$(() => {
  return (
    <div class="flex shrink-0 items-center gap-8">
      {items.map((item) => (
        <>
          <span
            key={item}
            class="text-sm font-medium uppercase tracking-wider text-ink-3"
          >
            {item}
          </span>
          <span key={`dot-${item}`} class="text-ink-3/40">
            ·
          </span>
        </>
      ))}
    </div>
  );
});

export const Marquee = component$(() => {
  return (
    <div class="border-border overflow-hidden border-y bg-bg py-4">
      <div
        class="flex w-max items-center gap-8 whitespace-nowrap"
        style={{ animation: "scroll 30s linear infinite" }}
      >
        <ItemList />
        <ItemList />
      </div>
    </div>
  );
});
