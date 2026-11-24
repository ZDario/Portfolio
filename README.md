# Project Portfolio

A static portfolio site showing my apps through screenshots and video demos. No build step — plain HTML/CSS/JS.

## Edit content
All project text, tags, images and videos are defined in `assets/projects.js`. Add a new project by copying one of the objects and pointing `images`/`videos` at files in this folder. Update the contact link in `index.html`.

## Preview locally
```
python -m http.server 8000
```
Then open http://localhost:8000.

## Publish on GitHub Pages
1. Create a new public repository on GitHub (e.g. `portfolio`, or `<username>.github.io` for a root URL).
2. In this folder:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`** → Save.
4. After a minute the site is live at `https://<username>.github.io/<repo>/`.

Note: GitHub rejects single files over 100 MB; all current videos are under 25 MB.
