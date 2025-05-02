# 🛍️ ModaLane E-Commerce Website

Welcome to **ModaLane**, a clean, modern, and fully responsive e-commerce website built with **React**, **TypeScript**, and **Tailwind CSS**. This project showcases a seamless shopping experience with stylish UI components and optimized performance using **Vite**.

## 🚀 Overview

ModaLane is a demo fashion e-commerce website that highlights core frontend development skills, visual presentation, and performance optimization. It uses **component-based architecture**, **responsive layouts**, and **smooth user interaction** — ideal for fashion startups or as a portfolio piece.

## 🎯 Key Features

- 🧭 **Responsive Navigation** – Fully responsive header with toggle menu for mobile  
- 🦸‍♀️ **Hero Section** – Large full-width hero with brand messaging and CTA  
- 🌟 **Testimonials** – Realistic customer reviews with ratings and avatars  
- 💼 **Benefits Section** – Highlights delivery, quality, and service promises  
- 👗 **About Section** – Brand story and value proposition  
- 🛒 **Call-to-Action** – Encourage users to start shopping with dynamic CTA  
- 🔗 **Footer** – Includes navigation links and social media integration  
- 🎨 **Lucide Icons** – Clean, lightweight icon set across components

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS  
- **Icons**: lucide-react  
- **Routing**: react-router-dom *(optional)*  
- **Animations**: Optional GSAP or Framer Motion  
- **Tooling**: ESLint, Prettier, PostCSS, Vite Dev Server

## 📦 Installation

To run the project locally:

```bash
git clone https://github.com/your-username/modalane-ecommerce.git
cd modalane-ecommerce
npm install
npm run dev
```

👉 Visit http://localhost:5173 to view the app.

## 🎨 Tailwind CSS Setup (Optional if not preconfigured)

Install Tailwind and dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind to src/styles.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📁 Project Structure

```
modalane-ecommerce/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Benefits.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

## 🚢 Deployment (GitHub Pages)

Install deployment package:

```bash
npm install gh-pages --save-dev
```

Update package.json:

```json
"homepage": "https://your-username.github.io/modalane-ecommerce",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy to GitHub Pages:

```bash
npm run build
npm run deploy
```

⚠️ Tip: If using react-router-dom, replace BrowserRouter with HashRouter to avoid 404 errors on GitHub Pages.

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. Fork this repository
2. Create your feature branch
```bash
git checkout -b feature/your-feature
```
3. Commit your changes
```bash
git commit -m "Add your feature"
```
4. Push to your branch
```bash
git push origin feature/your-feature
```
5. Open a pull request

Please follow consistent code style and leave clear comments.

## 👨‍💻 About Me

I'm Dasun Methmal, a passionate web developer and software engineering student at Cardiff Metropolitan University. I specialize in building modern, responsive web apps with:

- ⚛️ React.js
- 🐘 Laravel
- 🐳 Docker
- 🌐 RESTful APIs

🔗 Connect on GitHub

## 📄 License

This project is licensed under the MIT License — you're free to use, modify, and share.

Made with ❤️ by Dasun Methmal
