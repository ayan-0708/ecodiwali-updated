/**
 * EcoDiwali Next — Master Application Script
 * Slogan: "Celebrate the Light, Protect the Earth."
 * Footer: "Built by AICTE lab members"
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Data Models & Catalogs
  // --------------------------------------------------------------------------

  const FIREWORKS_CATALOG = [
    {
      id: 'rocket',
      name: 'Rocket',
      hindiName: 'रॉकेट',
      category: 'aerial',
      duration: '4.5s',
      durationSec: 4.5,
      typeLabel: 'AERIAL SHELL',
      desc: 'High altitude streak with loud whistling ascent and brilliant golden starburst.',
      ecoFact: 'Zero atmospheric particulate fall, 100% aerial thrills.',
      videoSrc: 'assets/videos/rocket.mp4',
      audioSrc: 'assets/audio/rocket.wav',
      thumbSrc: 'assets/thumbnails/rocket.svg',
      featured: false
    },
    {
      id: 'anar',
      name: 'Anar (Golden Fountain)',
      hindiName: 'अनार',
      category: 'fountain',
      duration: '7.0s',
      durationSec: 7.0,
      typeLabel: 'FOUNTAIN',
      desc: 'Majestic conical fountain spewing an expansive canopy of golden and silver cascading sparks.',
      ecoFact: 'Zero ground chemical residue, prevents pet burns.',
      videoSrc: 'assets/videos/anar.mp4',
      audioSrc: 'assets/audio/anar.wav',
      thumbSrc: 'assets/thumbnails/anar.svg',
      featured: false
    },
    {
      id: 'chakri',
      name: 'Chakri (Ground Wheel)',
      hindiName: 'चकरी',
      category: 'ground',
      duration: '6.5s',
      durationSec: 6.5,
      typeLabel: 'GROUND WHEEL',
      desc: 'High-speed spinning ground chakra projecting mesmerizing centrifugal rings of fiery light.',
      ecoFact: 'No floor scorching or toxic sulfur fumes.',
      videoSrc: 'assets/videos/chakri.mp4',
      audioSrc: 'assets/audio/chakri.wav',
      thumbSrc: 'assets/thumbnails/chakri.svg',
      featured: false
    },
    {
      id: 'flower-pot',
      name: 'Flower Pot',
      hindiName: 'फूलझरना',
      category: 'fountain',
      duration: '6.0s',
      durationSec: 6.0,
      typeLabel: 'FOUNTAIN BLOSSOM',
      desc: 'Earthen pot erupting into multi-stage blossoms of vibrant magenta, turquoise, and gold.',
      ecoFact: 'Pure digital radiance with zero heavy metal fallout.',
      videoSrc: 'assets/videos/flower-pot.mp4',
      audioSrc: 'assets/audio/flower-pot.wav',
      thumbSrc: 'assets/thumbnails/flower-pot.svg',
      featured: false
    },
    {
      id: 'phuljhadi',
      name: 'Phuljhadi (Sparkler)',
      hindiName: 'फुलझड़ी',
      category: 'ground',
      duration: '8.0s',
      durationSec: 8.0,
      typeLabel: 'SPARKLER',
      desc: 'Handheld sparkler with dancing glitter stars, delicate crackles, and warm festive ambiance.',
      ecoFact: 'Safe for children of all ages without fire hazards.',
      videoSrc: 'assets/videos/phuljhadi.mp4',
      audioSrc: 'assets/audio/phuljhadi.wav',
      thumbSrc: 'assets/thumbnails/phuljhadi.svg',
      featured: false
    },
    {
      id: '100-wala-garland',
      name: '100 Wala Garland',
      hindiName: '१०० वाला लड़ी',
      category: 'featured',
      duration: '12.0s',
      durationSec: 12.0,
      typeLabel: '⚡ FEATURED SPECIAL',
      desc: 'Iconic continuous rapid-fire chain celebration with thunderous pops, smoke, and crescendo finale.',
      ecoFact: 'Avoids 480g of dense hazardous PM2.5 smog.',
      videoSrc: 'assets/videos/100-wala-garland.mp4',
      audioSrc: 'assets/audio/100-wala-garland.wav',
      thumbSrc: 'assets/thumbnails/100-wala-garland.svg',
      featured: true
    },
    {
      id: 'sky-shot',
      name: 'Sky Shot',
      hindiName: 'स्काई शॉट',
      category: 'aerial',
      duration: '5.0s',
      durationSec: 5.0,
      typeLabel: 'HIGH CALIBER',
      desc: 'Single high-caliber shell with deep mortar launch thud and huge glittering palm break.',
      ecoFact: 'Clean night skies with zero noise pollution for birds.',
      videoSrc: 'assets/videos/sky-shot.mp4',
      audioSrc: 'assets/audio/sky-shot.wav',
      thumbSrc: 'assets/thumbnails/sky-shot.svg',
      featured: false
    },
    {
      id: 'ground-spinner',
      name: 'Ground Spinner',
      hindiName: 'ग्राउंड स्पिनर',
      category: 'ground',
      duration: '5.0s',
      durationSec: 5.0,
      typeLabel: 'GROUND SPEED',
      desc: 'Fast-spinning, jittering floor disc spewing electric amber and neon sparks.',
      ecoFact: 'Zero danger of sparks flying into curtains or fabrics.',
      videoSrc: 'assets/videos/ground-spinner.mp4',
      audioSrc: 'assets/audio/ground-spinner.wav',
      thumbSrc: 'assets/thumbnails/ground-spinner.svg',
      featured: false
    },
    {
      id: 'crackling',
      name: 'Crackling Effects',
      hindiName: 'कड़कड़ाहट',
      category: 'crackling',
      duration: '6.0s',
      durationSec: 6.0,
      typeLabel: 'ELECTRIC FLASH',
      desc: 'Dense cluster of rapid electric pops and dazzling dragon egg sparkle barrages.',
      ecoFact: 'Eliminates toxic lead and antimony exposure.',
      videoSrc: 'assets/videos/crackling.mp4',
      audioSrc: 'assets/audio/crackling.wav',
      thumbSrc: 'assets/thumbnails/crackling.svg',
      featured: false
    },
    {
      id: 'grand-finale',
      name: 'Grand Finale',
      hindiName: 'महा आतिशबाजी',
      category: 'aerial',
      duration: '14.0s',
      durationSec: 14.0,
      typeLabel: '★ GRAND FINALE',
      desc: 'Massive synchronized multi-shot aerial symphony filling the midnight sky with brocades.',
      ecoFact: 'Conserves urban air quality while maximizing visual bliss.',
      videoSrc: 'assets/videos/grand-finale.mp4',
      audioSrc: 'assets/audio/grand-finale.wav',
      thumbSrc: 'assets/thumbnails/grand-finale.svg',
      featured: false
    }
  ];

  const QUIZ_QUESTIONS = [
    {
      category: 'AIR QUALITY & SMOG',
      question: 'How do traditional chemical fireworks impact urban Air Quality Index (AQI) during Diwali night?',
      options: [
        'They have no noticeable effect on air quality',
        'They cause AQI to spike into the "Severe" and "Hazardous" range (>400 PM2.5)',
        'They actually clean the air by burning dust particles',
        'They only release harmless water vapor'
      ],
      correctIndex: 1,
      explanation: 'Chemical fireworks emit massive volumes of toxic PM2.5, sulfur dioxide, and nitrogen oxides, pushing AQI well above 400 in many cities.',
      ecoTip: 'Virtual celebrations like EcoDiwali Next generate 0.0g of PM2.5!'
    },
    {
      category: 'GREEN CRACKERS',
      question: 'What are "Green Crackers" (developed by CSIR-NEERI) specifically engineered to achieve?',
      options: [
        'They are made entirely of edible candy ingredients',
        'They reduce particulate matter (PM) emissions by approximately 30% without toxic barium',
        'They produce zero noise and zero light',
        'They are painted green on the outside'
      ],
      correctIndex: 1,
      explanation: 'Green crackers formulated by CSIR-NEERI (such as SWAS, STAR, and SAFAL) eliminate toxic barium nitrate and reduce emissions by ~30%, though virtual celebrations remain the cleanest option.',
      ecoTip: 'Look for the official CSIR-NEERI QR code if purchasing physical green fireworks.'
    },
    {
      category: 'PET & ANIMAL WELFARE',
      question: 'Why are dogs, cats, and birds terrified by loud explosive firecrackers like bombs and chains?',
      options: [
        'Animals simply dislike bright colors',
        'Dogs have hearing up to 4 times more sensitive than humans, making explosions agonizingly painful',
        'Animals prefer fireworks with higher pitch',
        'Only street animals are affected, domestic pets are immune'
      ],
      correctIndex: 1,
      explanation: 'Canines can hear frequencies up to 45,000 Hz with acute sensitivity. High decibel crackers cause intense acoustic trauma, disorientation, and panic.',
      ecoTip: 'Celebrating virtually protects millions of neighborhood dogs and birds from terror.'
    },
    {
      category: 'HEAVY METALS',
      question: 'Which toxic heavy metal was traditionally used in firecrackers to produce brilliant red flashes, known for harming human lungs?',
      options: [
        'Strontium and Barium compounds',
        'Natural sugarcane extract',
        'Common kitchen salt',
        'Pure filtered rain water'
      ],
      correctIndex: 0,
      explanation: 'Strontium carbonate creates red hues and Barium nitrate creates green. Inhaling their combusted oxides can aggravate asthma and cardiovascular ailments.',
      ecoTip: 'Digital pixels simulate every festive hue with zero toxic residue!'
    },
    {
      category: 'HERITAGE TRADITIONS',
      question: 'What is the traditional, biodegradable material used for authentic Deepawali Diyas for centuries?',
      options: [
        'Non-recyclable single-use plastic',
        'Natural unglazed earthen clay (Mitti)',
        'Styrofoam polymers',
        'Synthetic chemical resins'
      ],
      correctIndex: 1,
      explanation: 'Earthen clay (Mitti) diyas handcrafted by local potters are 100% biodegradable, sustainable, and directly support traditional rural artisans.',
      ecoTip: 'Lighting clay diyas preserves heritage and generates zero plastic waste.'
    },
    {
      category: 'HAZARDOUS PARTICULATES',
      question: 'Roughly how much hazardous smoke and toxic powder does a conventional 100-Wala garland chain release?',
      options: [
        'Less than 1 milligram',
        'Up to 400-500 grams of toxic chemical dust and sulfur fumes',
        'Only pure clean oxygen',
        'About 5 drops of scented essential oil'
      ],
      correctIndex: 1,
      explanation: 'A 100-cracker ladi burns rapidly in seconds, releasing nearly half a kilogram of concentrated smoke, sulfur, and paper debris directly into street-level breathing zones.',
      ecoTip: 'Our special 100-Wala digital player delivers the continuous sound and spectacle without the toxic cloud.'
    },
    {
      category: 'VIRTUAL ADVANTAGE',
      question: 'What is a key safety and environmental advantage of digital Diwali celebrations?',
      options: [
        'Zero burn injuries, zero hospital visits, zero smog, and zero fire hazard',
        'Requires continuous expensive chemical fuel',
        'Can only be enjoyed during daytime',
        'Leaves mounds of burnt paper trash on sidewalks'
      ],
      correctIndex: 0,
      explanation: 'Virtual Diwali prevents thousands of accidental eye and hand burns each year while keeping the air pure for children, asthmatics, and senior citizens.',
      ecoTip: 'Share EcoDiwali Next with your family group for an injury-free festival!'
    },
    {
      category: 'VULNERABLE HEALTH',
      question: 'Which groups of people suffer the most severe immediate health impacts from Diwali chemical smog?',
      options: [
        'Only professional marathon runners',
        'Newborn infants, pregnant women, elderly citizens, and asthma patients',
        'People who stay asleep indoors',
        'Only deep-sea divers'
      ],
      correctIndex: 1,
      explanation: 'Microscopic PM2.5 penetrates deep into the alveoli of developing infant lungs and triggers acute bronchospasms in asthmatics and elderly cardiac patients.',
      ecoTip: 'Clean air is the greatest gift of life we can give to our elders and children.'
    },
    {
      category: 'SPIRITUAL ESSENCE',
      question: 'In traditional Indian heritage, what does the lighting of the Deepa (Diya) spiritually symbolize?',
      options: [
        'Victory of light over darkness, and knowledge over ignorance',
        'Making the loudest noise in the neighborhood',
        'Displaying wealth through chemical smoke',
        'Burning unnecessary resources'
      ],
      correctIndex: 0,
      explanation: '"Tamaso ma jyotir gamaya" — From darkness lead us unto light. The true spirit of Diwali is celebrating inner illumination, compassion, and harmony with nature.',
      ecoTip: 'Celebrate the Light, Protect the Earth!'
    },
    {
      category: 'ECO RANGOLI',
      question: 'What is the most environmentally friendly way to create traditional floor Rangolis?',
      options: [
        'Using synthetic chemical enamel spray paints',
        'Using natural flower petals, turmeric (haldi), rice flour, and herbal gulal',
        'Using industrial plastic stickers',
        'Pouring colored motor oil on the ground'
      ],
      correctIndex: 1,
      explanation: 'Natural rangolis made from marigold petals, rice flour, and turmeric decompose naturally into nutrient-rich garden compost.',
      ecoTip: 'Try our Rangoli Studio to draft your designs before laying real flower petals!'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. State & Storage Management
  // --------------------------------------------------------------------------

  const STORAGE_KEY = 'ecodiwali_next_v1';
  const LOW_DATA_KEY = 'ecodiwali_low_data';

  let appState = {
    diyasLit: 0,
    fireworksWatched: [],
    rangolisSaved: 0,
    quizBestScore: 0,
    quizCompleted: false,
    cardsCreated: 0
  };

  let isAudioEnabled = false;
  let isLowDataMode = false;
  let activeTab = 'home';
  let currentFirework = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        appState = Object.assign(appState, parsed);
        if (!Array.isArray(appState.fireworksWatched)) {
          appState.fireworksWatched = [];
        }
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }

    try {
      isLowDataMode = localStorage.getItem(LOW_DATA_KEY) === 'true';
    } catch (e) {}
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
    updateProfileUI();
  }

  // --------------------------------------------------------------------------
  // 3. Audio & Haptic System
  // --------------------------------------------------------------------------

  let audioContext = null;

  function initAudioContext() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioContext = new AudioCtx();
      }
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  function triggerHaptic(pattern) {
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  function playBellChime() {
    if (!isAudioEnabled) return;
    initAudioContext();
    if (!audioContext) return;

    try {
      const now = audioContext.currentTime;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now); // A5
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.8);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.9);
    } catch (e) {}
  }

  // --------------------------------------------------------------------------
  // 4. UI Toast Notification
  // --------------------------------------------------------------------------

  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 5. Navigation Tab Switching
  // --------------------------------------------------------------------------

  function switchTab(tabId) {
    activeTab = tabId;

    // Update bottom nav buttons
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    navButtons.forEach(btn => {
      const target = btn.getAttribute('data-target');
      const isActive = target === tabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update views
    const views = document.querySelectorAll('.view-section');
    views.forEach(v => {
      const id = v.id.replace('view-', '');
      v.classList.toggle('active', id === tabId);
    });

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Haptic feedback
    triggerHaptic(12);

    // Tab-specific initializations
    if (tabId === 'greeting') {
      renderGreetingCard();
    } else if (tabId === 'rangoli') {
      resizeRangoliCanvas();
    } else if (tabId === 'profile') {
      updateProfileUI();
    }
  }

  // --------------------------------------------------------------------------
  // 6. Home Screen & Diya Lighting Interaction
  // --------------------------------------------------------------------------

  function initHomeScreen() {
    const lightDiyaBtn = document.getElementById('lightDiyaBtn');
    const homeDiyasCount = document.getElementById('homeDiyasCount');
    const startCelebrationBtn = document.getElementById('startCelebrationBtn');
    const homeGarlandCard = document.getElementById('homeGarlandCard');

    if (homeDiyasCount) {
      homeDiyasCount.textContent = appState.diyasLit;
    }

    if (lightDiyaBtn) {
      lightDiyaBtn.addEventListener('click', () => {
        appState.diyasLit++;
        saveState();
        if (homeDiyasCount) homeDiyasCount.textContent = appState.diyasLit;

        // Visual bounce
        const img = document.getElementById('heroDiyaImg');
        if (img) {
          img.style.transform = 'scale(1.25) rotate(5deg)';
          setTimeout(() => {
            img.style.transform = 'scale(1) rotate(0deg)';
          }, 240);
        }

        // Haptic + Audio
        triggerHaptic([30, 40, 50]);
        playBellChime();

        showToast(`✨ Virtual Diya #${appState.diyasLit} kindled for Mother Earth!`);
      });
    }

    if (startCelebrationBtn) {
      startCelebrationBtn.addEventListener('click', () => {
        switchTab('fireworks');
      });
    }

    if (homeGarlandCard) {
      homeGarlandCard.addEventListener('click', () => {
        const garland = FIREWORKS_CATALOG.find(f => f.id === '100-wala-garland');
        if (garland) openVideoPlayer(garland);
      });
    }

    // Quick launch feature cards
    document.querySelectorAll('.feature-card[data-nav]').forEach(card => {
      card.addEventListener('click', () => {
        const nav = card.getAttribute('data-nav');
        if (nav) switchTab(nav);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Firecracker Collection Rendering & Search
  // --------------------------------------------------------------------------

  function renderFireworksGrid(items) {
    const grid = document.getElementById('fireworksCardsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (items.length === 0) {
      grid.innerHTML = `
        <div class="glass-card" style="padding: 24px; text-align: center; grid-column: 1 / -1;">
          <p style="color: var(--text-muted); font-size: 0.95rem;">No firecrackers matched your search.</p>
        </div>
      `;
      return;
    }

    items.forEach(fw => {
      const card = document.createElement('div');
      card.className = 'firework-card glass-card';
      if (fw.featured) card.classList.add('featured-card');

      card.innerHTML = `
        <div class="firework-thumb-box" data-id="${fw.id}">
          <img src="${fw.thumbSrc}" alt="${fw.name}" loading="lazy">
          <div class="firework-play-badge">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="8 5 19 12 8 19 8 5"/></svg>
          </div>
          <span class="firework-duration-pill">⏱ ${fw.duration}</span>
        </div>
        <div class="firework-content">
          <div class="firework-top-row">
            <span class="firework-type-badge badge-${fw.category}">${fw.typeLabel}</span>
            <span class="chip-sound">🔊 High-Fi Audio</span>
          </div>
          <h4 class="firework-name">${fw.name} <span style="font-size: 0.85em; opacity: 0.8;">(${fw.hindiName})</span></h4>
          <p class="firework-desc">${fw.desc}</p>
          <div class="firework-eco-note">🌱 ${fw.ecoFact}</div>
          <div class="firework-action-row">
            <button class="primary-btn card-play-btn" data-id="${fw.id}">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 18 12 6 20 6 4"/></svg>
              <span>Watch Firework</span>
            </button>
          </div>
        </div>
      `;

      // Event handlers
      const thumb = card.querySelector('.firework-thumb-box');
      const playBtn = card.querySelector('.card-play-btn');

      const triggerOpen = () => openVideoPlayer(fw);
      if (thumb) thumb.addEventListener('click', triggerOpen);
      if (playBtn) playBtn.addEventListener('click', triggerOpen);

      grid.appendChild(card);
    });
  }

  function initFireworksSearch() {
    const searchInput = document.getElementById('fireworkSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const chips = document.querySelectorAll('.filter-chip');

    let currentCategory = 'all';

    function filterCatalog() {
      const query = (searchInput.value || '').trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';

      const filtered = FIREWORKS_CATALOG.filter(fw => {
        const matchesCategory = (currentCategory === 'all') ||
          (currentCategory === 'featured' && fw.featured) ||
          (fw.category === currentCategory);

        const matchesQuery = !query ||
          fw.name.toLowerCase().includes(query) ||
          fw.hindiName.toLowerCase().includes(query) ||
          fw.desc.toLowerCase().includes(query) ||
          fw.typeLabel.toLowerCase().includes(query);

        return matchesCategory && matchesQuery;
      });

      renderFireworksGrid(filtered);
    }

    if (searchInput) {
      searchInput.addEventListener('input', filterCatalog);
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterCatalog();
        searchInput.focus();
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-selected', 'true');
        currentCategory = chip.getAttribute('data-category');
        filterCatalog();
        triggerHaptic(10);
      });
    });

    renderFireworksGrid(FIREWORKS_CATALOG);
  }

  // --------------------------------------------------------------------------
  // 8. Real Video Player & Synchronized Simulation Fallback Engine
  // --------------------------------------------------------------------------

  let isPlayerPlaying = false;
  let playerCurrentTime = 0;
  let playerDuration = 10;
  let isUsingRealVideo = false;
  let simulationAnimFrameId = null;
  let simulationStartTime = 0;
  let simulationParticles = [];

  const videoModal = document.getElementById('videoModal');
  const fireworkVideo = document.getElementById('fireworkVideo');
  const fireworkAudio = document.getElementById('fireworkAudio');
  const simulationCanvas = document.getElementById('simulationCanvas');
  const simCtx = simulationCanvas ? simulationCanvas.getContext('2d') : null;
  const videoLoader = document.getElementById('videoLoader');
  const videoAssetBanner = document.getElementById('videoAssetBanner');
  const videoStatusPill = document.getElementById('videoStatusPill');
  const videoStatusText = document.getElementById('videoStatusText');
  const videoProgressFill = document.getElementById('videoProgressFill');
  const videoProgressHandle = document.getElementById('videoProgressHandle');
  const currentTimeLabel = document.getElementById('currentTimeLabel');
  const durationTimeLabel = document.getElementById('durationTimeLabel');
  const playPauseIcon = document.getElementById('playPauseIcon');

  function formatTime(seconds) {
    const s = Math.max(0, Math.floor(seconds || 0));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function openVideoPlayer(firework) {
    currentFirework = firework;
    playerDuration = firework.durationSec || 6;
    playerCurrentTime = 0;

    // Record activity in user stats
    if (!appState.fireworksWatched.includes(firework.id)) {
      appState.fireworksWatched.push(firework.id);
      saveState();
    }

    // Update modal title
    document.getElementById('videoModalTitle').textContent = `${firework.name} (${firework.hindiName})`;
    document.getElementById('videoModalSubtitle').textContent = firework.desc;
    document.getElementById('durationTimeLabel').textContent = formatTime(playerDuration);
    document.getElementById('currentTimeLabel').textContent = '00:00';

    // Show modal
    videoModal.classList.add('open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Configure Audio Source
    fireworkAudio.src = firework.audioSrc;
    fireworkAudio.currentTime = 0;
    fireworkAudio.muted = !isAudioEnabled;

    // Reset status & loader
    videoLoader.style.display = 'flex';
    videoAssetBanner.style.display = 'none';
    isUsingRealVideo = false;
    updateStatusPill(false, 'Inspecting Asset...');

    // Attempt HTML5 Video Load
    fireworkVideo.src = firework.videoSrc;
    fireworkVideo.currentTime = 0;
    fireworkVideo.muted = true; // Video muted, synchronized audio provides high-fidelity sound

    let videoDetected = false;

    // Timeout fallback: if video is not a playable H.264 MP4 file within 650ms, switch gracefully to Simulation
    const loadTimeout = setTimeout(() => {
      if (!videoDetected) {
        fallbackToSimulation('sample_placeholder');
      }
    }, 650);

    fireworkVideo.oncanplay = () => {
      // Check if real video has valid non-zero duration
      if (fireworkVideo.duration && fireworkVideo.duration > 0.5) {
        videoDetected = true;
        clearTimeout(loadTimeout);
        isUsingRealVideo = true;
        playerDuration = fireworkVideo.duration;
        durationTimeLabel.textContent = formatTime(playerDuration);

        fireworkVideo.classList.add('active-media');
        simulationCanvas.classList.remove('active-media');
        videoLoader.style.display = 'none';
        videoAssetBanner.style.display = 'none';
        updateStatusPill(true, 'REAL VIDEO STREAMING');

        playMedia();
      }
    };

    fireworkVideo.onerror = () => {
      clearTimeout(loadTimeout);
      if (!videoDetected) {
        fallbackToSimulation('missing_asset');
      }
    };
  }

  function fallbackToSimulation(reason) {
    isUsingRealVideo = false;
    fireworkVideo.classList.remove('active-media');
    simulationCanvas.classList.add('active-media');
    videoLoader.style.display = 'none';

    // Show the informative banner explaining sample preview mode
    videoAssetBanner.style.display = 'block';
    updateStatusPill(false, 'SAMPLE PREVIEW MODE');

    initSimulationParticles();
    playMedia();
  }

  function updateStatusPill(isReal, text) {
    if (!videoStatusPill || !videoStatusText) return;
    const dot = videoStatusPill.querySelector('.status-dot');
    if (dot) dot.classList.toggle('real-video', isReal);
    videoStatusText.textContent = text;
  }

  function playMedia() {
    isPlayerPlaying = true;
    updatePlayPauseUI(true);
    initAudioContext();

    if (isAudioEnabled) {
      fireworkAudio.play().catch(() => {});
    }

    if (isUsingRealVideo) {
      fireworkVideo.play().catch(() => {});
    } else {
      startSimulationLoop();
    }

    // Trigger haptic rumble for 100-Wala Garland
    if (currentFirework && currentFirework.id === '100-wala-garland') {
      triggerHaptic([40, 30, 40, 30, 50, 40, 50, 30, 60, 40, 80, 50, 100, 60, 120]);
    } else {
      triggerHaptic(20);
    }
  }

  function pauseMedia() {
    isPlayerPlaying = false;
    updatePlayPauseUI(false);

    fireworkAudio.pause();
    if (isUsingRealVideo) {
      fireworkVideo.pause();
    } else {
      cancelAnimationFrame(simulationAnimFrameId);
    }
  }

  function replayMedia() {
    seekMedia(0);
    playMedia();
  }

  function seekMedia(timeSec) {
    playerCurrentTime = Math.max(0, Math.min(timeSec, playerDuration));
    fireworkAudio.currentTime = playerCurrentTime;

    if (isUsingRealVideo) {
      fireworkVideo.currentTime = playerCurrentTime;
    } else {
      simulationStartTime = performance.now() - playerCurrentTime * 1000;
      initSimulationParticles();
    }
    updateProgressUI();
  }

  function closeVideoPlayer() {
    pauseMedia();
    videoModal.classList.remove('open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    fireworkVideo.pause();
    fireworkVideo.src = '';
    fireworkAudio.pause();
    fireworkAudio.src = '';
    cancelAnimationFrame(simulationAnimFrameId);
    currentFirework = null;
  }

  function updatePlayPauseUI(playing) {
    if (!playPauseIcon) return;
    if (playing) {
      playPauseIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    } else {
      playPauseIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    }
  }

  function updateProgressUI() {
    const progress = playerDuration > 0 ? (playerCurrentTime / playerDuration) : 0;
    const pct = Math.min(100, Math.max(0, progress * 100));

    if (videoProgressFill) videoProgressFill.style.width = `${pct}%`;
    if (videoProgressHandle) videoProgressHandle.style.left = `${pct}%`;
    if (currentTimeLabel) currentTimeLabel.textContent = formatTime(playerCurrentTime);
  }

  // --------------------------------------------------------------------------
  // 9. High-Definition Canvas Simulation Engine (Physics & Particle Art)
  // --------------------------------------------------------------------------

  function initSimulationParticles() {
    simulationParticles = [];
    simulationStartTime = performance.now() - playerCurrentTime * 1000;
  }

  function startSimulationLoop() {
    cancelAnimationFrame(simulationAnimFrameId);

    function loop(now) {
      if (!isPlayerPlaying) return;

      const elapsed = (now - simulationStartTime) / 1000;
      playerCurrentTime = elapsed;

      // Check if finished
      if (playerCurrentTime >= playerDuration) {
        playerCurrentTime = playerDuration;
        updateProgressUI();
        pauseMedia();
        return;
      }

      updateProgressUI();
      renderSimulationFrame(playerCurrentTime);

      simulationAnimFrameId = requestAnimationFrame(loop);
    }

    simulationAnimFrameId = requestAnimationFrame(loop);
  }

  function renderSimulationFrame(t) {
    if (!simCtx || !simulationCanvas) return;
    const w = simulationCanvas.width;
    const h = simulationCanvas.height;

    // Semi-transparent fade creates radiant motion trails
    simCtx.fillStyle = 'rgba(5, 8, 20, 0.22)';
    simCtx.fillRect(0, 0, w, h);

    const type = currentFirework ? currentFirework.id : 'rocket';

    switch (type) {
      case 'rocket':
        renderRocketSim(t, w, h);
        break;
      case 'anar':
        renderAnarSim(t, w, h);
        break;
      case 'chakri':
        renderChakriSim(t, w, h);
        break;
      case 'flower-pot':
        renderFlowerPotSim(t, w, h);
        break;
      case 'phuljhadi':
        renderPhuljhadiSim(t, w, h);
        break;
      case '100-wala-garland':
        renderGarlandSim(t, w, h);
        break;
      case 'sky-shot':
        renderSkyShotSim(t, w, h);
        break;
      case 'ground-spinner':
        renderGroundSpinnerSim(t, w, h);
        break;
      case 'crackling':
        renderCracklingSim(t, w, h);
        break;
      case 'grand-finale':
      default:
        renderGrandFinaleSim(t, w, h);
        break;
    }

    // Update & draw particle pool
    updateAndDrawParticles(w, h);
  }

  function updateAndDrawParticles(w, h) {
    for (let i = simulationParticles.length - 1; i >= 0; i--) {
      const p = simulationParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity || 0.08;
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.alpha -= p.decay || 0.015;

      if (p.alpha <= 0) {
        simulationParticles.splice(i, 1);
        continue;
      }

      simCtx.save();
      simCtx.globalAlpha = Math.max(0, p.alpha);
      simCtx.fillStyle = p.color;
      simCtx.beginPath();
      simCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      simCtx.fill();
      simCtx.restore();
    }
  }

  // Visualizers for all 10 Fireworks
  function renderRocketSim(t, w, h) {
    const burstTime = 2.2;
    if (t < burstTime) {
      const prog = t / burstTime;
      const rx = w / 2;
      const ry = h * 0.95 - prog * (h * 0.75);

      // Rocket streak
      simCtx.fillStyle = '#FFE066';
      simCtx.fillRect(rx - 2, ry, 4, 16);

      // Spark trail
      for (let i = 0; i < 4; i++) {
        simulationParticles.push({
          x: rx + (Math.random() - 0.5) * 6,
          y: ry + 16,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 3 + 2,
          size: Math.random() * 3 + 1,
          color: '#FF7700',
          alpha: 0.9,
          decay: 0.06
        });
      }
    } else if (t >= burstTime && t < burstTime + 0.1) {
      // Detonation burst: spawn 120 golden & cyan sparks
      const cx = w / 2;
      const cy = h * 0.2;
      for (let i = 0; i < 110; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 2;
        simulationParticles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 2,
          color: Math.random() > 0.4 ? '#FFD700' : '#00F2FE',
          alpha: 1.0,
          decay: 0.012,
          gravity: 0.07
        });
      }
    }
  }

  function renderAnarSim(t, w, h) {
    const cx = w / 2;
    const cy = h * 0.92;

    // Earthen pot base
    simCtx.fillStyle = '#8C5310';
    simCtx.beginPath();
    simCtx.moveTo(cx - 30, cy + 30);
    simCtx.lineTo(cx + 30, cy + 30);
    simCtx.lineTo(cx + 15, cy);
    simCtx.lineTo(cx - 15, cy);
    simCtx.closePath();
    simCtx.fill();

    // Fountain eruption
    const fountainHeight = Math.min(1.0, t / 1.5) * (h * 0.7);
    for (let i = 0; i < 16; i++) {
      const spread = (Math.random() - 0.5) * 4;
      const vy = -(Math.random() * 12 + (fountainHeight / 50));
      simulationParticles.push({
        x: cx + (Math.random() - 0.5) * 10,
        y: cy,
        vx: spread,
        vy: vy,
        size: Math.random() * 3 + 1.5,
        color: Math.random() > 0.3 ? '#FFE066' : '#FFF',
        alpha: 1.0,
        decay: 0.025,
        gravity: 0.2
      });
    }
  }

  function renderChakriSim(t, w, h) {
    const cx = w / 2;
    const cy = h * 0.65;
    const angle = t * 24;

    // Center disc
    simCtx.fillStyle = '#D90429';
    simCtx.beginPath();
    simCtx.arc(cx, cy, 24, 0, Math.PI * 2);
    simCtx.fill();

    // Spew circular sparks along 4 spiral tangents
    for (let arm = 0; arm < 4; arm++) {
      const curAngle = angle + (arm * Math.PI) / 2;
      const speed = Math.random() * 6 + 5;
      simulationParticles.push({
        x: cx + Math.cos(curAngle) * 25,
        y: cy + Math.sin(curAngle) * 25,
        vx: Math.cos(curAngle + Math.PI / 2) * speed,
        vy: Math.sin(curAngle + Math.PI / 2) * speed * 0.6,
        size: Math.random() * 3.5 + 1.5,
        color: arm % 2 === 0 ? '#06D6A0' : '#FFD700',
        alpha: 0.95,
        decay: 0.035,
        gravity: 0.02
      });
    }
  }

  function renderFlowerPotSim(t, w, h) {
    const cx = w / 2;
    const cy = h * 0.9;
    const colors = ['#FF007F', '#7928CA', '#00F2FE', '#FFD700', '#06D6A0'];

    for (let i = 0; i < 14; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      simulationParticles.push({
        x: cx + (Math.random() - 0.5) * 12,
        y: cy,
        vx: (Math.random() - 0.5) * 5,
        vy: -(Math.random() * 14 + 4),
        size: Math.random() * 4 + 1.5,
        color: color,
        alpha: 1.0,
        decay: 0.022,
        gravity: 0.18
      });
    }
  }

  function renderPhuljhadiSim(t, w, h) {
    const cx = w / 2;
    const cy = h * 0.5;

    // Sparkler wire
    simCtx.strokeStyle = '#ADB5BD';
    simCtx.lineWidth = 4;
    simCtx.beginPath();
    simCtx.moveTo(cx - 100, cy + 180);
    simCtx.lineTo(cx, cy);
    simCtx.stroke();

    // 8-direction diamond sparkle stars
    for (let i = 0; i < 10; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 2;
      simulationParticles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.3 ? '#FFF' : '#FFE066',
        alpha: 1.0,
        decay: 0.04
      });
    }
  }

  function renderGarlandSim(t, w, h) {
    // 100 Wala Garland: continuous machine gun bursts snaking across screen
    const cx = (w * 0.25) + ((t * 85) % (w * 0.5));
    const cy = (h * 0.3) + ((t * 40) % (h * 0.4));

    // Flash burst
    simCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    simCtx.beginPath();
    simCtx.arc(cx, cy, 35, 0, Math.PI * 2);
    simCtx.fill();

    // Red paper fragments & fiery sparks
    for (let i = 0; i < 12; i++) {
      simulationParticles.push({
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        size: Math.random() * 4 + 2,
        color: Math.random() > 0.4 ? '#D90429' : '#FFD700',
        alpha: 1.0,
        decay: 0.05,
        gravity: 0.12
      });
    }
  }

  function renderSkyShotSim(t, w, h) {
    const burstTime = 1.7;
    if (t < burstTime) {
      const prog = t / burstTime;
      const y = h * 0.95 - prog * (h * 0.75);
      simCtx.fillStyle = '#3A86FF';
      simCtx.fillRect(w / 2 - 2, y, 4, 18);
    } else if (t >= burstTime && t < burstTime + 0.1) {
      const cx = w / 2;
      const cy = h * 0.2;
      for (let i = 0; i < 130; i++) {
        const angle = (i * Math.PI * 2) / 130;
        const speed = Math.random() * 7 + 3;
        simulationParticles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 3,
          color: i % 2 === 0 ? '#3A86FF' : '#FFD700',
          alpha: 1.0,
          decay: 0.014,
          gravity: 0.06
        });
      }
    }
  }

  function renderGroundSpinnerSim(t, w, h) {
    const cx = (w / 2) + Math.sin(t * 5) * (w * 0.25);
    const cy = h * 0.8;
    for (let i = 0; i < 8; i++) {
      simulationParticles.push({
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 8,
        vy: -(Math.random() * 4),
        size: Math.random() * 3 + 2,
        color: Math.random() > 0.5 ? '#FF0055' : '#FFAA00',
        alpha: 0.9,
        decay: 0.04,
        gravity: 0.1
      });
    }
  }

  function renderCracklingSim(t, w, h) {
    for (let k = 0; k < 4; k++) {
      const cx = Math.random() * (w * 0.7) + (w * 0.15);
      const cy = Math.random() * (h * 0.6) + (h * 0.2);
      for (let i = 0; i < 6; i++) {
        simulationParticles.push({
          x: cx,
          y: cy,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 3 + 1,
          color: '#FFF',
          alpha: 1.0,
          decay: 0.08
        });
      }
    }
  }

  function renderGrandFinaleSim(t, w, h) {
    if (Math.random() < 0.25) {
      const cx = Math.random() * (w * 0.8) + (w * 0.1);
      const cy = Math.random() * (h * 0.4) + (h * 0.15);
      const colors = ['#FFD700', '#00F2FE', '#FF007F', '#7928CA', '#06D6A0'];
      const col = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 2;
        simulationParticles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 1.5,
          color: col,
          alpha: 1.0,
          decay: 0.016,
          gravity: 0.05
        });
      }
    }
  }

  function initVideoPlayerControls() {
    const videoBackBtn = document.getElementById('videoBackBtn');
    const videoPlayPauseBtn = document.getElementById('videoPlayPauseBtn');
    const videoReplayBtn = document.getElementById('videoReplayBtn');
    const videoAudioToggleBtn = document.getElementById('videoAudioToggleBtn');
    const videoFullscreenBtn = document.getElementById('videoFullscreenBtn');
    const videoProgressBar = document.getElementById('videoProgressBar');
    const bannerGuideBtn = document.getElementById('bannerGuideBtn');

    if (videoBackBtn) videoBackBtn.addEventListener('click', closeVideoPlayer);

    if (videoPlayPauseBtn) {
      videoPlayPauseBtn.addEventListener('click', () => {
        if (isPlayerPlaying) pauseMedia();
        else playMedia();
      });
    }

    if (videoReplayBtn) videoReplayBtn.addEventListener('click', replayMedia);

    if (videoAudioToggleBtn) {
      videoAudioToggleBtn.addEventListener('click', () => {
        isAudioEnabled = !isAudioEnabled;
        fireworkAudio.muted = !isAudioEnabled;
        updateGlobalAudioUI();
        if (isAudioEnabled && isPlayerPlaying) {
          fireworkAudio.play().catch(() => {});
        }
      });
    }

    if (videoFullscreenBtn) {
      videoFullscreenBtn.addEventListener('click', toggleFullscreen);
    }

    if (bannerGuideBtn) {
      bannerGuideBtn.addEventListener('click', () => {
        openAssetGuideModal();
      });
    }

    // Scrubber click/touch
    if (videoProgressBar) {
      const handleScrub = (e) => {
        const rect = videoProgressBar.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const pos = (clientX - rect.left) / rect.width;
        seekMedia(pos * playerDuration);
      };

      videoProgressBar.addEventListener('click', handleScrub);
      videoProgressBar.addEventListener('touchmove', handleScrub);
    }
  }

  function toggleFullscreen() {
    const viewport = document.getElementById('videoViewport');
    if (!viewport) return;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (viewport.requestFullscreen) {
        viewport.requestFullscreen();
      } else if (viewport.webkitRequestFullscreen) {
        viewport.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  // --------------------------------------------------------------------------
  // 10. Rangoli Studio Feature
  // --------------------------------------------------------------------------

  let rangoliColor = '#FFD700';
  let rangoliBrushSize = 5;
  let rangoliSymmetry = 8;
  let isErasing = false;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let rangoliHistory = [];

  const rangoliCanvas = document.getElementById('rangoliCanvas');
  const rangoliCtx = rangoliCanvas ? rangoliCanvas.getContext('2d') : null;

  function resizeRangoliCanvas() {
    if (!rangoliCanvas || !rangoliCtx) return;
    // Keep canvas 600x600 for sharp high DPI rendering
    if (rangoliHistory.length === 0) {
      clearRangoliCanvas(false);
    }
  }

  function saveRangoliState() {
    if (!rangoliCanvas || !rangoliCtx) return;
    if (rangoliHistory.length >= 20) rangoliHistory.shift();
    rangoliHistory.push(rangoliCtx.getImageData(0, 0, rangoliCanvas.width, rangoliCanvas.height));
  }

  function undoRangoli() {
    if (!rangoliCtx || rangoliHistory.length <= 1) return;
    rangoliHistory.pop(); // discard current
    const prev = rangoliHistory[rangoliHistory.length - 1];
    rangoliCtx.putImageData(prev, 0, 0);
    triggerHaptic(15);
  }

  function clearRangoliCanvas(ask = true) {
    if (!rangoliCtx || !rangoliCanvas) return;
    if (ask && !confirm('Clear your Rangoli canvas?')) return;

    rangoliCtx.fillStyle = '#060914';
    rangoliCtx.fillRect(0, 0, rangoliCanvas.width, rangoliCanvas.height);
    rangoliHistory = [];
    saveRangoliState();
  }

  function drawSymmetricLine(x0, y0, x1, y1) {
    if (!rangoliCtx || !rangoliCanvas) return;
    const cx = rangoliCanvas.width / 2;
    const cy = rangoliCanvas.height / 2;
    const N = rangoliSymmetry;

    rangoliCtx.save();
    rangoliCtx.lineWidth = rangoliBrushSize;
    rangoliCtx.lineCap = 'round';
    rangoliCtx.lineJoin = 'round';

    if (isErasing) {
      rangoliCtx.strokeStyle = '#060914';
    } else {
      rangoliCtx.strokeStyle = rangoliColor;
      rangoliCtx.shadowColor = rangoliColor;
      rangoliCtx.shadowBlur = 6;
    }

    for (let i = 0; i < N; i++) {
      const angle = (i * 2 * Math.PI) / N;

      rangoliCtx.save();
      rangoliCtx.translate(cx, cy);
      rangoliCtx.rotate(angle);

      rangoliCtx.beginPath();
      rangoliCtx.moveTo(x0 - cx, y0 - cy);
      rangoliCtx.lineTo(x1 - cx, y1 - cy);
      rangoliCtx.stroke();

      // Mirror line for authentic bilateral symmetry
      if (N > 1) {
        rangoliCtx.beginPath();
        rangoliCtx.moveTo(-(x0 - cx), y0 - cy);
        rangoliCtx.lineTo(-(x1 - cx), y1 - cy);
        rangoliCtx.stroke();
      }

      rangoliCtx.restore();
    }

    rangoliCtx.restore();
  }

  function drawStencilTemplate(type) {
    if (!rangoliCtx || !rangoliCanvas) return;
    clearRangoliCanvas(false);

    const cx = rangoliCanvas.width / 2;
    const cy = rangoliCanvas.height / 2;

    rangoliCtx.save();
    rangoliCtx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
    rangoliCtx.lineWidth = 2;
    rangoliCtx.setLineDash([6, 6]);

    if (type === 'diya') {
      // Diya stencil
      rangoliCtx.beginPath();
      rangoliCtx.arc(cx, cy + 50, 110, 0, Math.PI);
      rangoliCtx.stroke();
      // Flame
      rangoliCtx.beginPath();
      rangoliCtx.moveTo(cx, cy + 30);
      rangoliCtx.quadraticCurveTo(cx - 35, cy - 60, cx, cy - 130);
      rangoliCtx.quadraticCurveTo(cx + 35, cy - 60, cx, cy + 30);
      rangoliCtx.stroke();
    } else if (type === 'lotus') {
      // Lotus petals
      for (let i = 0; i < 8; i++) {
        const rad = (i * Math.PI) / 4;
        rangoliCtx.save();
        rangoliCtx.translate(cx, cy);
        rangoliCtx.rotate(rad);
        rangoliCtx.beginPath();
        rangoliCtx.moveTo(0, 0);
        rangoliCtx.quadraticCurveTo(35, -80, 0, -150);
        rangoliCtx.quadraticCurveTo(-35, -80, 0, 0);
        rangoliCtx.stroke();
        rangoliCtx.restore();
      }
    } else if (type === 'peacock') {
      // Radiating peacock fan
      for (let i = 0; i < 12; i++) {
        const rad = (i * Math.PI) / 6;
        rangoliCtx.save();
        rangoliCtx.translate(cx, cy);
        rangoliCtx.rotate(rad);
        rangoliCtx.beginPath();
        rangoliCtx.arc(0, -130, 20, 0, Math.PI * 2);
        rangoliCtx.moveTo(0, 0);
        rangoliCtx.lineTo(0, -110);
        rangoliCtx.stroke();
        rangoliCtx.restore();
      }
    } else if (type === 'star') {
      // Geometric mandala star
      for (let i = 0; i < 6; i++) {
        const rad = (i * Math.PI) / 3;
        rangoliCtx.save();
        rangoliCtx.translate(cx, cy);
        rangoliCtx.rotate(rad);
        rangoliCtx.strokeRect(-60, -60, 120, 120);
        rangoliCtx.restore();
      }
    }

    rangoliCtx.restore();
    saveRangoliState();
  }

  function initRangoliStudio() {
    if (!rangoliCanvas) return;

    // Symmetry mode chips
    document.querySelectorAll('#symmetryModeChips .mode-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#symmetryModeChips .mode-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        rangoliSymmetry = parseInt(btn.getAttribute('data-symmetry'), 10) || 8;
        triggerHaptic(10);
      });
    });

    // Template selector
    const templateSelect = document.getElementById('rangoliTemplateSelect');
    if (templateSelect) {
      templateSelect.addEventListener('change', () => {
        drawStencilTemplate(templateSelect.value);
      });
    }

    // Color Swatches
    document.querySelectorAll('#colorSwatches .color-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        document.querySelectorAll('#colorSwatches .color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        rangoliColor = swatch.getAttribute('data-color');
        isErasing = false;
        const eraserBtn = document.getElementById('eraserBtn');
        if (eraserBtn) eraserBtn.classList.remove('active');
        triggerHaptic(10);
      });
    });

    // Brush Size Slider
    const brushSlider = document.getElementById('brushSizeSlider');
    const brushReadout = document.getElementById('brushSizeValue');
    if (brushSlider && brushReadout) {
      brushSlider.addEventListener('input', () => {
        rangoliBrushSize = parseInt(brushSlider.value, 10);
        brushReadout.textContent = `${rangoliBrushSize}px`;
      });
    }

    // Eraser Button
    const eraserBtn = document.getElementById('eraserBtn');
    if (eraserBtn) {
      eraserBtn.addEventListener('click', () => {
        isErasing = !isErasing;
        eraserBtn.classList.toggle('active', isErasing);
        triggerHaptic(10);
      });
    }

    // Undo Button
    const undoBtn = document.getElementById('undoBtn');
    if (undoBtn) undoBtn.addEventListener('click', undoRangoli);

    // Clear Button
    const clearBtn = document.getElementById('clearRangoliBtn');
    if (clearBtn) clearBtn.addEventListener('click', () => clearRangoliCanvas(true));

    // Save PNG Button
    const saveBtn = document.getElementById('saveRangoliBtn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = `EcoDiwali-Rangoli-${Date.now()}.png`;
        link.href = rangoliCanvas.toDataURL('image/png');
        link.click();
        appState.rangolisSaved++;
        saveState();
        showToast('🎨 Rangoli artwork saved to your device!');
        triggerHaptic([30, 40, 50]);
      });
    }

    // Pointer events (handles Mouse, Touch, Stylus seamlessly)
    function getCanvasCoords(e) {
      const rect = rangoliCanvas.getBoundingClientRect();
      const scaleX = rangoliCanvas.width / rect.width;
      const scaleY = rangoliCanvas.height / rect.height;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
      };
    }

    const startDraw = (e) => {
      e.preventDefault();
      isDrawing = true;
      const pos = getCanvasCoords(e);
      lastX = pos.x;
      lastY = pos.y;
    };

    const moveDraw = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const pos = getCanvasCoords(e);
      drawSymmetricLine(lastX, lastY, pos.x, pos.y);
      lastX = pos.x;
      lastY = pos.y;
    };

    const endDraw = (e) => {
      if (isDrawing) {
        isDrawing = false;
        saveRangoliState();
      }
    };

    rangoliCanvas.addEventListener('mousedown', startDraw);
    window.addEventListener('mousemove', moveDraw);
    window.addEventListener('mouseup', endDraw);

    rangoliCanvas.addEventListener('touchstart', startDraw, { passive: false });
    window.addEventListener('touchmove', moveDraw, { passive: false });
    window.addEventListener('touchend', endDraw);

    clearRangoliCanvas(false);
  }

  // --------------------------------------------------------------------------
  // 11. Eco Challenge Quiz Feature
  // --------------------------------------------------------------------------

  let currentQuizIndex = 0;
  let quizScore = 0;
  let quizAnswered = false;

  function initEcoChallenge() {
    currentQuizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    renderQuizQuestion();

    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentQuizIndex++;
        if (currentQuizIndex < QUIZ_QUESTIONS.length) {
          renderQuizQuestion();
        } else {
          showQuizResults();
        }
      });
    }

    const retakeBtn = document.getElementById('retakeQuizBtn');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        document.getElementById('quizResultsCard').style.display = 'none';
        document.getElementById('quizCard').style.display = 'flex';
        currentQuizIndex = 0;
        quizScore = 0;
        renderQuizQuestion();
      });
    }

    const shareQuizBtn = document.getElementById('shareQuizBtn');
    if (shareQuizBtn) {
      shareQuizBtn.addEventListener('click', () => {
        const text = `🏆 I scored ${quizScore}/100 on the EcoDiwali Next Challenge! Celebrate Diwali with zero emissions: Celebrate the Light, Protect the Earth.`;
        if (navigator.share) {
          navigator.share({
            title: 'My EcoDiwali Challenge Score',
            text: text,
            url: window.location.href
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(text);
          showToast('Score copied to clipboard!');
        }
      });
    }
  }

  function renderQuizQuestion() {
    quizAnswered = false;
    const q = QUIZ_QUESTIONS[currentQuizIndex];

    document.getElementById('quizQuestionCounter').textContent = `Question ${currentQuizIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    document.getElementById('quizScoreCounter').textContent = `Score: ${quizScore} / 100`;
    document.getElementById('quizProgressFill').style.width = `${((currentQuizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`;

    document.getElementById('quizCategoryBadge').textContent = q.category;
    document.getElementById('quizQuestionText').textContent = q.question;

    const expBox = document.getElementById('quizExplanationBox');
    expBox.style.display = 'none';

    const list = document.getElementById('quizOptionsList');
    list.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${opt}</span>
      `;
      btn.addEventListener('click', () => selectQuizOption(idx));
      list.appendChild(btn);
    });
  }

  function selectQuizOption(selectedIndex) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = QUIZ_QUESTIONS[currentQuizIndex];
    const isCorrect = selectedIndex === q.correctIndex;
    const optionBtns = document.querySelectorAll('.quiz-option-btn');

    optionBtns.forEach((btn, idx) => {
      btn.classList.add('disabled');
      if (idx === q.correctIndex) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      quizScore += 10;
      triggerHaptic([30, 40]);
    } else {
      triggerHaptic([60, 40, 60]);
    }

    document.getElementById('quizScoreCounter').textContent = `Score: ${quizScore} / 100`;

    // Show feedback
    const expBox = document.getElementById('quizExplanationBox');
    const statusText = document.getElementById('explanationStatus');
    statusText.textContent = isCorrect ? '✨ Correct Answer!' : '❌ Not Quite Right';
    statusText.className = `explanation-status ${isCorrect ? 'correct' : 'wrong'}`;

    document.getElementById('explanationText').textContent = q.explanation;
    document.getElementById('ecoTipBody').textContent = q.ecoTip;
    expBox.style.display = 'flex';
  }

  function showQuizResults() {
    document.getElementById('quizCard').style.display = 'none';
    const resCard = document.getElementById('quizResultsCard');
    resCard.style.display = 'flex';

    if (quizScore > appState.quizBestScore) {
      appState.quizBestScore = quizScore;
    }
    appState.quizCompleted = true;
    saveState();

    document.getElementById('resultsScoreText').textContent = `You scored ${quizScore} / 100`;

    let badge = '🏆';
    let title = 'Eco Warrior!';
    let rank = 'Gold Champion';

    if (quizScore >= 90) {
      badge = '🌟';
      title = 'Earth Luminary!';
      rank = 'Platinum Scholar';
    } else if (quizScore >= 70) {
      badge = '🌱';
      title = 'Eco Protector!';
      rank = 'Green Champion';
    } else {
      badge = '🪔';
      title = 'Festive Learner';
      rank = 'Silver Star';
    }

    document.getElementById('resultsBadgeIcon').textContent = badge;
    document.getElementById('resultsTitle').textContent = title;
    document.getElementById('resCorrectCount').textContent = `${Math.floor(quizScore / 10)} / 10`;
    document.getElementById('resRankBadge').textContent = rank;

    triggerHaptic([40, 50, 40, 50, 60]);
  }

  // --------------------------------------------------------------------------
  // 12. Greeting Card Maker Feature
  // --------------------------------------------------------------------------

  let cardTheme = 'gold';
  const greetingCanvas = document.getElementById('greetingCanvas');
  const greetingCtx = greetingCanvas ? greetingCanvas.getContext('2d') : null;

  function renderGreetingCard() {
    if (!greetingCtx || !greetingCanvas) return;
    const w = greetingCanvas.width;
    const h = greetingCanvas.height;

    const recipient = document.getElementById('cardRecipientInput').value || 'Dear Friends';
    const sender = document.getElementById('cardSenderInput').value || 'With love';
    const message = document.getElementById('cardMessageInput').value || 'Happy Diwali!';

    // Background themes
    if (cardTheme === 'gold') {
      const grad = greetingCtx.createRadialGradient(w / 2, h / 2, 80, w / 2, h / 2, w * 0.7);
      grad.addColorStop(0, '#1E2545');
      grad.addColorStop(0.7, '#0B132B');
      grad.addColorStop(1, '#050814');
      greetingCtx.fillStyle = grad;
    } else if (cardTheme === 'emerald') {
      const grad = greetingCtx.createRadialGradient(w / 2, h / 2, 80, w / 2, h / 2, w * 0.7);
      grad.addColorStop(0, '#063B2F');
      grad.addColorStop(0.7, '#031E18');
      grad.addColorStop(1, '#020D0A');
      greetingCtx.fillStyle = grad;
    } else if (cardTheme === 'amber') {
      const grad = greetingCtx.createRadialGradient(w / 2, h / 2, 80, w / 2, h / 2, w * 0.7);
      grad.addColorStop(0, '#421E05');
      grad.addColorStop(0.7, '#241002');
      grad.addColorStop(1, '#0F0601');
      greetingCtx.fillStyle = grad;
    } else {
      // purple
      const grad = greetingCtx.createRadialGradient(w / 2, h / 2, 80, w / 2, h / 2, w * 0.7);
      grad.addColorStop(0, '#2E0854');
      grad.addColorStop(0.7, '#150328');
      grad.addColorStop(1, '#0A0114');
      greetingCtx.fillStyle = grad;
    }
    greetingCtx.fillRect(0, 0, w, h);

    // Ornate Golden Card Border
    greetingCtx.strokeStyle = '#FFD700';
    greetingCtx.lineWidth = 4;
    greetingCtx.strokeRect(30, 30, w - 60, h - 60);

    greetingCtx.strokeStyle = 'rgba(255, 215, 0, 0.35)';
    greetingCtx.lineWidth = 1.5;
    greetingCtx.strokeRect(42, 42, w - 84, h - 84);

    // Corner Motifs
    const corners = [
      { x: 30, y: 30, dx: 1, dy: 1 },
      { x: w - 30, y: 30, dx: -1, dy: 1 },
      { x: 30, y: h - 30, dx: 1, dy: -1 },
      { x: w - 30, y: h - 30, dx: -1, dy: -1 }
    ];
    corners.forEach(c => {
      greetingCtx.strokeStyle = '#FFE066';
      greetingCtx.lineWidth = 2.5;
      greetingCtx.beginPath();
      greetingCtx.moveTo(c.x, c.y + c.dy * 30);
      greetingCtx.lineTo(c.x + c.dx * 30, c.y);
      greetingCtx.stroke();
    });

    // Top Sub-heading
    greetingCtx.fillStyle = '#FFE066';
    greetingCtx.font = '600 22px "Poppins", sans-serif';
    greetingCtx.textAlign = 'center';
    greetingCtx.fillText('✨ SHUBH DEEPAWALI ✨', w / 2, 120);

    // Main Greeting Heading
    greetingCtx.fillStyle = '#FFFFFF';
    greetingCtx.font = '800 48px "Cinzel", serif';
    greetingCtx.fillText('EcoDiwali Next', w / 2, 185);

    // Decorative Diya Motif in center
    drawDiyaMotif(greetingCtx, w / 2, 330, 1.2);

    // Recipient Name
    greetingCtx.fillStyle = '#FFD700';
    greetingCtx.font = '700 30px "Cinzel", serif';
    greetingCtx.fillText(recipient, w / 2, 490);

    // Message Body (Wrap text)
    greetingCtx.fillStyle = '#E2E8F0';
    greetingCtx.font = '400 24px "Poppins", sans-serif';
    wrapText(greetingCtx, message, w / 2, 570, w - 180, 36);

    // Sender line
    greetingCtx.fillStyle = '#FFE066';
    greetingCtx.font = 'italic 600 24px "Poppins", sans-serif';
    greetingCtx.fillText(`— ${sender}`, w / 2, h - 160);

    // Card Slogan Footer
    greetingCtx.fillStyle = 'rgba(255, 215, 0, 0.7)';
    greetingCtx.font = '500 16px "Cinzel", serif';
    greetingCtx.fillText('"Celebrate the Light, Protect the Earth."', w / 2, h - 75);
  }

  function drawDiyaMotif(ctx, cx, cy, scale) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);

    // Outer Aura
    const aura = ctx.createRadialGradient(0, -30, 10, 0, -30, 80);
    aura.addColorStop(0, 'rgba(255, 215, 0, 0.5)');
    aura.addColorStop(1, 'rgba(255, 84, 0, 0)');
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(0, -30, 80, 0, Math.PI * 2);
    ctx.fill();

    // Diya Bowl
    ctx.fillStyle = '#E5A93B';
    ctx.beginPath();
    ctx.moveTo(-50, 0);
    ctx.quadraticCurveTo(0, 50, 50, 0);
    ctx.quadraticCurveTo(0, 15, -50, 0);
    ctx.fill();

    // Flame
    ctx.fillStyle = '#FF5400';
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.quadraticCurveTo(-20, -35, 0, -75);
    ctx.quadraticCurveTo(20, -35, 0, 5);
    ctx.fill();

    ctx.fillStyle = '#FFF275';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-10, -25, 0, -55);
    ctx.quadraticCurveTo(10, -25, 0, 0);
    ctx.fill();

    ctx.restore();
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let curY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, curY);
        line = words[n] + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, curY);
  }

  function initGreetingCardMaker() {
    const recipientInput = document.getElementById('cardRecipientInput');
    const senderInput = document.getElementById('cardSenderInput');
    const messageInput = document.getElementById('cardMessageInput');
    const downloadBtn = document.getElementById('downloadCardBtn');
    const shareBtn = document.getElementById('shareCardBtn');

    if (recipientInput) recipientInput.addEventListener('input', renderGreetingCard);
    if (senderInput) senderInput.addEventListener('input', renderGreetingCard);
    if (messageInput) messageInput.addEventListener('input', renderGreetingCard);

    // Theme chips
    document.querySelectorAll('#greetingThemeChips .theme-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#greetingThemeChips .theme-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cardTheme = btn.getAttribute('data-theme');
        renderGreetingCard();
        triggerHaptic(10);
      });
    });

    // Wish presets
    document.querySelectorAll('#wishesPresetChips .preset-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const wish = btn.getAttribute('data-wish');
        if (wish && messageInput) {
          messageInput.value = wish;
          renderGreetingCard();
          triggerHaptic(10);
        }
      });
    });

    // Download Card
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = `EcoDiwali-Greeting-${Date.now()}.png`;
        link.href = greetingCanvas.toDataURL('image/png');
        link.click();

        appState.cardsCreated++;
        saveState();
        showToast('💌 Greeting Card downloaded successfully!');
        triggerHaptic([30, 40]);
      });
    }

    // Share Card via Web Share API
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        greetingCanvas.toBlob(blob => {
          if (!blob) return;
          const file = new File([blob], 'EcoDiwali-Greeting.png', { type: 'image/png' });

          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({
              title: 'EcoDiwali Next Greeting Card',
              text: 'Celebrate the Light, Protect the Earth! Wishing you a joyous, green Diwali ✨',
              files: [file]
            }).then(() => {
              appState.cardsCreated++;
              saveState();
            }).catch(() => {});
          } else {
            // Fallback download
            downloadBtn.click();
          }
        });
      });
    }

    renderGreetingCard();
  }

  // --------------------------------------------------------------------------
  // 13. My Celebration (Profile, Impact & Badges)
  // --------------------------------------------------------------------------

  function updateProfileUI() {
    const fireworksCount = appState.fireworksWatched.length;
    const co2Saved = (fireworksCount * 1.45 + appState.diyasLit * 0.08).toFixed(1);
    const pmSaved = Math.round(fireworksCount * 48);
    const noiseDb = Math.round(fireworksCount * 115);

    const elCo2 = document.getElementById('profileCo2Saved');
    const elPm = document.getElementById('profilePmSaved');
    const elNoise = document.getElementById('profileNoiseDecibels');
    const elDiyas = document.getElementById('profileDiyasCount');

    if (elCo2) elCo2.textContent = `${co2Saved} kg`;
    if (elPm) elPm.textContent = `${pmSaved} g`;
    if (elNoise) elNoise.textContent = `${noiseDb} dB`;
    if (elDiyas) elDiyas.textContent = appState.diyasLit;

    const elFwWatched = document.getElementById('profileFireworksWatched');
    const elRangoli = document.getElementById('profileRangolisSaved');
    const elCards = document.getElementById('profileCardsCreated');
    const elQuiz = document.getElementById('profileQuizBest');

    if (elFwWatched) elFwWatched.textContent = `${fireworksCount} / 10`;
    if (elRangoli) elRangoli.textContent = appState.rangolisSaved;
    if (elCards) elCards.textContent = appState.cardsCreated;
    if (elQuiz) elQuiz.textContent = `${appState.quizBestScore}%`;

    // Render Badges
    renderBadges();
  }

  function renderBadges() {
    const grid = document.getElementById('badgesGrid');
    if (!grid) return;

    const fwCount = appState.fireworksWatched.length;

    const BADGES = [
      {
        id: 'first_spark',
        icon: '✨',
        title: 'First Spark',
        desc: 'Watched your first virtual firework',
        unlocked: fwCount >= 1
      },
      {
        id: 'diya_master',
        icon: '🪔',
        title: 'Diya Kindler',
        desc: 'Lit 5+ virtual earthen lamps',
        unlocked: appState.diyasLit >= 5
      },
      {
        id: 'rangoli_artist',
        icon: '🎨',
        title: 'Rangoli Artist',
        desc: 'Saved an original digital Rangoli',
        unlocked: appState.rangolisSaved >= 1
      },
      {
        id: 'eco_scholar',
        icon: '🧠',
        title: 'Eco Scholar',
        desc: 'Scored 80%+ on Eco Challenge',
        unlocked: appState.quizBestScore >= 80
      },
      {
        id: 'warm_messenger',
        icon: '💌',
        title: 'Warm Messenger',
        desc: 'Crafted & shared a greeting card',
        unlocked: appState.cardsCreated >= 1
      },
      {
        id: 'grand_luminary',
        icon: '🌟',
        title: 'Grand Luminary',
        desc: 'Experienced all 10 firecracker varieties',
        unlocked: fwCount >= 10
      }
    ];

    grid.innerHTML = '';
    BADGES.forEach(b => {
      const card = document.createElement('div');
      card.className = `badge-card glass-card ${b.unlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <div class="b-icon">${b.icon}</div>
        <div class="b-title">${b.title}</div>
        <div class="b-desc">${b.desc}</div>
        <span class="chip ${b.unlocked ? 'chip-eco' : ''}" style="margin-top: 4px; font-size: 0.65rem;">
          ${b.unlocked ? '✓ UNLOCKED' : 'LOCKED'}
        </span>
      `;
      grid.appendChild(card);
    });
  }

  function initProfileControls() {
    const resetBtn = document.getElementById('resetProgressBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset your celebration progress?')) {
          appState = {
            diyasLit: 0,
            fireworksWatched: [],
            rangolisSaved: 0,
            quizBestScore: 0,
            quizCompleted: false,
            cardsCreated: 0
          };
          saveState();
          const homeDiyas = document.getElementById('homeDiyasCount');
          if (homeDiyas) homeDiyas.textContent = '0';
          showToast('Celebration progress has been reset.');
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // 14. Asset Replacement Guide Modal
  // --------------------------------------------------------------------------

  function openAssetGuideModal() {
    const guideModal = document.getElementById('assetGuideModal');
    if (guideModal) {
      guideModal.style.display = 'flex';
      guideModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeAssetGuideModal() {
    const guideModal = document.getElementById('assetGuideModal');
    if (guideModal) {
      guideModal.style.display = 'none';
      guideModal.setAttribute('aria-hidden', 'true');
    }
  }

  function initAssetGuide() {
    const guideBtn = document.getElementById('assetGuideBtn');
    const closeBtn = document.getElementById('closeGuideBtn');
    const footerCloseBtn = document.getElementById('closeGuideFooterBtn');

    if (guideBtn) guideBtn.addEventListener('click', openAssetGuideModal);
    if (closeBtn) closeBtn.addEventListener('click', closeAssetGuideModal);
    if (footerCloseBtn) footerCloseBtn.addEventListener('click', closeAssetGuideModal);
  }

  // --------------------------------------------------------------------------
  // 15. Header Global Audio & Low Data Mode
  // --------------------------------------------------------------------------

  function updateGlobalAudioUI() {
    const btn = document.getElementById('masterAudioBtn');
    const label = document.getElementById('audioLabel');
    const icon = document.getElementById('audioIcon');
    const vAudioIcon = document.getElementById('vAudioIcon');

    if (btn) btn.classList.toggle('active', isAudioEnabled);
    if (label) label.textContent = isAudioEnabled ? 'Sound: On' : 'Sound: Off';

    const iconHtml = isAudioEnabled
      ? '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'
      : '<path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>';

    if (icon) icon.innerHTML = iconHtml;
    if (vAudioIcon) vAudioIcon.innerHTML = iconHtml;
  }

  function initHeaderControls() {
    const audioBtn = document.getElementById('masterAudioBtn');
    const lowDataBtn = document.getElementById('lowDataBtn');
    const lowDataLabel = document.getElementById('lowDataLabel');
    const brandBtn = document.getElementById('brandHomeBtn');

    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        isAudioEnabled = !isAudioEnabled;
        initAudioContext();
        fireworkAudio.muted = !isAudioEnabled;
        updateGlobalAudioUI();
        triggerHaptic(15);
        showToast(isAudioEnabled ? '🔊 Sound enabled!' : '🔇 Sound muted.');
      });
    }

    if (lowDataBtn) {
      // Restore initial class
      document.body.classList.toggle('low-data-mode', isLowDataMode);
      if (lowDataLabel) lowDataLabel.textContent = isLowDataMode ? 'Data: Low' : 'Data: High';
      lowDataBtn.classList.toggle('active', isLowDataMode);

      lowDataBtn.addEventListener('click', () => {
        isLowDataMode = !isLowDataMode;
        try {
          localStorage.setItem(LOW_DATA_KEY, isLowDataMode ? 'true' : 'false');
        } catch (e) {}
        document.body.classList.toggle('low-data-mode', isLowDataMode);
        if (lowDataLabel) lowDataLabel.textContent = isLowDataMode ? 'Data: Low' : 'Data: High';
        lowDataBtn.classList.toggle('active', isLowDataMode);
        triggerHaptic(10);
        showToast(isLowDataMode ? '⚡ Low Data Mode enabled (battery & data saver)' : '🌟 High Quality visuals enabled');
      });
    }

    if (brandBtn) {
      brandBtn.addEventListener('click', () => switchTab('home'));
    }
  }

  // --------------------------------------------------------------------------
  // 16. Ambient Floating Spark Particles Loop
  // --------------------------------------------------------------------------

  function initAmbientParticles() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = 30;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(Math.random() * 0.6 + 0.2),
        size: Math.random() * 2.5 + 1,
        color: Math.random() > 0.4 ? '#FFD700' : '#FF8800',
        alpha: Math.random() * 0.7 + 0.3
      });
    }

    function renderAmbient() {
      if (!isLowDataMode) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }

          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(renderAmbient);
    }

    requestAnimationFrame(renderAmbient);
  }

  // --------------------------------------------------------------------------
  // 17. Service Worker Registration
  // --------------------------------------------------------------------------

  function registerServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
          .then(reg => {
            console.log('[EcoDiwali Next] Service Worker registered with scope:', reg.scope);
          })
          .catch(err => {
            console.log('[EcoDiwali Next] Service Worker registration skipped:', err);
          });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 18. App Initialization
  // --------------------------------------------------------------------------

  function initApp() {
    loadState();
    initHeaderControls();
    initHomeScreen();
    initFireworksSearch();
    initVideoPlayerControls();
    initRangoliStudio();
    initEcoChallenge();
    initGreetingCardMaker();
    initProfileControls();
    initAssetGuide();
    initAmbientParticles();
    registerServiceWorker();

    // Bottom Navigation click handlers
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target) switchTab(target);
      });
    });

    // Initial tab
    switchTab('home');
    updateProfileUI();

    console.log('EcoDiwali Next initialized successfully. "Celebrate the Light, Protect the Earth."');
  }

  // Start on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
