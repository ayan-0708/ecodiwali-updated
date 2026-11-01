const fs = require('fs');
const path = require('path');

// Ensure directories
const dirs = [
  'assets',
  'assets/videos',
  'assets/audio',
  'assets/thumbnails',
  'assets/icons'
];

for (const d of dirs) {
  const full = path.join(__dirname, '..', d);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
}

console.log('Directories created successfully.');

// Helper to write WAV header + PCM buffer
function createWavBuffer(sampleRate, samples) {
  const numChannels = 1;
  const bytesPerSample = 2; // 16-bit
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = samples.length * bytesPerSample;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);

  // fmt subchunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // SubChunk1Size (16 for PCM)
  buffer.writeUInt16LE(1, 20); // AudioFormat (1 = PCM)
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bytesPerSample * 8, 34);

  // data subchunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  // Write samples with soft clipping
  for (let i = 0; i < samples.length; i++) {
    let s = samples[i];
    // soft limiter / tanh-like saturation
    if (s > 1.0) s = 1.0;
    else if (s < -1.0) s = -1.0;
    const val = Math.floor(s * 32767);
    buffer.writeInt16LE(val, 44 + i * 2);
  }

  return buffer;
}

const sampleRate = 22050;

// Random Gaussian/Uniform generator
function whiteNoise() {
  return Math.random() * 2 - 1;
}

// 1. ROCKET (4.5s)
// Ignition hiss + rising whistle + aerial explosion + sparkling crackle decay
function generateRocketAudio() {
  const duration = 4.5;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  let whistlePhase = 0;
  const burstTime = 2.2;
  const burstSample = Math.floor(burstTime * sampleRate);

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let s = 0;

    if (t < burstTime) {
      // Ascending stage
      const progress = t / burstTime;
      // Rising whistle from 450Hz to 2400Hz
      const freq = 450 + 1950 * Math.pow(progress, 2.2);
      const tremolo = 0.8 + 0.2 * Math.sin(2 * Math.PI * 30 * t);
      whistlePhase += (2 * Math.PI * freq) / sampleRate;
      const whistle = Math.sin(whistlePhase) * (0.35 + 0.45 * progress) * tremolo;

      // Rocket exhaust hiss (high-pass noise)
      const hiss = whiteNoise() * (0.2 + 0.3 * progress) * (Math.random() > 0.3 ? 1 : 0);
      s = whistle * 0.7 + hiss * 0.3;
    } else {
      // Aerial burst
      const burstT = t - burstTime;
      // Deep bass boom (60Hz resonant sub-bass with rapid decay)
      const boomFreq = Math.max(35, 95 - burstT * 60);
      const boom = Math.sin(2 * Math.PI * boomFreq * burstT) * Math.exp(-burstT * 4.5) * 1.0;
      // Explosive shockwave crack
      const crack = whiteNoise() * Math.exp(-burstT * 12.0) * 0.9;
      // Falling crackle sparkles
      let crackle = 0;
      if (burstT > 0.1 && burstT < 2.0) {
        if (Math.random() < 0.08 * (1 - burstT / 2.0)) {
          crackle = (Math.random() * 2 - 1) * 0.7;
        }
      }
      s = boom * 0.6 + crack * 0.5 + crackle * 0.4;
    }
    samples[i] = s;
  }
  return samples;
}

// 2. ANAR (Golden Fountain) (7.0s)
// Swelling, roaring fountain of sparks with micro-pops and crackles
function generateAnarAudio() {
  const duration = 7.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    // Volume envelope: rise up to 2.5s, sustain to 5.5s, die down to 7.0s
    let env = 0;
    if (t < 1.0) env = (t / 1.0) * 0.6;
    else if (t < 5.0) env = 0.6 + 0.35 * Math.sin((t - 1.0) * 0.5);
    else env = 0.95 * (1 - (t - 5.0) / 2.0);
    env = Math.max(0, env);

    // Filtered rushing hiss + micro crackles
    const noise = whiteNoise();
    let crackle = 0;
    if (Math.random() < 0.06 * env) {
      crackle = (Math.random() * 2 - 1) * 0.8;
    }
    // High frequency sizzle
    const sizzle = (Math.sin(2 * Math.PI * 1800 * t) + Math.sin(2 * Math.PI * 3400 * t)) * 0.15;
    samples[i] = (noise * 0.5 + crackle * 0.4 + sizzle * 0.2) * env;
  }
  return samples;
}

// 3. CHAKRI (Ground Wheel) (6.5s)
// Fast cyclic whirring Doppler modulation + ground friction sizzle
function generateChakriAudio() {
  const duration = 6.5;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  let phase = 0;
  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let env = 1.0;
    if (t < 0.5) env = t / 0.5;
    else if (t > 5.5) env = (6.5 - t) / 1.0;
    env = Math.max(0, env);

    // Spin speed: 8 to 14 Hz rotation
    const rotSpeed = 10 + 4 * Math.sin(t * 0.8);
    const mod = 0.5 + 0.5 * Math.sin(2 * Math.PI * rotSpeed * t);
    // Whir tone
    const centerFreq = 420 + 200 * mod;
    phase += (2 * Math.PI * centerFreq) / sampleRate;
    const whir = Math.sin(phase) * 0.3;
    // Friction hiss
    const hiss = whiteNoise() * (0.3 + 0.4 * mod);
    samples[i] = (whir * 0.4 + hiss * 0.6) * env;
  }
  return samples;
}

// 4. FLOWER POT (6.0s)
// Fountain eruption with 3 multi-stage explosive blossom bursts
function generateFlowerPotAudio() {
  const duration = 6.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  const burstTimes = [1.6, 3.2, 4.6];

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let env = 0.5;
    if (t < 0.8) env = t / 0.8;
    else if (t > 5.2) env = Math.max(0, (6.0 - t) / 0.8);

    const baseHiss = whiteNoise() * 0.35 * env;

    // Blossoming bursts
    let burstEnergy = 0;
    for (const bt of burstTimes) {
      if (t >= bt && t < bt + 0.8) {
        const dt = t - bt;
        const pop = Math.sin(2 * Math.PI * (120 - dt * 80) * dt) * Math.exp(-dt * 6.0);
        const crack = whiteNoise() * Math.exp(-dt * 8.0) * (Math.random() > 0.2 ? 1 : 0);
        burstEnergy += pop * 0.5 + crack * 0.5;
      }
    }
    samples[i] = (baseHiss + burstEnergy * 0.7) * env;
  }
  return samples;
}

// 5. PHULJHADI (Sparkler) (8.0s)
// Gentle, delicate, mesmerizing sparkling sizzle with crisp micro-pops
function generatePhuljhadiAudio() {
  const duration = 8.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let env = 1.0;
    if (t < 0.4) env = t / 0.4;
    else if (t > 7.2) env = Math.max(0, (8.0 - t) / 0.8);

    // Warm high-frequency bed
    const bed = whiteNoise() * 0.15;
    // Rapid random sparkle snaps
    let sparkle = 0;
    if (Math.random() < 0.04) {
      sparkle = (Math.random() * 2 - 1) * 0.6;
    }
    samples[i] = (bed + sparkle) * env;
  }
  return samples;
}

// 6. 100 WALA GARLAND (12.0s)
// Dedicated continuous longer sound: 100 rapid percussive machine-gun pops accelerating to thunderous crescendo!
function generateGarlandAudio() {
  const duration = 12.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  // Create 100 individual firecracker pops distributed over 0.5s to 10.5s
  const pops = [];
  const numPops = 100;
  for (let p = 0; p < numPops; p++) {
    // Accelerating curve: early pops are ~100ms apart, later pops are ~40ms apart
    const progress = p / numPops;
    // non-linear distribution
    const popTime = 0.5 + 9.8 * Math.pow(progress, 0.85) + (Math.random() - 0.5) * 0.04;
    pops.push(popTime);
  }

  // Final 3 mega-salute pops at 10.8s, 11.2s, 11.6s
  pops.push(10.8, 11.2, 11.6);

  // Fuse sound during first 0.8s
  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let s = 0;

    // Fuse hiss
    if (t < 0.8) {
      s += whiteNoise() * 0.2 * (1 - t / 0.8);
    }

    // Check pops active at time t
    for (const pt of pops) {
      if (t >= pt && t < pt + 0.18) {
        const dt = t - pt;
        // Punchy low-end crack (130Hz rapidly dropping)
        const punch = Math.sin(2 * Math.PI * Math.max(60, 160 - dt * 800) * dt) * Math.exp(-dt * 30.0);
        // Sharp explosion snap
        const snap = whiteNoise() * Math.exp(-dt * 45.0) * 0.8;
        // End salutes have huge bass
        const isSalute = pt >= 10.7;
        const mult = isSalute ? 1.6 : 1.0;
        s += (punch * 0.6 + snap * 0.7) * mult;
      }
    }

    // Background smoke rumble during the flurry
    if (t > 1.0 && t < 11.8) {
      const rumble = whiteNoise() * 0.08 * Math.sin(2 * Math.PI * 45 * t);
      s += rumble;
    }

    samples[i] = s;
  }
  return samples;
}

// 7. SKY SHOT (5.0s)
// Mortar tube launch thud -> whistling ascent -> colossal aerial detonation & chrysanthemum crackle
function generateSkyShotAudio() {
  const duration = 5.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  const burstTime = 1.7;

  let whistlePhase = 0;
  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let s = 0;

    if (t < 0.3) {
      // Tube launch thump (heavy 70Hz kick)
      const kick = Math.sin(2 * Math.PI * (80 - t * 150) * t) * Math.exp(-t * 12.0);
      s += kick * 0.9;
    }

    if (t < burstTime) {
      // Ascending streak
      const streakProgress = t / burstTime;
      const freq = 600 + 1400 * streakProgress;
      whistlePhase += (2 * Math.PI * freq) / sampleRate;
      s += Math.sin(whistlePhase) * 0.15 * streakProgress;
    } else {
      // Massive aerial explosion
      const bt = t - burstTime;
      // Colossal sub-bass shockwave
      const sub = Math.sin(2 * Math.PI * Math.max(30, 80 - bt * 35) * bt) * Math.exp(-bt * 2.8) * 1.0;
      // Sharp crack
      const crack = whiteNoise() * Math.exp(-bt * 14.0) * 0.9;
      // Wide glittering chrysanthemum sparkles
      let sparkle = 0;
      if (bt > 0.15 && bt < 2.5) {
        if (Math.random() < 0.07 * (1 - bt / 2.5)) {
          sparkle = (Math.random() * 2 - 1) * 0.6;
        }
      }
      s += sub * 0.7 + crack * 0.5 + sparkle * 0.45;
    }

    samples[i] = s;
  }
  return samples;
}

// 8. GROUND SPINNER (5.0s)
// High speed buzzing hum with erratic floor friction zips
function generateGroundSpinnerAudio() {
  const duration = 5.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  let phase = 0;
  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let env = 1.0;
    if (t < 0.3) env = t / 0.3;
    else if (t > 4.2) env = Math.max(0, (5.0 - t) / 0.8);

    // 16Hz jitter modulation
    const mod = Math.sin(2 * Math.PI * 16 * t);
    const freq = 550 + 250 * mod;
    phase += (2 * Math.PI * freq) / sampleRate;
    const tone = Math.sin(phase) * 0.25;

    // Buzz & friction
    const friction = whiteNoise() * 0.35 * (0.6 + 0.4 * mod);
    samples[i] = (tone + friction) * env;
  }
  return samples;
}

// 9. CRACKLING (6.0s)
// Dense cluster of snappy electric pops (dragon eggs effect)
function generateCracklingAudio() {
  const duration = 6.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let env = 1.0;
    if (t < 0.4) env = t / 0.4;
    else if (t > 5.2) env = Math.max(0, (6.0 - t) / 0.8);

    let crack = 0;
    // High probability of sharp burst impulses
    if (Math.random() < 0.14) {
      crack = (Math.random() * 2 - 1) * 0.85;
    }
    const sizzle = whiteNoise() * 0.15;
    samples[i] = (crack + sizzle) * env;
  }
  return samples;
}

// 10. GRAND FINALE (14.0s)
// Multi-burst symphonic sequence: whistling rockets, rolling salvos, brocades, and colossal final salvo
function generateGrandFinaleAudio() {
  const duration = 14.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);

  // Major burst milestones
  const bursts = [1.2, 2.5, 3.8, 5.0, 6.2, 7.5, 8.8, 9.8, 10.8, 11.5, 12.0, 12.4];

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let s = 0;

    // Background rolling thunder / roar
    if (t > 1.0 && t < 13.5) {
      const rumble = whiteNoise() * 0.12 * Math.sin(2 * Math.PI * 40 * t);
      s += rumble;
    }

    // Active bursts
    for (const bt of bursts) {
      if (t >= bt && t < bt + 1.8) {
        const dt = t - bt;
        const isFinalePeak = bt >= 11.5;
        const amp = isFinalePeak ? 1.4 : 0.8;
        const boom = Math.sin(2 * Math.PI * Math.max(35, 90 - dt * 45) * dt) * Math.exp(-dt * 3.5);
        const crack = whiteNoise() * Math.exp(-dt * 12.0) * 0.7;
        let sparkle = 0;
        if (dt > 0.1 && dt < 1.4 && Math.random() < 0.08) {
          sparkle = (Math.random() * 2 - 1) * 0.5;
        }
        s += (boom * 0.5 + crack * 0.4 + sparkle * 0.3) * amp;
      }
    }

    // Occasional ascending whistle
    if ((t > 0.2 && t < 1.2) || (t > 3.0 && t < 3.8) || (t > 6.5 && t < 7.5) || (t > 9.0 && t < 9.8)) {
      const whistle = Math.sin(2 * Math.PI * (600 + t * 400) * t) * 0.15;
      s += whistle;
    }

    samples[i] = s;
  }
  return samples;
}

// Map firework varieties to generators
const audioGenerators = {
  'rocket.wav': generateRocketAudio,
  'anar.wav': generateAnarAudio,
  'chakri.wav': generateChakriAudio,
  'flower-pot.wav': generateFlowerPotAudio,
  'phuljhadi.wav': generatePhuljhadiAudio,
  '100-wala-garland.wav': generateGarlandAudio,
  'sky-shot.wav': generateSkyShotAudio,
  'ground-spinner.wav': generateGroundSpinnerAudio,
  'crackling.wav': generateCracklingAudio,
  'grand-finale.wav': generateGrandFinaleAudio
};

console.log('Generating 10 realistic sound effect files...');
for (const [filename, generator] of Object.entries(audioGenerators)) {
  const pcm = generator();
  const buffer = createWavBuffer(sampleRate, pcm);
  const targetPath = path.join(__dirname, '..', 'assets', 'audio', filename);
  fs.writeFileSync(targetPath, buffer);
  console.log(`Generated: ${filename} (${buffer.length} bytes)`);
}

// Generate clearly labelled placeholder MP4 files
// Note: Per user prompt:
// "If genuine footage is not yet available, create clearly labelled sample asset placeholders and an asset replacement guide. Never pretend a placeholder is real footage."
const videoFiles = [
  { name: 'rocket.mp4', label: 'Rocket (Sample Placeholder)', duration: '4.5s' },
  { name: 'anar.mp4', label: 'Anar / Golden Fountain (Sample Placeholder)', duration: '7.0s' },
  { name: 'chakri.mp4', label: 'Chakri / Ground Wheel (Sample Placeholder)', duration: '6.5s' },
  { name: 'flower-pot.mp4', label: 'Flower Pot (Sample Placeholder)', duration: '6.0s' },
  { name: 'phuljhadi.mp4', label: 'Phuljhadi / Sparkler (Sample Placeholder)', duration: '8.0s' },
  { name: '100-wala-garland.mp4', label: '100 Wala Garland (Sample Placeholder - Dedicated)', duration: '12.0s' },
  { name: 'sky-shot.mp4', label: 'Sky Shot / Aerial Shell (Sample Placeholder)', duration: '5.0s' },
  { name: 'ground-spinner.mp4', label: 'Ground Spinner (Sample Placeholder)', duration: '5.0s' },
  { name: 'crackling.mp4', label: 'Crackling Effects (Sample Placeholder)', duration: '6.0s' },
  { name: 'grand-finale.mp4', label: 'Grand Finale Barrage (Sample Placeholder)', duration: '14.0s' }
];

console.log('Creating clearly labelled placeholder MP4 files and replacement markers...');
for (const v of videoFiles) {
  const targetPath = path.join(__dirname, '..', 'assets', 'videos', v.name);
  // Create an informative structured placeholder file with header metadata
  const content = `[EcoDiwali Next - Sample Video Asset Placeholder]
Variety: ${v.label}
Filename: ${v.name}
Target Duration: ${v.duration}
Status: SAMPLE ASSET PLACEHOLDER (Ready for real H.264 MP4 footage replacement)

HOW TO REPLACE:
1. Obtain high-quality MP4 footage (H.264 video, AAC audio recommended).
2. Save or copy your genuine firework video over this exact file: assets/videos/${v.name}
3. Refresh the EcoDiwali Next web app. The video player will instantly detect and stream your real footage!
`;
  fs.writeFileSync(targetPath, Buffer.from(content, 'utf-8'));
  console.log(`Created video placeholder: ${v.name}`);
}

console.log('Assets created successfully.');
