# razinoushad.github.io

Personal academic website for **Dr Razi N** — epidemiologist (MBBS, MPH).

Multi-page static site (no build step): `Home · About · Research · Publications · CV`.
Plain HTML/CSS/JS, served free via GitHub Pages at <https://razinoushad.github.io>.

## Structure

```
index.html          Home (hero + selected work)
about.html          Bio + education
research.html       Research areas
publications.html   Publications
cv.html             Full CV
styles.css          Styling + light/dark themes
script.js           Theme toggle, mobile menu
photo.jpg           Profile photo (add this file — see below)
Razi_N_CV.pdf       CV download (add this file — see below)
```

## Editing

Edit the `.html` files for content; edit `styles.css` (the `:root { … }` tokens at the
top) for colors and fonts. Commit and push — GitHub Pages redeploys automatically.

## Two files to add

- **`photo.jpg`** — your profile photo (square works best). Appears in the homepage hero,
  shown in grayscale. Until added, a placeholder with initials is shown.
- **`Razi_N_CV.pdf`** — the PDF the "Download PDF" button on the CV page links to.
  Export it from your CV document and save it here with this exact name.
