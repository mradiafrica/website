import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section id="hero" class="wrap py-24 lg:py-32">
      <p class="animate-fade-up mb-4 font-syne text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Software Development Agency
      </p>
      <h1 class="animate-fade-up delay-1 max-w-2xl font-syne text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
        We build products that scale with{" "}
        <em class="text-accent">your ambitions</em>
      </h1>
      <p class="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
        Mradi Africa is a Nairobi-based software studio. We partner with
        startups and enterprises to design, build, and ship digital products —
        from concept to scale.
      </p>
      <div class="animate-fade-up delay-3 mt-8 flex gap-4">
        <button class="rounded-card-sm bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-[#22578A]">
          Start a project
        </button>
        <a
          href="#work"
          class="rounded-card-sm border border-mid px-6 py-3 font-medium text-ink transition-colors hover:bg-white"
        >
          View our work
        </a>
      </div>
      <div class="animate-fade-up delay-4 border-border mt-16 flex gap-12 border-t pt-8">
        <div>
          <div class="font-syne text-2xl font-bold text-ink">12+</div>
          <div class="text-sm text-ink-3">Projects shipped</div>
        </div>
        <div>
          <div class="font-syne text-2xl font-bold text-ink">3+</div>
          <div class="text-sm text-ink-3">Years building</div>
        </div>
        <div>
          <div class="font-syne text-2xl font-bold text-ink">8+</div>
          <div class="text-sm text-ink-3">Happy clients</div>
        </div>
        <div>
          <div class="font-syne text-2xl font-bold text-ink">5</div>
          <div class="text-sm text-ink-3">Team members</div>
        </div>
      </div>
    </section>
  );
});
