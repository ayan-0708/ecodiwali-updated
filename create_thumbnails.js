const fs = require('fs');
const path = require('path');

const thumbsDir = path.join(__dirname, '..', 'assets', 'thumbnails');
const iconsDir = path.join(__dirname, '..', 'assets', 'icons');

// SVG Generator helper
function makeSvg(title, subtitle, badge, colors, visualContent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="${colors.glow}" stop-opacity="0.5"/>
      <stop offset="70%" stop-color="#0B132B" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#050814" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE066"/>
      <stop offset="50%" stop-color="#FFB703"/>
      <stop offset="100%" stop-color="#FB8500"/>
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${colors.accent1}"/>
      <stop offset="100%" stop-color="${colors.accent2}"/>
    </linearGradient>
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="400" rx="20" fill="url(#bgGlow)"/>
  
  <!-- Subtle festive border -->
  <rect x="8" y="8" width="584" height="384" rx="16" fill="none" stroke="rgba(255, 215, 0, 0.25)" stroke-width="2"/>
  <rect x="14" y="14" width="572" height="372" rx="12" fill="none" stroke="rgba(255, 215, 0, 0.08)" stroke-width="1" stroke-dasharray="6,4"/>

  <!-- Decorative Corner Motifs -->
  <path d="M 24 40 L 40 24 M 24 24 L 48 24 M 24 24 L 24 48" stroke="#FFD700" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
  <path d="M 576 40 L 560 24 M 576 24 L 552 24 M 576 24 L 576 48" stroke="#FFD700" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
  
  <!-- Center Visual Artwork -->
  <g transform="translate(300, 180)">
    ${visualContent}
  </g>

  <!-- Top Badge -->
  <g transform="translate(30, 42)">
    <rect width="130" height="28" rx="14" fill="url(#badgeGrad)" opacity="0.9"/>
    <text x="65" y="18" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">${badge}</text>
  </g>

  <!-- Lower Title Bar / Card Info -->
  <rect x="20" y="310" width="560" height="70" rx="14" fill="rgba(7, 11, 25, 0.85)" stroke="rgba(255, 215, 0, 0.2)" stroke-width="1"/>
  <text x="40" y="342" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="800">${title}</text>
  <text x="40" y="364" fill="#E2E8F0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">${subtitle}</text>
  
  <!-- Play Indicator Icon -->
  <g transform="translate(535, 345)">
    <circle r="18" fill="url(#goldGrad)" filter="url(#neonGlow)"/>
    <polygon points="-4,-7 8,0 -4,7" fill="#070B19"/>
  </g>
</svg>`;
}

// 1. Rocket
const rocketSvg = makeSvg(
  'Rocket / रॉकेट',
  'Acrobatic high-altitude streak & massive golden burst',
  'AERIAL SHELL',
  { glow: '#FF5E00', accent1: '#FF5E00', accent2: '#FF0055' },
  `
  <!-- Rocket Body & Stick -->
  <line x1="-30" y1="80" x2="30" y2="-60" stroke="#E29578" stroke-width="4" stroke-linecap="round"/>
  <g transform="rotate(35)">
    <rect x="-14" y="-70" width="28" height="75" rx="5" fill="#E63946" stroke="#FFD700" stroke-width="2"/>
    <polygon points="0,-105 -18,-70 18,-70" fill="#FFD700"/>
    <rect x="-14" y="-35" width="28" height="10" fill="#FFB703"/>
    <!-- Exhaust sparks -->
    <path d="M 0,5 Q -15,40 -25,70 M 0,5 Q 10,35 15,65 M 0,5 Q 0,45 0,80" stroke="#FFBA08" stroke-width="3" stroke-linecap="round" filter="url(#neonGlow)"/>
    <circle cx="-12" cy="50" r="4" fill="#FFF" filter="url(#neonGlow)"/>
    <circle cx="8" cy="62" r="3" fill="#FFD700"/>
    <circle cx="-2" cy="78" r="5" fill="#FF5400"/>
  </g>
  <!-- Distant Burst sparks -->
  <circle cx="120" cy="-60" r="3" fill="#FFD700" filter="url(#neonGlow)"/>
  <circle cx="90" cy="-90" r="4" fill="#FF007F" filter="url(#neonGlow)"/>
  <circle cx="150" cy="-80" r="3" fill="#00F2FE" filter="url(#neonGlow)"/>
  <circle cx="110" cy="-30" r="2.5" fill="#FFE066"/>
  `
);

// 2. Anar (Golden Fountain)
const anarSvg = makeSvg(
  'Anar / अनार',
  'Majestic royal conical fountain of golden & silver sparks',
  'FOUNTAIN',
  { glow: '#FFB703', accent1: '#FFB703', accent2: '#FB8500' },
  `
  <!-- Earthen Pot -->
  <polygon points="-35,55 35,55 20,10 -20,10" fill="#9C6644" stroke="#FFD700" stroke-width="2.5"/>
  <rect x="-22" y="5" width="44" height="7" rx="3" fill="#DDB892" stroke="#FFD700" stroke-width="1.5"/>
  <ellipse cx="0" cy="55" rx="35" ry="8" fill="#7F4F24"/>
  
  <!-- Symmetrical Fountain of Sparks -->
  <g filter="url(#neonGlow)">
    <path d="M 0,5 Q -80,-80 -130,-120" stroke="#FFE066" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M 0,5 Q -40,-110 -60,-150" stroke="#FFB703" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M 0,5 Q 0,-130 0,-165" stroke="#FFF" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 0,5 Q 40,-110 60,-150" stroke="#FFB703" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M 0,5 Q 80,-80 130,-120" stroke="#FFE066" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Spark globules -->
  <circle cx="-110" cy="-105" r="4.5" fill="#FFF" filter="url(#neonGlow)"/>
  <circle cx="-50" cy="-140" r="3.5" fill="#FFE066"/>
  <circle cx="0" cy="-160" r="6" fill="#FFF" filter="url(#neonGlow)"/>
  <circle cx="55" cy="-135" r="4" fill="#FFB703"/>
  <circle cx="120" cy="-110" r="5" fill="#FFF" filter="url(#neonGlow)"/>
  <circle cx="20" cy="-80" r="3" fill="#FFD700"/>
  <circle cx="-25" cy="-60" r="3" fill="#FFF"/>
  `
);

// 3. Chakri (Ground Wheel)
const chakriSvg = makeSvg(
  'Chakri / चकरी',
  'Hypnotic spinning ground vortex of fiery spirals',
  'GROUND WHEEL',
  { glow: '#06D6A0', accent1: '#06D6A0', accent2: '#118AB2' },
  `
  <!-- Spinning spiral vortex -->
  <circle cx="0" cy="15" r="75" fill="none" stroke="rgba(6, 214, 160, 0.2)" stroke-width="16" stroke-dasharray="15,25"/>
  <circle cx="0" cy="15" r="50" fill="none" stroke="rgba(255, 183, 3, 0.35)" stroke-width="12" stroke-dasharray="10,18"/>
  
  <!-- Spiral Arms -->
  <g transform="translate(0, 15)" filter="url(#neonGlow)">
    <path d="M 0,0 C 25,-10 40,-35 45,-60 C 50,-85 30,-95 10,-85" fill="none" stroke="#06D6A0" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M 0,0 C 10,25 35,40 60,45 C 85,50 95,30 85,10" fill="none" stroke="#FFD166" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M 0,0 C -25,10 -40,35 -45,60 C -50,85 -30,95 -10,85" fill="none" stroke="#EF476F" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M 0,0 C -10,-25 -35,-40 -60,-45 C -85,-50 -95,-30 -85,-10" fill="none" stroke="#118AB2" stroke-width="4.5" stroke-linecap="round"/>
  </g>
  <!-- Center Core Disc -->
  <circle cx="0" cy="15" r="22" fill="#D90429" stroke="#FFD700" stroke-width="3"/>
  <circle cx="0" cy="15" r="10" fill="#FFD700"/>
  <circle cx="0" cy="15" r="4" fill="#FFF"/>
  `
);

// 4. Flower Pot
const flowerPotSvg = makeSvg(
  'Flower Pot / फूलझरना',
  'Multi-tiered eruptive blossom shower in radiant colors',
  'FOUNTAIN BLOSSOM',
  { glow: '#FF007F', accent1: '#7928CA', accent2: '#FF0080' },
  `
  <!-- Floral Pot Body -->
  <path d="M -28,60 C -35,30 -25,10 -15,10 L 15,10 C 25,10 35,30 28,60 Z" fill="#9B5DE5" stroke="#FFD700" stroke-width="2.5"/>
  <ellipse cx="0" cy="60" rx="28" ry="7" fill="#6A0572"/>
  <ellipse cx="0" cy="10" rx="15" ry="4" fill="#F15BB5"/>
  
  <!-- Multicolored Blossom Shower -->
  <g filter="url(#neonGlow)">
    <path d="M 0,10 Q -60,-60 -110,-90" stroke="#F15BB5" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M 0,10 Q -25,-90 -45,-140" stroke="#00BBF9" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M 0,10 Q 0,-110 0,-155" stroke="#FEE440" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 0,10 Q 25,-90 45,-140" stroke="#00F5D4" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M 0,10 Q 60,-60 110,-90" stroke="#FF007F" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Blossom clusters -->
  <circle cx="-100" cy="-80" r="5" fill="#F15BB5" filter="url(#neonGlow)"/>
  <circle cx="-40" cy="-130" r="4" fill="#00BBF9"/>
  <circle cx="0" cy="-150" r="6" fill="#FFF" filter="url(#neonGlow)"/>
  <circle cx="40" cy="-130" r="4.5" fill="#00F5D4"/>
  <circle cx="100" cy="-80" r="5" fill="#FF007F" filter="url(#neonGlow)"/>
  `
);

// 5. Phuljhadi (Handheld Sparkler)
const phuljhadiSvg = makeSvg(
  'Phuljhadi / फुलझड़ी',
  'Gentle sparkling wand with dancing glitter stars',
  'SPARKLER',
  { glow: '#FFD700', accent1: '#FFD700', accent2: '#FF8800' },
  `
  <!-- Sparkler Wire Handle -->
  <line x1="-70" y1="90" x2="30" y2="-20" stroke="#ADB5BD" stroke-width="4" stroke-linecap="round"/>
  <!-- Coated chemical rod -->
  <line x1="-15" y1="30" x2="30" y2="-20" stroke="#495057" stroke-width="7" stroke-linecap="round"/>
  
  <!-- Burning Sparkler Tip with Radiating Stars -->
  <g transform="translate(30, -20)" filter="url(#neonGlow)">
    <circle cx="0" cy="0" r="10" fill="#FFF"/>
    <!-- 8 Primary Spark Rays -->
    <line x1="0" y1="0" x2="-45" y2="-45" stroke="#FFE066" stroke-width="3" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="0" y2="-65" stroke="#FFF" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="50" y2="-45" stroke="#FFB703" stroke-width="3" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="65" y2="0" stroke="#FFE066" stroke-width="3" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="45" y2="45" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="-45" y2="40" stroke="#FFB703" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="-60" y2="5" stroke="#FFE066" stroke-width="3" stroke-linecap="round"/>
    <!-- Starlets -->
    <circle cx="-38" cy="-38" r="4" fill="#FFF"/>
    <circle cx="42" cy="-40" r="4.5" fill="#FFE066"/>
    <circle cx="55" cy="0" r="3.5" fill="#FFF"/>
    <circle cx="38" cy="38" r="4" fill="#FFB703"/>
    <circle cx="-50" cy="5" r="3" fill="#FFF"/>
    <circle cx="0" cy="-55" r="5" fill="#FFF"/>
  </g>
  `
);

// 6. 100 Wala Garland (Special Featured Experience)
const garlandSvg = makeSvg(
  '100 Wala Garland / १०० वाला लड़ी',
  'Legendary rapid-fire chain celebration (Continuous Full Length)',
  '⚡ FEATURED SPECIAL',
  { glow: '#D90429', accent1: '#D90429', accent2: '#EF233C' },
  `
  <!-- Iconic Red Crackers Linked in Dense Festive Garland -->
  <g transform="translate(-10, -10)">
    <!-- Central Twine -->
    <path d="M -120,-80 Q -60,-30 -10,0 Q 40,30 110,80" fill="none" stroke="#FFD700" stroke-width="3"/>
    
    <!-- Red Cracker Cylinders Array -->
    ${Array.from({ length: 14 }).map((_, idx) => {
      const px = -110 + idx * 16;
      const py = -70 + idx * 10;
      const angle = (idx % 2 === 0 ? 30 : -35);
      return `
      <g transform="translate(${px}, ${py}) rotate(${angle})">
        <rect x="-6" y="-18" width="12" height="36" rx="3" fill="#D90429" stroke="#FFD700" stroke-width="1.2"/>
        <line x1="0" y1="-18" x2="0" y2="-24" stroke="#FFF" stroke-width="1.5"/>
        <rect x="-6" y="-6" width="12" height="6" fill="#FFB703"/>
      </g>`;
    }).join('')}

    <!-- Blazing Detonation at the Garland Lead Tip -->
    <g transform="translate(105, 75)" filter="url(#neonGlow)">
      <circle cx="0" cy="0" r="22" fill="#FFD700" opacity="0.9"/>
      <circle cx="0" cy="0" r="12" fill="#FFF"/>
      <!-- Smoke and Blast Shards -->
      <line x1="0" y1="0" x2="35" y2="-25" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="40" y2="15" stroke="#FFB703" stroke-width="3" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="15" y2="35" stroke="#FF0055" stroke-width="3" stroke-linecap="round"/>
      <circle cx="30" cy="-20" r="4" fill="#FFF"/>
      <circle cx="35" cy="12" r="3.5" fill="#FFD700"/>
    </g>
  </g>
  `
);

// 7. Sky Shot
const skyShotSvg = makeSvg(
  'Sky Shot / स्काई शॉट',
  'Single high-caliber shell with glittering chrysanthemum break',
  'HIGH CALIBER',
  { glow: '#3A86FF', accent1: '#3A86FF', accent2: '#8338EC' },
  `
  <!-- High Altitude Starburst -->
  <g filter="url(#neonGlow)">
    ${Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      const rad = (angle * Math.PI) / 180;
      const x2 = Math.cos(rad) * 90;
      const y2 = Math.sin(rad) * 90;
      const color = i % 2 === 0 ? '#3A86FF' : '#FFD700';
      return `<line x1="0" y1="-30" x2="${x2}" y2="${-30 + y2}" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="${x2}" cy="${-30 + y2}" r="3.5" fill="#FFF"/>`;
    }).join('')}
    <circle cx="0" cy="-30" r="14" fill="#FFF"/>
  </g>
  <!-- Ascending Trail from Ground -->
  <path d="M 0,85 Q 15,30 0,-15" fill="none" stroke="#FFE066" stroke-width="2.5" stroke-dasharray="4,4" filter="url(#neonGlow)"/>
  <!-- Mortar Launcher Tube -->
  <rect x="-8" y="70" width="16" height="30" rx="3" fill="#2B2D42" stroke="#FFD700" stroke-width="2"/>
  `
);

// 8. Ground Spinner
const groundSpinnerSvg = makeSvg(
  'Ground Spinner / ग्राउंड स्पिनर',
  'Fast zipping, jittering neon floor spinner',
  'GROUND SPEED',
  { glow: '#FF0055', accent1: '#FF0055', accent2: '#FF5400' },
  `
  <!-- Fast spinning polygon -->
  <g transform="translate(0, 10)">
    <circle cx="0" cy="0" r="65" fill="none" stroke="#FF0055" stroke-width="4" stroke-dasharray="25,15" opacity="0.6"/>
    <g filter="url(#neonGlow)">
      <!-- Triangular spinner body -->
      <polygon points="0,-45 38,25 -38,25" fill="#FF5400" stroke="#FFD700" stroke-width="3"/>
      <polygon points="0,45 -38,-25 38,-25" fill="#FF0055" stroke="#FFF" stroke-width="2" opacity="0.75"/>
      <circle cx="0" cy="0" r="12" fill="#FFD700"/>
      <circle cx="0" cy="0" r="5" fill="#FFF"/>
    </g>
    <!-- Motion Sparks -->
    <circle cx="-55" cy="-35" r="4" fill="#FFD700" filter="url(#neonGlow)"/>
    <circle cx="60" cy="20" r="4.5" fill="#FFF" filter="url(#neonGlow)"/>
    <circle cx="-20" cy="55" r="3.5" fill="#FF5400"/>
  </g>
  `
);

// 9. Crackling Effects
const cracklingSvg = makeSvg(
  'Crackling Effects / कड़कड़ाहट',
  'Rapid electric flash pops and glittering dragon egg barrages',
  'ELECTRIC FLASH',
  { glow: '#FFB703', accent1: '#FB8500', accent2: '#FFB703' },
  `
  <!-- Cluster of sharp energetic flashes -->
  <g filter="url(#neonGlow)">
    <!-- Main Center Cluster -->
    <path d="M -30,-40 L 0,-10 L -40,15 L 10,25 L -10,60 L 35,10 L 15,-20 L 50,-50 Z" fill="rgba(255, 183, 3, 0.4)" stroke="#FFF" stroke-width="3"/>
    <circle cx="-15" cy="-25" r="6" fill="#FFF"/>
    <circle cx="20" cy="15" r="7" fill="#FFD700"/>
    <circle cx="-25" cy="30" r="5" fill="#FFF"/>
    <circle cx="35" cy="-30" r="5.5" fill="#FFB703"/>
    
    <!-- Radiating Crackle Lines -->
    <line x1="-15" y1="-25" x2="-80" y2="-60" stroke="#FFD700" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="20" y1="15" x2="85" y2="45" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="-25" y1="30" x2="-70" y2="75" stroke="#FB8500" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="35" y1="-30" x2="75" y2="-75" stroke="#FFE066" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Sparkles -->
    <circle cx="-75" cy="-55" r="3" fill="#FFF"/>
    <circle cx="80" cy="40" r="4" fill="#FFD700"/>
    <circle cx="-65" cy="70" r="3" fill="#FFF"/>
    <circle cx="70" cy="-70" r="3.5" fill="#FFF"/>
  </g>
  `
);

// 10. Grand Finale
const grandFinaleSvg = makeSvg(
  'Grand Finale / महा आतिशबाजी',
  'Spectacular synchronized multi-shot aerial symphony',
  '★ GRAND FINALE',
  { glow: '#FF0055', accent1: '#7928CA', accent2: '#FF0080' },
  `
  <!-- Multi-layered aerial breaks across panoramic sky -->
  <g filter="url(#neonGlow)">
    <!-- Left Burst (Cyan/Teal) -->
    <g transform="translate(-100, -50)">
      ${Array.from({ length: 8 }).map((_, i) => {
        const rad = (i * 45 * Math.PI) / 180;
        return `<line x1="0" y1="0" x2="${Math.cos(rad) * 45}" y2="${Math.sin(rad) * 45}" stroke="#00F2FE" stroke-width="2.5"/>`;
      }).join('')}
      <circle cx="0" cy="0" r="7" fill="#FFF"/>
    </g>

    <!-- Center Giant Burst (Golden Brocade) -->
    <g transform="translate(0, -60)">
      ${Array.from({ length: 14 }).map((_, i) => {
        const rad = (i * 25.7 * Math.PI) / 180;
        return `<line x1="0" y1="0" x2="${Math.cos(rad) * 75}" y2="${Math.sin(rad) * 75}" stroke="#FFD700" stroke-width="3"/>`;
      }).join('')}
      <circle cx="0" cy="0" r="11" fill="#FFF"/>
    </g>

    <!-- Right Burst (Magenta/Violet) -->
    <g transform="translate(100, -40)">
      ${Array.from({ length: 10 }).map((_, i) => {
        const rad = (i * 36 * Math.PI) / 180;
        return `<line x1="0" y1="0" x2="${Math.cos(rad) * 50}" y2="${Math.sin(rad) * 50}" stroke="#FF007F" stroke-width="2.5"/>`;
      }).join('')}
      <circle cx="0" cy="0" r="8" fill="#FFF"/>
    </g>
  </g>
  <!-- Foreground Festive Silhouettes -->
  <path d="M -160,80 Q -100,40 -40,75 Q 30,30 90,70 Q 150,45 180,80 Z" fill="#0D152D" stroke="rgba(255, 215, 0, 0.4)" stroke-width="1.5"/>
  `
);

const thumbnails = {
  'rocket.svg': rocketSvg,
  'anar.svg': anarSvg,
  'chakri.svg': chakriSvg,
  'flower-pot.svg': flowerPotSvg,
  'phuljhadi.svg': phuljhadiSvg,
  '100-wala-garland.svg': garlandSvg,
  'sky-shot.svg': skyShotSvg,
  'ground-spinner.svg': groundSpinnerSvg,
  'crackling.svg': cracklingSvg,
  'grand-finale.svg': grandFinaleSvg
};

console.log('Writing 10 unique SVG thumbnails...');
for (const [filename, content] of Object.entries(thumbnails)) {
  fs.writeFileSync(path.join(thumbsDir, filename), content.trim());
  console.log(`Saved thumbnail: ${filename}`);
}

// Diya icon for Header & Favicon
const diyaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="diyaGlow" cx="50%" cy="35%" r="50%">
      <stop offset="0%" stop-color="#FFD700" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#FF6B00" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#070B19" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="flameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="30%" stop-color="#FFF275"/>
      <stop offset="70%" stop-color="#FF8C00"/>
      <stop offset="100%" stop-color="#D90429"/>
    </linearGradient>
    <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE066"/>
      <stop offset="50%" stop-color="#E5A93B"/>
      <stop offset="100%" stop-color="#8C5310"/>
    </linearGradient>
    <filter id="flameBlur">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Ambient Glow -->
  <circle cx="100" cy="75" r="70" fill="url(#diyaGlow)"/>

  <!-- Ornate Diya Clay/Brass Base -->
  <!-- Base Stand -->
  <ellipse cx="100" cy="165" rx="38" ry="10" fill="url(#brassGrad)"/>
  <path d="M 85,160 Q 100,150 115,160 L 108,145 L 92,145 Z" fill="#8C5310"/>
  <!-- Main Bowl -->
  <path d="M 30,120 Q 100,170 170,120 Q 185,115 175,110 Q 100,125 25,110 Q 15,115 30,120 Z" fill="url(#brassGrad)" stroke="#FFD700" stroke-width="2"/>
  <!-- Bowl Rim -->
  <ellipse cx="100" cy="115" rx="72" ry="14" fill="#6A3805" stroke="#FFE066" stroke-width="1.5"/>
  <ellipse cx="100" cy="116" rx="66" ry="10" fill="#994D00"/>

  <!-- Diya Oil & Wick -->
  <ellipse cx="100" cy="117" rx="55" ry="7" fill="#4A2600"/>
  <path d="M 98,116 Q 100,95 100,85" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>

  <!-- Dancing Flame -->
  <g filter="url(#flameBlur)">
    <!-- Outer Flame -->
    <path d="M 100,40 C 85,65 82,85 100,95 C 118,85 115,65 100,40 Z" fill="url(#flameGrad)"/>
    <!-- Inner Core Flame -->
    <path d="M 100,55 C 92,70 90,82 100,88 C 110,82 108,70 100,55 Z" fill="#FFFFFF" opacity="0.9"/>
  </g>

  <!-- Sparkle Stars -->
  <circle cx="55" cy="50" r="2.5" fill="#FFD700"/>
  <circle cx="145" cy="55" r="2" fill="#FFE066"/>
  <circle cx="70" cy="30" r="1.5" fill="#FFF"/>
  <circle cx="130" cy="35" r="2" fill="#FFD700"/>
</svg>`;

fs.writeFileSync(path.join(iconsDir, 'diya.svg'), diyaSvg.trim());
console.log('Saved diya.svg');
