import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="preload"
        href="/fonts/dm-sans-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/syne-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { dangerouslySetInnerHTML: _dih, ...rest } = (s.props ??
          {}) as Record<string, unknown>;
        return (
          <style key={s.key} {...rest} dangerouslySetInnerHTML={s.style} />
        );
      })}
    </>
  );
});
