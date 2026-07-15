# Nur Banu Kartal — Academic Website

A ready-to-publish, no-build academic website for GitHub Pages.

## Publish on GitHub Pages

1. Create a new public GitHub repository named `YOUR-USERNAME.github.io`.
2. Upload **the contents of this folder** to the repository root.
3. Commit the files to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.
7. The site will appear at `https://YOUR-USERNAME.github.io/` after a few minutes.

The website uses plain HTML, CSS, and JavaScript. There is no build process and no dependency installation.

## Main files

- `index.html` — homepage
- `about.html` — biography, fields, education
- `research.html` — research themes and papers
- `teaching.html` — teaching experience
- `cv.html` — full web CV; visitors can print or save it as PDF
- `contact.html` — public contact details
- `assets/css/style.css` — all visual design
- `assets/js/site.js` — mobile menu and automatic copyright year

## Editing the content

Open the relevant `.html` file in a text editor and replace the text between HTML tags. Keep a backup before large edits.

Important publication rule already applied:

- Journal names are displayed for published, forthcoming, and R&R papers.
- Journal names are not displayed for papers under review.

## Privacy

The public website includes the email address but not the phone number. This is intentional. The original CV contains a phone number and should not be uploaded publicly without review.

## Fonts and design

- Headings/name: Shippori Mincho
- Navigation/body: Pretendard
- Background: warm off-white
- Layout: quiet editorial minimalism with fine rules and controlled asymmetry

The font files are loaded from public CDNs and are not included in this repository.

## Optional additions

Add verified links only when available:

- Google Scholar
- ORCID
- RePEc / IDEAS
- LinkedIn
- Working-paper PDFs
- DOI links
- Custom domain

## Test locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
