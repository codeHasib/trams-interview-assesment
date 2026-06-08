# 🚀 Elementum — Modern Utility Landing Page

A **pixel-perfect, production-ready landing page system** built using **React**, **Tailwind CSS**, and **Framer Motion**.
This project transforms static Figma designs into **fluid, interactive, and scalable UI components**, focusing on precision, responsiveness, and performance.

---

## 🎨 Design System & Visual Language

### Typography Identity

Elementum uses a **geometric sans-serif type system** to create a clean, modern aesthetic.

- **Primary Font:** Gerbil (`font-gerbil`)
- **Style Approach:** Tight letter-spacing (`tracking-tight`) for sharp, editorial alignment
- **Usage:** Applied consistently across headings and key UI sections

---

### Branding Color System

| Purpose         | Color           | Hex       |
| --------------- | --------------- | --------- |
| Accent / Badge  | Mint Green      | `#E2F0D9` |
| Highlight       | Soft Pink       | `#FFD2E6` |
| Accent Vector   | Salmon          | `#FF6B6B` |
| Geometric Block | Electric Purple | `#8A4FFF` |

---

## ⚙️ Responsive Architecture (Mobile-First)

This project solves a common problem in modern UI design:
**complex scattered layouts breaking on smaller screens.**

### Strategy

#### 📱 Mobile & Tablet (< 768px)

- Layout shifts to **structured grid/flex systems**
- Prevents:
  - Content overlap
  - Horizontal scrolling
  - Layout breaking

- Uses `overflow-x-hidden` for stability

#### 💻 Desktop (≥ 768px)

- Activates **absolute positioning layers**
- Restores original Figma-based expressive layouts
- Enables creative placement like:
  - `left-[30%]`
  - `bottom-[15%]`

---

## 🧩 Component Architecture

### 1. Navbar (`Navbar.jsx`)

- **Desktop:** Clean horizontal navigation
- **Mobile:** Animated hamburger menu → transforms into close (`X`)
- Smooth dropdown navigation panel using motion animations

---

### 2. Hero Section (`Hero.jsx`)

- Large typography with:
  - Custom SVG underline accents
  - Inline badge elements (`whitespace-nowrap`)

- **Responsive Behavior:**
  - Mobile → stacked layout
  - Desktop → scattered avatar composition

---

### 3. Split Features (`SplitFeatures.jsx`)

- Alternating **text + image grid layout**
- Uses Tailwind ordering:

  ```js
  order-2 lg:order-1
  ```

- Ensures consistent mobile flow:
  **Text → Image → Text → Image**

---

### 4. Services List (`ServicesList.jsx`)

- Built on a **12-column asymmetric grid**
- Interactive features:
  - Hover text transitions
  - Expanding arrow indicators
  - Collage-style visual elements

---

### 5. Testimonial Section (`TestimonialSection.jsx`)

- Central highlighted card with:
  - Client metrics
  - Layered avatar clusters

- Uses asymmetrical visual balance for depth

---

### 6. Footer (`Footer.jsx`)

- CTA-driven newsletter section
- Responsive **4-column link grid**
- Clean copyright layer

---

## 🛠️ Setup & Installation

### 1. Install Dependencies

```bash
npm install
npm install framer-motion
```

---

### 2. Run Development Server

```bash
npm run dev
```

---

## 🔤 Local Font Setup

### Step 1: Add Font Files

```
public/
└── fonts/
    ├── Gerbil-Medium.ttf
    └── Gerbil-Bold.ttf
```

---

### Step 2: Register Fonts (CSS)

```css
@font-face {
  font-family: "Gerbil";
  src: url("/fonts/Gerbil-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gerbil";
  src: url("/fonts/Gerbil-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

---

### Step 3: Tailwind Configuration

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gerbil: ["Gerbil", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

## ✨ Key Highlights

- ✅ Pixel-perfect Figma implementation
- ✅ Mobile-first responsive system
- ✅ Advanced layout handling (grid + absolute hybrid)
- ✅ Smooth animations with Framer Motion
- ✅ Clean, scalable component structure

---

## 📌 Summary

Elementum is not just a landing page — it’s a **modern UI system** demonstrating:

- Strong frontend architecture
- Real-world responsive problem solving
- High-end visual design execution

---

## 📄 License

This project is for **educational and portfolio purposes**.
