/*************************************************************************
 *  Textify v4.0.0 – Enhanced Universal Text Animation Library           *
 *  https://github.com/mkk360/textify                                    *
 *  Copyright © 2025 mkk360 – MIT License                                *
 *                                                                       *
 *  Enhanced with 15 new professional animations and performance         *
 *  optimizations for 2025                                               *
 ************************************************************************/

// ---------------------------------------------------
// 1. Dependencies & Plugin Registration
// ---------------------------------------------------
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? module.exports = factory()
        : typeof define === 'function' && define.amd
            ? define(factory)
            : (global = global || self, global.Textify = factory());
}(this, (function () {
    'use strict';

    // GSAP core check with enhanced error handling
    if (typeof gsap === 'undefined') {
        throw new Error('Textify requires GSAP. Please include GSAP before Textify.');
    }
    if (typeof SplitText === 'undefined') {
        throw new Error('Textify requires GSAP SplitText plugin.');
    }

    // Register GSAP plugins with performance optimizations
    gsap.registerPlugin(SplitText, ScrollTrigger);
    gsap.config({
        nullTargetWarn: false,
        force3D: true,
        autoSleep: 60
    });

    // ---------------------------------------------------
    // 2. Default Configuration
    // ---------------------------------------------------
    // Enhanced configuration with performance settings
    const defaultConfig = {
        selector: '[class*="textify-style"]',
        scrollTrigger: {
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            once: false,
            refreshPriority: -1
        }
    };

    // ---------------------------------------------------
    // 3. Utility Functions
    // ---------------------------------------------------
    /**
     * Parse HTML data-* attributes into JS properties.
     * Converts kebab-case to camelCase and numeric strings to numbers.
     */
    function parseDataAttrs(el) {
        const attrs = {};
        Array.from(el.attributes).forEach(({ name, value }) => {
            if (name.startsWith('data-')) {
                const prop = name
                    .slice(5)
                    .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
                attrs[prop] = isNaN(value) ? value : +value;
            }
        });
        return attrs;
    }

    /**
     * Inject minimal base CSS for character spans.
     */
    function injectBaseCSS() {
        const css = `
        [class*="textify-style"] .split-char {
            display: inline-block;
            transform-origin: center;
            will-change: transform, opacity;
        }
        [class*="textify-style"] {
            display: block;
        }
        [class*="textify-style"] .split-line, 
        [class*="textify-style"] .split-char {
            display: inline-block;
        }
        /* Performance optimizations */
        [class*="textify-style"] {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-perspective: 1000;
            perspective: 1000;
        }
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            [class*="textify-style"] .split-char {
                animation-duration: 0.01ms !important;
                animation-delay: 0ms !important;
                transition-duration: 0.01ms !important;
                transition-delay: 0ms !important;
            }
        }
        `;
        
        const styleEl = document.createElement('style');
        styleEl.textContent = css;
        document.head.appendChild(styleEl);
    }

    // ---------------------------------------------------
    // 4. Animation Style Definitions
    // ---------------------------------------------------
    const animationConfigs = {
        style1: split => ({
            styleClass: 'particle-explosion',
            x: () => gsap.utils.random(-800, 800),
            y: () => gsap.utils.random(-800, 800),
            rotation: () => gsap.utils.random(-360, 360),
            scale: () => gsap.utils.random(0.2, 2),
            opacity: 0,
            ease: 'power3.out',
            stagger: { amount: 1.5, from: 'random' },
            duration: 1.8
        }),
        style2: split => ({
            styleClass: 'explosive-zoom',
            scale: 0,
            rotation: () => gsap.utils.random(-360, 360),
            opacity: 0,
            transformOrigin: 'center center',
            ease: 'elastic.out(1, 0.3)',
            stagger: 0.08,
            duration: 1.8
        }),
        style3: split => ({
            styleClass: 'wave-up',
            y: 100,
            skewY: 15,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.04,
            duration: 1.2
        }),
        style4: split => ({
            styleClass: 'flip-3d',
            rotationY: 180,
            rotationX: 90,
            opacity: 0,
            transformOrigin: 'center',
            ease: 'back.out(1.7)',
            stagger: 0.06,
            duration: 1.4
        }),
        style5: split => ({
            styleClass: 'bounce-scale',
            scale: 0.3,
            y: -80,
            opacity: 0,
            ease: 'bounce.out',
            stagger: 0.05,
            duration: 1.6
        }),
        style6: split => ({
            styleClass: 'spiral-zoom',
            scale: 0.1,
            rotation: 720,
            opacity: 0,
            transformOrigin: 'center',
            ease: 'power4.out',
            stagger: 0.05,
            duration: 1.3
        }),
        style7: split => ({
            styleClass: 'stretch-left',
            x: -200,
            scaleX: 0.1,
            opacity: 0,
            ease: 'elastic.out(1, 0.6)',
            stagger: 0.07,
            duration: 1.5
        }),
        style8: split => ({
            styleClass: 'float-particles',
            x: () => gsap.utils.random(-400, 400),
            y: () => gsap.utils.random(-800, -200),
            scale: () => gsap.utils.random(0.5, 1.5),
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.02,
            duration: 2.0
        }),
        style9: split => ({
            styleClass: 'typewriter',
            scale: 0.5,
            y: 20,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.1,
            duration: 0.8
        }),
        style10: split => ({
            styleClass: 'magnetic-pull',
            x: () => gsap.utils.random(-600, 600),
            y: () => gsap.utils.random(-300, 300),
            scale: 0.7,
            rotation: () => gsap.utils.random(-90, 90),
            opacity: 0,
            ease: 'power3.out',
            stagger: 0.04,
            duration: 1.2
        }),
        style11: split => ({
            styleClass: 'flare-burst',
            scale: 0.2,
            opacity: 0,
            filter: 'brightness(200%)',
            ease: 'expo.out',
            stagger: { amount: 1, from: 'center' },
            duration: 1.4
        }),
        style12: split => ({
            styleClass: 'ripple-wave',
            y: () => gsap.utils.random(50, 150),
            scaleX: 0.5,
            opacity: 0,
            ease: 'power2.inOut',
            stagger: { amount: 1.2, from: 'edges' },
            duration: 1.6
        }),
        style13: split => ({
            styleClass: 'matrix-fall',
            y: -500,
            opacity: 0,
            skewY: 20,
            filter: 'grayscale(100%)',
            ease: 'power3.out',
            stagger: { amount: 1.5, from: 'random' },
            duration: 2.0
        }),
        style14: split => ({
            styleClass: 'flip-carousel',
            rotationX: () => gsap.utils.random(90, 360),
            scale: 0.4,
            opacity: 0,
            transformOrigin: 'center',
            ease: 'back.out(1.5)',
            stagger: 0.05,
            duration: 1.8
        }),
        style15: split => ({
            styleClass: 'pulse-glow',
            scale: () => gsap.utils.random(0.8, 1.2),
            opacity: 0,
            filter: 'drop-shadow(0 0 10px cyan)',
            ease: 'sine.inOut',
            stagger: { amount: 1, from: 'center' },
            duration: 1.2
        }),
        style16: split => ({
            styleClass: 'stagger-zoom',
            scale: 0,
            opacity: 0,
            ease: 'power4.in',
            stagger: { each: 0.1, from: 'end' },
            duration: 1.0
        }),
        style17: split => ({
            styleClass: 'wave-fold',
            x: () => gsap.utils.random(-100, 100),
            y: () => gsap.utils.random(-50, 50),
            skewX: () => gsap.utils.random(-30, 30),
            opacity: 0,
            ease: 'elastic.out(1, 0.4)',
            stagger: { amount: 1.4, from: 'start' },
            duration: 1.7
        }),
        style18: split => ({
            styleClass: 'sine-spray',
            x: () => gsap.utils.random(-300, 300),
            y: () => Math.sin(Date.now() % 360) * 200,
            scale: () => gsap.utils.random(0.5, 1.5),
            opacity: 0,
            ease: 'sine.out',
            stagger: 0.03,
            duration: 2.2
        }),
        style19: split => {
            const cols = 10;
            const rows = Math.ceil(split.chars.length / cols);
            return {
                styleClass: 'flip-3d-grid',
                rotationY: () => gsap.utils.random(0, 360),
                rotationX: () => gsap.utils.random(0, 360),
                z: () => gsap.utils.random(-500, 500),
                opacity: 0,
                ease: 'back.out(2)',
                stagger: { grid: [rows, cols], from: 'center', amount: 2 },
                duration: 2.5
            };
        },
        style20: split => ({
            styleClass: 'glow-trail',
            x: () => gsap.utils.random(-200, 200),
            y: () => gsap.utils.random(-200, 200),
            opacity: 0,
            filter: 'blur(4px) drop-shadow(0 0 20px magenta)',
            ease: 'power2.out',
            stagger: { amount: 1.5, from: 'edges' },
            duration: 2.0
        }),
        style21: split => ({
            styleClass: 'glow-trail-small',
            x: 0,
            y: 0,
            opacity: 0,
            filter: 'blur(4px) drop-shadow(0 0 20px magenta)',
            ease: 'power2.out',
            stagger: { amount: 1.5, from: 'edges' },
            duration: 2.0
        }),
        // NEW PROFESSIONAL ANIMATIONS (22-36) - Modern 2025 Effects
        style22: split => ({
            styleClass: 'morphing-text',
            scaleY: 0.1,
            skewX: 45,
            opacity: 0,
            transformOrigin: 'center bottom',
            ease: 'power4.out',
            stagger: 0.04,
            duration: 1.3
        }),
        style23: split => ({
            styleClass: 'neon-flicker',
            opacity: 0,
            filter: 'drop-shadow(0 0 5px #00ff88) brightness(150%)',
            ease: 'rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: false })',
            stagger: 0.08,
            duration: 1.5
        }),
        
        style24: split => ({
            styleClass: 'liquid-wave',
            y: 60,
            scaleY: 0.3,
            skewY: () => gsap.utils.random(-20, 20),
            opacity: 0,
            ease: 'elastic.out(1, 0.8)',
            stagger: { amount: 1.2, from: 'center' },
            duration: 1.8
        }),
        
        style25: split => ({
            styleClass: 'holographic-shift',
            x: () => gsap.utils.random(-30, 30),
            rotationY: () => gsap.utils.random(-45, 45),
            opacity: 0,
            filter: 'hue-rotate(180deg) saturate(150%)',
            ease: 'power2.out',
            stagger: 0.05,
            duration: 1.4
        }),
        
        style26: split => ({
            styleClass: 'glitch-matrix',
            x: () => gsap.utils.random(-20, 20),
            y: () => gsap.utils.random(-10, 10),
            opacity: 0,
            filter: 'contrast(150%) brightness(120%)',
            ease: 'rough({ template: none.out, strength: 1, points: 10, taper: none, randomize: true })',
            stagger: 0.02,
            duration: 1.1
        }),
        
        style27: split => ({
            styleClass: 'cinematic-reveal',
            y: 100,
            opacity: 0,
            scaleY: 0,
            transformOrigin: 'center top',
            ease: 'power4.out',
            stagger: { amount: 1.5, from: 'start' },
            duration: 2.0
        }),
        
        style28: split => ({
            styleClass: 'floating-letters',
            y: () => gsap.utils.random(-30, 30),
            x: () => gsap.utils.random(-20, 20),
            rotation: () => gsap.utils.random(-15, 15),
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.06,
            duration: 1.6
        }),
        
        style29: split => ({
            styleClass: 'digital-scan',
            scaleX: 0,
            opacity: 0,
            filter: 'brightness(200%) contrast(150%)',
            transformOrigin: 'left center',
            ease: 'power3.out',
            stagger: 0.03,
            duration: 1.2
        }),
        
        style30: split => ({
            styleClass: 'particle-storm',
            x: () => gsap.utils.random(-500, 500),
            y: () => gsap.utils.random(-300, 300),
            rotation: () => gsap.utils.random(-180, 180),
            scale: () => gsap.utils.random(0.3, 1.5),
            opacity: 0,
            ease: 'power3.out',
            stagger: { amount: 2, from: 'random' },
            duration: 2.2
        }),
        
        style31: split => ({
            styleClass: 'vintage-fade',
            opacity: 0,
            filter: 'sepia(100%) contrast(120%) brightness(90%)',
            scale: 0.8,
            ease: 'power2.out',
            stagger: 0.1,
            duration: 1.8
        }),
        
        style32: split => ({
            styleClass: 'cyber-grid',
            y: -100,
            opacity: 0,
            skewY: -10,
            filter: 'drop-shadow(0 0 8px cyan) contrast(150%)',
            ease: 'power4.out',
            stagger: { amount: 1.3, from: 'edges' },
            duration: 1.6
        }),
        
        style33: split => ({
            styleClass: 'elastic-bounce',
            scaleY: 0.1,
            y: 50,
            opacity: 0,
            transformOrigin: 'center bottom',
            ease: 'elastic.out(1.2, 0.4)',
            stagger: 0.05,
            duration: 1.7
        }),
        
        style34: split => ({
            styleClass: 'prism-split',
            x: () => gsap.utils.random(-15, 15),
            opacity: 0,
            filter: 'hue-rotate(90deg) saturate(200%)',
            ease: 'power2.out',
            stagger: { amount: 1, from: 'center' },
            duration: 1.4
        }),
        
        style35: split => ({
            styleClass: 'smoke-reveal',
            y: 40,
            opacity: 0,
            filter: 'blur(8px)',
            ease: 'power3.out',
            stagger: 0.08,
            duration: 1.9
        }),
        
        style36: split => ({
            styleClass: 'quantum-shift',
            scale: () => gsap.utils.random(0.5, 1.5),
            x: () => gsap.utils.random(-40, 40),
            y: () => gsap.utils.random(-40, 40),
            rotation: () => gsap.utils.random(-90, 90),
            opacity: 0,
            ease: 'power3.out',
            stagger: { amount: 1.8, from: 'random' },
            duration: 2.1
        })
    };

    // ---------------------------------------------------
    // 5. Core Animation Function
    // ---------------------------------------------------
    function animateElement(el, styleNum, opts = {}) {
        return new Promise(resolve => {
            document.fonts.ready.then(() => {
                const split = new SplitText(el, {
                    type: 'lines,words,chars',
                    tag: 'span',
                    linesClass: 'split-line',
                    wordsClass: 'split-word',
                    charsClass: 'split-char'
                });
                const key = `style${styleNum}`;
                const baseFn = animationConfigs[key];
                if (!baseFn) return resolve();

                const baseCfg = baseFn(split);
                const dataCfg = parseDataAttrs(el);
                const tweenVars = Object.assign({}, baseCfg, dataCfg, opts);
                const styleClass = tweenVars.styleClass;
                delete tweenVars.styleClass;

                el.classList.add(`textify-style${styleNum}`, styleClass);

                gsap.from(split.chars, {
                    ...tweenVars,
                    scrollTrigger: Object.assign({ trigger: el }, defaultConfig.scrollTrigger),
                    onComplete: resolve
                });
            });
        });
    }

    // ---------------------------------------------------
    // 6. Public API Methods
    // ---------------------------------------------------
    const Textify = {
        version: '4.0.0',

        /**
         * Initialize and auto-animate all matching elements.
         */
        init(config = {}) {
            Object.assign(defaultConfig, config);
            injectBaseCSS();
            document.querySelectorAll(defaultConfig.selector).forEach(el => {
                const m = el.className.match(/textify-style(\d+)/);
                if (m) animateElement(el, +m[1]);
            });
            return this;
        },

        /**
         * Animate a single element on demand.
         */
        animate(selectorOrEl, styleNum, opts) {
            const el = typeof selectorOrEl === 'string'
                ? document.querySelector(selectorOrEl)
                : selectorOrEl;
            if (!el) return Promise.reject('Element not found');
            return animateElement(el, styleNum, opts);
        },

        /**
         * Animate all elements matching selector.
         */
        animateAll(selector = defaultConfig.selector, styleNum) {
            const els = document.querySelectorAll(selector);
            return Promise.all(Array.from(els).map(el => {
                const num = styleNum || (el.className.match(/textify-style(\d+)/) || [])[1];
                return num ? animateElement(el, +num) : Promise.resolve();
            }));
        },

        /**
         * Check if an element has been split into characters.
         */
        isAnimated(selectorOrEl) {
            const el = typeof selectorOrEl === 'string'
                ? document.querySelector(selectorOrEl)
                : selectorOrEl;
            return !!(el && el.querySelector('.split-char'));
        },

        /**
         * Retrieve all available style configurations.
         */
        getStyles() {
            return Object.keys(animationConfigs).map(key => ({ name: key, config: animationConfigs[key] }));
        },

        /**
         * Add or override an animation style.
         */
        addStyle(name, configFn) {
            animationConfigs[name] = configFn;
            return this;
        }
    };

    // ---------------------------------------------------
    // 7. Auto-Initialization on DOM Ready
    // ---------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        if (document.querySelector('[data-textify="auto"]')) {
            Textify.init();
        }
    });

    return Textify;
})));