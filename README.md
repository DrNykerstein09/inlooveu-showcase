# Inlooveu — public project case study

Static English/Spanish case study for Pierre Burciaga. Built with semantic HTML,
CSS and browser JavaScript. No build step, packages, account system, analytics,
external fonts or backend are needed for this site.

## Published case study and local preview

Public case study: [drnykerstein09.github.io/inlooveu-showcase](https://drnykerstein09.github.io/inlooveu-showcase/).

Serve this directory with a static HTTP server, for example:

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory .
```

Use a separate **public presentation repository** for the site. Its contents can
be served from the repository root by GitHub Pages. `.nojekyll` keeps delivery
static. All local asset paths are relative, so the page supports a project URL
such as `https://OWNER.github.io/REPOSITORY/` without a build configuration.

`site.config.js` points to this public presentation repository. The application
repositories remain private. GitHub Pages serves the root of the
`codex/inlooveu-showcase` branch; this static tree requires no application server.

## Media contract

The published media lives under `assets/`:

| File | Purpose |
| --- | --- |
| `inlooveu-demo.mp4` | 75-second walkthrough; H.264 MP4 recommended |
| `inlooveu-demo.en.vtt` | English WebVTT captions for the Spanish narration |
| `inlooveu-demo.es.vtt` | Spanish WebVTT captions for that narration |
| `01-producto.png` | Prepared profile/product screenshot; also the video poster |
| `02-descubrimiento.png` | Discovery/like interaction |
| `03-conversacion.png` | Prepared conversation between controlled accounts |
| `04-ingenieria.png` | Engineering view / save → emit → recover sequence |

The filenames can also be changed in `site.config.js`. Screenshots appear only
after their files load. The video section and watch button appear only when the
MP4 is available through the static server. Missing media has no visible
placeholder. The video uses native controls, no autoplay, Spanish narration,
and English/Spanish caption tracks. Changing the site language selects the
corresponding captions; native video controls can override the selection.
Check that captions are present and synchronized before publication.

Only approved demonstration accounts and prepared messages belong in these
assets. Do not include private conversations, third-party profile photos, email
addresses, tokens, credentials, database exports, application runtime files or
raw private application source. Do not copy the historical backup files into
this repository.

## Language and accessibility

English is the default. The language button switches the content, image
descriptions, navigation label and document language between English and
Spanish. Only the language preference is kept in browser local storage. Native
links, the disclosure control, video controls, a skip link, visible keyboard
focus and reduced-motion preferences remain available. Video content/captions
use the approved Spanish narration with English or Spanish captions.

## Claims and source scope

- **1,800 registered accounts:** historical MongoDB count recorded by the
  founder on another computer. This is an owner-reported measured count; it was
  not independently reproduced in the 2026 recovery. It is not MAU, DAU,
  retention or proof of unique people.
- **681 account records and 2,129 distinct nonempty stored messages:** a
  separately preserved historical export. It is a different cut from the
  1,800-account count. The page keeps this evidence in an expandable note,
  rather than presenting the two figures as one cohort.
- Original implementation: React/TypeScript, Express, MongoDB, Socket.IO,
  email-confirmed accounts, browser image preparation and persistent messages.
  The historical client saves a message through the API before emitting the
  saved record. No exactly-once or acknowledged-delivery guarantee is claimed.
- Recovery work in 2026: existing accounts preserved, Docker/Caddy/HTTPS on
  existing Hetzner infrastructure, additional access controls, Cloudinary for
  new photos, and SMTP with mandatory STARTTLS. Old S3 photos remain
  unavailable; their references were preserved.
- The public live application is linked separately and requires an account for
  its private features. This presentation site is accessible without a login.

The relevant source evidence is the founder's confirmed historical count, the
preserved original frontend/backend implementation, an aggregate audit of
account/chat/message exports, and the 2026 recovery verification. Raw snapshots,
private paths and credentials are deliberately absent from this public tree.

## Checks before publishing an update

1. Keep the video, captions and four screenshots consistent with the captured version.
2. Set the public presentation repository URL.
3. Preview from an HTTP server, test the language toggle and keyboard access,
   check both mobile and desktop layouts, and watch the captioned video.
4. Confirm that the app link and professional contact links remain correct.
5. Publish this static tree through the separately approved GitHub Pages flow.
