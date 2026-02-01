# ⚡ Quick Deploy Guide

## 🚀 Deploy in 5 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Configure DNS (at your domain registrar)

Add these **A Records** for `sweatoutgym.fit`:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### 3️⃣ Enable GitHub Pages

1. Go to: https://github.com/trinetra-reddy/Sweatoutfitness/settings/pages
2. Source: **GitHub Actions**
3. Custom domain: `sweatoutgym.fit`
4. ✅ Enforce HTTPS

### 4️⃣ Push to GitHub
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 5️⃣ Wait & Verify

- Check deployment: https://github.com/trinetra-reddy/Sweatoutfitness/actions
- Visit your site: https://sweatoutgym.fit

---

## 📝 DNS Configuration Examples

### GoDaddy
1. Go to DNS Management
2. Add A Records with values above
3. Point @ to each IP address

### Namecheap
1. Advanced DNS
2. Add A Record
3. Host: @ | Value: (each IP)

### Cloudflare
1. DNS Settings
2. Add A Record
3. Name: @ | IPv4: (each IP)
4. Proxy status: DNS only (gray cloud)

---

## ✅ Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] DNS A records configured
- [ ] GitHub Pages enabled
- [ ] Custom domain set to `sweatoutgym.fit`
- [ ] Code pushed to GitHub
- [ ] GitHub Actions workflow completed
- [ ] Site accessible at https://sweatoutgym.fit

---

## 🔄 Future Updates

Just push to GitHub:
```bash
git add .
git commit -m "Your update message"
git push origin main
```

Auto-deploys in 2-3 minutes! 🎉

