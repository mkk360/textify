# Contributing to Textify

Thank you for your interest in contributing to Textify! We welcome contributions from everyone, whether you're fixing bugs, adding new features, improving documentation, or suggesting new animation styles.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/mkk360/textify.git
   cd textify
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- GSAP 3.0+ (for development)

### Build Process

```bash
# Development build with watch mode
npm run dev

# Production build
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Generate documentation
npm run docs
```

## 🎨 Adding New Animation Styles

We're always looking for new, creative animation styles! Here's how to add one:

### 1. Create the Animation Config

Add your animation to the `animationConfigs` object in `src/textify.js`:

```javascript
styleN: split => ({
  styleClass: 'your-animation-name',
  // Your animation properties
  x: () => gsap.utils.random(-200, 200),
  y: 50,
  opacity: 0,
  rotation: 45,
  scale: 0.8,
  ease: 'power2.out',
  stagger: 0.05,
  duration: 1.2
})
```

### 2. Add CSS Styling (Optional)

If your animation needs specific CSS, add it to the `injectCSS` function:

```javascript
.your-animation-name .char {
  /* Your custom styles */
  text-shadow: 0 0 10px currentColor;
  filter: blur(1px);
}
```

### 3. Update Documentation

- Add your style to the README.md style gallery
- Include it in the live demo data
- Provide usage examples

### 4. Test Your Animation

- Test on different devices and browsers
- Ensure it works with various text lengths
- Check performance impact

## 🐛 Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to reproduce**: Exact steps to trigger the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, OS, GSAP version
- **Code sample**: Minimal code that reproduces the issue

### Bug Report Template

```markdown
**Bug Description**
A clear and concise description of the bug.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- Browser: [e.g. Chrome 91]
- OS: [e.g. macOS 12]
- GSAP Version: [e.g. 3.12.2]
- Textify Version: [e.g. 1.0.3]

**Additional Context**
Add any other context about the problem here.
```

## 💡 Feature Requests

For new features, please:

1. **Check existing issues** to avoid duplicates
2. **Describe the feature** clearly
3. **Explain the use case** and benefits
4. **Provide examples** if possible

## 🔧 Code Style

We use ESLint and Prettier for code formatting. Please ensure your code:

- Follows the existing code style
- Includes appropriate comments
- Has meaningful variable names
- Includes JSDoc comments for functions

### Code Style Guidelines

```javascript
// Good
function animateText(element, config) {
  /**
   * Animates text characters with GSAP
   * @param {HTMLElement} element - The target element
   * @param {Object} config - Animation configuration
   */
  const split = new SplitText(element, { type: 'chars' });
  gsap.from(split.chars, config);
}

// Bad
function animate(el, cfg) {
  const s = new SplitText(el, { type: 'chars' });
  gsap.from(s.chars, cfg);
}
```

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Tests pass (`npm test`)
- [ ] Lint passes (`npm run lint`)
- [ ] Documentation is updated if needed
- [ ] Changes are tested in multiple browsers

### Pull Request Template

```markdown
## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have tested these changes locally
- [ ] I have tested in multiple browsers
- [ ] I have added/updated tests if needed

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

## 🎯 Animation Quality Guidelines

When creating new animations:

### Performance
- Keep animations under 3 seconds
- Use transforms instead of layout properties
- Minimize DOM manipulations
- Consider mobile performance

### Accessibility
- Respect `prefers-reduced-motion`
- Provide alternative text for screen readers
- Ensure sufficient color contrast
- Don't rely solely on animation for important information

### Design Principles
- **Purposeful**: Each animation should serve a purpose
- **Subtle**: Avoid overwhelming the user
- **Consistent**: Match the overall design system
- **Responsive**: Work well on all screen sizes

## 🧪 Testing

We use Jest for testing. Please include tests for:

- New features
- Bug fixes
- Edge cases
- Browser compatibility

### Test Structure

```javascript
describe('Textify Animation', () => {
  beforeEach(() => {
    // Setup test environment
  });

  test('should animate text characters', () => {
    // Test implementation
  });

  test('should handle custom configurations', () => {
    // Test custom configs
  });
});
```

## 📖 Documentation

Good documentation includes:

- **Clear examples** with code snippets
- **API references** with parameter descriptions
- **Use cases** and best practices
- **Performance tips** and limitations

## 🌟 Recognition

Contributors are recognized in:

- README.md contributors section
- Release notes
- GitHub contributors page
- Special mentions for significant contributions

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Discord**: Join our community chat
- **Email**: For security issues or private matters

## 🚀 Release Process

1. **Version bump**: Update version in package.json
2. **Build**: Run production build
3. **Test**: Comprehensive testing
4. **Documentation**: Update changelog and docs
5. **Publish**: Release to npm
6. **Announce**: Share on social media and communities

## 📄 License

By contributing to Textify, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Textify! Your help makes this project better for everyone. 🎉