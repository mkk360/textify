// Animation data
const animations = [
    {
        id: "style1",
        name: "Particle Explosion",
        class: "textify-style1",
        description: "Characters explode from random directions with rotation and scaling",
        category: "dynamic",
        complexity: "High",
        bestFor: "Headlines, Impact Text",
        defaultConfig: {
            duration: 1.8,
            stagger: 0.15,
            ease: "power3.out"
        }
    },
    {
        id: "style2",
        name: "Explosive Zoom",
        class: "textify-style2",
        description: "Characters zoom in with elastic bounce and rotation",
        category: "dynamic",
        complexity: "High",
        bestFor: "Call-to-Action, Buttons",
        defaultConfig: {
            duration: 1.8,
            stagger: 0.08,
            ease: "elastic.out(1, 0.3)"
        }
    },
    {
        id: "style3",
        name: "Wave Up",
        class: "textify-style3",
        description: "Smooth wave motion from bottom to top with skew effect",
        category: "smooth",
        complexity: "Medium",
        bestFor: "Subtitles, Descriptions",
        defaultConfig: {
            duration: 1.2,
            stagger: 0.04,
            ease: "power2.out"
        }
    },
    {
        id: "style4",
        name: "3D Flip",
        class: "textify-style4",
        description: "Three-dimensional rotation with depth and perspective",
        category: "3d",
        complexity: "High",
        bestFor: "Modern Headings",
        defaultConfig: {
            duration: 1.4,
            stagger: 0.06,
            ease: "back.out(1.7)"
        }
    },
    {
        id: "style5",
        name: "Bounce Scale",
        class: "textify-style5",
        description: "Playful bounce effect with vertical movement",
        category: "playful",
        complexity: "Medium",
        bestFor: "Playful Text",
        defaultConfig: {
            duration: 1.6,
            stagger: 0.05,
            ease: "bounce.out"
        }
    },
    {
        id: "style6",
        name: "Spiral Zoom",
        class: "textify-style6",
        description: "Rotating spiral effect while scaling from center",
        category: "dynamic",
        complexity: "High",
        bestFor: "Logo Text",
        defaultConfig: {
            duration: 1.3,
            stagger: 0.05,
            ease: "power4.out"
        }
    },
    {
        id: "style7",
        name: "Stretch Left",
        class: "textify-style7",
        description: "Horizontal stretch with elastic easing from left",
        category: "smooth",
        complexity: "Medium",
        bestFor: "Navigation Items",
        defaultConfig: {
            duration: 1.5,
            stagger: 0.07,
            ease: "elastic.out(1, 0.6)"
        }
    },
    {
        id: "style8",
        name: "Float Particles",
        class: "textify-style8",
        description: "Random particle-like movement with varied scaling",
        category: "dynamic",
        complexity: "High",
        bestFor: "Background Text",
        defaultConfig: {
            duration: 2.0,
            stagger: 0.02,
            ease: "power2.out"
        }
    },
    {
        id: "style9",
        name: "Typewriter",
        class: "textify-style9",
        description: "Sequential reveal with scaling like typewriter effect",
        category: "smooth",
        complexity: "Low",
        bestFor: "Code, Tech Content",
        defaultConfig: {
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }
    },
    {
        id: "style10",
        name: "Magnetic Pull",
        class: "textify-style10",
        description: "Characters attracted from random positions with rotation",
        category: "dynamic",
        complexity: "High",
        bestFor: "Interactive Elements",
        defaultConfig: {
            duration: 1.2,
            stagger: 0.04,
            ease: "power3.out"
        }
    },
    {
        id: "style11",
        name: "Flare Burst",
        class: "textify-style11",
        description: "Bright flare effect with center-out reveal",
        category: "dynamic",
        complexity: "Medium",
        bestFor: "Announcements",
        defaultConfig: {
            duration: 1.4,
            stagger: 0.1,
            ease: "expo.out"
        }
    },
    {
        id: "style12",
        name: "Ripple Wave",
        class: "textify-style12",
        description: "Ripple effect spreading from edges with scaling",
        category: "smooth",
        complexity: "Medium",
        bestFor: "Smooth Reveals",
        defaultConfig: {
            duration: 1.6,
            stagger: 0.12,
            ease: "power2.inOut"
        }
    },
    {
        id: "style13",
        name: "Matrix Fall",
        class: "textify-style13",
        description: "Cyberpunk-style falling effect with grayscale filter",
        category: "artistic",
        complexity: "High",
        bestFor: "Cyberpunk, Tech",
        defaultConfig: {
            duration: 2.0,
            stagger: 0.15,
            ease: "power3.out"
        }
    },
    {
        id: "style14",
        name: "Flip Carousel",
        class: "textify-style14",
        description: "Carousel-like rotation with varied angles",
        category: "3d",
        complexity: "High",
        bestFor: "Product Names",
        defaultConfig: {
            duration: 1.8,
            stagger: 0.05,
            ease: "back.out(1.5)"
        }
    },
    {
        id: "style15",
        name: "Pulse Glow",
        class: "textify-style15",
        description: "Neon glow effect with pulsing animation",
        category: "dynamic",
        complexity: "Medium",
        bestFor: "Neon, Gaming",
        defaultConfig: {
            duration: 1.2,
            stagger: 0.1,
            ease: "sine.inOut"
        }
    },
    {
        id: "style16",
        name: "Stagger Zoom",
        class: "textify-style16",
        description: "Sequential zoom from end to start",
        category: "smooth",
        complexity: "Low",
        bestFor: "Lists, Menus",
        defaultConfig: {
            duration: 1.0,
            stagger: 0.1,
            ease: "power4.in"
        }
    },
    {
        id: "style17",
        name: "Wave Fold",
        class: "textify-style17",
        description: "Folding wave effect with random positioning and skew",
        category: "artistic",
        complexity: "High",
        bestFor: "Artistic Text",
        defaultConfig: {
            duration: 1.7,
            stagger: 0.14,
            ease: "elastic.out(1, 0.4)"
        }
    },
    {
        id: "style18",
        name: "Sine Spray",
        class: "textify-style18",
        description: "Sine wave motion with spray-like distribution",
        category: "artistic",
        complexity: "High",
        bestFor: "Abstract, Creative",
        defaultConfig: {
            duration: 2.2,
            stagger: 0.03,
            ease: "sine.out"
        }
    },
    {
        id: "style19",
        name: "3D Grid",
        class: "textify-style19",
        description: "Complex 3D grid transformation with multi-axis rotation",
        category: "3d",
        complexity: "Very High",
        bestFor: "Complex Layouts",
        defaultConfig: {
            duration: 2.5,
            stagger: 0.2,
            ease: "back.out(2)"
        }
    },
    {
        id: "style20",
        name: "Glow Trail",
        class: "textify-style20",
        description: "Magical glow trail effect with blur and shadow",
        category: "artistic",
        complexity: "High",
        bestFor: "Magical, Fantasy",
        defaultConfig: {
            duration: 2.0,
            stagger: 0.15,
            ease: "power2.out"
        }
    }
];

const easeOptions = [
    "power1.out", "power2.out", "power3.out", "power4.out",
    "elastic.out(1, 0.3)", "elastic.out(1, 0.6)", "back.out(1.7)",
    "bounce.out", "circ.out", "expo.out", "sine.out"
];

const colorPresets = [
    {name: "Default", value: "inherit"},
    {name: "Electric Blue", value: "#00f5ff"},
    {name: "Neon Green", value: "#39ff14"},
    {name: "Hot Pink", value: "#ff1493"},
    {name: "Gold", value: "#ffd700"},
    {name: "Purple", value: "#8a2be2"},
    {name: "Orange", value: "#ff6347"},
    {name: "Cyan", value: "#00ffff"}
];

const sampleTexts = [
    "Hello World",
    "Welcome to Textify",
    "Amazing Text Effects",
    "Scroll Animation",
    "GSAP SplitText",
    "Creative Typography",
    "Modern Web Design",
    "Interactive Experience"
];

// Global variables
let currentStyle = animations[0];
let splitText = null;
let animationTl = null;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Initialize immediately
    initializeApp();
    
    // Set up event listeners after a brief delay to ensure DOM is ready
    setTimeout(function() {
        setupEventListeners();
        renderGallery();
        setupPlayground();
        setupPerformanceMonitoring();
        generateCode();
    }, 100);
});

function initializeApp() {
    console.log('Initializing app');
    
    // Add GSAP animations if available
    if (typeof gsap !== 'undefined') {
        gsap.from('.header', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
        
        gsap.from('.main', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out"
        });
    }
}

function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const section = this.getAttribute('data-section');
            console.log('Navigation clicked:', section);
            
            if (section) {
                showSection(section);
                updateActiveNav(this);
            }
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const category = this.getAttribute('data-category');
            console.log('Filter clicked:', category);
            
            if (category) {
                filterGallery(category);
                updateActiveFilter(this);
            }
        });
    });

    // Code tabs
    document.querySelectorAll('.code-tab').forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const tabName = this.getAttribute('data-tab');
            console.log('Code tab clicked:', tabName);
            
            if (tabName) {
                showCodeTab(tabName);
                updateActiveTab(this);
            }
        });
    });

    // Playground buttons
    const playBtn = document.getElementById('playAnimation');
    const resetBtn = document.getElementById('resetAnimation');
    
    if (playBtn) {
        playBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Play animation clicked');
            playAnimation();
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Reset animation clicked');
            resetAnimation();
        });
    }
    
    // Control inputs
    const controls = [
        {id: 'styleSelect', handler: updateStyle},
        {id: 'textSelect', handler: updateText},
        {id: 'customText', handler: updateCustomText},
        {id: 'durationSlider', handler: updateDuration},
        {id: 'staggerSlider', handler: updateStagger},
        {id: 'easeSelect', handler: updateEase},
        {id: 'colorSelect', handler: updateColor}
    ];
    
    controls.forEach(function(control) {
        const element = document.getElementById(control.id);
        if (element) {
            const eventType = control.id === 'customText' ? 'input' : 'change';
            element.addEventListener(eventType, control.handler);
        }
    });
}

function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(function(section) {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Add entrance animation
        if (typeof gsap !== 'undefined') {
            gsap.from(targetSection, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            });
        }
    }
}

function updateActiveNav(activeBtn) {
    document.querySelectorAll('.nav-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

function renderGallery() {
    console.log('Rendering gallery');
    
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) {
        console.error('Gallery grid not found');
        return;
    }
    
    galleryGrid.innerHTML = '';
    
    animations.forEach(function(animation) {
        const card = createGalleryCard(animation);
        galleryGrid.appendChild(card);
    });
    
    // Add entrance animation
    if (typeof gsap !== 'undefined') {
        gsap.from('.gallery-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
}

function createGalleryCard(animation) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.setAttribute('data-category', animation.category);
    
    card.innerHTML = `
        <h3>${animation.name}</h3>
        <p>${animation.description}</p>
        <div class="gallery-preview">
            <div class="gallery-preview-text">Sample Text</div>
        </div>
        <div class="gallery-meta">
            <span class="gallery-category">${animation.category}</span>
            <span class="gallery-complexity">${animation.complexity}</span>
        </div>
    `;
    
    // Add click handler
    card.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Gallery card clicked:', animation.name);
        
        // Select animation
        currentStyle = animation;
        updateControlsFromStyle(animation);
        generateCode();
        
        // Navigate to playground
        showSection('playground');
        updateActiveNav(document.querySelector('[data-section="playground"]'));
    });
    
    return card;
}

function filterGallery(category) {
    console.log('Filtering gallery by:', category);
    
    const cards = document.querySelectorAll('.gallery-card');
    
    cards.forEach(function(card) {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            
            // Add reveal animation
            if (typeof gsap !== 'undefined') {
                gsap.from(card, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)"
                });
            }
        } else {
            card.style.display = 'none';
        }
    });
}

function updateActiveFilter(activeBtn) {
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

function setupPlayground() {
    console.log('Setting up playground');
    
    // Populate selects
    populateSelect('styleSelect', animations, 'id', 'name');
    populateSelect('textSelect', sampleTexts.map(text => ({id: text, name: text})), 'id', 'name');
    populateSelect('easeSelect', easeOptions.map(ease => ({id: ease, name: ease})), 'id', 'name');
    populateSelect('colorSelect', colorPresets, 'value', 'name');
    
    // Set default values
    updateControlsFromStyle(currentStyle);
    initializePreview();
}

function populateSelect(selectId, options, valueKey, textKey) {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    select.innerHTML = '';
    
    options.forEach(function(option) {
        const optionElement = document.createElement('option');
        optionElement.value = option[valueKey];
        optionElement.textContent = option[textKey];
        select.appendChild(optionElement);
    });
}

function updateControlsFromStyle(style) {
    console.log('Updating controls from style:', style.name);
    
    const elements = {
        styleSelect: style.id,
        durationSlider: style.defaultConfig.duration,
        staggerSlider: style.defaultConfig.stagger,
        easeSelect: style.defaultConfig.ease
    };
    
    Object.keys(elements).forEach(function(id) {
        const element = document.getElementById(id);
        if (element) {
            element.value = elements[id];
        }
    });
    
    // Update display values
    const durationValue = document.getElementById('durationValue');
    const staggerValue = document.getElementById('staggerValue');
    
    if (durationValue) durationValue.textContent = style.defaultConfig.duration;
    if (staggerValue) staggerValue.textContent = style.defaultConfig.stagger;
}

function initializePreview() {
    console.log('Initializing preview');
    
    const previewText = document.getElementById('previewText');
    if (previewText && typeof SplitType !== 'undefined') {
        try {
            splitText = new SplitType(previewText, {
                types: 'chars',
                tagName: 'span'
            });
            console.log('SplitType initialized');
        } catch (error) {
            console.warn('SplitType initialization failed:', error);
        }
    }
}

function playAnimation() {
    console.log('Playing animation');
    
    if (animationTl) {
        animationTl.kill();
    }
    
    if (!splitText) {
        initializePreview();
    }
    
    if (!splitText || !splitText.chars) {
        console.error('No split text available');
        return;
    }
    
    const chars = splitText.chars;
    const duration = parseFloat(document.getElementById('durationSlider')?.value || 1.0);
    const stagger = parseFloat(document.getElementById('staggerSlider')?.value || 0.05);
    const ease = document.getElementById('easeSelect')?.value || 'power2.out';
    const color = document.getElementById('colorSelect')?.value || 'inherit';
    
    console.log('Animation params:', {duration, stagger, ease, color});
    
    // Apply color
    if (color !== 'inherit') {
        chars.forEach(function(char) {
            char.style.color = color;
        });
    }
    
    // Create animation
    animationTl = createAnimation(currentStyle.id, chars, duration, stagger, ease);
    
    // Update performance metrics
    updatePerformanceMetrics();
}

function createAnimation(styleId, chars, duration, stagger, ease) {
    console.log('Creating animation:', styleId);
    
    if (typeof gsap === 'undefined') {
        console.error('GSAP not available');
        return null;
    }
    
    const tl = gsap.timeline();
    
    // Reset chars
    gsap.set(chars, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        transformOrigin: "center center"
    });
    
    // Create animation based on style
    switch(styleId) {
        case 'style1': // Particle Explosion
            gsap.set(chars, {
                scale: 0,
                rotation: function() { return Math.random() * 360; },
                x: function() { return (Math.random() - 0.5) * 200; },
                y: function() { return (Math.random() - 0.5) * 200; }
            });
            tl.to(chars, {
                scale: 1,
                rotation: 0,
                x: 0,
                y: 0,
                duration: duration,
                ease: ease,
                stagger: stagger
            });
            break;
            
        case 'style2': // Explosive Zoom
            gsap.set(chars, {
                scale: 0,
                rotation: function() { return Math.random() * 180 - 90; }
            });
            tl.to(chars, {
                scale: 1,
                rotation: 0,
                duration: duration,
                ease: ease,
                stagger: stagger
            });
            break;
            
        case 'style3': // Wave Up
            gsap.set(chars, {
                y: 50,
                opacity: 0,
                skewX: 10
            });
            tl.to(chars, {
                y: 0,
                opacity: 1,
                skewX: 0,
                duration: duration,
                ease: ease,
                stagger: stagger
            });
            break;
            
        case 'style4': // 3D Flip
            gsap.set(chars, {
                rotationY: 90,
                opacity: 0,
                transformOrigin: "center center"
            });
            tl.to(chars, {
                rotationY: 0,
                opacity: 1,
                duration: duration,
                ease: ease,
                stagger: stagger
            });
            break;
            
        case 'style5': // Bounce Scale
            gsap.set(chars, {
                scale: 0,
                y: 30
            });
            tl.to(chars, {
                scale: 1,
                y: 0,
                duration: duration,
                ease: ease,
                stagger: stagger
            });
            break;
            
        default:
            // Default animation
            gsap.set(chars, {
                opacity: 0,
                y: 30
            });
            tl.to(chars, {
                opacity: 1,
                y: 0,
                duration: duration,
                ease: ease,
                stagger: stagger
            });
    }
    
    return tl;
}

function resetAnimation() {
    console.log('Resetting animation');
    
    if (animationTl) {
        animationTl.kill();
    }
    
    if (splitText && splitText.chars) {
        gsap.set(splitText.chars, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            skewX: 0,
            skewY: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            clearProps: "all"
        });
    }
}

// Control update functions
function updateStyle() {
    const styleSelect = document.getElementById('styleSelect');
    if (styleSelect) {
        const styleId = styleSelect.value;
        currentStyle = animations.find(function(a) { return a.id === styleId; });
        updateControlsFromStyle(currentStyle);
        generateCode();
    }
}

function updateText() {
    const textSelect = document.getElementById('textSelect');
    const previewText = document.getElementById('previewText');
    const customText = document.getElementById('customText');
    
    if (textSelect && previewText) {
        const text = textSelect.value;
        previewText.textContent = text;
        if (customText) customText.value = '';
        initializePreview();
    }
}

function updateCustomText() {
    const customText = document.getElementById('customText');
    const previewText = document.getElementById('previewText');
    const textSelect = document.getElementById('textSelect');
    
    if (customText && previewText) {
        const text = customText.value;
        if (text) {
            previewText.textContent = text;
            if (textSelect) textSelect.value = '';
            initializePreview();
        }
    }
}

function updateDuration() {
    const durationSlider = document.getElementById('durationSlider');
    const durationValue = document.getElementById('durationValue');
    
    if (durationSlider && durationValue) {
        const value = durationSlider.value;
        durationValue.textContent = value;
        generateCode();
    }
}

function updateStagger() {
    const staggerSlider = document.getElementById('staggerSlider');
    const staggerValue = document.getElementById('staggerValue');
    
    if (staggerSlider && staggerValue) {
        const value = staggerSlider.value;
        staggerValue.textContent = value;
        generateCode();
    }
}

function updateEase() {
    generateCode();
}

function updateColor() {
    generateCode();
}

function generateCode() {
    console.log('Generating code');
    
    const duration = document.getElementById('durationSlider')?.value || '1.0';
    const stagger = document.getElementById('staggerSlider')?.value || '0.05';
    const ease = document.getElementById('easeSelect')?.value || 'power2.out';
    const color = document.getElementById('colorSelect')?.value || 'inherit';
    const text = document.getElementById('previewText')?.textContent || 'Hello World';
    
    // HTML Code
    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Textify Animation</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://unpkg.com/split-type"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1 class="animated-text">${text}</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>`;
    
    // CSS Code
    const cssCode = `.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    font-family: Arial, sans-serif;
}

.animated-text {
    font-size: 3rem;
    font-weight: bold;
    color: ${color !== 'inherit' ? color : '#ffffff'};
    text-align: center;
    line-height: 1.2;
}

.char {
    display: inline-block;
}`;
    
    // JavaScript Code
    const jsCode = `// Initialize the animation
document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.animated-text');
    
    // Split text into characters
    const splitText = new SplitType(text, {
        types: 'chars',
        tagName: 'span'
    });
    
    const chars = splitText.chars;
    
    // Create animation timeline
    const tl = gsap.timeline();
    
    // ${currentStyle.name} Animation
    ${getAnimationCode(currentStyle.id, duration, stagger, ease)}
    
    // Play animation
    tl.play();
});`;
    
    // Update code panels
    updateCodePanel('htmlCodeContent', htmlCode);
    updateCodePanel('cssCodeContent', cssCode);
    updateCodePanel('jsCodeContent', jsCode);
    
    // Re-highlight syntax
    if (window.Prism) {
        Prism.highlightAll();
    }
}

function updateCodePanel(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
    }
}

function getAnimationCode(styleId, duration, stagger, ease) {
    const animationCodes = {
        'style1': `    // Set initial state
    gsap.set(chars, {
        scale: 0,
        rotation: () => Math.random() * 360,
        x: () => (Math.random() - 0.5) * 200,
        y: () => (Math.random() - 0.5) * 200
    });
    
    // Animate to final state
    tl.to(chars, {
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        duration: ${duration},
        ease: "${ease}",
        stagger: ${stagger}
    });`,
        'style2': `    // Set initial state
    gsap.set(chars, {
        scale: 0,
        rotation: () => Math.random() * 180 - 90
    });
    
    // Animate to final state
    tl.to(chars, {
        scale: 1,
        rotation: 0,
        duration: ${duration},
        ease: "${ease}",
        stagger: ${stagger}
    });`,
        'style3': `    // Set initial state
    gsap.set(chars, {
        y: 50,
        opacity: 0,
        skewX: 10
    });
    
    // Animate to final state
    tl.to(chars, {
        y: 0,
        opacity: 1,
        skewX: 0,
        duration: ${duration},
        ease: "${ease}",
        stagger: ${stagger}
    });`
    };
    
    return animationCodes[styleId] || `    // Set initial state
    gsap.set(chars, {
        opacity: 0,
        y: 30
    });
    
    // Animate to final state
    tl.to(chars, {
        opacity: 1,
        y: 0,
        duration: ${duration},
        ease: "${ease}",
        stagger: ${stagger}
    });`;
}

function showCodeTab(tabName) {
    console.log('Showing code tab:', tabName);
    
    document.querySelectorAll('.code-panel').forEach(function(panel) {
        panel.classList.remove('active');
    });
    
    const targetPanel = document.getElementById(tabName + 'Code');
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
}

function updateActiveTab(activeTab) {
    document.querySelectorAll('.code-tab').forEach(function(tab) {
        tab.classList.remove('active');
    });
    activeTab.classList.add('active');
}

function copyCode(panelId) {
    console.log('Copying code from:', panelId);
    
    const codeElement = document.querySelector('#' + panelId + ' code');
    if (codeElement) {
        const text = codeElement.textContent;
        
        navigator.clipboard.writeText(text).then(function() {
            // Show success feedback
            const copyBtn = document.querySelector('#' + panelId + ' .copy-btn');
            if (copyBtn) {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.background = '#39ff14';
                copyBtn.style.color = '#000';
                
                setTimeout(function() {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                }, 2000);
            }
        });
    }
}

function setupPerformanceMonitoring() {
    console.log('Setting up performance monitoring');
    
    let frameCount = 0;
    let lastTime = performance.now();
    
    function updateFPS() {
        const now = performance.now();
        frameCount++;
        
        if (now - lastTime >= 1000) {
            const fps = Math.round(frameCount * 1000 / (now - lastTime));
            const fpsMetric = document.getElementById('fpsMetric');
            if (fpsMetric) {
                fpsMetric.textContent = fps;
            }
            frameCount = 0;
            lastTime = now;
        }
        
        requestAnimationFrame(updateFPS);
    }
    
    updateFPS();
}

function updatePerformanceMetrics() {
    console.log('Updating performance metrics');
    
    const duration = document.getElementById('durationSlider')?.value || '1.0';
    const elementCount = document.getElementById('previewText')?.textContent.length || 0;
    
    const durationMetric = document.getElementById('durationMetric');
    const elementMetric = document.getElementById('elementMetric');
    const memoryMetric = document.getElementById('memoryMetric');
    
    if (durationMetric) durationMetric.textContent = duration;
    if (elementMetric) elementMetric.textContent = elementCount;
    if (memoryMetric) {
        const memoryUsage = (elementCount * 0.2 + parseFloat(duration) * 0.5).toFixed(1);
        memoryMetric.textContent = memoryUsage;
    }
}

// Download functions
function downloadCSS() {
    console.log('Downloading CSS');
    const cssContent = document.getElementById('cssCodeContent')?.textContent || '';
    downloadFile('styles.css', cssContent);
}

function downloadDocs() {
    console.log('Downloading docs');
    const docs = generateDocumentation();
    downloadFile('textify-docs.md', docs);
}

function downloadPackage() {
    console.log('Downloading package');
    const packageInfo = {
        name: "textify-gsap-plugin",
        version: "1.0.2",
        description: "Professional GSAP SplitText animation plugin with 20 stunning effects",
        files: [
            "textify.js",
            "textify.css",
            "README.md",
            "package.json",
            "examples/"
        ]
    };
    
    downloadFile('package-info.json', JSON.stringify(packageInfo, null, 2));
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function generateDocumentation() {
    return `# Textify - GSAP SplitText Animation Plugin

## Overview
Textify is a professional GSAP SplitText animation plugin featuring 20 stunning text effects.

## Installation
\`\`\`html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://unpkg.com/split-type"></script>
<script src="textify.js"></script>
\`\`\`

## Usage
\`\`\`javascript
const text = document.querySelector('.animated-text');
const splitText = new SplitType(text, { types: 'chars' });
const chars = splitText.chars;

// Create animation
const tl = gsap.timeline();
// Add your animation code here
\`\`\`

## Animation Styles
${animations.map(function(anim) { return '- **' + anim.name + '**: ' + anim.description; }).join('\n')}

## Configuration Options
- duration: Animation duration in seconds
- stagger: Delay between character animations
- ease: GSAP easing function
- color: Text color override

## License
MIT License - Free for commercial use
`;
}

// Initialize performance chart
function initializePerformanceChart() {
    console.log('Initializing performance chart');
    
    const canvas = document.getElementById('performanceChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let data = [];
    
    function drawChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#00f5ff';
        ctx.lineWidth = 2;
        
        if (data.length > 1) {
            ctx.beginPath();
            data.forEach(function(point, index) {
                const x = (index / data.length) * canvas.width;
                const y = canvas.height - (point / 100) * canvas.height;
                
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            ctx.stroke();
        }
    }
    
    function updateChart() {
        const fpsElement = document.getElementById('fpsMetric');
        const fps = fpsElement ? parseInt(fpsElement.textContent) : 60;
        data.push(fps);
        
        if (data.length > 100) {
            data.shift();
        }
        
        drawChart();
        requestAnimationFrame(updateChart);
    }
    
    updateChart();
}

// Initialize chart when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializePerformanceChart, 1000);
});

// Make functions available globally for HTML onclick handlers
window.copyCode = copyCode;
window.downloadCSS = downloadCSS;
window.downloadDocs = downloadDocs;
window.downloadPackage = downloadPackage;