# 🏪 Shriram Kirana - PWA Shop Manager

A fully offline-capable Progressive Web App (PWA) for managing a kirana (grocery) shop.  
Built in **Marathi + English**, works on Android, iOS & Desktop.

---

## 🚀 Live App

**👉 [Open App](https://YOUR-USERNAME.github.io/shriram-kirana-pwa/)**

> Replace `YOUR-USERNAME` with your GitHub username after deploying.

---

## 📦 Features

- 🛒 **Daily Sales** — Bill-wise entry with cash/credit/UPI
- 👥 **Udhari (Credit)** — Customer ledger with payment tracking
- 📦 **Stock / Inventory** — Low-stock alerts, expiry tracking
- 🛍️ **Purchases** — Supplier-wise purchase log
- 💰 **Daily P&L** — Auto profit/loss calculation
- 📊 **Reports** — Excel export, WhatsApp share
- 🌙 **Dark Mode** — Full dark theme support
- 🔐 **PIN Lock** — 4-digit security PIN
- 🌐 **Bilingual** — Marathi & English UI
- 📲 **Install as App** — Works fully offline after install

---

## 🌐 Deploy on GitHub Pages (Free Hosting)

### Step 1 — Create Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `shriram-kirana-pwa`
3. Set to **Public**
4. Click **Create repository**

### Step 2 — Upload Files

Upload all these files to your repository:
```
index.html      ← Main app
manifest.json   ← PWA manifest
sw.js           ← Service worker (offline support)
icon-192.svg    ← App icon (small)
icon-512.svg    ← App icon (large)
README.md       ← This file
```

### Step 3 — Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → `/` (root)
4. Click **Save**
5. Wait 1–2 minutes → your app is live!

### Step 4 — Install on Phone

Open the live URL on your phone:
- **Android Chrome**: Menu ⋮ → "Add to Home Screen" / "Install App"
- **iOS Safari**: Share ⬆️ → "Add to Home Screen"
- **Desktop Chrome**: Click ⊕ icon in address bar

---

## 📁 File Structure

```
shriram-kirana-pwa/
├── index.html      # Full app (HTML + CSS + JS, single file)
├── manifest.json   # PWA metadata & icons config
├── sw.js           # Service worker for offline caching
├── icon-192.svg    # PWA icon 192×192
├── icon-512.svg    # PWA icon 512×512
└── README.md       # This documentation
```

---

## 🔧 Technical Details

| Feature | Detail |
|---|---|
| Offline support | Cache-first strategy via Service Worker |
| Data storage | localStorage (on-device, private) |
| Icons | SVG (scalable, no PNG needed) |
| Fonts | Baloo 2 + Noto Sans Devanagari |
| Excel export | SheetJS (cdnjs CDN) |
| Framework | Vanilla JS (no dependencies) |
| PWA score | Installable on all major browsers |

---

## 📱 Compatibility

| Platform | Browser | Install |
|---|---|---|
| Android | Chrome, Samsung | ✅ Native install prompt |
| iOS | Safari | ✅ Add to Home Screen |
| Desktop | Chrome, Edge | ✅ Install icon in address bar |
| Desktop | Firefox | ⚠️ No install, but works offline |

---

## 📄 License

Personal use — Shriram Kirana, Mahad, Maharashtra.

---

*Made with ❤️ for kirana shop management*
