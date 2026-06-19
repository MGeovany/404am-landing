import { component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

/** Renders <title>, meta, links, and JSON-LD from each route's exported `head`. */
export const RouterHead = component$(() => {
  const head = useDocumentHead();

  return (
    <>
      <title>{head.title}</title>

      {head.meta.map((m) => (
        <meta key={m.key ?? `${m.name ?? m.property}-${m.content}`} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key ?? `${l.rel}-${l.href}`} {...l} />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key ?? "script"}
          {...s.props}
          dangerouslySetInnerHTML={s.script}
        />
      ))}
    </>
  );
});
