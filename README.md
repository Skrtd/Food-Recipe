```markdown
# Food-Recipe

A React-based Food Recipe web app that lets users browse, search, and view recipe details. The app fetches recipe data from TheMealDB API.

## Demo / Run locally

1. Clone the repo
   ```bash
   git clone https://github.com/Skrtd/Food-Recipe.git
   cd Food-Recipe
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables
   - Copy `.env.example` to `.env` and set your API key if needed:
     - For Create React App: REACT_APP_MEALDB_KEY=1
     - For Vite: VITE_MEALDB_KEY=1
   - The demo API key `1` works for basic testing; register for your own key at https://www.themealdb.com/api.php for heavier use.

4. Run the app in development
   ```bash
   npm start
   # or (Vite)
   npm run dev
   ```

5. Build for production
   ```bash
   npm run build
   ```

Visit http://localhost:3000 (or the port printed by your dev server) in your browser.

## Features

- Search recipes by name
- View recipe details
- Responsive UI for desktop and mobile

## Tech stack

React · Vite · TheMealDB API · CSS · Tailwind CSS

## TheMealDB API

This project uses TheMealDB to fetch recipe data. Demo API key: `1`. For production use, register for your free API key at https://www.themealdb.com/api.php.

Common endpoints used:
- Search by name: /search.php?s=NAME
- Lookup by id: /lookup.php?i=ID

## Project structure (typical)

- src/
  - assets/ - static assets
  - components/ - React components
  - App.jsx - app root
  - index.css - css styling
  - main.jsx - entry point
- package.json — scripts and deps
- README.md — this file


## Getting started (quick)

- Use the search bar to look up recipes by name.
- Click a recipe to view details.

## Contributing

Contributions welcome. For small fixes or docs, fork the repo, create a branch, make changes, and open a PR. For larger features, open an issue first to discuss.

## Credits

Built and maintained by Skrtd. © 2025 Skrtd — https://github.com/Skrtd
```
Built and maintained by Skrtd. © 2025 Skrtd — https://github.com/Skrt
