import { component$, useStore, $ } from "@builder.io/qwik";
import ImgLogo from "~/media/image-removebg-preview.png?jsx";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const Nav = component$(() => {
  const state = useStore({ open: false });

  const toggle$ = $(() => {
    state.open = !state.open;
  });

  return (
    <nav class="bg-bg/80 border-border sticky top-0 z-50 border-b backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-8">
        <div class="flex items-center gap-10">
          <a href="/">
            <ImgLogo alt="Logo" class="w-28" />
          </a>
          <div class="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                class="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div class="flex items-center gap-4">
          <a
            href="#contact"
            class="hidden rounded-card-sm bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#22578A] lg:inline-flex"
          >
            Start a project
          </a>

          <button
            class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick$={toggle$}
            aria-label="Toggle menu"
          >
            <span class="block h-0.5 w-6 bg-ink" />
            <span class="block h-0.5 w-6 bg-ink" />
            <span class="block h-0.5 w-6 bg-ink" />
          </button>
        </div>
      </div>

      {state.open && (
        <div class="fixed inset-0 z-50">
          <div
            class="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick$={toggle$}
          />
          <div class="relative z-10 flex h-full w-72 flex-col gap-6 bg-bg p-8">
            <a href="/">
              <ImgLogo alt="Logo" class="w-28" />
            </a>
            <div class="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  class="text-lg font-medium text-ink-2 transition-colors hover:text-ink"
                  onClick$={toggle$}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              class="rounded-card-sm bg-accent px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#22578A]"
              onClick$={toggle$}
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
});
