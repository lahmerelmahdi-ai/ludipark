Ludiparc Tiny Site

Static site intended for GitHub Pages.

How to publish on GitHub Pages

- Push this folder as the root of a repository on GitHub (for example `username/ludiparc_tiny`).
- In the repo Settings → Pages:
  - Source: Deploy from a branch
  - Branch: `main` (or the branch you use) and folder `/ (root)`
  - Save. GitHub Pages will build and give you a URL like `https://username.github.io/ludiparc_tiny/`.

Notes

- All links and assets use relative paths (e.g., `css/style.css`, `about.html`), so they work both locally and under a subpath on GitHub Pages.
- A `.nojekyll` file is included to prevent Jekyll processing and ensure static asset delivery.
- The homepage is `index.html` at the repository root, and a `404.html` page is present for broken links.

Troubleshooting

- If CSS or images don’t load on the published site:
  - Confirm the Pages URL matches the repository name (subpath) and that links are not starting with a leading slash `/`.
  - Hard refresh the browser (Ctrl+F5) or clear cache.
  - Ensure file and folder names match case exactly (Pages hosting is case‑sensitive).
- If the page shows odd characters, make sure the files are saved as UTF‑8. The `<meta charset="UTF-8">` tag is already included.

