# diegoguzman.net

Personal academic site. Plain static files — no build step. GitHub Pages
serves it as-is; edit a file, commit, push, and it's live.

## Structure

```
.
├── index.html              # all page content, top to bottom
├── CNAME                    # custom domain (diegoguzman.net) — don't delete
├── README.md
└── assets/
    ├── css/
    │   ├── themes.css       # the three soft colour palettes
    │   ├── base.css         # fonts, type sizes, resets
    │   └── layout.css       # layout + components
    ├── js/
    │   └── main.js          # theme switcher + name easter egg
    ├── img/
    │   └── profile.jpg      # ← add your photo here (184×184 or larger, square)
    └── cv/
        └── Diego_Guzman_CV.pdf   # ← replace with your latest CV
```

## Common edits

- **Add a publication:** in `index.html`, find the Publications section and copy
  one `<li class="entry"> … </li>` block. Same pattern works for Awards.
- **Update your CV:** drop the new PDF in `assets/cv/`. If you rename it, update
  the two `assets/cv/…pdf` links in `index.html` (the nav and the sidebar).
- **Add your photo:** save it as `assets/img/profile.jpg`. Until you do, a
  placeholder avatar shows automatically.
- **Change the default colour:** edit `data-theme="sand"` on the `<html>` tag in
  `index.html` (options: `sand`, `sage`, `mist`). Visitors can switch live with
  the dots in the header.
- **Retune a colour:** edit the hex values in `assets/css/themes.css`.
- **Fix the LinkedIn / GitHub links:** they're `#` placeholders in the sidebar of
  `index.html` — paste your real URLs.

## Preview locally (optional)

From this folder, run any static server, e.g. `python3 -m http.server`, then
open http://localhost:8000. Opening `index.html` directly also works.
