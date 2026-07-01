# Abdur Rahman — Portfolio

A React + Tailwind CSS portfolio built with Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The output goes to the `dist/` folder — deploy that to Netlify, Vercel, GitHub Pages, etc.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx          — hero section + typewriter text
    ParticleField.jsx — animated particle background with a cursor "clear zone"
    TiltCard.jsx       — subtle tilt-on-hover wrapper (used on project cards)
    About.jsx
    Skills.jsx
    Education.jsx
    Work.jsx           — project cards
    Contact.jsx
    Footer.jsx
    ScrollTop.jsx       — scroll-to-top button with a "drip" entrance animation
  hooks/
    useTypewriter.js
  App.jsx
  main.jsx
  index.css
```

## What to customize

- Name, bio, email, phone, location — in `Hero.jsx`, `About.jsx`, `Contact.jsx`, `Footer.jsx`
- Skills list — `SKILLS` array in `Skills.jsx`
- Education entries — `EDUCATION` array in `Education.jsx`
- Projects — `PROJECTS` array in `Work.jsx` (swap the gradient placeholders for real screenshots by adding an `<img>` inside the card)
- Social links — `href="#"` props on the `<Social />` components in `Hero.jsx` and `Footer.jsx`
- Colors/fonts — `tailwind.config.js`
