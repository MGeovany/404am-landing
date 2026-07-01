import type { DocumentHeadValue } from "@builder.io/qwik-city";

export const SITE = {
  origin: "https://nocturne.thefndrs.com",
  name: "Nocturne",
  title: "Nocturne | Network & Console DevTools with Copy for AI",
  description:
    "Inspect fetch and XHR requests, console logs, headers, and bodies in one focused DevTools panel. Filter noise and copy AI-ready debug context in one click.",
  tagline: "Debug requests without the headache",
  locale: "en_US",
  themeColor: "#0a0d1a",
  ogImage: {
    url: "https://nocturne.thefndrs.com/og-image.png",
    width: 1200,
    height: 630,
    alt: "Nocturne DevTools panel showing network requests, console logs, and Copy for AI",
    type: "image/png",
  },
  github: "https://github.com/MGeovany/nocturne-extension",
  githubIssues: "https://github.com/MGeovany/nocturne-extension/issues",
  privacyPolicy: "https://nocturne.thefndrs.com/privacy/",
  marketingUrl: "https://nocturne.thefndrs.com/",
  supportUrl: "https://nocturne.thefndrs.com/support/",
  edge:
    "https://microsoftedge.microsoft.com/addons/detail/nocturne/moeapnkcablnlgiofkblcjppinifdood",
  safari:
    "https://apps.apple.com/us/app/404am-network-devtools/id6782160193?mt=12",
  version: "0.1.0",
} as const;

export function canonicalUrl(pathname = "/"): string {
  const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return `${SITE.origin}${path === "/" ? "/" : path}`;
}

export function buildJsonLd(): string {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE.origin}/#organization`,
      name: SITE.name,
      url: SITE.origin,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.origin}/icons/icon128.png`,
        width: 128,
        height: 128,
      },
      sameAs: [SITE.github],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.origin}/#website`,
      url: SITE.origin,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE.origin}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE.origin}/#software`,
      name: SITE.name,
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "Browser Extension",
      operatingSystem: "Microsoft Edge, Safari, Firefox, Opera, Google Chrome",
      softwareVersion: SITE.version,
      description: SITE.description,
      url: SITE.origin,
      downloadUrl: SITE.edge,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "Network request inspection for fetch and XHR",
        "Console logs alongside network traffic",
        "Copy for AI with masked secrets",
        "Export as cURL, fetch, HAR, or JSON",
        "Request filtering, sorting, and timeline view",
      ],
      author: { "@id": `${SITE.origin}/#organization` },
      screenshot: SITE.ogImage.url,
    },
    {
      "@type": "WebPage",
      "@id": `${SITE.origin}/#webpage`,
      url: `${SITE.origin}/`,
      name: SITE.title,
      description: SITE.description,
      isPartOf: { "@id": `${SITE.origin}/#website` },
      about: { "@id": `${SITE.origin}/#software` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: SITE.ogImage.url,
        width: SITE.ogImage.width,
        height: SITE.ogImage.height,
      },
    },
  ];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}

export function createHomeHead(): DocumentHeadValue {
  const { ogImage } = SITE;

  return {
    title: SITE.title,
    meta: [
      { name: "description", content: SITE.description },
      {
        name: "keywords",
        content:
          "Nocturne, DevTools, browser extension, network inspector, fetch, XHR, console logs, debug API, Copy for AI, developer tools",
      },
      { name: "author", content: "MGeovany" },
      { name: "application-name", content: SITE.name },
      { name: "theme-color", content: SITE.themeColor },
      { name: "color-scheme", content: "dark" },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { property: "og:url", content: `${SITE.origin}/` },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:image", content: ogImage.url },
      { property: "og:image:secure_url", content: ogImage.url },
      { property: "og:image:type", content: ogImage.type },
      { property: "og:image:width", content: String(ogImage.width) },
      { property: "og:image:height", content: String(ogImage.height) },
      { property: "og:image:alt", content: ogImage.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.title },
      { name: "twitter:description", content: SITE.description },
      { name: "twitter:image", content: ogImage.url },
      { name: "twitter:image:alt", content: ogImage.alt },
    ],
    links: [
      { rel: "canonical", href: `${SITE.origin}/` },
      { rel: "alternate", href: `${SITE.origin}/`, hreflang: "en" },
      { rel: "alternate", href: `${SITE.origin}/`, hreflang: "x-default" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        key: "json-ld",
        props: { type: "application/ld+json" },
        script: buildJsonLd(),
      },
    ],
  };
}
