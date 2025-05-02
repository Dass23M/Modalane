# 👗 ModaLane E-Commerce Website

**ModaLane** is a sleek, modern, and fully responsive e-commerce website built with React. Tailored for fashion and lifestyle products, the site delivers a rich user experience through elegant components and fast performance.

![ModaLane Preview](public/preview.png)

---

## 📋 Table of Contents

- [✨ Features](#-features)  
- [🛠️ Technologies Used](#️-technologies-used)  
- [📦 Installation](#-installation)  
- [🚀 Usage](#-usage)  
- [📁 Project Structure](#-project-structure)  
- [🚢 Deployment](#-deployment)  
- [🤝 Contributing](#-contributing)  
- [📝 License](#-license)  
- [📬 Contact](#-contact)

---

## ✨ Features

- ✅ **Responsive Header** with navigation and mobile toggle menu  
- 💥 **Hero Section** showcasing featured fashion images and call-to-action  
- 🌟 **Testimonials** from real customers with ratings and avatars  
- 🚚 **Benefits Section** highlighting top features like fast shipping & quality  
- 📖 **About Section** detailing the brand story and mission  
- 🛒 **Call-to-Action Section** that encourages users to start shopping  
- 🔗 **Footer** with site links, social media, and copyright  
- 🎨 **Lucide Icons** used throughout for consistency and modern appeal  

---

## 🛠️ Technologies Used

- **React** — Frontend UI framework  
- **Lucide-React** — Icon library for lightweight modern icons  
- **CSS** — Custom responsive styles  
- **Vite** — Development build tool (fast HMR and optimized bundling)  
- **Node.js + npm** — Package management and local server  
- **Git & GitHub** — Version control and collaboration

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/modalane-ecommerce.git
cd modalane-ecommerce
npm install
Install Lucide Icons if not already included:

bash
Copy
Edit
npm install lucide-react
Start the development server:

bash
Copy
Edit
npm run dev
Visit http://localhost:5173 to view the site.

🚀 Usage
Navigate using the top header menu

Browse featured looks in the hero section

Explore real customer reviews in the testimonials

Learn about ModaLane’s story and benefits

Use the call-to-action to explore shopping options

Follow social media links in the footer

📁 Project Structure
pgsql
Copy
Edit
modalane-ecommerce/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Testimonials.js
│   │   ├── Benefits.js
│   │   ├── AboutSection.js
│   │   ├── CallToAction.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── postcss.config.js
├── package.json
├── vite.config.js
└── README.md
🚢 Deployment (GitHub Pages)
Install the deploy tool:

bash
Copy
Edit
npm install gh-pages --save-dev
Add the following to your package.json:

json
Copy
Edit
"homepage": "https://your-username.github.io/modalane-ecommerce",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
Deploy it:

bash
Copy
Edit
npm run build
npm run deploy
💡 Tip: If using react-router-dom, replace BrowserRouter with HashRouter to avoid 404s on GitHub Pages.

🤝 Contributing
We welcome contributions!

Fork the repository

Create your feature branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m "Add YourFeature"

Push to the branch: git push origin feature/YourFeature

Open a pull request

Please follow the code style and document changes where necessary.

📝 License
This project is licensed under the MIT License.

📬 Contact
📧 Email: your-email@example.com

💬 Issues: Create a GitHub Issue

📱 Social: Facebook | Instagram

Built with ❤️ by [Dasun Methmal]
