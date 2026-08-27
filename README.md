# Pikachu-play
---
This project demonstrates how to blend **creative animation** with **modern frontend development**.  
Pikachu play** is a fun and interactive web application built with **React + Vite**.  
It combines playful Pokémon aesthetics with modern web technologies to create a dynamic showcase where Pikachu comes to life on your screen.
---
---
## 🛠️ Tools & Tech
- **Node.js** (runtime environment for development/build)
- **React** (UI framework)
- **Vite** (bundler & dev server)
- **Canvas API** (animations)
- **CSS3** (gradient backgrounds, glowing text)
- **JavaScript ES6+** (logic & interactivity)
---

## 🚀 Features
- **Interactive Pikachu**: Smoothly follows mouse movement.
- **Giggle Sound**: Click Pikachu to trigger giggle animation + sound.
- **Background Effects**: Lightning bolts, glyph rain, splash cursor.
- **Custom Background**: Replace with any image in `/public/frames/`.
- **Responsive Layout**: Works across screen sizes.

---

## 📂 Project Structure
---

- **public/** → Static files served directly by Vite.
  - **frames/** → Pikachu assets and sound.
    - `frames.json` → Defines sprite sheet frame ranges (idle, giggle, blink).
    - `giggle.mp3` → Pikachu giggle sound effect.
    - `pikachu-char.webp` → Main sprite sheet for Pikachu.
    - `pikachu-blink.png` → Blink frame image.
    - `pikachu-giggle.png` → Giggle frame image.
    - `pikachu-open.png` → Open mouth frame image.
    - `pikachu-grass.png` → Background image (grass scene).
  - `favicon.svg` → Browser tab icon.
  - `icons.svg` → Vector icons used in UI.

- **src/** → React application source code.
  - **assets/** → Miscellaneous images/logos.
    - `hero.png` → Placeholder hero image.
    - `react.svg` → React logo.
    - `vite.svg` → Vite logo.
  - **components/** → Core interactive components.
    - `Pikachu.jsx` → Pikachu animation logic (mouse follow, giggle sound).
    - `GlyphRain.jsx` → Matrix‑style falling glyphs effect.
    - `Lightning.jsx` → Lightning bolt background effect.
    - `SplashCursor.jsx` → Cursor splash effect.
  - `App.css` → Styles for layout, background, title, instructions.
  - `App.jsx` → Main app layout; imports components, title, instructions.
  - `index.css` → Global styles (fonts, resets).
  - `main.jsx` → React entry point; mounts `<App />` into `index.html`.

- **index.html** → Entry point for the app; Vite injects React here.
- **package.json** → Lists dependencies (React, Vite, etc.) and npm scripts.
- **vite.config.js** → Vite configuration (build settings, base path).
- **eslint.config.js** → ESLint rules for code quality.
- **.gitignore** → Files/folders Git should ignore (e.g., `node_modules`).
- **package-lock.json** → Exact dependency versions (auto‑generated).
---
---
<img width="2578" height="1444" alt="Screenshot 2026-08-26 142202" src="https://github.com/user-attachments/assets/cc744e0e-607e-49ad-a362-97a873b7c77c" />
---
---
---
<img width="2038" height="1240" alt="Screenshot 2026-08-26 130248" src="https://github.com/user-attachments/assets/63b767b2-1fba-4661-8098-6d8c9f0df1f9" />
---
---

### ✨ What makes it special
- Pikachu **follows your mouse movements** smoothly across the canvas.
- Clicking Pikachu triggers a **giggle animation and sound effect**.
- Immersive **background effects** including lightning bolts, glyph rain, and splash cursor interactions.
- A glowing title and instruction text layered above the animations for a vibrant look.
- Fully responsive design that adapts to different screen sizes.
- Easy customization — swap out background images or sprite assets in the `/public/frames/` folder.
