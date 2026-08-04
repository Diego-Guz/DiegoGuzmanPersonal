# diegoguzman.net

Personal academic site. `index.html` is just a table of contents — it pulls
each section in from its own file. GitHub Pages stitches them together for you
(it runs Jekyll automatically), so there's no build step on your end: edit a
file, commit, push, and it's live.

## Structure

```
.
├── index.html                     # the "table of contents" — one line per section
├── _config.yml                    # minimal Jekyll config (rarely touched)
├── CNAME                          # custom domain (diegoguzman.net) — don't delete
├── README.md
├── _includes/                     # every piece of the page lives here
│   ├── head.html                  # <head>: title, fonts, stylesheet links
│   ├── header.html                # top nav + theme switcher
│   ├── sidebar.html               # photo, name, contact, links, interests
│   ├── footer.html
│   └── sections/
│       ├── about.html
│       ├── research.html
│       ├── publications.html
│       ├── awards.html
│       ├── teaching.html
│       └── service.html
└── assets/
    ├── css/  themes.css · base.css · layout.css
    ├── js/   main.js
    ├── img/  profile.jpg          # ← add your photo here (square)
    └── cv/   Diego_Guzman_CV.pdf  # ← replace with your latest CV
```

## How the pieces connect

`index.html` contains lines like:

```liquid
{% include sections/about.html %}
```

Each of those loads one file from `_includes/`. To change what's on the page,
you open the matching file — you almost never touch `index.html` itself.

## Common edits

- **Edit a section** (e.g. About): open `_includes/sections/about.html`.
- **Add a section:** create `_includes/sections/newthing.html`, then add
  `{% include sections/newthing.html %}` to `index.html` where you want it.
- **Add a publication or award:** in that section's file, copy one
  `<li class="entry"> … </li>` block.
- **Update your CV:** drop the new PDF in `assets/cv/`. If you rename it, update
  the `assets/cv/…pdf` links in `_includes/header.html` and `_includes/sidebar.html`.
- **Add your photo:** save it as `assets/img/profile.jpg` (a placeholder shows until then).
- **Change the default colour:** edit `data-theme="sand"` on the `<html>` tag in
  `index.html` (options: `sand`, `sage`, `mist`). Visitors can also switch live.
- **Fix LinkedIn / GitHub links:** they're `#` placeholders in `_includes/sidebar.html`.

## Preview locally (optional)

You don't need to — pushing to GitHub shows you the real thing. But if you want a
local preview with the includes assembled, you need Jekyll:

```
gem install bundler jekyll
jekyll serve
```

then open http://localhost:4000.
