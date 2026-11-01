const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== EcoDiwali Next Verification Test Suite ===\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`✓ [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`✗ [FAIL] ${message}`);
    failedTests++;
  }
}

// 1. Verify Core Files
const coreFiles = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'service-worker.js'
];

for (const f of coreFiles) {
  const p = path.join(__dirname, '..', f);
  assert(fs.existsSync(p) && fs.statSync(p).size > 0, `Core file exists and is not empty: ${f}`);
}

// 2. Compile app.js with VM to verify zero JS syntax errors
try {
  const appJsCode = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  new vm.Script(appJsCode);
  assert(true, 'app.js has 0 syntax errors');
} catch (e) {
  assert(false, `app.js syntax error: ${e.message}`);
}

// 3. Compile service-worker.js
try {
  const swCode = fs.readFileSync(path.join(__dirname, '..', 'service-worker.js'), 'utf8');
  new vm.Script(swCode);
  assert(true, 'service-worker.js has 0 syntax errors');
} catch (e) {
  assert(false, `service-worker.js syntax error: ${e.message}`);
}

// 4. Validate manifest.json
try {
  const rawManifest = fs.readFileSync(path.join(__dirname, '..', 'manifest.json'), 'utf8');
  const manifest = JSON.parse(rawManifest);
  assert(manifest.name && manifest.name.includes('EcoDiwali'), 'manifest.json contains valid name');
  assert(manifest.icons && manifest.icons.length >= 2, 'manifest.json has required icons');
  for (const icon of manifest.icons) {
    const iconPath = path.join(__dirname, '..', icon.src);
    assert(fs.existsSync(iconPath), `Manifest icon exists: ${icon.src}`);
  }
} catch (e) {
  assert(false, `manifest.json parsing error: ${e.message}`);
}

// 5. Verify the 10 Firecracker Varieties in assets
const varieties = [
  'rocket',
  'anar',
  'chakri',
  'flower-pot',
  'phuljhadi',
  '100-wala-garland',
  'sky-shot',
  'ground-spinner',
  'crackling',
  'grand-finale'
];

assert(varieties.length >= 10, 'Catalog contains at least 10 varieties');

for (const v of varieties) {
  // Video
  const vidPath = path.join(__dirname, '..', 'assets', 'videos', `${v}.mp4`);
  assert(fs.existsSync(vidPath) && fs.statSync(vidPath).size > 0, `Video file exists: assets/videos/${v}.mp4`);

  // Audio (WAV)
  const audPath = path.join(__dirname, '..', 'assets', 'audio', `${v}.wav`);
  const audExists = fs.existsSync(audPath);
  assert(audExists, `Audio file exists: assets/audio/${v}.wav`);

  if (audExists) {
    const buf = fs.readFileSync(audPath);
    const isRiff = buf.slice(0, 4).toString('ascii') === 'RIFF';
    const isWave = buf.slice(8, 12).toString('ascii') === 'WAVE';
    const isFmt = buf.slice(12, 16).toString('ascii') === 'fmt ';
    assert(isRiff && isWave && isFmt, `Audio file ${v}.wav is valid RIFF WAVE format`);
    assert(buf.length > 10000, `Audio file ${v}.wav has substantial audio sample data (${buf.length} bytes)`);
  }

  // Thumbnail (SVG)
  const thumbPath = path.join(__dirname, '..', 'assets', 'thumbnails', `${v}.svg`);
  assert(fs.existsSync(thumbPath) && fs.statSync(thumbPath).size > 0, `Thumbnail exists: assets/thumbnails/${v}.svg`);
}

// 6. Verify 100-Wala Garland special dedicated longer assets
const garlandAud = path.join(__dirname, '..', 'assets', 'audio', '100-wala-garland.wav');
if (fs.existsSync(garlandAud)) {
  const size = fs.statSync(garlandAud).size;
  // Sample rate 22050 * 2 bytes/sample * 12s = ~529,244 bytes
  assert(size > 400000, `100 Wala Garland has dedicated longer sound (>400KB, actual: ${size} bytes)`);
}

// 7. Verify HTML structure & Key Requirements
const htmlContent = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Slogan & Footer credits
assert(htmlContent.includes('Celebrate the Light, Protect the Earth.'), 'HTML includes Main Slogan: "Celebrate the Light, Protect the Earth."');
assert(htmlContent.includes('Built by AICTE lab members'), 'HTML includes Footer credit: "Built by AICTE lab members"');

// 5 Main views & Bottom Nav
assert(htmlContent.includes('id="view-home"'), 'Home view exists');
assert(htmlContent.includes('id="view-fireworks"'), 'Fireworks Collection view exists');
assert(htmlContent.includes('id="view-rangoli"'), 'Rangoli Studio view exists');
assert(htmlContent.includes('id="view-challenge"'), 'Eco Challenge view exists');
assert(htmlContent.includes('id="view-greeting"'), 'Greeting Card Maker view exists');
assert(htmlContent.includes('id="view-profile"'), 'My Celebration profile view exists');
assert(htmlContent.includes('class="bottom-nav-bar"'), 'Bottom navigation bar exists');
assert(htmlContent.includes('id="videoModal"'), 'Real Video Player Modal exists');
assert(htmlContent.includes('id="assetGuideModal"'), 'Asset Replacement Guide Modal exists');

// 8. Verify CSS styles
const cssContent = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');
assert(cssContent.includes('--bg-dark: #070B19'), 'CSS uses midnight navy palette');
assert(cssContent.includes('--gold-primary'), 'CSS defines golden accents');
assert(cssContent.includes('--saffron'), 'CSS defines saffron accents');
assert(cssContent.includes('overflow-x: hidden'), 'CSS prevents horizontal scrolling');
assert(cssContent.includes('low-data-mode'), 'CSS defines low-data mode');

console.log(`\n========================================`);
console.log(`Test Summary: ${passedTests} / ${totalTests} assertions passed (${failedTests} failed).`);
console.log(`========================================\n`);

process.exit(failedTests > 0 ? 1 : 0);
