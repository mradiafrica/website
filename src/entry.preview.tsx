/*
 * WHAT IS THIS FILE?
 *
 * It's the bundle entry point for `bun run preview`.
 * That is, serving your app built in production mode.
 *
 * Feel free to modify this file, but don't remove it!
 *
 * Learn more about Vite's preview command:
 * - https://vitejs.dev/config/preview-options.html#preview-options
 *
 * Note: This uses the Node middleware because Vite's preview server runs on Node.
 * For production, use `bun run serve` which uses the native Bun adapter.
 */
import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";

export default createQwikCity({ render, qwikCityPlan });
