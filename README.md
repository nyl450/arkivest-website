# Arkivest Website

Website agency Arkivest. Web studio Indonesia untuk UKM yang serius. Showcase: [Wearscrubs](https://wearscrubs.id).

> **Production:** [arkivest.id](https://arkivest.id) (TBD, belum live)

## Stack

- **Framework:** Astro 5 (static-first, island architecture)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`, no config file - tokens di `src/styles/global.css` via `@theme`)
- **Font:** Geist Sans + Geist Mono self-host via `@fontsource` (no Google Fonts CDN)
- **Animation:** CSS-only default. GSAP 3 reserved untuk Home hero + Wearscrubs case study (lazy island).
- **Form:** Web3Forms (Phase 1, no backend)
- **Hosting:** Vercel (TBD connect)
- **Domain:** `arkivest.id`
- **Repo:** `nyl450/arkivest-website`

## Dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

## Struktur

```
src/
├── components/         Header, Footer
├── layouts/            Base.astro (meta, hreflang, schema)
├── pages/              index.astro + en/index.astro + 404.astro
└── styles/             global.css (Tailwind v4 + brand tokens)
public/
├── brand/              logo-black.svg, logo-light.svg
└── robots.txt
```

## Bilingual ID / EN

- Default lang: ID (no prefix).
- EN di `/en/...`
- Edit halaman ID → wajib edit pasangan EN-nya, dan sebaliknya.

## Env

Lihat `.env.example`. Phase 1 hanya butuh:

- `WEB3FORMS_ACCESS_KEY` - daftar di [web3forms.com](https://web3forms.com)
- `PLAUSIBLE_DOMAIN` - default `arkivest.id`

## Referensi rules

| File | Isi |
|---|---|
| `D:\Project Ark\_system\ENGINEERING_RULES.md` | Stack default, security, perf, SEO baseline |
| `D:\Project Ark\_system\BRAND_GUIDELINES.md` | Color, typography, voice, anti-AI-tell checklist |
| `./PROJECT_GUIDELINES.md` | Scope Phase 1, animation budget, repo & hosting |

## Anti-AI-tell (cek sebelum publish)

- [ ] No em-dash `—` (pakai hyphen `-`)
- [ ] No Inter font (Geist only)
- [ ] No AI-purple gradient + pure `#000`
- [ ] No 3-column equal feature cards (asymmetric/bento)
- [ ] No fake-screenshot div
- [ ] No hand-rolled SVG icons (pakai Phosphor/Tabler kalau butuh)

Detail lengkap: `_system/BRAND_GUIDELINES.md` section "Anti-AI-tell checklist".

## Deploy

Phase 1 deploy ke Vercel:

1. Connect repo `nyl450/arkivest-website` di Vercel dashboard.
2. Set env var di Vercel (mirror `.env.example`).
3. Add custom domain `arkivest.id` + DNS point ke Vercel.
4. Auto-deploy dari `main` push.
