# Developer Portfolio

A modern, dark-themed portfolio website for a **React JS** & **React Native** developer.
Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Showcases web and mobile
projects with screenshots inside browser/phone mockups, a skills section, and a working
contact form.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** for styling (dark theme + accent gradient)
- **Framer Motion** for subtle animations
- **react-icons** for tech/social icons

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Make It Yours

Almost everything you need to edit lives in **`lib/data.ts`**:

1. **Personal info** — `siteConfig` (name, role, tagline, about, email).
2. **Social links** — `socials` (GitHub, LinkedIn, email).
3. **Skills** — add/remove items in the `skills` array.
4. **Projects** — edit the `projects` array. Each project has:
   - `type`: `"web"` or `"mobile"` (controls browser vs phone mockup)
   - `title`, `description`, `tech`, `images`, optional `liveUrl` / `githubUrl`

### Adding project screenshots

1. Put your images in `public/projects/<your-project>/`.
2. Reference them in `lib/data.ts`, e.g. `images: ["/projects/my-app/home.png"]`.
3. Tip: compress images (e.g. [TinyPNG](https://tinypng.com)) so the site stays fast.
   - Web screenshots look best in landscape (16:9).
   - Mobile screenshots look best in portrait (9:19).

### Setting up the contact form (free)

The form uses [Formspree](https://formspree.io):

1. Create a free account and a new form.
2. Copy your form endpoint (looks like `https://formspree.io/f/abcd1234`).
3. Paste it into `formspreeEndpoint` in `lib/data.ts`.

Until you do this, the form UI works but submissions won't be delivered.

## Deploy for Free (Vercel)

1. Push this folder to a **GitHub** repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, import your repo, and click **Deploy**.
4. You get a free `your-name.vercel.app` URL. Every `git push` auto-deploys.

You can also add a custom domain for free in the Vercel project settings (you only
pay for the domain itself if you buy one).

### Alternative free hosts

- **Netlify** — same flow, connect GitHub and deploy.
- **Cloudflare Pages** — fast global CDN.
