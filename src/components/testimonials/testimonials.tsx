import { component$ } from "@builder.io/qwik";

const testimonials = [
  {
    quote:
      "The Dairy HQ platform transformed how we manage our farm operations. Collection tracking that used to take hours now takes minutes.",
    initials: "DK",
    name: "Someone in Operations",
    title: "Operations Manager",
  },
  {
    quote:
      "Hesabu made our accounting painless. Clean interface, reliable reports, and the team was incredibly responsive throughout.",
    initials: "SM",
    name: "Someone in Finance",
    title: "Finance Director",
  },
  {
    quote:
      "Professional, thorough, and genuinely invested in our success. Mradi Africa feels like an extension of our own team.",
    initials: "PO",
    name: "Someone in Leadership",
    title: "Startup Founder",
  },
];

const delayClasses = ["delay-0", "delay-1", "delay-2"];

export const Testimonials = component$(() => {
  return (
    <section class="wrap py-16 sm:py-20 lg:py-32">
      <div>
        <p class="font-syne text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Testimonials
        </p>
        <h2 class="mt-2 font-syne text-3xl font-bold text-ink sm:text-4xl">
          What our clients say
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={t.initials}
            class={`animate-fade-up border-border rounded-card border bg-bg-card p-6 ${delayClasses[i]}`}
          >
            <span class="mb-2 font-serif text-3xl leading-none text-accent">
              &ldquo;
            </span>
            <p class="text-sm leading-relaxed text-ink-2">{t.quote}</p>
            <div class="border-border mt-6 flex items-center gap-3 border-t pt-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light font-syne text-xs font-bold text-accent">
                {t.initials}
              </div>
              <div>
                <p class="font-syne text-sm font-bold text-ink">{t.name}</p>
                <p class="text-xs text-ink-3">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
