import { component$ } from "@builder.io/qwik";
import ImgLogo from "~/media/image-removebg-preview.png?jsx";

export const Footer = component$(() => {
  return (
    <footer class="border-t border-white/10 bg-[#1A1814] text-white">
      <div class="mx-auto max-w-[1080px] px-8 py-12">
        <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <ImgLogo
              class="w-24"
              style={{ filter: "brightness(2)" }}
              alt="Mradi Africa"
            />
            <p class="mt-1 text-xs text-gray-500">
              Software Development Agency
            </p>
          </div>
          <nav class="flex flex-row gap-6">
            <a
              href="#work"
              class="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Work
            </a>
            <a
              href="#services"
              class="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Services
            </a>
            <a
              href="#process"
              class="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Process
            </a>
            <a
              href="#about"
              class="text-sm text-gray-400 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              class="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
        <div class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p class="text-xs text-gray-500">
            © 2026 Mradi Africa. All rights reserved.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Twitter
            </a>
            <a
              href="#"
              class="text-sm text-gray-500 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="#"
              class="text-sm text-gray-500 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
