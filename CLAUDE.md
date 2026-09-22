# Elizabeth Group Home Services — Website

This folder is the website for **Elizabeth Group Home Services LLC**, a Florida group home providing care for people with intellectual and developmental disabilities.

## Repo
- GitHub: `git@github.com:reinmiranda25-ux/Elizabeth.git` (branch `main`), auth via SSH key `~/.ssh/id_ed25519`
- Collaborator commits also come from `nickeles7`. Run `git pull --ff-only` at the start of a session.

## Stack
- Create React App (`react-scripts` 5), React 19, `react-router-dom` 7
- `npm start` → dev server at http://localhost:3000; `npm run build` → `build/`
- Pages in `src/pages/` (Home, About, Services, Homes, Admissions, Contact, Privacy, Terms, ResidentPrivacyRights)
- Components in `src/components/{common,home,homes,layout}`; shared styles in `src/styles/`
- Images/logos in `public/`

## Reference
- `PROJECT_VISION.md` — design goals and phased plan (warm, accessible/WCAG, mobile-first)
- `data-for-fillin.txt` — business contact info and approved services

## Hosting
- Deployed on **Vercel**: https://elizabeth-site-one.vercel.app
- Pushes to `main` trigger a Production deploy, so pushing to `main` updates the live site
