import { component$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useServerTimeLoader } from "./layout";
// import ImgImageRemovebgPreview from '~/media/image-removebg-preview.png?jsx';


export default component$(() => {

  const serverTime = useServerTimeLoader();

  const state = useStore({ isMenuOpen: false });

  const toggleMenu = $(() => {
    state.isMenuOpen = !state.isMenuOpen;
  });

  return (
    <>
      <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <a href="#" aria-label="Company" title="Company" class="inline-flex items-center mr-4 lg:mr-8">
              <img width="752" height="279" src="/image-removebg-preview.png" alt="logo" class="w-24 lg:w-32"/>
            </a>
            <ul class="items-center hidden space-x-6 lg:flex lg:space-x-8">
              <li>
                <a href="#" aria-label="Process" title="Process" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-sm lg:text-base">
                  Process
                </a>
              </li>
              <li>
                <a href="#" aria-label="Contact Us" title="Contact Us" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-sm lg:text-base">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" aria-label="About us" title="About us" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 text-sm lg:text-base">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <ul class="items-center hidden space-x-6 lg:flex lg:space-x-8">
            <li>
              <a
                href="#"
                class="inline-flex items-center justify-center h-10 lg:h-12 px-4 lg:px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-sm lg:text-base"
                aria-label="Get Quote"
                title="Get Quote"
              >
                Get Quote
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick$={toggleMenu}
            >
              <svg class="w-6 text-gray-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
              </svg>
            </button>
            <div id="mobileMenu" class={`fixed top-0 left-0 w-full h-full ${state.isMenuOpen ? 'block' : 'hidden'} z-50`}>
              <div class="absolute inset-0 bg-black bg-opacity-50" onClick$={toggleMenu}></div>
              <div class="relative w-4/5 max-w-sm h-full bg-white shadow-lg overflow-y-auto">
                <div class="p-6">
                  <div class="flex items-center justify-between mb-8">
                    <div>
                      <a href="#" aria-label="Company" title="Company" class="inline-flex items-center">
                        <img width="752" height="279" src="/image-removebg-preview.png" alt="logo" class="w-28"/>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 transition duration-200 rounded-full hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                        onClick$={toggleMenu}
                      >
                        <svg class="w-6 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-6">
                      <li>
                        <a href="#" aria-label="Our product" title="Our product" class="block py-3 text-lg font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border-b border-gray-100">
                          Product
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-label="Process" title="Process" class="block py-3 text-lg font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border-b border-gray-100">
                          Process
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-label="Contact Us" title="Contact Us" class="block py-3 text-lg font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border-b border-gray-100">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-label="About us" title="About us" class="block py-3 text-lg font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border-b border-gray-100">
                          About us
                        </a>
                      </li>
                      <li class="pt-6">
                        <a
                          href="#"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Get Quote"
                          title="Get Quote"
                        >
                          Get Quote
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="relative flex flex-col-reverse px-4 py-12 mx-auto lg:block lg:flex-col lg:py-24 xl:py-32 md:px-8 sm:max-w-xl md:max-w-full lg:py-32 xl:py-48">
        <div class="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-20 lg:pb-12 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://kitwind.io/assets/kometa/laptop.png"
            width={1020}
            height={640}
            class="object-cover object-right w-full h-64 sm:h-80 lg:h-full lg:w-auto lg:max-h-[500px]"
            alt="Laptop showing software interface"
            loading="lazy"
          />
        </div>
        <div class="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div class="mb-12 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div class="max-w-xl mb-8">
              <h2 class="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl sm:leading-tight lg:leading-none">
                We will bring your <br class="hidden sm:block" />
                business
                <span class="inline-block text-deep-purple-accent-400 px-1 sm:px-2">online</span>
              </h2>
              <p class="text-sm text-gray-700 sm:text-base md:text-lg leading-relaxed">
                Transform how you work and serve your customers with tailored software solutions. Let's build something great together for your inhouse operations.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-sm sm:text-base w-full sm:w-auto"
              >
                Reach Out
              </button>
              <a href="/contact-us" aria-label="Learn more" class="inline-flex items-center justify-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm sm:text-base text-center">
                Learn more
                <svg class="inline-block w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="d9d7687a-355f-4502-8ec4-7945db034688" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)" width="52" height="24"></rect>
              </svg>
              <span class="relative px-2">Our</span>
            </span>
            Approach
          </h2>
        </div>

        <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="grid gap-6 row-gap-10 lg:grid-cols-2">
            <div class="lg:py-6 lg:pr-16">
              <div class="pt-1 pb-8">
                <p class="mb-2 text-lg font-bold">STEPS</p>
                <p class="text-gray-700">This approach involves several steps, starting with meticulous research and strategic planning, followed by the seamless execution of brand development and website or product deployment.</p>
              </div>
              <div class="flex">
                <div class="flex flex-col items-center mr-4">
                  <div>
                    <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="w-px h-full bg-gray-300"></div>
                </div>
                <div class="pt-1 pb-8">
                  <p class="mb-2 text-lg font-bold">Understand</p>
                  <p class="text-gray-700">We start by understanding your business needs and goals.</p>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col items-center mr-4">
                  <div>
                    <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="w-px h-full bg-gray-300"></div>
                </div>
                <div class="pt-1 pb-8">
                  <p class="mb-2 text-lg font-bold">Plan</p>
                  <p class="text-gray-700">We create a detailed plan to meet your requirements.</p>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col items-center mr-4">
                  <div>
                    <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="w-px h-full bg-gray-300"></div>
                </div>
                <div class="pt-1 pb-8">
                  <p class="mb-2 text-lg font-bold">Develop</p>
                  <p class="text-gray-700">Our team builds the software according to the plan.</p>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col items-center mr-4">
                  <div>
                    <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="w-px h-full bg-gray-300"></div>
                </div>
                <div class="pt-1 pb-8">
                  <p class="mb-2 text-lg font-bold">Test</p>
                  <p class="text-gray-700">We test the software to ensure it meets quality standards.</p>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col items-center mr-4">
                  <div>
                    <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="w-px h-full bg-gray-300"></div>
                </div>
                <div class="pt-1 pb-8">
                  <p class="mb-2 text-lg font-bold">Deploy</p>
                  <p class="text-gray-700">We deploy the software for your use.</p>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col items-center mr-4">
                  <div>
                    <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg class="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="pt-1">
                  <p class="mb-2 text-lg font-bold">Success</p>
                  <p class="text-gray-700">Your software is ready to help your business thrive.</p>
                </div>
              </div>
              <div class="pt-8">
                <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-deep-purple-accent-400 font-medium text-sm text-white rounded-full focus:outline-none" href="#">
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                  Schedule a call
                </a>
              </div>
            </div>
            <div class="relative">
              <img
                class="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-10 lg:grid-cols-2">
          <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg class="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points=" 8,5 8,1 16,1 16,5" stroke-linejoin="round"></polyline>
                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="9,15 1,15 1,5 23,5 23,15 15,15" stroke-linejoin="round"></polyline>
                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="22,18 22,23 2,23 2,18" stroke-linejoin="round"></polyline>
                <rect x="9" y="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" width="6" height="4" stroke-linejoin="round"></rect>
              </svg>
            </div>
            <div class="max-w-xl mb-6">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Let us handle<br class="hidden md:block" />
                your next
                <span class="inline-block text-deep-purple-accent-400 px-2">project</span>
              </h2>
              <p class="text-base text-gray-700 md:text-lg">
                Our goal is to address your business pain points with tailored solutions. Talk to us for a free quote.
              </p>
            </div>
            <div>
              <a href="#" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Contact Us
                <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex items-center justify-center -mx-4 lg:pl-8">
            <div class="flex flex-col items-end px-3">
              <img
                class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            </div>
            <div class="px-3">
              <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* This the footer */}
      <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <a href="#" aria-label="Go home" title="Company" class="inline-flex items-center">
            <img  width="752" height="279" src="/image-removebg-preview.png" alt="logo" class="w-32"/>
            </a>
            <div class="mt-6 lg:max-w-sm">
              <p class="text-sm text-gray-800">
                Transform your business with our custom software solutions. Partner with us to streamline your operations and achieve greater success.
              </p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Phone:</p>
              <a href="tel:+254758337480" aria-label="Our phone" title="Our phone" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+254 758 337 480</a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a href="mailto:hello@mradiafrica.com" aria-label="Our email" title="Our email" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">hello@mradiafrica.com</a>
            </div>
            {/* <div class="flex">
              <p class="mr-1 text-gray-800">Address:</p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                312 Lovely Street, NY
              </a>
            </div> */}
          </div>
          <div>
            <span class="text-base font-bold tracking-wide text-gray-900">Social</span>
            <div class="flex items-center mt-1 space-x-3">
              <a href="#" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                  ></path>
                </svg>
              </a>
            </div>
            <p class="mt-4 text-sm text-gray-500">
              Connect with us on social media
            </p>
          </div>
        </div>
        <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p class="text-sm text-gray-600">
            © Copyright {serverTime.value.date.substring(0, 4)} Mradi Africa. All rights reserved.
          </p>
          <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a href="#" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "This is the home page ",
      content: "Landing page of the business",
    },
  ],
};
