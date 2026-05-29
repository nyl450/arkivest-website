# Arkivest Website - Project Guidelines

> Website agency Arkivest sendiri. Showcase + sales channel untuk service web/app build untuk UKM Indonesia.

## Brief

| Aspek | Detail |
|---|---|
| Klien | Internal Arkivest |
| Brief | Website agency yang jualan service build website + app untuk UKM Indonesia. Showcase Wearscrubs sebagai bukti karya. Selling point: Security, SEO, Logic. |
| Sukses kalau | 10 inquiry kualified/bulan dalam 3 bulan; minimal 2 konversi ke project klien |
| Audience utama | Owner UKM Indonesia (Rp5-25jt budget/project), umur 28-45, sudah punya produk, butuh online presence kualitas. |

## Scope Phase 1 (MVP, target 2 minggu)

- [ ] **Home** (ID + EN) - hero + 3 pilar (Security/SEO/Logic) + showcase teaser + CTA
- [ ] **Work** index + **Wearscrubs case study** detail
- [ ] **Services** - 3 paket (Starter Rp5jt / Growth Rp15jt / Pro Rp25jt+) sinkron dgn `PAKET-HARGA.md`
- [ ] **Contact** - WA prefilled + form (Web3Forms) + book-a-call (Cal.com)

**Out of scope Phase 1**:
- Blog/Insights
- Individual service detail pages
- Vendor onboarding flow
- Multi-language >ID/EN
- Process page (about HOW we build)

## Phase 2 (4 minggu setelah Phase 1 live)

- [ ] About / Cerita Kami
- [ ] Process / Cara Kerja
- [ ] Blog / Insights (case study + tutorial SEO/security/perf)
- [ ] Individual case study pages baru (kalau ada project klien selesai)

## Stack (sesuai default `_system/ENGINEERING_RULES.md`)

| Layer | Pakai |
|---|---|
| Framework | Astro 5.x |
| Styling | Tailwind CSS v4 |
| Animation | GSAP 3 + ScrollTrigger (lazy via `client:visible`) untuk Home hero + Showcase. Sisanya CSS only. |
| Content | Markdown + Astro Content Collections (case studies) |
| Form | Web3Forms (gratis, no backend) |
| Booking | Cal.com embed (gratis tier) |
| Hosting | **Vercel** (free tier) |
| Domain | **arkivest.id** (final, James konfirmasi 28 Mei 2026) |
| Analytics | Plausible ($9/bln, privacy-first) atau Vercel Analytics (gratis) |

## Brand (sesuai `_system/BRAND_GUIDELINES.md`)

Pakai brand Arkivest sendiri. Color accent: **Cobalt `#1E4FFF`** (final). Logo: `public/brand/logo-black.svg` (dark bg) + `logo-light.svg` (light bg).

## Animation budget (DISIPLIN)

| Halaman | Animation level |
|---|---|
| Home | GSAP hero + 2-3 ScrollTrigger di showcase preview |
| Work index | CSS-only (fade IntersectionObserver) |
| Wearscrubs case study | GSAP scrub timeline untuk hero (1 timeline besar) + CSS untuk section lain |
| Services | CSS-only |
| Contact | Zero JS animation |

**Aturan**: GSAP HANYA di Home + Wearscrubs case study. Sisanya banned. Bundle target: <80KB gz per page.

## Performance budget (NON-NEGOTIABLE)

| Metrik | Target |
|---|---|
| LCP | <2.5s di mobile 4G |
| CLS | <0.1 |
| TBT | <300ms |
| JS shipped | <80KB gz total per page |

Kalau GSAP showcase breach LCP > 2.5s, **revert ke CSS animation**.

## SEO setup

- hreflang ID `<-->` EN per halaman + `x-default` ke ID
- Structured data:
  - `Organization` schema di root (Arkivest, domain `arkivest.id`)
  - `Service` schema di Services
  - `CreativeWork` + `Article` di case study Wearscrubs
- Sitemap auto via `@astrojs/sitemap`
- OG image 1200×630 per halaman (TBD generate)
- Title pattern: `[Judul] - Arkivest` (ID) / `[Title] - Arkivest` (EN)

## Security selling points (substansi konkret untuk dijual)

Di halaman Services / Wearscrubs case study, daftar **praktik konkret** yang dipakai di Wearscrubs (bukti):

- Row-Level Security (RLS) Supabase di 11 tabel publik
- JWT + bcrypt + login rate limiter (5 attempts/15min)
- Bukti foto pindah ke bucket privat dgn signed URL 1h expiry
- XSS escape di setiap render data customer + CSP headers
- CORS whitelist domain spesifik (bukan `*`)
- Input validation server-side (positive integer, sanitize, MIME check)
- Anti-tamper harga (server-side authoritative, fix `is_bonus` di Wearscrubs)
- OWASP Top 10 awareness per project

## Repo & hosting

- Repo: **`nyl450/arkivest-website`** (sudah dibuat, masih kosong belum ada commit per 29 Mei 2026)
- Hosting: Vercel (TBD connect)
- Domain: **arkivest.id** (final)
- Branch utama: `main`
- Auto-deploy dari `main` push ke production

## Env variables

```bash
# .env (gitignored)
WEB3FORMS_ACCESS_KEY=
PLAUSIBLE_DOMAIN=arkivest.id
# Tidak ada DB di Phase 1
```

## Special notes

- **Wearscrubs case study harus diizinkan klien dulu** (James + istri = owner). Diasumsikan OK karena owner sendiri.
- **Pricing di Services** sinkron dgn `C:\Users\James\Desktop\codex AI\Penawaran Web Ecommerce\PAKET-HARGA.md` (sumber kebenaran utama paket harga Arkivest)
- **Paket Premium Rp65jt** (membership, loyalty, dst) yang di-park dari proposal inienakbanget.com bisa masuk Services Phase 2 sebagai "Custom Enterprise"
- **Bilingual ID-EN** sejak Phase 1 - audience domestik utama tapi proposal inienakbanget.com sudah EN dukungan
- **Wearscrubs sebagai showcase** = differensiator utama. Storytelling case study harus tajam: problem (spreadsheet manual istri admin) → solusi (dashboard intuitif, RLS, PO/custom size workflow, foto opsional hemat storage) → hasil (LCP, security pass, live di wearscrubs.id).

## Lokasi penting

| Apa | Path |
|---|---|
| Code repo lokal | `D:\Project Ark\arkivest-website` |
| GitHub | `nyl450/arkivest-website` (kosong, siap first push) |
| Hosting | Vercel TBD (connect setelah first push) |
| Domain | `arkivest.id` (final, belum di-DNS-point ke Vercel) |
| Memory ARK | `~/.claude/projects/D--Project-Ark-arkivest-website/memory/` |
| Sumber paket harga | `C:\Users\James\Desktop\codex AI\Penawaran Web Ecommerce\PAKET-HARGA.md` |
| Wearscrubs (referensi case study) | `D:\ws\wearscrubs-backend` + `https://wearscrubs.id` |
| Logo | `public/brand/logo-black.svg` + `logo-light.svg` |

## Cara buka sesi ARK di project ini

```
Ark, sesi untuk Arkivest website - baca:
1. C:\Users\James\.claude\MASTER_PROGRESS.md
2. D:\Project Ark\_system\ENGINEERING_RULES.md
3. D:\Project Ark\_system\BRAND_GUIDELINES.md
4. D:\Project Ark\arkivest-website\PROJECT_GUIDELINES.md
5. ~/.claude/projects/D--Project-Ark-arkivest-website/memory/MEMORY.md

Konfirmasi posisi & lanjut dari mana.
```
