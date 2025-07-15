/*!
 * Textify v1.0.0
 * Advanced GSAP SplitText Animation Plugin
 * https://github.com/yourusername/textify
 * 
 * Copyright (c) 2025 Your Name
 * Released under the MIT License
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Textify = factory());
}(this, (function () { 'use strict';

  // Check for required dependencies
  if (typeof gsap === 'undefined') {
    throw new Error('Textify requires GSAP. Please include GSAP before Textify.');
  }

  if (typeof SplitText === 'undefined') {
    throw new Error('Textify requires SplitText plugin. Please include SplitText before Textify.');
  }

  // Register GSAP plugins
  gsap.registerPlugin(SplitText, ScrollTrigger);

  // Default configuration
  const defaultConfig = {
    selector: '[class*="textify-style"]',
    scrollTrigger: {
      start: 'top 80%',
      once: true
    },
    performance: false,
    maxConcurrent: 3
  };

  let config = { ...defaultConfig };
  let animationQueue = [];
  let activeAnimations = 0;

  // Animation configurations
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
    })
  };

  // Utility functions
  function parseDataOptions(element, defaults) {
    const options = { ...defaults };
    const dataset = element.dataset;
    
    Object.keys(dataset).forEach(key => {
      const value = dataset[key];
      if (value !== undefined) {
        if (/^[\d.]+$/.test(value)) {
          options[key] = parseFloat(value);
        } else if (value.includes(',')) {
          options[key] = value.split(',').map(v => isNaN(v) ? v.trim() : parseFloat(v));
        } else {
          options[key] = value;
        }
      }
    });
    
    return options;
  }

  function injectCSS() {
    const css = `
      [class*="textify-style"] .char { 
        display: inline-block; 
        transform-origin: center;
      }
      .flip-3d .char { 
        perspective: 800px; 
        transform-style: preserve-3d; 
      }
      .particle-explosion .char { 
        text-shadow: 0 0 10px currentColor; 
      }
      .explosive-zoom .char { 
        transform-origin: center center; 
      }
      .pulse-glow .char { 
        filter: drop-shadow(0 0 10px cyan); 
      }
      .matrix-fall .char { 
        filter: grayscale(100%); 
      }
      .glow-trail .char { 
        filter: blur(4px) drop-shadow(0 0 20px magenta); 
      }
      .flare-burst .char { 
        filter: brightness(200%); 
      }
      .flip-3d-grid .char { 
        perspective: 1000px; 
        transform-style: preserve-3d; 
      }
    `;
    
    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }

  function animateElement(element, styleKey, customConfig = {}) {
    return new Promise((resolve) => {
      if (activeAnimations >= config.maxConcurrent) {
        animationQueue.push({ element, styleKey, customConfig, resolve });
        return;
      }

      activeAnimations++;
      const startTime = config.performance ? performance.now() : null;

      document.fonts.ready.then(() => {
        const split = new SplitText(element, { type: 'chars', tag: 'span' });
        const animationConfig = animationConfigs[styleKey];
        
        if (!animationConfig) {
          console.warn(`Textify: Animation style "${styleKey}" not found`);
          activeAnimations--;
          processQueue();
          resolve();
          return;
        }

        const cfg = animationConfig(split);
        const { styleClass, ...tweenVars } = cfg;
        
        // Parse data attributes
        const finalConfig = parseDataOptions(element, tweenVars);
        
        // Merge custom config
        Object.assign(finalConfig, customConfig);
        
        // Add style class
        element.classList.add(styleClass);
        
        // Animate
        gsap.from(split.chars, {
          ...finalConfig,
          scrollTrigger: {
            trigger: element,
            ...config.scrollTrigger,
            onComplete: () => {
              activeAnimations--;
              processQueue();
              
              if (config.performance) {
                const endTime = performance.now();
                console.log(`Textify: ${styleKey} animated in ${endTime - startTime}ms`);
              }
              
              resolve();
            }
          }
        });
      });
    });
  }

  function processQueue() {
    if (animationQueue.length > 0 && activeAnimations < config.maxConcurrent) {
      const { element, styleKey, customConfig, resolve } = animationQueue.shift();
      animateElement(element, styleKey, customConfig).then(resolve);
    }
  }

  function findElements(selector = config.selector) {
    return document.querySelectorAll(selector);
  }

  function getStyleFromElement(element) {
    const match = element.className.match(/textify-style(\d+)/);
    return match ? `style${match[1]}` : null;
  }

  // Main Textify object
  const Textify = {
    version: '1.0.0',
    
    init: function(options = {}) {
      config = { ...defaultConfig, ...options };
      
      // Inject CSS
      injectCSS();
      
      // Find and animate elements
      const elements = findElements();
      elements.forEach(element => {
        const styleKey = getStyleFromElement(element);
        if (styleKey) {
          animateElement(element, styleKey);
        }
      });
      
      return this;
    },
    
    animate: function(selector, styleKey, customConfig = {}) {
      const element = typeof selector === 'string' ? 
        document.querySelector(selector) : selector;
      
      if (!element) {
        console.warn(`Textify: Element not found for selector "${selector}"`);
        return Promise.resolve();
      }
      
      return animateElement(element, styleKey, customConfig);
    },
    
    animateAll: function(selector, customConfig = {}) {
      const elements = document.querySelectorAll(selector);
      const promises = [];
      
      elements.forEach(element => {
        const styleKey = getStyleFromElement(element);
        if (styleKey) {
          promises.push(animateElement(element, styleKey, customConfig));
        }
      });
      
      return Promise.all(promises);
    },
    
    isAnimated: function(selector) {
      const element = typeof selector === 'string' ? 
        document.querySelector(selector) : selector;
      
      return element && element.classList.contains('textify-animated');
    },
    
    config: function(options) {
      if (options) {
        config = { ...config, ...options };
        return this;
      }
      return config;
    },
    
    styles: Object.keys(animationConfigs),
    
    addStyle: function(name, configFunction) {
      animationConfigs[name] = configFunction;
      return this;
    }
  };

  // Auto-init if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Don't auto-init, let user call init manually
    });
  }

  return Textify;

})));