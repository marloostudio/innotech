# Site images

Static images for the InnoTech website. Files under `public/` are served at the root URL (e.g. `public/images/team/fred-daneshgaran.jpg` → `/images/team/fred-daneshgaran.jpg`).

## Folder structure

```
public/images/
├── README.md          (this file)
├── team/              ← Team member headshots (Our Team page)
├── hero/              (future: hero / banner images)
├── products/          (future: product shots, diagrams)
├── company/           (future: office, events, culture)
└── og/                (future: social / Open Graph images)
```

---

## Team photos — where to paste

**Put team member photos here:**

```
public/images/team/
```

### Naming convention

Use lowercase, first name + last name, hyphenated. Prefer **.jpg** or **.webp** for photos.

| Team member           | Filename to use                |
|-----------------------|--------------------------------|
| Fred Daneshgaran      | `fred-daneshgaran.jpg`         |
| Piergiorgio lanza     | `piergiorgio-lanza.jpg`        |
| Claudio DonGiovanni   | `claudio-dongiovanni.jpg`      |
| Nayer Shahri          | `nayer-shahri.jpg`             |
| Marina Mondin         | `marina-mondin.jpg`            |
| Lara Daneshgaran      | `lara-daneshgaran.jpg`         |
| Shiva Omidzadeh       | `shiva-omidzadeh.jpg`          |

You can use `.webp` instead of `.jpg` if you prefer (e.g. `fred-daneshgaran.webp`). The site will use whatever filename you place here.

### Image guidelines

- **Aspect ratio:** Prefer square or near-square (e.g. 1:1) so cards crop nicely.
- **Size:** At least 400×400 px recommended; the site will resize for display.
- **Content:** Head and shoulders / professional headshot works best.

After adding a file, the team page can reference it as `/images/team/fred-daneshgaran.jpg` (and similarly for the other names).
