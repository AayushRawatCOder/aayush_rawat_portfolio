# Aayush Rawat - Portfolio (React + Vite)

A modern, performant portfolio built with React and Vite featuring beautiful animations, interactive components, and a fully functional contact form.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🎨 **Beautiful UI** - Warm color theme with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🧩 **Component-Based** - Easy to maintain and extend
- 📧 **Working Contact Form** - Multiple integration options
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Icons** - Icon library
- **CSS3** - Styling with CSS variables
- **Web3Forms/Formspree** - Contact form backend

## 📁 Project Structure

```
portfolio-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── GitHubContributions.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── BackgroundEffects.jsx
│   │   └── ScrollProgress.jsx
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📧 Contact Form Setup

### Option 1: Web3Forms (Recommended - No signup!)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: aayushrawatrawat98@gmail.com
3. Get your Access Key from email
4. Open `src/components/Contact.jsx`
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key
6. Done! 🎉

### Option 2: Formspree

1. Sign up at [https://formspree.io](https://formspree.io)
2. Create a new form
3. Get your form ID
4. Update the fetch URL in `Contact.jsx`

## 🎨 Customization

### Colors

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --warm-cream: #FFF8F0;
  --warm-terracotta: #E07A5F;
  /* ... more colors */
}
```

### Content

Each component is self-contained. Update the content directly in:
- `src/components/Hero.jsx` - Personal info
- `src/components/Skills.jsx` - Technical skills
- `src/components/Experience.jsx` - Work history
- `src/components/Projects.jsx` - Portfolio projects
- etc.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy dist folder to Netlify
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "vite build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 📝 Environment Variables

Create a `.env` file for sensitive data:

```env
VITE_WEB3FORMS_KEY=your_access_key_here
VITE_EMAIL=aayushrawatrawat98@gmail.com
```

Access in components:
```javascript
const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
```

## 🧪 Testing

```bash
# Lint code
npm run lint
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- Email: aayushrawatrawat98@gmail.com
- GitHub: [@aayushrawat](https://github.com/aayushrawat)
- Portfolio: [https://aayush-portfolio-chi.vercel.app](https://aayush-portfolio-chi.vercel.app)

---

Made with ❤️ by Aayush Rawat
