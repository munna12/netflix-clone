# Netflix Clone (Landing Page)

A static clone of the Netflix marketing landing page, built with HTML, CSS and vanilla JavaScript, using Bootstrap 5 for the accordion/dropdown components.

## What was fixed from the original

- Replaced hundreds of hard-coded pixel `margin-left` / `margin-top` / `position: absolute` values with **flexbox and grid layouts**, so the page no longer breaks on different screen sizes.
- Split the single HTML file into **`index.html`, `style.css`, and `script.js`**.
- Made the page **responsive** (mobile, tablet, desktop) with media queries.
- Added **working email validation** on both "Get Started" forms (JavaScript).
- Filled in real, working **FAQ accordion content** (was placeholder Bootstrap boilerplate text before).
- Fixed duplicate `id` attributes (every accordion item shared the same id, which is invalid HTML and broke the accordion).
- Cleaned up a stray unmatched `</button>` tag.
- Used `object-fit: cover` for the hero background image instead of a fixed height, so it scales correctly.

## Project structure

```
netflix-clone/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

Just open `index.html` in a browser, or serve it with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

See the deployment guide provided alongside this project.

## Disclaimer

This is a fan-made clone built for learning/demo purposes only. Netflix and the Netflix logo are trademarks of Netflix, Inc. This project is not affiliated with or endorsed by Netflix.
