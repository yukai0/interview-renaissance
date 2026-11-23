# Patchwork

Patchwork is a provisional name for an early concept: technical interviews based on realistic engineering work, where candidates can use AI and their preferred tools and teams review the result, verification, and decisions.

This static landing page includes an illustrative, local-only assessment walkthrough. It does not run code, collect submissions, or provide an assessment platform. There is no backend, build step, analytics, or account system.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. Stop the server with Ctrl+C.

## Publish with GitHub Pages

When you are ready to publish, put these files at the root of a GitHub repository and push them to a branch. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the branch and **/(root)** folder, then select **Save**. GitHub will build and publish the site; the Pages settings will show its URL. See GitHub's [publishing source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Publishing makes the site publicly accessible.

## Make it yours

- Replace the provisional name in `index.html` (including the title and description) and this README. The four-square mark is styled in `styles.css`; update `favicon.svg` to match.
- If you have a real contact or pilot destination, replace the closing section's `href="#example"` in `index.html` with that URL and update the button text. No contact destination is currently configured.
- Edit the illustrative task, handoff, and rubric in `index.html`. Colors and layout live in `styles.css`; the accessible tab behavior lives in `script.js`.
