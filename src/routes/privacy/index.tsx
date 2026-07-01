import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE, canonicalUrl } from "../../lib/seo";

const ICON_SM = "/icons/icon32.png";
const UPDATED = "2026-07-01";

export default component$(() => {
  return (
    <main class="page" id="main-content">
      <nav class="nav" aria-label="Primary">
        <div class="wrap nav-inner">
          <a class="brand" href="/" aria-label="Nocturne home">
            <img src={ICON_SM} alt="Nocturne logo" width={28} height={28} />
            Nocturne
          </a>
          <div class="nav-links">
            <a href="/">Home</a>
            <a href="/support/">Support</a>
          </div>
        </div>
      </nav>

      <article class="legal-page">
        <div class="wrap legal-inner">
          <span class="pill">Legal</span>
          <h1>Privacy Policy</h1>
          <p class="legal-updated">Last updated: {UPDATED}</p>

          <p class="legal-lead">
            Nocturne is a browser DevTools extension for inspecting network
            requests, console output, cookies, and site storage for pages you are
            actively debugging.
          </p>

          <section class="legal-section">
            <h2>Data collection and use</h2>
            <p>
              Nocturne does not sell, rent, or share user data. Nocturne does
              not use analytics, advertising trackers, or remote telemetry.
              Nocturne does not transmit captured browsing data, request data,
              cookies, console logs, or site storage data to any external server.
            </p>
          </section>

          <section class="legal-section">
            <h2>Data handled locally</h2>
            <p>
              When the DevTools panel is open, Nocturne may display network
              request URLs, request headers, response headers, request bodies,
              response bodies, console messages, cookies, localStorage,
              sessionStorage, IndexedDB names, Cache Storage names, and service
              worker scopes for the inspected page.
            </p>
          </section>

          <section class="legal-section">
            <h2>Local storage</h2>
            <p>
              Nocturne stores extension preferences locally in the browser, such
              as filter settings, layout preferences, hidden console message
              rules, and limited request history. This data is stored using the
              browser extension local storage API and remains on your device.
            </p>
          </section>

          <section class="legal-section">
            <h2>Request history limits</h2>
            <p>
              Nocturne limits locally persisted request history to reduce stored
              data. It stores up to 500 requests, individual response bodies only
              up to a limited size, and removes bodies from stored history if the
              browser storage quota is reached.
            </p>
          </section>

          <section class="legal-section">
            <h2>Cookies and site data</h2>
            <p>
              Nocturne requests cookie and browsing data permissions so users can
              inspect and clear cookies and site storage for the page they are
              debugging. These permissions are used only inside the DevTools
              workflow. Nocturne does not upload cookies or site data anywhere.
            </p>
            <ul>
              <li>
                <code>storage</code>, remember UI preferences and limited request
                history locally.
              </li>
              <li>
                <code>cookies</code>, inspect and remove cookies for the page you
                are debugging.
              </li>
              <li>
                <code>browsingData</code>, clear site data when you choose that
                action in the Nocturne panel.
              </li>
              <li>
                <code>http://*/*</code> and <code>https://*/*</code>, allow the
                DevTools extension to work on pages you choose to inspect.
              </li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>Location data</h2>
            <p>
              Nocturne does not request or collect device location data. If a
              website being debugged sends location information inside its own
              network requests or storage, that information may be visible locally
              in DevTools like any other request or storage value, but Nocturne
              does not separately collect, infer, or transmit location data.
            </p>
          </section>

          <section class="legal-section">
            <h2>Data deletion</h2>
            <p>
              Users can clear captured request history from the extension UI.
              Users can also remove extension-local data by clearing the
              extension's storage or uninstalling the extension. Site cookies and
              storage can be deleted through Nocturne only when the user chooses
              those actions.
            </p>
          </section>

          <section class="legal-section">
            <h2>Security</h2>
            <p>
              Nocturne keeps processed data local to the browser. The extension
              is designed for developer debugging and only operates on pages the
              user inspects through browser DevTools. Nocturne runs no remote
              code and sends no captured data to external services.
            </p>
          </section>

          <section class="legal-section">
            <h2>Actions you initiate</h2>
            <ul>
              <li>
                <strong>Export (HAR/JSON)</strong> and <strong>Copy</strong>{" "}
                actions write to a file or your clipboard on your device. What
                you do with that output is your choice.
              </li>
              <li>
                <strong>Copy for AI</strong> masks sensitive header values (e.g.{" "}
                <code>Authorization</code>, <code>Cookie</code>) by default
                before copying.
              </li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>Children</h2>
            <p>
              Nocturne is a developer tool and is not directed at children under 13.
            </p>
          </section>

          <section class="legal-section">
            <h2>Changes</h2>
            <p>
              We may update this policy from time to time. The “Last updated”
              date at the top will reflect the latest revision.
            </p>
          </section>

          <section class="legal-section">
            <h2>Contact</h2>
            <p>
              Questions about this policy? Open an issue on{" "}
              <a href={SITE.githubIssues} target="_blank" rel="noreferrer">
                GitHub
              </a>{" "}
              or visit our{" "}
              <a href="/support/">support page</a>.
            </p>
          </section>
        </div>
      </article>

      <footer>
        <div class="wrap footer-inner">
          <span class="footer-brand">
            <img src={ICON_SM} alt="Nocturne logo" width={20} height={20} />
            Nocturne · Privacy
          </span>
          <a href="/">Back to home</a>
        </div>
      </footer>
    </main>
  );
});

export const head: DocumentHead = {
  title: `Privacy Policy | ${SITE.name}`,
  meta: [
    {
      name: "description",
      content:
        "Nocturne privacy policy. No data collection, no tracking. Local-only network and console debugging for developers.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE.privacyPolicy },
    { property: "og:title", content: `Privacy Policy | ${SITE.name}` },
    {
      property: "og:description",
      content:
        "Nocturne does not collect or transmit user data. Read how permissions and local storage work.",
    },
    { property: "og:image", content: SITE.ogImage.url },
  ],
  links: [{ rel: "canonical", href: canonicalUrl("/privacy/") }],
};
