# HomeBase
A deeply intelligent, local-first AI agent for seamless communication, real-time navigation, and multimodal task automation. 

This repository now includes a basic React-based frontend scaffolding using Vite.

<img width="1025" height="482" alt="image" src="https://github.com/user-attachments/assets/69efd529-181f-4439-967d-c60761cb98df" />

## Frontend setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`.

3. **Build for production**

   ```bash
   npm run build
   ```

### 📦 GitHub Pages hosting

To host the UI directly on GitHub Pages (no backend required):

1. Install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add the deployment scripts (already in `package.json`).
3. Run `npm run deploy` which will build and push the contents of `dist/` to the `gh-pages` branch.

You can automate this via GitHub Actions (see `.github/workflows/gh-pages.yml`).

Optionally add a `homepage` field to `package.json` for path resolution, e.g.:
```json
"homepage": "https://<your-username>.github.io/HomeBase"
```

Once deployed, your site will be available at `https://<your-username>.github.io/<repo>` (or the custom domain you configure).  
