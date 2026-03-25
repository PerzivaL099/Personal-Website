# Personal Portfolio - Mario Estrada

A responsive, data-driven single-page portfolio built with React and Tailwind CSS v4. [cite_start]This project showcases my architectural approach to full-stack development, backend scalability, and AI-integrated services.

## 🚀 Live Demo
You can visit the live site here: 
**[https://perzival099.github.io/Personal-Website/](https://perzival099.github.io/Personal-Website/)**

## Features
* **Modern Dark Theme:** Optimized for readability and a sleek developer aesthetic using Tailwind CSS v4.
* **Data-Driven Architecture:** Complete separation of concerns. UI components render dynamically based on centralized data files, ensuring high maintainability.
* **Automated CI/CD:** Integrated with GitHub Actions for seamless deployments upon every push to the main branch.
* **Responsive Design:** Fluid layouts for mobile, tablet, and desktop viewing.

## Tech Stack
* **Frontend:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4
* **Infrastructure:** GitHub Actions (CI/CD) & GitHub Pages

## Project Structure
The repository uses a modular structure to separate the view layer from the data layer:

```text
/
├── .github/workflows/ # CI/CD deployment logic
├── src/
│   ├── components/    # Modular React UI components (About, Experience, Projects, Skills)
│   ├── data/          # Centralized content objects (aboutData, skillsData, etc.)
│   ├── App.jsx        # Main application layout and navigation
│   └── index.css      # Tailwind v4 directives
├── public/            # Static assets
├── vite.config.js     # Build and base path configuration
└── package.json       # Project dependencies