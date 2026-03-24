# Mario Estrada - Personal Portfolio

A responsive, data-driven single-page portfolio built with React and Tailwind CSS v4. Designed to showcase my experience in full-stack development, backend architecture, and AI-integrated services.

## Features
* **Modern Dark Theme:** Built with Tailwind CSS v4 for a sleek, high-contrast, developer-focused aesthetic.
* **Data-Driven Architecture:** UI components are strictly separated from content data, making it effortless to update experience, projects, or skills without touching the React JSX.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing using CSS Grid and Flexbox.
* **Fast & Optimized:** Scaffolded with Vite for lightning-fast Hot Module Replacement (HMR) and highly optimized production builds.

## Tech Stack
* **Frontend Framework:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4
* **Language:** JavaScript

## Project Structure
The repository follows a strictly modular structure, separating the view layer from the data layer:

\`\`\`text
src/
├── components/       # React UI components (About, Experience, Projects, Skills)
├── data/             # JavaScript objects containing the portfolio content
├── App.jsx           # Main application layout and sticky navigation
└── index.css         # Global Tailwind imports
\`\`\`

## Local Setup
To run this project locally:

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/PerzivaL099/mario-portfolio.git
   cd mario-portfolio
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open `http://localhost:5173` in your browser.

## Content Management
To update the portfolio content, modify the respective files within the `src/data/` directory. The React components automatically map over the new arrays and render the updated UI.

* `aboutData.js` - Updates to personal info, bio narrative, education, and certifications.
* `experienceData.js` - Updates to work history, roles, and technical highlights.
* `projectsData.js` - Updates to featured technical projects and architecture details.
* `skillsData.js` - Updates to categorized technical languages, domains, and tools.

## Author
**Mario Estrada**
* GitHub: [@PerzivaL099](https://github.com/PerzivaL099)
* Email: mario152003@gmail.com