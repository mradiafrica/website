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
    <>
      {items.map((item, i) => (
        <>
          <span
            key={item}
            class="text-sm font-medium uppercase tracking-wider text-ink-3"
          >
            {item}
          </span>
          {i < items.length - 1 && (
            <span key={`dot-${i}`} class="text-ink-3/40">
              ·
            </span>
          )}
        </>
      ))}
    </>
  );
});

export const Marquee = component$(() => {
  return (
    <div class="border-border overflow-hidden border-y bg-bg py-4">
      <div
        class="flex items-center gap-8 whitespace-nowrap"
        style={{ animation: "scroll 30s linear infinite" }}
      >
        <ItemList />
        <span class="text-ink-3/40">·</span>
        <ItemList />
      </div>
    </div>
  );
});
