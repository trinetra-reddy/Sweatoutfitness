# 🚀 Deployment Guide - SweatOut Gym Website

## Deploy to GitHub Pages with Custom Domain: sweatoutgym.fit

---

## 📋 Prerequisites

- ✅ GitHub repository: `https://github.com/trinetra-reddy/Sweatoutfitness`
- ✅ Custom domain: `sweatoutgym.fit`
- ✅ Domain registrar access (to configure DNS)

---

## 🔧 Step 1: Install Dependencies

```bash
npm install
```

This will install the `gh-pages` package needed for deployment.

---

## 🌐 Step 2: Configure DNS Settings

Go to your domain registrar (where you bought `sweatoutgym.fit`) and add these DNS records:

### Option A: Using Apex Domain (sweatoutgym.fit)

Add these **A Records**:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Option B: Using www Subdomain (www.sweatoutgym.fit)

Add this **CNAME Record**:
```
Type: CNAME
Name: www
Value: trinetra-reddy.github.io
```

### Recommended: Add Both

For best results, add both A records (for apex domain) and CNAME (for www subdomain).

---

## ⚙️ Step 3: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/trinetra-reddy/Sweatoutfitness
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Under **Custom domain**, enter: `sweatoutgym.fit`
5. Check **Enforce HTTPS** (wait a few minutes for SSL certificate)

---

## 🚀 Step 4: Deploy Your Site

### Method 1: Automatic Deployment (Recommended)

Every time you push to the `main` branch, GitHub Actions will automatically build and deploy:

```bash
git add .
git commit -m "Deploy SweatOut Gym website"
git push origin main
```

The GitHub Action will:
- ✅ Install dependencies
- ✅ Build the project
- ✅ Deploy to GitHub Pages
- ✅ Preserve the CNAME file

### Method 2: Manual Deployment

```bash
npm run deploy
```

---

## 📊 Step 5: Verify Deployment

1. **Check GitHub Actions**:
   - Go to: https://github.com/trinetra-reddy/Sweatoutfitness/actions
   - Wait for the green checkmark ✅

2. **Test Your Site**:
   - Visit: https://sweatoutgym.fit
   - Visit: https://www.sweatoutgym.fit (if configured)

3. **DNS Propagation**:
   - DNS changes can take 24-48 hours to propagate globally
   - Test with: https://dnschecker.org

---

## 🔍 Troubleshooting

### Issue: 404 Page Not Found
**Solution**: Make sure GitHub Pages is enabled and the workflow completed successfully.

### Issue: Custom domain not working
**Solution**: 
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check that CNAME file exists in the `public/` folder

### Issue: CSS/JS not loading
**Solution**: 
- Ensure `base: '/'` is set in `vite.config.ts`
- Clear browser cache and hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

### Issue: Routing issues (404 on refresh)
**Solution**: GitHub Pages doesn't support client-side routing by default. The current setup uses hash routing which should work.

---

## 📁 Important Files

- **`public/CNAME`** - Contains your custom domain
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow
- **`vite.config.ts`** - Vite build configuration
- **`package.json`** - Deployment scripts

---

## 🔄 Update Workflow

To update your live site:

1. Make changes to your code
2. Test locally: `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
4. GitHub Actions will automatically deploy (takes 2-3 minutes)

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Configure DNS at your domain registrar
3. ✅ Enable GitHub Pages in repository settings
4. ✅ Push to GitHub: `git push origin main`
5. ✅ Wait for deployment (check Actions tab)
6. ✅ Visit https://sweatoutgym.fit

---

## 📞 Support

If you encounter issues:
- Check GitHub Actions logs for errors
- Verify DNS settings with your registrar
- Ensure all files are committed and pushed

**Your site will be live at: https://sweatoutgym.fit** 🎉

