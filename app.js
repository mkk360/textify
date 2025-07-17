/**
 * Textify Playground Application
 * const Version = "4.0.0";
 * Features 36 professional text animation styles:
 * - Original styles (1-20)
 * - New artistic effects (21-25)
 * - Digital effects (26-30)
 * - Vintage and modern styles (31-36)
 */
class TextifyPlayground {
    constructor() {
        this.animations = [
            {
                id: 'style1',
                name: 'Particle Explosion',
                description: 'Characters explode from random directions with rotation and scaling',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-800, 800),
                        y: () => gsap.utils.random(-800, 800),
                        rotation: () => gsap.utils.random(-360, 360),
                        scale: () => gsap.utils.random(0.2, 2),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        x: 0, y: 0, rotation: 0, scale: 1, opacity: 1,
                        duration: duration,
                        ease: ease,
                        stagger: { amount: stagger * chars.length, from: 'random' }
                    });
                }
            },
            {
                id: 'style2',
                name: 'Explosive Zoom',
                description: 'Characters zoom in with elastic bounce and rotation',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scale: 0,
                        rotation: () => gsap.utils.random(-360, 360),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        scale: 1, rotation: 0, opacity: 1,
                        duration: duration,
                        ease: 'elastic.out(1, 0.3)',
                        stagger: 0.08
                    });
                }
            },
            {
                id: 'style3',
                name: 'Wave Up',
                description: 'Smooth wave motion from bottom to top with skew effect',
                category: 'smooth',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        y: 100, skewY: 15, opacity: 0
                    });

                    return gsap.to(chars, {
                        y: 0, skewY: 0, opacity: 1,
                        duration: 1.2,
                        ease: 'power2.out',
                        stagger: 0.04
                    });
                }
            },
            {
                id: 'style4',
                name: '3D Flip',
                description: 'Three-dimensional rotation with depth and perspective',
                category: '3d',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        rotationY: 180, rotationX: 90, opacity: 0
                    });

                    return gsap.to(chars, {
                        rotationY: 0, rotationX: 0, opacity: 1,
                        duration: 1.4,
                        ease: 'back.out(1.7)',
                        stagger: 0.06
                    });
                }
            },
            {
                id: 'style5',
                name: 'Bounce Scale',
                description: 'Playful bounce effect with vertical movement',
                category: 'playful',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scale: 0.3, y: -80, opacity: 0
                    });

                    return gsap.to(chars, {
                        scale: 1, y: 0, opacity: 1,
                        duration: 1.6,
                        ease: 'bounce.out',
                        stagger: 0.05
                    });
                }
            },
            {
                id: 'style6',
                name: 'Spiral Zoom',
                description: 'Rotating spiral effect while scaling from center',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scale: 0.1, rotation: 720, opacity: 0
                    });

                    return gsap.to(chars, {
                        scale: 1, rotation: 0, opacity: 1,
                        duration: 1.3,
                        ease: 'power4.out',
                        stagger: 0.05
                    });
                }
            },
            {
                id: 'style7',
                name: 'Stretch Left',
                description: 'Horizontal stretch with elastic easing from left',
                category: 'smooth',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: -200, scaleX: 0.1, opacity: 0
                    });

                    return gsap.to(chars, {
                        x: 0, scaleX: 1, opacity: 1,
                        duration: 1.5,
                        ease: 'elastic.out(1, 0.6)',
                        stagger: 0.07
                    });
                }
            },
            {
                id: 'style8',
                name: 'Float Particles',
                description: 'Random particle-like movement with varied scaling',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-400, 400),
                        y: () => gsap.utils.random(-800, -200),
                        scale: () => gsap.utils.random(0.5, 1.5),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        x: 0, y: 0, scale: 1, opacity: 1,
                        duration: 2.0,
                        ease: 'power2.out',
                        stagger: 0.02
                    });
                }
            },
            {
                id: 'style9',
                name: 'Typewriter',
                description: 'Sequential reveal with scaling like typewriter effect',
                category: 'smooth',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scale: 0.5, y: 20, opacity: 0
                    });

                    return gsap.to(chars, {
                        scale: 1, y: 0, opacity: 1,
                        duration: 0.8,
                        ease: 'power2.out',
                        stagger: 0.1
                    });
                }
            },
            {
                id: 'style10',
                name: 'Magnetic Pull',
                description: 'Characters attracted from random positions with rotation',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-600, 600),
                        y: () => gsap.utils.random(-300, 300),
                        scale: 0.7,
                        rotation: () => gsap.utils.random(-90, 90),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        x: 0, y: 0, scale: 1, rotation: 0, opacity: 1,
                        duration: 1.2,
                        ease: 'power3.out',
                        stagger: 0.04
                    });
                }
            },
            {
                id: 'style11',
                name: 'Flare Burst',
                description: 'Bright flare effect with center-out reveal',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scale: 0.2, opacity: 0
                    });

                    // Add brightness filter
                    gsap.set(chars, { filter: 'brightness(200%)' });

                    return gsap.to(chars, {
                        scale: 1, opacity: 1,
                        duration: 1.4,
                        ease: 'expo.out',
                        stagger: { amount: 1, from: 'center' },
                        onComplete: () => {
                            gsap.to(chars, { filter: 'brightness(100%)', duration: 0.5 });
                        }
                    });
                }
            },
            {
                id: 'style12',
                name: 'Ripple Wave',
                description: 'Ripple effect spreading from edges with scaling',
                category: 'smooth',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        y: () => gsap.utils.random(50, 150),
                        scaleX: 0.5, opacity: 0
                    });

                    return gsap.to(chars, {
                        y: 0, scaleX: 1, opacity: 1,
                        duration: 1.6,
                        ease: 'power2.inOut',
                        stagger: { amount: 1.2, from: 'edges' }
                    });
                }
            },
            {
                id: 'style13',
                name: 'Matrix Fall',
                description: 'Cyberpunk-style falling effect with grayscale filter',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        y: -500, opacity: 0, skewY: 20
                    });

                    // Add grayscale filter
                    gsap.set(chars, { filter: 'grayscale(100%)' });

                    return gsap.to(chars, {
                        y: 0, opacity: 1, skewY: 0,
                        duration: 2.0,
                        ease: 'power3.out',
                        stagger: { amount: 1.5, from: 'random' },
                        onComplete: () => {
                            gsap.to(chars, { filter: 'grayscale(0%)', duration: 1 });
                        }
                    });
                }
            },
            {
                id: 'style14',
                name: 'Flip Carousel',
                description: 'Carousel-like rotation with varied angles',
                category: '3d',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        rotationX: () => gsap.utils.random(90, 360),
                        scale: 0.4, opacity: 0
                    });

                    return gsap.to(chars, {
                        rotationX: 0, scale: 1, opacity: 1,
                        duration: 1.8,
                        ease: 'back.out(1.5)',
                        stagger: 0.05
                    });
                }
            },
            {
                id: 'style15',
                name: 'Pulse Glow',
                description: 'Neon glow effect with pulsing animation',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scale: () => gsap.utils.random(0.8, 1.2),
                        opacity: 0
                    });

                    // Add cyan glow
                    gsap.set(chars, { filter: 'drop-shadow(0 0 10px cyan)' });

                    return gsap.to(chars, {
                        scale: 1, opacity: 1,
                        duration: 1.2,
                        ease: 'sine.inOut',
                        stagger: { amount: 1, from: 'center' }
                    });
                }
            },
            {
                id: 'style16',
                name: 'Stagger Zoom',
                description: 'Sequential zoom from end to start',
                category: 'smooth',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scale: 0, opacity: 0
                    });

                    return gsap.to(chars, {
                        scale: 1, opacity: 1,
                        duration: 1.0,
                        ease: 'power4.in',
                        stagger: { each: 0.1, from: 'end' }
                    });
                }
            },
            {
                id: 'style17',
                name: 'Wave Fold',
                description: 'Folding wave effect with random positioning and skew',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-100, 100),
                        y: () => gsap.utils.random(-50, 50),
                        skewX: () => gsap.utils.random(-30, 30),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        x: 0, y: 0, skewX: 0, opacity: 1,
                        duration: 1.7,
                        ease: 'elastic.out(1, 0.4)',
                        stagger: { amount: 1.4, from: 'start' }
                    });
                }
            },
            {
                id: 'style18',
                name: 'Sine Spray',
                description: 'Mathematical sine wave motion',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-300, 300),
                        y: (i) => Math.sin(i * 0.5) * 200,
                        scale: () => gsap.utils.random(0.5, 1.5),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        x: 0, y: 0, scale: 1, opacity: 1,
                        duration: 2.2,
                        ease: 'sine.out',
                        stagger: 0.03
                    });
                }
            },
            {
                id: 'style19',
                name: '3D Grid',
                description: 'Complex 3D grid transformation with multi-axis rotation',
                category: '3d',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        rotationY: () => gsap.utils.random(0, 360),
                        rotationX: () => gsap.utils.random(0, 360),
                        z: () => gsap.utils.random(-500, 500),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        rotationY: 0, rotationX: 0, z: 0, opacity: 1,
                        duration: 2.5,
                        ease: 'back.out(2)',
                        stagger: { amount: 2, from: 'center' }
                    });
                }
            },
            {
                id: 'style20',
                name: 'Glow Trail',
                description: 'Magical glow trail effect with blur and magenta shadow',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-200, 200),
                        y: () => gsap.utils.random(-200, 200),
                        opacity: 0,
                        filter: 'blur(4px) drop-shadow(0 0 20px magenta)'
                    });

                    return gsap.to(chars, {
                        x: 0, y: 0, opacity: 1,
                        duration: 2.0,
                        ease: 'power2.out',
                        stagger: { amount: 1.5, from: 'edges' },
                        filter: 'blur(0px) drop-shadow(0 0 0px magenta)',
                        onComplete: () => {
                            gsap.to(chars, { filter: 'blur(0px) drop-shadow(0 0 0px magenta)', duration: 0.5 });
                        }
                    });
                }
            },
            // Add these after style20 and before the closing bracket of the animations array

            {
                id: 'style21',
                name: 'Glow Trail Small',
                description: 'Subtle glow trail effect with magenta shadow',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        opacity: 0,
                        filter: 'blur(4px) drop-shadow(0 0 20px magenta)'
                    });

                    return gsap.to(chars, {
                        opacity: 1,
                        duration: 2.0,
                        ease: 'power2.out',
                        stagger: { amount: 1.5, from: 'edges' },
                        filter: 'blur(0px) drop-shadow(0 0 0px magenta)',
                        onComplete: () => {
                            gsap.to(chars, { filter: 'blur(0px) drop-shadow(0 0 0px magenta)', duration: 0.5 });
                        }
                    });
                }
            },
            {
                id: 'style22',
                name: 'Morphing Text',
                description: 'Text morphing effect with skew transformation',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scaleY: 0.1,
                        skewX: 45,
                        opacity: 0,
                        transformOrigin: 'center bottom'
                    });

                    return gsap.to(chars, {
                        scaleY: 1,
                        skewX: 0,
                        opacity: 1,
                        duration: 1.3,
                        ease: 'power4.out',
                        stagger: 0.04
                    });
                }
            },
            {
                id: 'style23',
                name: 'Neon Flicker',
                description: 'Flickering neon light effect with glow',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        opacity: 0,
                        filter: 'drop-shadow(0 0 5px #00ff88) brightness(150%)'
                    });

                    return gsap.to(chars, {
                        opacity: 1,
                        duration: 1.5,
                        ease: 'rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: false })',
                        stagger: 0.08
                    });
                }
            },
            {
                id: 'style24',
                name: 'Liquid Wave',
                description: 'Fluid wave motion with elastic effect',
                category: 'smooth',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        y: 60,
                        scaleY: 0.3,
                        skewY: () => gsap.utils.random(-20, 20),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        y: 0,
                        scaleY: 1,
                        skewY: 0,
                        opacity: 1,
                        duration: 1.8,
                        ease: 'elastic.out(1, 0.8)',
                        stagger: { amount: 1.2, from: 'center' }
                    });
                }
            },
            {
                id: 'style25',
                name: 'Holographic Shift',
                description: 'Holographic effect with color shifting',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-30, 30),
                        rotationY: () => gsap.utils.random(-45, 45),
                        opacity: 0,
                        filter: 'hue-rotate(180deg) saturate(150%)'
                    });

                    return gsap.to(chars, {
                        x: 0,
                        rotationY: 0,
                        opacity: 1,
                        filter: 'hue-rotate(0deg) saturate(100%)',
                        duration: 1.4,
                        ease: 'power2.out',
                        stagger: 0.05
                    });
                }
            },
            {
                id: 'style26',
                name: 'Glitch Matrix',
                description: 'Digital glitch effect with contrast',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-20, 20),
                        y: () => gsap.utils.random(-10, 10),
                        opacity: 0,
                        filter: 'contrast(150%) brightness(120%)'
                    });

                    return gsap.to(chars, {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        filter: 'contrast(100%) brightness(100%)',
                        duration: 1.1,
                        ease: 'rough({ template: none.out, strength: 1, points: 10, taper: none, randomize: true })',
                        stagger: 0.02
                    });
                }
            },
            {
                id: 'style27',
                name: 'Cinematic Reveal',
                description: 'Professional cinematic text reveal',
                category: 'smooth',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        y: 100,
                        opacity: 0,
                        scaleY: 0,
                        transformOrigin: 'center top'
                    });

                    return gsap.to(chars, {
                        y: 0,
                        opacity: 1,
                        scaleY: 1,
                        duration: 2.0,
                        ease: 'power4.out',
                        stagger: { amount: 1.5, from: 'start' }
                    });
                }
            },
            {
                id: 'style28',
                name: 'Floating Letters',
                description: 'Gentle floating animation with rotation',
                category: 'smooth',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        y: () => gsap.utils.random(-30, 30),
                        x: () => gsap.utils.random(-20, 20),
                        rotation: () => gsap.utils.random(-15, 15),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        y: 0,
                        x: 0,
                        rotation: 0,
                        opacity: 1,
                        duration: 1.6,
                        ease: 'power2.out',
                        stagger: 0.06
                    });
                }
            },
            {
                id: 'style29',
                name: 'Digital Scan',
                description: 'Digital scanning effect with brightness',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scaleX: 0,
                        opacity: 0,
                        filter: 'brightness(200%) contrast(150%)',
                        transformOrigin: 'left center'
                    });

                    return gsap.to(chars, {
                        scaleX: 1,
                        opacity: 1,
                        filter: 'brightness(100%) contrast(100%)',
                        duration: 1.2,
                        ease: 'power3.out',
                        stagger: 0.03
                    });
                }
            },
            {
                id: 'style30',
                name: 'Particle Storm',
                description: 'Chaotic particle storm animation',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-500, 500),
                        y: () => gsap.utils.random(-300, 300),
                        rotation: () => gsap.utils.random(-180, 180),
                        scale: () => gsap.utils.random(0.3, 1.5),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 2.2,
                        ease: 'power3.out',
                        stagger: { amount: 2, from: 'random' }
                    });
                }
            },
            {
                id: 'style31',
                name: 'Vintage Fade',
                description: 'Retro fade effect with sepia tone',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        opacity: 0,
                        filter: 'sepia(100%) contrast(120%) brightness(90%)',
                        scale: 0.8
                    });

                    return gsap.to(chars, {
                        opacity: 1,
                        filter: 'sepia(0%) contrast(100%) brightness(100%)',
                        scale: 1,
                        duration: 1.8,
                        ease: 'power2.out',
                        stagger: 0.1
                    });
                }
            },
            {
                id: 'style32',
                name: 'Cyber Grid',
                description: 'Cyberpunk-inspired grid animation',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        y: -100,
                        opacity: 0,
                        skewY: -10,
                        filter: 'drop-shadow(0 0 8px cyan) contrast(150%)'
                    });

                    return gsap.to(chars, {
                        y: 0,
                        opacity: 1,
                        skewY: 0,
                        filter: 'drop-shadow(0 0 0px cyan) contrast(100%)',
                        duration: 1.6,
                        ease: 'power4.out',
                        stagger: { amount: 1.3, from: 'edges' }
                    });
                }
            },
            {
                id: 'style33',
                name: 'Elastic Bounce',
                description: 'Playful elastic bounce animation',
                category: 'playful',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scaleY: 0.1,
                        y: 50,
                        opacity: 0,
                        transformOrigin: 'center bottom'
                    });

                    return gsap.to(chars, {
                        scaleY: 1,
                        y: 0,
                        opacity: 1,
                        duration: 1.7,
                        ease: 'elastic.out(1.2, 0.4)',
                        stagger: 0.05
                    });
                }
            },
            {
                id: 'style34',
                name: 'Prism Split',
                description: 'Prismatic color split effect',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        x: () => gsap.utils.random(-15, 15),
                        opacity: 0,
                        filter: 'hue-rotate(90deg) saturate(200%)'
                    });

                    return gsap.to(chars, {
                        x: 0,
                        opacity: 1,
                        filter: 'hue-rotate(0deg) saturate(100%)',
                        duration: 1.4,
                        ease: 'power2.out',
                        stagger: { amount: 1, from: 'center' }
                    });
                }
            },
            {
                id: 'style35',
                name: 'Smoke Reveal',
                description: 'Smoky text reveal effect',
                category: 'artistic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        y: 40,
                        opacity: 0,
                        filter: 'blur(8px)'
                    });

                    return gsap.to(chars, {
                        y: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                        duration: 1.9,
                        ease: 'power3.out',
                        stagger: 0.08
                    });
                }
            },
            {
                id: 'style36',
                name: 'Quantum Shift',
                description: 'Complex quantum-inspired animation',
                category: 'dynamic',
                buildTween: (split, opts) => {
                    const { duration, stagger, ease } = opts;
                    const chars = split.chars || [];

                    gsap.set(chars, {
                        scale: () => gsap.utils.random(0.5, 1.5),
                        x: () => gsap.utils.random(-40, 40),
                        y: () => gsap.utils.random(-40, 40),
                        rotation: () => gsap.utils.random(-90, 90),
                        opacity: 0
                    });

                    return gsap.to(chars, {
                        scale: 1,
                        x: 0,
                        y: 0,
                        rotation: 0,
                        opacity: 1,
                        duration: 2.1,
                        ease: 'power3.out',
                        stagger: { amount: 1.8, from: 'random' }
                    });
                }
            }
        ];

        this.currentAnimation = this.animations[0];
        this.currentTween = null;
        this.splitText = null;
        this.isPlaying = false;
        this.currentView = 'gallery';
        this.currentCodeType = 'html';
        this.previewTimeouts = new Map();

        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupGallery();
        this.setupPlayground();
        this.setupCode();
        this.setupDownload();
        this.setupCSSControls(); // Add this line
        this.renderGallery();
        this.populateAnimationSelect();
        this.generateCode();
        console.log('Textify Playground initialized successfully');
    }

    setupNavigation() {
        const navTabs = document.querySelectorAll('.nav-tab');

        navTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const view = e.target.dataset.view;
                this.switchView(view);
            });
        });
    }

    switchView(view) {
        // Update nav tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.view === view);
        });

        // Update view sections
        document.querySelectorAll('.view-section').forEach(section => {
            section.classList.toggle('active', section.id === view);
        });

        this.currentView = view;

        // Stop any playing animations when leaving playground
        if (view !== 'playground' && this.currentTween) {
            this.currentTween.kill();
            this.currentTween = null;
            this.isPlaying = false;
        }
    }

    setupGallery() {
        const categoryBtns = document.querySelectorAll('.category-btn');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;

                // Update active category
                categoryBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Filter gallery
                this.filterGallery(category);
            });
        });
    }

    renderGallery() {
        const grid = document.getElementById('animationGrid');
        if (!grid) return;

        grid.innerHTML = '';

        this.animations.forEach(animation => {
            const card = document.createElement('div');
            card.className = 'animation-card';
            card.dataset.category = animation.category;

            card.innerHTML = `
                <h4>${animation.name}</h4>
                <p class="description">${animation.description}</p>
                <div class="animation-preview">
                    <span>Sample Text</span>
                </div>
                <div class="category">${animation.category}</div>
            `;

            // Add click handler to switch to playground
            card.addEventListener('click', () => {
                this.selectAnimation(animation);
                this.switchView('playground');
            });

            // Add preview animation on hover with proper cleanup
            card.addEventListener('mouseenter', () => {
                this.playPreviewAnimation(card.querySelector('.animation-preview span'), animation);
            });

            card.addEventListener('mouseleave', () => {
                this.stopPreviewAnimation(card.querySelector('.animation-preview span'));
            });

            grid.appendChild(card);
        });
    }

    filterGallery(category) {
        const cards = document.querySelectorAll('.animation-card');

        cards.forEach(card => {
            const cardCategory = card.dataset.category;

            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    playPreviewAnimation(element, animation) {
        if (!element || !animation) return;

        // Clear any existing timeout for this element
        const existingTimeout = this.previewTimeouts.get(element);
        if (existingTimeout) {
            clearTimeout(existingTimeout);
        }

        // Reset element first
        element.textContent = 'Sample Text';

        try {
            // Create split text
            const split = new SplitType(element, { types: 'chars' });

            if (split.chars && split.chars.length > 0) {
                const opts = { duration: 0.8, stagger: 0.03, ease: 'power2.out' };

                // Store the timeout reference
                const timeout = setTimeout(() => {
                    try {
                        animation.buildTween(split, opts);
                    } catch (error) {
                        console.warn('Preview animation failed:', error);
                    }
                }, 100);

                this.previewTimeouts.set(element, timeout);
            }
        } catch (error) {
            console.warn('Preview split failed:', error);
        }
    }

    stopPreviewAnimation(element) {
        if (!element) return;

        // Clear timeout
        const timeout = this.previewTimeouts.get(element);
        if (timeout) {
            clearTimeout(timeout);
            this.previewTimeouts.delete(element);
        }

        // Reset element
        try {
            gsap.killTweensOf(element.querySelectorAll('.char'));
            gsap.set(element.querySelectorAll('.char'), { clearProps: 'all' });
            element.textContent = 'Sample Text';
        } catch (error) {
            // Ignore cleanup errors
        }
    }

    setupPlayground() {
        const textInput = document.getElementById('textInput');
        const colorPicker = document.getElementById('colorPicker');
        const durationSlider = document.getElementById('durationSlider');
        const staggerSlider = document.getElementById('staggerSlider');
        const easeSelect = document.getElementById('easeSelect');
        const animationSelect = document.getElementById('animationSelect');
        const playBtn = document.getElementById('playBtn');
        const resetBtn = document.getElementById('resetBtn');

        // Text input
        if (textInput) {
            textInput.addEventListener('input', (e) => {
                this.updatePreviewText(e.target.value || 'Textify Animation');
                this.generateCode();
            });
        }

        // Color picker
        if (colorPicker) {
            colorPicker.addEventListener('change', (e) => {
                this.updateTextColor(e.target.value);
                this.generateCode();
            });
        }

        // Duration slider
        if (durationSlider) {
            durationSlider.addEventListener('input', (e) => {
                document.getElementById('durationValue').textContent = e.target.value;
                this.generateCode();
            });
        }

        // Stagger slider
        if (staggerSlider) {
            staggerSlider.addEventListener('input', (e) => {
                document.getElementById('staggerValue').textContent = e.target.value;
                this.generateCode();
            });
        }

        // Ease select
        if (easeSelect) {
            easeSelect.addEventListener('change', () => {
                this.generateCode();
            });
        }

        // Animation select
        if (animationSelect) {
            animationSelect.addEventListener('change', (e) => {
                const animationId = e.target.value;
                const animation = this.animations.find(a => a.id === animationId);
                if (animation) {
                    this.selectAnimation(animation);
                }
            });
        }

        // Play button
        if (playBtn) {
            playBtn.addEventListener('click', () => {
                this.playAnimation();
            });
        }

        // Reset button
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetAnimation();
            });
        }

        // Initialize playground
        this.updatePreviewText('Textify Animation');
        this.updateTextColor('#ffffff');
    }

    populateAnimationSelect() {
        const select = document.getElementById('animationSelect');
        if (!select) return;

        select.innerHTML = '';

        this.animations.forEach(animation => {
            const option = document.createElement('option');
            option.value = animation.id;
            option.textContent = animation.name;
            select.appendChild(option);
        });
    }

    selectAnimation(animation) {
        this.currentAnimation = animation;
        const currentAnimationEl = document.getElementById('currentAnimation');
        const animationSelectEl = document.getElementById('animationSelect');

        if (currentAnimationEl) {
            currentAnimationEl.textContent = animation.name;
        }

        if (animationSelectEl) {
            animationSelectEl.value = animation.id;
        }

        // Update split text for new animation
        this.updateSplitText();
        this.generateCode();

        // Add auto-play functionality
        setTimeout(() => {
            this.playAnimation();
        }, 100); // Small delay to ensure split text is ready
    }

    updatePreviewText(text) {
        const previewText = document.getElementById('previewText');
        if (previewText) {
            previewText.textContent = text;
            this.updateSplitText();
        }
    }

    updateTextColor(color) {
        const previewText = document.getElementById('previewText');
        if (previewText) {
            previewText.style.color = color;
        }
    }

    updateSplitText() {
        const previewText = document.getElementById('previewText');
        if (!previewText) return;

        // Kill existing tween
        if (this.currentTween) {
            this.currentTween.kill();
            this.currentTween = null;
        }

        // Revert previous split
        if (this.splitText && this.splitText.revert) {
            this.splitText.revert();
        }

        // Create new split
        try {
            if (typeof SplitType !== 'undefined') {
                this.splitText = new SplitType(previewText, { types: 'chars' });
            } else {
                // Fallback: manual character splitting
                const text = previewText.textContent;
                previewText.innerHTML = text.split('').map(char =>
                    `<span class="char">${char}</span>`
                ).join('');
                this.splitText = { chars: previewText.querySelectorAll('.char') };
            }
        } catch (error) {
            console.warn('Split text failed:', error);
            this.splitText = { chars: [] };
        }

        this.isPlaying = false;
    }

    playAnimation() {
        if (this.isPlaying || !this.splitText || !this.splitText.chars || this.splitText.chars.length === 0) {
            return;
        }

        this.isPlaying = true;

        // Kill existing tween
        if (this.currentTween) {
            this.currentTween.kill();
        }

        // Get current settings
        const durationSlider = document.getElementById('durationSlider');
        const staggerSlider = document.getElementById('staggerSlider');
        const easeSelect = document.getElementById('easeSelect');

        const duration = parseFloat(durationSlider ? durationSlider.value : '1.5');
        const stagger = parseFloat(staggerSlider ? staggerSlider.value : '0.05');
        const ease = easeSelect ? easeSelect.value : 'power2.out';

        const opts = { duration, stagger, ease };

        // Update play button
        const playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.textContent = 'Playing...';
            playBtn.disabled = true;
        }

        try {
            // Create and play animation
            this.currentTween = this.currentAnimation.buildTween(this.splitText, opts);

            if (this.currentTween) {
                this.currentTween.eventCallback('onComplete', () => {
                    if (playBtn) {
                        playBtn.textContent = 'Play Animation';
                        playBtn.disabled = false;
                    }
                    this.isPlaying = false;
                });
            }
        } catch (error) {
            console.error('Animation failed:', error);
            if (playBtn) {
                playBtn.textContent = 'Play Animation';
                playBtn.disabled = false;
            }
            this.isPlaying = false;
        }
    }

    setupCSSControls() {
        // Font Size Control
        const fontSizeSlider = document.getElementById('fontSizeSlider');
        if (fontSizeSlider) {
            fontSizeSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                document.getElementById('fontSizeValue').textContent = `${value}px`;
                this.updateTextStyle('fontSize', `${value}px`);
            });
        }

        // Font Weight Control
        const fontWeightSelect = document.getElementById('fontWeightSelect');
        if (fontWeightSelect) {
            fontWeightSelect.addEventListener('change', (e) => {
                this.updateTextStyle('fontWeight', e.target.value);
            });
        }

        // Letter Spacing Control
        const letterSpacingSlider = document.getElementById('letterSpacingSlider');
        if (letterSpacingSlider) {
            letterSpacingSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                document.getElementById('letterSpacingValue').textContent = `${value}px`;
                this.updateTextStyle('letterSpacing', `${value}px`);
            });
        }

        // Line Height Control
        const lineHeightSlider = document.getElementById('lineHeightSlider');
        if (lineHeightSlider) {
            lineHeightSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                document.getElementById('lineHeightValue').textContent = value;
                this.updateTextStyle('lineHeight', value);
            });
        }

        // Blur Control
        const blurSlider = document.getElementById('blurSlider');
        if (blurSlider) {
            blurSlider.addEventListener('input', () => this.updateFilterEffects());
        }

        // Shadow Size Control
        const shadowSizeSlider = document.getElementById('shadowSizeSlider');
        if (shadowSizeSlider) {
            shadowSizeSlider.addEventListener('input', () => this.updateFilterEffects());
        }

        // Shadow Color Control
        const shadowColorPicker = document.getElementById('shadowColorPicker');
        if (shadowColorPicker) {
            shadowColorPicker.addEventListener('input', () => this.updateFilterEffects());
        }

        // Initialize filter effects
        this.updateFilterEffects();
    }

    updateTextStyle(property, value) {
        const previewText = document.getElementById('previewText');
        if (previewText) {
            previewText.style[property] = value;
            this.generateCode(); // Update code preview
        }
    }

    // Add this new method to your class
    updateFilterEffects() {
        const previewText = document.getElementById('previewText');
        if (!previewText) return;

        const blurValue = document.getElementById('blurSlider')?.value || '0';
        const shadowSize = document.getElementById('shadowSizeSlider')?.value || '10';
        const shadowColor = document.getElementById('shadowColorPicker')?.value || '#ff00ff';

        // Apply the filter directly to the preview text
        const filterValue = `blur(${blurValue}px) drop-shadow(${shadowColor} 0px 0px ${shadowSize}px)`;
        previewText.style.filter = filterValue;

        // Update the display values
        document.getElementById('blurValue').textContent = `${blurValue}px`;
        document.getElementById('shadowSizeValue').textContent = `${shadowSize}px`;

        this.generateCode();
    }

    resetAnimation() {
        // Kill current tween
        if (this.currentTween) {
            this.currentTween.kill();
            this.currentTween = null;
        }

        // Reset form values
        const textInput = document.getElementById('textInput');
        const colorPicker = document.getElementById('colorPicker');
        const durationSlider = document.getElementById('durationSlider');
        const staggerSlider = document.getElementById('staggerSlider');
        const easeSelect = document.getElementById('easeSelect');
        const durationValue = document.getElementById('durationValue');
        const staggerValue = document.getElementById('staggerValue');

        if (textInput) textInput.value = 'Textify Animation';
        if (colorPicker) colorPicker.value = '#ffffff';
        if (durationSlider) durationSlider.value = '1.5';
        if (staggerSlider) staggerSlider.value = '0.05';
        if (easeSelect) easeSelect.value = 'power2.out';
        if (durationValue) durationValue.textContent = '1.5';
        if (staggerValue) staggerValue.textContent = '0.05';

        // Reset preview text
        this.updatePreviewText('Textify Animation');
        this.updateTextColor('#ffffff');

        // Reset split text
        this.updateSplitText();

        // Reset chars if they exist
        if (this.splitText && this.splitText.chars && typeof gsap !== 'undefined') {
            gsap.set(this.splitText.chars, { clearProps: 'all' });
        }

        // Reset button states
        const playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.textContent = 'Play Animation';
            playBtn.disabled = false;
        }
        this.isPlaying = false;

        // Reset CSS controls
        const fontSizeSlider = document.getElementById('fontSizeSlider');
        const fontWeightSelect = document.getElementById('fontWeightSelect');
        const letterSpacingSlider = document.getElementById('letterSpacingSlider');
        const lineHeightSlider = document.getElementById('lineHeightSlider');

        if (fontSizeSlider) {
            fontSizeSlider.value = '56';
            document.getElementById('fontSizeValue').textContent = '56px';
        }
        if (fontWeightSelect) fontWeightSelect.value = '600';
        if (letterSpacingSlider) {
            letterSpacingSlider.value = '0';
            document.getElementById('letterSpacingValue').textContent = '0px';
        }
        if (lineHeightSlider) {
            lineHeightSlider.value = '1.2';
            document.getElementById('lineHeightValue').textContent = '1.2';
        }

        // Reset preview text styles
        const previewText = document.getElementById('previewText');
        // Reset filter controls with new defaults
        const blurSlider = document.getElementById('blurSlider');
        const shadowSizeSlider = document.getElementById('shadowSizeSlider');
        const shadowColorPicker = document.getElementById('shadowColorPicker');

        if (blurSlider) {
            blurSlider.value = '10'; // Reset to 10px
            document.getElementById('blurValue').textContent = '10px';
        }
        if (shadowSizeSlider) {
            shadowSizeSlider.value = '10'; // Reset to 10px
            document.getElementById('shadowSizeValue').textContent = '10px';
        }
        if (shadowColorPicker) {
            shadowColorPicker.value = '#ff00ff';
        }
        if (previewText) {
            previewText.style.fontSize = '56px';
            previewText.style.fontWeight = '600';
            previewText.style.letterSpacing = '0px';
            previewText.style.lineHeight = '1.2';
            previewText.style.filter = 'blur(10px) drop-shadow(#ff00ff 0px 0px 10px)';
        }

        // Regenerate code
        this.generateCode();
    }

    setupCode() {
        const codeTabs = document.querySelectorAll('.code-tab');
        const copyBtn = document.getElementById('copyBtn');

        codeTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const codeType = e.target.dataset.code;

                // Update active tab
                codeTabs.forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');

                // Update code display
                this.currentCodeType = codeType;
                this.generateCode();
            });
        });

        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                this.copyCode();
            });
        }
    }

    generateCode() {
        const codeBlock = document.getElementById('codeBlock');
        const codeTitle = document.getElementById('codeTitle');

        if (!codeBlock || !codeTitle) return;

        const textInput = document.getElementById('textInput');
        const colorPicker = document.getElementById('colorPicker');
        const durationSlider = document.getElementById('durationSlider');
        const staggerSlider = document.getElementById('staggerSlider');
        const easeSelect = document.getElementById('easeSelect');

        const text = textInput ? textInput.value : 'Textify Animation';
        const color = colorPicker ? colorPicker.value : '#ffffff';
        const duration = durationSlider ? durationSlider.value : '1.5';
        const stagger = staggerSlider ? staggerSlider.value : '0.05';
        const ease = easeSelect ? easeSelect.value : 'power2.out';

        let code = '';

        switch (this.currentCodeType) {
            case 'html':
                code = `<div class="textify-container">
    <div class="textify-text" id="textify">${text}</div>
</div>`;
                codeTitle.textContent = 'HTML';
                break;

            case 'css':
                const blurValue = document.getElementById('blurSlider')?.value || '0';
                const shadowSize = document.getElementById('shadowSizeSlider')?.value || '10';
                const shadowColor = document.getElementById('shadowColorPicker')?.value || '#ff00ff';
                code = `.textify-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    perspective: 1000px;
}

.textify-text {
    font-size: 3.5rem;
    font-weight: 600;
    color: ${color};
    text-align: center;
    line-height: 1.2;
    filter: blur(${blurValue}px) drop-shadow(${shadowColor} 0px 0px ${shadowSize}px);
}

.char {
    display: inline-block;
}

/* Special styles for ${this.currentAnimation.name} */
${this.currentAnimation.id === 'style20' ? '.glow-trail { filter: blur(4px) drop-shadow(0 0 20px magenta); }' : ''}
${this.currentAnimation.id === 'style13' ? '.matrix-fall { filter: grayscale(100%); }' : ''}
${this.currentAnimation.id === 'style11' ? '.flare-burst { filter: brightness(200%); }' : ''}
${this.currentAnimation.id === 'style15' ? '.pulse-glow { filter: drop-shadow(0 0 10px cyan); }' : ''}
${this.currentAnimation.id === 'style23' ? '.neon-flicker { filter: drop-shadow(0 0 5px #00ff88) brightness(150%); }' : ''}
${this.currentAnimation.id === 'style25' ? '.holographic-shift { filter: hue-rotate(180deg) saturate(150%); }' : ''}
${this.currentAnimation.id === 'style26' ? '.glitch-matrix { filter: contrast(150%) brightness(120%); }' : ''}
${this.currentAnimation.id === 'style31' ? '.vintage-fade { filter: sepia(100%) contrast(120%) brightness(90%); }' : ''}
${this.currentAnimation.id === 'style32' ? '.cyber-grid { filter: drop-shadow(0 0 8px cyan) contrast(150%); }' : ''}`;
                codeTitle.textContent = 'CSS';
                break;

            case 'js':
                code = `// ${this.currentAnimation.name} Animation
const textElement = document.getElementById('textify');

// Create split text
const split = new SplitType(textElement, { types: 'chars' });

// Animation function
function animate${this.currentAnimation.id}(split) {
    const chars = split.chars;
    
    // Set initial state
    gsap.set(chars, {
        opacity: 0
        // Animation-specific initial properties
    });
    
    // Create animation
    return gsap.to(chars, {
        opacity: 1,
        duration: ${duration},
        ease: '${ease}',
        stagger: ${stagger}
    });
}

// Play animation
const tween = animate${this.currentAnimation.id}(split);

// Control functions
function playAnimation() {
    tween.restart();
}

function resetAnimation() {
    tween.kill();
    gsap.set(split.chars, { clearProps: 'all' });
}`;
                codeTitle.textContent = 'JavaScript';
                break;
        }

        codeBlock.innerHTML = `<code>${this.escapeHtml(code)}</code>`;
    }

    copyCode() {
        const codeBlock = document.getElementById('codeBlock');
        const copyBtn = document.getElementById('copyBtn');

        if (!codeBlock) return;

        const code = codeBlock.textContent;

        navigator.clipboard.writeText(code).then(() => {
            if (copyBtn) {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy Code';
                }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy code:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            if (copyBtn) {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy Code';
                }, 2000);
            }
        });
    }

    setupDownload() {
        const downloadBtn = document.getElementById('downloadBtn');

        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                // Create a mock download
                const blob = new Blob([this.generatePluginCode()], { type: 'application/javascript' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'textify.js';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        }
    }

    generatePluginCode() {
        return `/**
 * Textify Playground Application
 * Version: 2.0.1
 * 
 * Features 36 professional text animation styles:
 * - Original styles (1-20)
 * - New artistic effects (21-25)
 * - Digital effects (26-30)
 * - Vintage and modern styles (31-36)
 */

class Textify {
    constructor(element, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.options = {
            style: 'style1',
            duration: 1.5,
            stagger: 0.05,
            ease: 'power2.out',
            ...options
        };
        
        this.init();
    }
    
    init() {
        if (!this.element) return;
        
        // Create split text
        this.split = new SplitType(this.element, { types: 'chars' });
        
        // Apply animation
        this.animate();
    }
    
    animate() {
        // Get animation by style
        const animationMap = {
            style1: this.particleExplosion,
            style2: this.explosiveZoom,
            style3: this.waveUp,
            style4: this.flip3D,
            style5: this.bounceScale,
            style6: this.spiralZoom,
            style7: this.stretchLeft,
            style8: this.floatParticles,
            style9: this.typewriter,
            style10: this.magneticPull,
            style11: this.flareBurst,
            style12: this.rippleWave,
            style13: this.matrixFall,
            style14: this.flipCarousel,
            style15: this.pulseGlow,
            style16: this.staggerZoom,
            style17: this.waveFold,
            style18: this.sineSpray,
            style19: this.grid3D,
            style20: this.glowTrail,
            style21: this.glowTrailSmall,
            style22: this.morphingText,
            style23: this.neonFlicker,
            style24: this.liquidWave,
            style25: this.holographicShift,
            style26: this.glitchMatrix,
            style27: this.cinematicReveal,
            style28: this.floatingLetters,
            style29: this.digitalScan,
            style30: this.particleStorm,
            style31: this.vintageFade,
            style32: this.cyberGrid,
            style33: this.elasticBounce,
            style34: this.prismSplit,
            style35: this.smokeReveal,
            style36: this.quantumShift
        };
        
        const animationFunc = animationMap[this.options.style];
        if (animationFunc) {
            this.tween = animationFunc.call(this);
        }
    }
    
    particleExplosion() {
        const chars = this.split.chars;
        gsap.set(chars, {
            x: () => gsap.utils.random(-800, 800),
            y: () => gsap.utils.random(-800, 800),
            rotation: () => gsap.utils.random(-360, 360),
            scale: () => gsap.utils.random(0.2, 2),
            opacity: 0
        });
        
        return gsap.to(chars, {
            x: 0, y: 0, rotation: 0, scale: 1, opacity: 1,
            duration: this.options.duration,
            ease: this.options.ease,
            stagger: { amount: this.options.stagger * chars.length, from: 'random' }
        });
    }
    
    // Additional animation methods would be included here...
    
    play() {
        if (this.tween) {
            this.tween.restart();
        }
    }
    
    reset() {
        if (this.tween) {
            this.tween.kill();
        }
        if (this.split && this.split.chars) {
            gsap.set(this.split.chars, { clearProps: 'all' });
        }
    }
    
    destroy() {
        this.reset();
        if (this.split && this.split.revert) {
            this.split.revert();
        }
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Textify;
} else {
    window.Textify = Textify;
}`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TextifyPlayground();
});

// Initialize Prism after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});
