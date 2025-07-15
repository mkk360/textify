# ✨ Textify - Advanced GSAP SplitText Animation Plugin

> Transform your text into stunning animated experiences with 20+ professionally crafted animation styles.

[![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)](https://github.com/mkk360/textify)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GSAP](https://img.shields.io/badge/GSAP-3.0+-orange.svg)](https://greensock.com/gsap/)
[![Size](https://img.shields.io/badge/size-12kb-brightgreen.svg)](dist/textify.min.js)

## 🚀 Quick Start

### Installation

```bash
npm install textify-gsap
```

### CDN

```html
<!-- Include GSAP (required) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js"></script>

<!-- Include Textify -->
<script src="https://cdn.jsdelivr.net/npm/textify-gsap@1.0.3/dist/textify.min.js"></script>
```

### Basic Usage

```html
<!-- HTML -->
<h1 class="textify-style1">Hello World</h1>
<h2 class="textify-style8">Floating Particles</h2>
<p class="textify-style15">Pulse Glow Effect</p>

<!-- JavaScript -->
<script>
  // Initialize Textify
  Textify.init();
</script>
```

## 🎨 Animation Styles

### Style Gallery

| Style | Class | Effect | Best For |
|-------|-------|---------|----------|
| 1 | `textify-style1` | Particle Explosion | Headlines, Impact Text |
| 2 | `textify-style2` | Explosive Zoom | Call-to-Action, Buttons |
| 3 | `textify-style3` | Wave Up | Subtitles, Descriptions |
| 4 | `textify-style4` | 3D Flip | Modern Headings |
| 5 | `textify-style5` | Bounce Scale | Playful Text |
| 6 | `textify-style6` | Spiral Zoom | Logo Text |
| 7 | `textify-style7` | Stretch Left | Navigation Items |
| 8 | `textify-style8` | Float Particles | Background Text |
| 9 | `textify-style9` | Typewriter | Code, Tech Content |
| 10 | `textify-style10` | Magnetic Pull | Interactive Elements |
| 11 | `textify-style11` | Flare Burst | Announcements |
| 12 | `textify-style12` | Ripple Wave | Smooth Reveals |
| 13 | `textify-style13` | Matrix Fall | Cyberpunk, Tech |
| 14 | `textify-style14` | Flip Carousel | Product Names |
| 15 | `textify-style15` | Pulse Glow | Neon, Gaming |
| 16 | `textify-style16` | Stagger Zoom | Lists, Menus |
| 17 | `textify-style17` | Wave Fold | Artistic Text |
| 18 | `textify-style18` | Sine Spray | Abstract, Creative |
| 19 | `textify-style19` | 3D Grid | Complex Layouts |
| 20 | `textify-style20` | Glow Trail | Magical, Fantasy |

## 🔧 Advanced Configuration

### Data Attributes

Customize any animation using HTML data attributes:

```html
<!-- Override duration and ease -->
<h2 class="textify-style1" 
    data-duration="3" 
    data-ease="power1.out">
    Slow Explosion
</h2>

<!-- Custom stagger and color -->
<h2 class="textify-style15" 
    data-stagger="0.2" 
    data-color="#ff6b6b">
    Custom Pulse
</h2>

<!-- Multiple overrides -->
<h2 class="textify-style8" 
    data-duration="2.5"
    data-stagger="0.05"
    data-ease="elastic.out(1, 0.3)"
    data-filter="blur(2px) drop-shadow(0 0 15px blue)">
    Enhanced Particles
</h2>
```

### Supported Data Attributes

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `data-duration` | Number | Animation duration in seconds | `2.5` |
| `data-stagger` | Number | Delay between characters | `0.1` |
| `data-ease` | String | GSAP easing function | `power2.out` |
| `data-x` | Number | X-axis movement | `100` |
| `data-y` | Number | Y-axis movement | `-50` |
| `data-scale` | Number | Scale factor | `1.5` |
| `data-rotation` | Number | Rotation in degrees | `45` |
| `data-opacity` | Number | Initial opacity | `0.5` |
| `data-filter` | String | CSS filter effects | `blur(2px)` |
| `data-color` | String | Text color | `#ff6b6b` |

### CSS Customization

```css
/* Custom colors for specific styles */
.textify-style1 .char { color: #ff6b6b; }
.textify-style15 .char { color: #4ecdc4; }

/* Add custom shadows */
.textify-style2 .char { 
  text-shadow: 0 0 20px currentColor; 
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .textify-style1 .char { font-size: 0.8em; }
}
```

### JavaScript API

```javascript
// Initialize with options
Textify.init({
  selector: '[class*="textify-style"]',
  scrollTrigger: {
    start: 'top 80%',
    once: true
  }
});

// Manual animation trigger
Textify.animate('.my-text', 'style1');

// Batch animate multiple elements
Textify.animateAll('.textify-style1');

// Check if element is animated
if (Textify.isAnimated('.my-text')) {
  // Element already animated
}
```

## 📱 Responsive Design

Textify automatically adapts to different screen sizes:

```css
/* Built-in responsive breakpoints */
@media (max-width: 480px) {
  .textify-style1 .char { transform: scale(0.8); }
}

@media (max-width: 768px) {
  .textify-style8 .char { animation-duration: 1.5s; }
}
```

## 🎯 Performance Optimization

### Best Practices

1. **Limit simultaneous animations**: Don't animate more than 3-4 text elements at once
2. **Use `once: true`**: Prevent re-triggering on scroll
3. **Optimize for mobile**: Reduce animation complexity on smaller screens
4. **Preload fonts**: Ensure fonts are loaded before animation starts

### Performance Monitoring

```javascript
// Enable performance monitoring
Textify.init({
  performance: true, // Logs animation performance
  maxConcurrent: 3   // Limit concurrent animations
});
```

## 🔧 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 12+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE | 11 | ❌ Not Supported |

## 🚀 Examples

### Hero Section
```html
<section class="hero">
  <h1 class="textify-style1" data-duration="2">
    Welcome to the Future
  </h1>
  <p class="textify-style3" data-stagger="0.05">
    Experience text like never before
  </p>
</section>
```

### Product Cards
```html
<div class="product-card">
  <h3 class="textify-style6" data-ease="elastic.out(1, 0.3)">
    Premium Product
  </h3>
  <span class="textify-style15" data-color="#00ff00">
    $99.99
  </span>
</div>
```

### Navigation Menu
```html
<nav>
  <ul>
    <li><a href="#" class="textify-style7">Home</a></li>
    <li><a href="#" class="textify-style7">About</a></li>
    <li><a href="#" class="textify-style7">Contact</a></li>
  </ul>
</nav>
```

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/mkk360/textify.git
cd textify

# Install dependencies
npm install

# Build for production
npm run build

# Watch for changes
npm run dev
```

### File Structure

```
textify/
├── dist/
│   ├── textify.min.js
│   └── textify.css
├── src/
│   ├── textify.js
│   ├── animations.js
│   └── styles.css
├── examples/
│   ├── basic.html
│   ├── advanced.html
│   └── demos/
├── tests/
│   └── textify.test.js
├── package.json
└── README.md
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Issues & Feature Requests

- 🐛 [Report a Bug](https://github.com/mkk360/textify/issues/new?template=bug_report.md)
- 💡 [Request a Feature](https://github.com/mkk360/textify/issues/new?template=feature_request.md)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/) - The most robust animation library
- [SplitText](https://greensock.com/splittext/) - Professional text splitting
- Community contributors and feedback

## 🔗 Links

- [🌐 Live Demo](https://textify-demo.netlify.app/)
- [📚 Documentation](https://textify-docs.netlify.app/)
- [🎮 Playground](https://codepen.io/collection/textify)
- [💬 Discord Community](https://discord.gg/textify)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/mkk360">Md. Mehadi Hassan</a>
</p>

<p align="center">
  <a href="https://github.com/mkk360/textify">⭐ Star this repository</a> if you found it helpful!
</p>