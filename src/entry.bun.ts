import { createQwikCity } from "@builder.io/qwik-city/middleware/bun";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";

const { router, notFound, staticFile } = createQwikCity({
  render,
  qwikCityPlan,
  static: {
    cacheControl: "public, max-age=31536000, immutable",
  },
});

const COMPRESSIBLE = /\.(js|css|html|json|xml|txt|svg|woff2?)$/;
const CONTENT_TYPES = new Set([
  "text/html",
  "text/css",
  "text/javascript",
  "application/javascript",
  "application/json",
  "image/svg+xml",
  "text/xml",
  "text/plain",
]);

function shouldCompress(request: Request, response: Response): boolean {
  const accept = request.headers.get("accept-encoding") || "";
  if (!accept.includes("gzip")) return false;
  const ct = response.headers.get("content-type") || "";
  const baseType = ct.split(";")[0].trim();
  return CONTENT_TYPES.has(baseType);
}

async function compress(
  request: Request,
  response: Response,
): Promise<Response> {
  if (!shouldCompress(request, response)) return response;
  const body = await response.arrayBuffer();
  if (body.byteLength < 150)
    return new Response(body, {
      status: response.status,
      headers: response.headers,
    });
  const compressed = Bun.gzipSync(new Uint8Array(body));
  const headers = new Headers(response.headers);
  headers.set("content-encoding", "gzip");
  headers.set("content-length", String(compressed.byteLength));
  headers.delete("content-length");
  return new Response(compressed, { status: response.status, headers });
}

const port = Number(Bun.env.PORT ?? 3000);

console.log(`Server started: http://localhost:${port}/`);

Bun.serve({
  async fetch(request: Request) {
    const staticResponse = await staticFile(request);
    if (staticResponse) {
      const url = new URL(request.url);
      if (COMPRESSIBLE.test(url.pathname)) {
        return compress(request, staticResponse);
      }
      return staticResponse;
    }

    const qwikCityResponse = await router(request);
    if (qwikCityResponse) {
      return compress(request, qwikCityResponse);
    }

    return notFound(request);
  },
  port,
});
