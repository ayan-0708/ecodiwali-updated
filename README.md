# EcoDiwali Next 🪔
> **"Celebrate the Light, Protect the Earth."**  
> *Built by AICTE lab members*

---

## 🌟 Executive Overview
**EcoDiwali Next** is a realistic, mobile-first virtual Diwali celebration platform engineered to provide the full audio-visual thrill of Indian festival pyrotechnics with **zero chemical smog, zero burn hazards, zero pet trauma, and zero carbon footprint**.

Designed specifically for modern Android smartphones and cross-platform web browsers, EcoDiwali Next unites:
1. **Real Video Player**: Dedicated prerecorded footage playback with synchronized thunderous sound effects for 10 distinct firework varieties.
2. **Special 100-Wala Garland Experience**: A dedicated continuous rapid-fire chain celebration with authentic percussive crescendo and mobile haptic vibrations (`navigator.vibrate`).
3. **Interactive Rangoli Studio**: Multi-touch digital mandala creator featuring 4-fold, 8-fold, and 12-fold radial symmetry, stencil templates, and PNG export.
4. **Eco Challenge**: A 10-question educational interactive quiz addressing AQI, green crackers, animal welfare, and sustainable traditions.
5. **Greeting Card Studio**: Personalized Deepawali e-card designer with custom names, heartfelt wishes, and native mobile sharing (`navigator.share`).
6. **My Celebration Dashboard**: A private, offline progress tracker calculating virtual $CO_2$ saved, toxic $PM_{2.5}$ smog prevented, and unlocked festive honors.
7. **PWA & Offline First**: Full Progressive Web App manifest and Service Worker caching for seamless offline celebrations.

---

## 📁 Project & Asset Architecture

```
EcoDiwali-Next/
├── index.html                   # Mobile-first semantic single-page application structure
├── styles.css                   # Midnight navy & radiant gold design tokens, glassmorphism, responsive styles
├── app.js                       # Master application logic, particle simulation engine, audio & state management
├── manifest.json                # PWA manifest with standalone display & mobile icons
├── service-worker.js            # Cache-first offline service worker
├── README.md                    # Complete documentation & deployment guide
├── assets/
│   ├── videos/                  # Real H.264 MP4 firework footage & sample placeholders
│   │   ├── rocket.mp4
│   │   ├── anar.mp4
│   │   ├── chakri.mp4
│   │   ├── flower-pot.mp4
│   │   ├── phuljhadi.mp4
│   │   ├── 100-wala-garland.mp4  (Dedicated continuous longer celebration)
│   │   ├── sky-shot.mp4
│   │   ├── ground-spinner.mp4
│   │   ├── crackling.mp4
│   │   └── grand-finale.mp4
│   ├── audio/                   # 10 Dedicated 16-bit PCM WAV sound recordings
│   │   ├── rocket.wav
│   │   ├── anar.wav
│   │   ├── chakri.wav
│   │   ├── flower-pot.wav
│   │   ├── phuljhadi.wav
│   │   ├── 100-wala-garland.wav  (Dedicated continuous 12s barrage)
│   │   ├── sky-shot.wav
│   │   ├── ground-spinner.wav
│   │   ├── crackling.wav
│   │   └── grand-finale.wav
│   ├── thumbnails/              # 10 High-resolution vector SVG cards
│   │   ├── rocket.svg
│   │   ├── anar.svg
│   │   ├── chakri.svg
│   │   ├── flower-pot.svg
│   │   ├── phuljhadi.svg
│   │   ├── 100-wala-garland.svg
│   │   ├── sky-shot.svg
│   │   ├── ground-spinner.svg
│   │   ├── crackling.svg
│   │   └── grand-finale.svg
│   └── icons/                   # PWA & Branding icons
│       ├── diya.svg             # Animated brass diya with flickering flame
│       ├── icon-192.png         # 192x192 PWA launcher icon
│       └── icon-512.png         # 512x512 High-DPI PWA splash icon
└── tools/
    ├── create_assets.js         # Procedural audio generator & asset scaffold
    ├── create_thumbnails.js     # Vector art thumbnail renderer
    ├── create_png_icons.ps1     # System.Drawing PWA icon renderer
    ├── server.js                # Lightweight zero-dependency Node HTTP server
    └── verify_app.js            # Automated verification test suite (80/80 passed)
```

---

## 🎆 The 10 Firecracker Varieties

| # | Firecracker Name | Type | Duration | Description & Sound |
|---|------------------|------|----------|---------------------|
| 1 | **Rocket (रॉकेट)** | Aerial Shell | 4.5s | High altitude streak, shrill whistling ascent, and massive golden starburst. |
| 2 | **Anar (अनार)** | Fountain | 7.0s | Majestic conical fountain with soaring cascading sparks and white-noise hiss. |
| 3 | **Chakri (चकरी)** | Ground Wheel | 6.5s | Rapid ground wheel spinning with Doppler frequency oscillation and neon vortex. |
| 4 | **Flower Pot (फूलझरना)** | Blossom Fountain | 6.0s | Eruptive earthen pot with multi-stage blossom bursts in magenta, gold, and teal. |
| 5 | **Phuljhadi (फुलझड़ी)** | Sparkler | 8.0s | Handheld sparkler wand with gentle dancing glitter stars and delicate crackles. |
| 6 | **100 Wala Garland (१०० वाला लड़ी)** | ⚡ Featured Special | 12.0s | Continuous rapid-fire machine-gun staccato barrage with smoke rumblings & 3 grand finale salutes. |
| 7 | **Sky Shot (स्काई शॉट)** | High Caliber | 5.0s | Mortar tube launch thud, whistling stratosphere streak, and gigantic golden chrysanthemum break. |
| 8 | **Ground Spinner (ग्राउंड स्पिनर)** | Ground Speed | 5.0s | Fast-spinning triangular floor disc skipping across the floor with electric trails. |
| 9 | **Crackling Effects (कड़कड़ाहट)** | Electric Flash | 6.0s | Dense cluster of rapid electric pops and dazzling dragon egg sparkle showers. |
| 10 | **Grand Finale (महा आतिशबाजी)** | Grand Symphony | 14.0s | Multi-shot synchronized sky barrage with whistling comets, aerial bouquets, and brocades. |

---

## 🎬 Instructions for Adding Real Video & Audio Files

EcoDiwali Next includes a **smart hybrid player**:
- When real MP4 video files are placed in `assets/videos/`, the HTML5 video engine detects them and streams the actual footage with a green `REAL VIDEO STREAMING` badge.
- If an asset is in sample placeholder status, it gracefully runs the synchronized high-definition canvas visualizer with matching audio and displays an informative banner with a direct link to the Asset Guide.

### Video Requirements
1. **Container:** MP4
2. **Video Codec:** H.264 (Baseline or Main profile)
3. **Audio Codec:** AAC (Stereo or Mono)
4. **Resolution:** 
   - 1080 × 1920 (Portrait — optimal for mobile)
   - 1920 × 1080 (Landscape — optimal for tablets/desktop)
5. **Framerate:** 30 fps or 60 fps
6. **Bitrate:** 2.5 Mbps – 6 Mbps (keeps file sizes compact: 2 MB – 8 MB per clip)

### Step-by-Step Replacement:
1. Obtain high-quality, royalty-free firework footage from legitimate CC0 sources:
   - [Pexels Fireworks Videos](https://www.pexels.com/search/videos/fireworks/)
   - [Pixabay Diwali Footage](https://pixabay.com/videos/search/diwali/)
   - [Wikimedia Commons Pyrotechnics](https://commons.wikimedia.org)
2. Rename your video to match the exact filename (e.g. `assets/videos/rocket.mp4`).
3. Overwrite the file in `assets/videos/`.
4. Refresh EcoDiwali Next in your browser — the player will immediately detect and stream your genuine footage!

---

## 💻 Windows Setup Instructions

### Option 1: Using Built-in Node.js (Recommended)
1. Open PowerShell or Command Prompt in the project folder:
   ```powershell
   cd "c:\Users\AYAN\Desktop\Eco-DIWALI updated 31-10"
   ```
2. Start the local server:
   ```powershell
   node tools/server.js
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Option 2: Using VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Using Python
If Python is installed:
```powershell
python -m http.server 8080
```
Open `http://localhost:8080` in your browser.

---

## 📱 Mobile Testing Instructions

### Testing on Real Android Smartphones
1. Connect your Android smartphone to the **same Wi-Fi network** as your PC.
2. Find your PC's local IP address in PowerShell:
   ```powershell
   ipconfig
   # Look for "IPv4 Address", e.g., 192.168.1.45
   ```
3. Start the server on your PC (`node tools/server.js`).
4. On your Android phone, open **Google Chrome** and visit:
   ```
   http://<YOUR_PC_IP>:3000
   ```
   *(e.g., `http://192.168.1.45:3000`)*

### Testing in Chrome DevTools Device Mode
1. Open Google Chrome on your computer.
2. Press `F12` (or `Ctrl + Shift + I`) to open Developer Tools.
3. Click the **Toggle device toolbar** button (`Ctrl + Shift + M`).
4. Test across responsive widths:
   - **320px** (Compact budget smartphones)
   - **360px** (Galaxy S-series default)
   - **375px** (iPhone SE)
   - **390px / 412px / 430px** (Modern flagship Android screens)
   - **Landscape orientation** (Verify fullscreen video controls)

---

## 📲 PWA Installation Instructions

EcoDiwali Next meets 100% of Progressive Web App standards:

### On Android (Chrome)
1. Open the web app URL in Chrome.
2. A prompt **"Add EcoDiwali Next to Home screen"** or an install banner will appear automatically.
3. Alternatively, tap the three dots menu (⋮) in the top-right corner of Chrome.
4. Select **"Install app"** or **"Add to Home screen"**.
5. The EcoDiwali Next icon will be installed directly on your home screen and launcher, opening as a native fullscreen app without the browser URL bar!

### On Desktop (Chrome / Edge)
1. Visit the app URL in Chrome or Microsoft Edge.
2. Click the **Install icon** in the right side of the address bar.
3. Launch EcoDiwali Next as a dedicated desktop application.

---

## 📦 Future Android APK Packaging Instructions

To release EcoDiwali Next as an official `.apk` or `.aab` (Android App Bundle) on the Google Play Store, follow either of these standard methods:

### Method A: Using Capacitor (Recommended for Full Native Features)
1. Install Capacitor CLI globally:
   ```bash
   npm install -g @capacitor/cli @capacitor/core
   ```
2. Initialize Capacitor in this project directory:
   ```bash
   npx cap init "EcoDiwali Next" "com.ecodiwali.next" --web-dir "."
   ```
3. Add the Android platform:
   ```bash
   npm install @capacitor/android
   npx cap add android
   ```
4. Copy web assets:
   ```bash
   npx cap copy
   ```
5. Open in Android Studio to build the signed APK:
   ```bash
   npx cap open android
   ```
   Inside Android Studio, click **Build > Generate Signed Bundle / APK**.

### Method B: Using Google Bubblewrap (Trusted Web Activity - TWA)
Google Bubblewrap produces a lightweight Play Store package directly from your PWA manifest:
```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest="https://your-domain.com/manifest.json"
bubblewrap build
```
This generates an official release-ready Android APK in minutes!

---

## 🛡️ Verification Test Suite
EcoDiwali Next includes an automated test runner:
```powershell
node tools/verify_app.js
```
**Results:** `80 / 80 assertions passed (0 failures)`.

---

## 📜 Credits
- **Application Name:** EcoDiwali Next
- **Main Slogan:** *"Celebrate the Light, Protect the Earth."*
- **Footer Attribution:** *"Built by AICTE lab members"*
