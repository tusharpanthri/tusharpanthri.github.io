# Tushar Panthri - Data Engineer Portfolio

Built with **Next.js 15+**, **TypeScript**, and **Tailwind CSS 4**.

## 🚀 Live Site
The site is hosted at: [https://tusharpanthri.github.io/](https://tusharpanthri.github.io/)

---

## 🛠️ GitHub Pages Deployment Fixes
To ensure the Next.js static export works correctly on GitHub Pages, the following configurations were applied:

1.  **Static Export Configuration**: Modified `next.config.ts` to use `output: 'export'` and `trailingSlash: true`.
2.  **Path Resolution**: Switched absolute asset paths (e.g., `/favicon.svg`) to relative paths (e.g., `favicon.svg`) to prevent 404 errors during subpath or root deployment.
3.  **Deployment Source**: Configured the repository to use **GitHub Actions** for deployment (**Settings > Pages > Build and deployment > Source**).

## 🛠️ Local Development

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view.

## 📦 Static Build

```bash
npm run build
```
Generates a static HTML export in the `out/` directory, optimized for GitHub Pages.
