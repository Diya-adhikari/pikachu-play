# Pikachu-play⚡🐭

An interactive Pikachu showcase built with **React + Vite**.  

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
----

pikachu-lab/
├── public/
│   ├── frames/
│   │   ├── frames.json          # Defines sprite sheet frame ranges (idle, giggle, blink)
│   │   ├── giggle.mp3           # Pikachu giggle sound
│   │   ├── pikachu-char.webp    # Main sprite sheet for Pikachu
│   │   ├── pikachu-blink.png    # Blink frame
│   │   ├── pikachu-giggle.png   # Giggle frame
│   │   ├── pikachu-open.png     # Open mouth frame
│   │   └── pikachu-grass.png    # Background image
│   ├── favicon.svg              # Browser tab icon
│   └── icons.svg                # Vector icons
├── src/
│   ├── assets/
│   │   ├── hero.png             # Placeholder image
│   │   ├── react.svg            # React logo
│   │   └── vite.svg             # Vite logo
│   ├── components/
│   │   ├── Pikachu.jsx          # Pikachu animation logic (mouse follow, giggle sound)
│   │   ├── GlyphRain.jsx        # Matrix-style falling glyphs effect
│   │   ├── Lightning.jsx        # Lightning bolt background effect
│   │   └── SplashCursor.jsx     # Cursor splash effect
│   ├── App.css                  # Styles for layout, background, title, instructions
│   ├── App.jsx                  # Main app layout; imports components, title, instructions
│   ├── index.css                # Global styles (fonts, resets)
│   └── main.jsx                 # React entry point; mounts <App /> into index.html
├── index.html                   # Entry point for the app
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint rules
├── .gitignore                   # Files/folders Git should ignore
├── package-lock.json            # Exact dependency versions
└── README.md                    # Documentation

---
---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/pikachu-lab.git
   cd pikachu-lab
2. **Install dependencies**
   '''npm install
3.**Run development server**
   '''npm run dev
4.***npm run build***
   '''npm run build
---
## Usage
Move your mouse → Pikachu follows smoothly.
Click Pikachu → Giggle animation + sound.
Background effects run automatically.
Replace /public/frames/pikachu-grass.png with any image to change background.
