import { component$, useStore, $ } from "@builder.io/qwik";

export const Contact = component$(() => {
  const form = useStore({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
    submitted: false,
  });

  const handleSubmit = $(() => {
    form.submitted = true;
  });

  return (
    <section id="contact" class="bg-[#1A1814] py-24 text-white lg:py-32">
      <div class="mx-auto max-w-[1080px] px-8">
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p class="font-syne text-xs font-medium uppercase tracking-[0.2em] text-[#6B9DD6]">
              Get in Touch
            </p>
            <h2 class="mt-2 font-syne text-3xl font-bold text-white sm:text-4xl">
              Let's build something great
            </h2>
            <p class="mt-6 leading-relaxed text-gray-400">
              Have a project in mind? We'd love to hear about it. Tell us what
              you're building and we'll get back to you within 24 hours.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-[#6B9DD6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span class="text-sm text-gray-300">hello@mradiafrica.com</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[#6B9DD6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span class="text-sm text-gray-300">+254 758 337 480</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[#6B9DD6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span class="text-sm text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div>
            {form.submitted ? (
              <div class="flex h-full flex-col items-center justify-center text-center">
                <span class="mb-4 text-[#6B9DD6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <p class="font-syne text-xl font-bold text-white">
                  Thanks for reaching out!
                </p>
                <p class="mt-2 text-gray-400">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit$={handleSubmit}
                class="space-y-4"
                preventdefault:submit
              >
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full rounded-card-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#2B6CB0] focus:outline-none"
                  value={form.name}
                  onInput$={(_, el) => (form.name = el.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full rounded-card-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#2B6CB0] focus:outline-none"
                  value={form.email}
                  onInput$={(_, el) => (form.email = el.value)}
                />
                <select
                  aria-label="Project Type"
                  class="w-full rounded-card-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#2B6CB0] focus:outline-none"
                  value={form.projectType}
                  onChange$={(_, el) => (form.projectType = el.value)}
                >
                  <option value="" disabled selected class="text-gray-500">
                    Project Type
                  </option>
                  <option value="web-application">Web Application</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="saas-platform">SaaS Platform</option>
                  <option value="api-backend">API/Backend</option>
                  <option value="other">Other</option>
                </select>
                <select
                  aria-label="Budget Range"
                  class="w-full rounded-card-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#2B6CB0] focus:outline-none"
                  value={form.budget}
                  onChange$={(_, el) => (form.budget = el.value)}
                >
                  <option value="" disabled selected class="text-gray-500">
                    Budget Range
                  </option>
                  <option value="under-5k">Under $5k</option>
                  <option value="5k-15k">$5k - $15k</option>
                  <option value="15k-50k">$15k - $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  class="w-full rounded-card-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#2B6CB0] focus:outline-none"
                  value={form.message}
                  onInput$={(_, el) => (form.message = el.value)}
                />
                <button
                  type="submit"
                  class="mt-2 w-full rounded-card-sm bg-accent py-3 font-medium text-white transition-colors hover:bg-[#22578A]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
