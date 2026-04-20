import { component$ } from "@builder.io/qwik";

// const team = [
//   { initials: "AO", name: "Alex Ochieng", role: "Lead Engineer" },
//   { initials: "WK", name: "Wanjiku Kamau", role: "Full-Stack Developer" },
//   { initials: "JM", name: "James Mwangi", role: "Backend Engineer" },
//   { initials: "AN", name: "Amina Noor", role: "UI/UX Designer" },
// ];

export const About = component$(() => {
  return (
    <section id="about" class="wrap py-24 lg:py-32">
      <div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div class="animate-fade-up">
          <span class="font-syne text-xs font-medium uppercase tracking-[0.2em] text-accent">
            About Us
          </span>
          <h2 class="mt-2 font-syne text-3xl font-bold text-ink sm:text-4xl">
            Built in Nairobi, shipping worldwide
          </h2>
          <p class="mt-6 leading-relaxed text-ink-2">
            Mradi Africa is a software development studio based in Nairobi,
            Kenya. We're a small, focused team of engineers and designers who
            believe great software comes from deep understanding — of the
            problem, the user, and the business.
          </p>
          <p class="mt-6 leading-relaxed text-ink-2">
            We work with startups building their first product and established
            companies modernizing their systems. Every project gets our full
            attention.
          </p>
        </div>

        {/* <div class="grid grid-cols-2 gap-4">
          {team.map((member, i) => (
            <div
              key={member.initials}
              class={`border-border animate-fade-up rounded-card border bg-bg-card p-5 text-center delay-${i + 1}`}
            >
              <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-light font-syne text-sm font-bold text-accent">
                {member.initials}
              </div>
              <p class="mt-3 font-syne text-sm font-bold text-ink">
                {member.name}
              </p>
              <p class="mt-1 text-xs text-ink-3">{member.role}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
});
