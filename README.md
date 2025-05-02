👗 ModaLane E-Commerce Website
ModaLane is a sleek, modern, and fully responsive e-commerce website built with React and TypeScript. Tailored for fashion and lifestyle products, the site delivers a rich user experience through elegant components and fast performance.


📋 Table of Contents

✨ Features  
🛠️ Technologies Used  
📦 Installation  
🚀 Usage  
📁 Project Structure  
🚢 Deployment  
🤝 Contributing  
📝 License  
📬 Contact


✨ Features

✅ Responsive Header with navigation and mobile toggle menu  
💥 Hero Section showcasing featured fashion images and call-to-action  
🌟 Testimonials from real customers with ratings and avatars  
🚚 Benefits Section highlighting top features like fast shipping & quality  
📖 About Section detailing the brand story and mission  
🛒 Call-to-Action Section that encourages users to start shopping  
🔗 Footer with site links, social media, and copyright  
🎨 Lucide Icons used throughout for consistency and modern appeal


🛠️ Technologies Used

React — Frontend UI framework with TSX for component rendering  
TypeScript — Static typing for enhanced code reliability and maintainability  
Tailwind CSS — Utility-first CSS framework for responsive and modern styling  
Lucide-React — Icon library for lightweight modern icons  
Vite — Development build tool (fast HMR and optimized bundling)  
Node.js + npm — Package management and local server  
Git & GitHub — Version control and collaboration


📦 Installation
Clone the repository and install dependencies:
git clone https://github.com/your-username/modalane-ecommerce.git
cd modalane-ecommerce
npm install

Install Lucide-React, TypeScript, and Tailwind CSS if not already included:
npm install lucide-react typescript @types/react @types/react-dom tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure Tailwind CSS by updating tailwind.config.js:
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}

Add Tailwind directives to src/styles.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

Start the development server:
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
├── postcss.config.js
├── tailwind.config.js
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md


🚢 Deployment (GitHub Pages)
Install the deploy tool:
npm install gh-pages --save-dev

Add the following to your package.json:
"homepage": "https://your-username.github.io/modalane-ecommerce",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

Deploy it:
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
📧 Email: your-email@example.com💬 Issues: Create a GitHub Issue📱 Social: Facebook | Instagram  
Built with ❤️ by Dasun Methmal
