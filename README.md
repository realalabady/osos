<div align="center">

# ⚖️ Saudi Law Firm Website

### شركة سعد خليف العنزي للمحاماة والاستشارات القانونية

**Saad Khalid Alanazi Law & Legal Firm**

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

⭐ **5.0 Rating** | 📍 **Dhahran, Saudi Arabia** | 📞 **057 576 0600**

[Live Demo](#) • [Documentation](#) • [Report Issue](#)

</div>

---

## 📋 Project Overview

Production-quality frontend code for a well-established Saudi law firm. This is not a demo, landing page, or startup website. The output must reflect **authority, credibility, restraint, and long-term trust**.

⚠️ **Design Philosophy**: Avoid gimmicks, trendy layouts, or playful UI patterns.

---

## 🏛️ Firm Identity

Use consistently across all content:

### Arabic Name

**شركة سعد خليف العنزي للمحاماة والاستشارات القانونية**

### English Name

**Saad Khalid Alanazi Law & Legal Firm**

### Also Known As

Foundations of Law and Legal Systems

### Business Information

- **Industry**: Law Firm / Legal Consulting
- **Reputation**: ⭐ 5.0 rating (48 reviews)
- **Address**: Prince Mohammed Bin Fahd Road, Al Qusur, Dhahran 34247
- **Location**: Dawan Complex
- **Phone**: 057 576 0600
- **Business Hours**: Open until 9:00 PM

### Brand Personality

- Authoritative
- Discreet
- Trust-focused
- Modern but conservative

**Target Audience**: Corporate clients, government entities, and high-value individuals

---

## 🛠️ Mandatory Technology Stack

| Technology             | Purpose                                                  |
| ---------------------- | -------------------------------------------------------- |
| **React + TypeScript** | UI library with strict typing                            |
| **TailwindCSS**        | Styling (no inline styles, no CSS files)                 |
| **React Router**       | All pages routed                                         |
| **i18n**               | Arabic + English support                                 |
| **RTL Support**        | Full right-to-left layout support                        |
| **Responsive Design**  | Mobile-first approach                                    |
| **Animations**         | Subtle only (Framer Motion or CSS transitions)           |
| **Typography**         | Elegant Arabic & English fonts suitable for legal brands |

### Current Dependencies

- React 19.2.0
- TypeScript 5.9.3
- Vite (Rolldown) 7.2.5
- ESLint 9.39.1

---

## 📁 Project Structure

**Must be respected:**

```
src/
  components/     # Reusable components only
  layouts/        # Layout components
  pages/          # Page components
  routes/         # Routing configuration
  data/           # Data files (services, team, blog)
  i18n/           # ar.json and en.json
    ar.json       # Arabic translations
    en.json       # English translations
```

**Principles:**

- Clear separation of layout, content, and logic
- No bloated abstractions
- Maintainable, production-leaning code

---

## 📄 Required Pages & Behavior

### 1. Home

- Calm, restrained hero section
- ❌ No sliders, no autoplay motion
- Clear value proposition: legal expertise, experience, trust
- Services overview
- Primary CTA: Contact / Consultation

### 2. About the Firm

- Firm overview
- Legal philosophy
- Experience and credibility
- ⚠️ Tone must be formal and professional

### 3. Services

Structured legal service sections:

- Legal consultation
- Corporate & commercial law
- Litigation & dispute resolution
- Contracts & compliance
- Ongoing legal advisory

⚠️ Language must be **precise, formal, and legally appropriate**

### 4. Our Team

- Lawyers and legal consultants
- Clean profile cards with:
  - Name
  - Title
  - Short bio placeholder
- Emphasize authority and expertise

### 5. Blog / Legal Insights

Articles related to:

- Legal updates
- Business law
- Client education
- Clean, readable layout
- ❌ No engagement-bait styling

### 6. Contact

- Address
- Phone
- Business hours
- Map embed placeholder
- Simple, professional contact form

### 7. 404 Page

- Minimal, branded error page
- ❌ No humor or gimmicks

---

## 🎨 Design & UX Constraints

### Premium Law-Firm Aesthetic

**Color Palette** (Neutral & Authoritative):

- 🔵 Dark blue
- ⚫ Charcoal
- ⚪ Off-white
- 🟡 Subtle gold accents

### Typography

- Strong spacing and typographic hierarchy
- Fancy but restrained fonts
- Arabic + English compatible

### Animations

Must be:

- ✅ Minimal
- ✅ Purposeful
- ✅ Optional

---

## 💻 Implementation Rules

### Code Quality

- ✅ Prefer clarity over cleverness
- ✅ Avoid over-engineering
- ✅ Strongly typed props and data models
- ✅ Write maintainable, production-leaning code
- ❌ Do not generate placeholder "demo" logic

### Data Management

- Services data → `/data`
- Team data → `/data`
- Blog data → `/data`
- i18n strings → `ar.json` and `en.json`

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

Compiles TypeScript and builds for production in the `dist` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

### Lint

```bash
npm run lint
```

Check and fix code quality issues.

---

## 📝 Development Guidelines

1. **Edit files** in the `src` directory
2. **Hot Module Replacement (HMR)** will automatically refresh changes
3. **TypeScript** provides real-time type checking
4. **TailwindCSS** only for styling - no inline styles or separate CSS files
5. **i18n** - Always provide both Arabic and English content
6. **RTL** - Test both LTR (English) and RTL (Arabic) layouts

---

## 🌐 Language Support

### Language Toggle

- Implement a language switcher component
- Store language preference
- Switch between Arabic (RTL) and English (LTR)

### Translation Files

- `src/i18n/ar.json` - Arabic translations
- `src/i18n/en.json` - English translations

---

## ⚡ Performance Notes

- Node.js version 18+ recommended
- Uses Rolldown-Vite for improved build performance
- Optimize images in `/public` or `/src/assets`
- Lazy load pages with React Router

---

## 👨‍💻 Development Team

Created for a professional Saudi law firm to showcase legal services with authority and credibility.

---

## 🎯 Component Guidelines

### Button Components

```tsx
// Primary CTA Button
<button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">
  Contact Us
</button>

// Secondary Button
<button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
  Learn More
</button>
```

### Card Components

```tsx
// Service Card
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow">
  <h3 className="text-xl font-bold text-gray-900 mb-3">Service Title</h3>
  <p className="text-gray-600">Service description...</p>
</div>

// Team Member Card
<div className="text-center">
  <img src="..." alt="..." className="w-32 h-32 rounded-full mx-auto mb-4" />
  <h4 className="text-lg font-semibold text-gray-900">Name</h4>
  <p className="text-sm text-gray-600">Title</p>
</div>
```

---

## 🌈 Design System

### Color Palette

```css
/* Primary Colors */
--color-primary: #1e3a8a; /* Dark Blue */
--color-secondary: #374151; /* Charcoal */
--color-accent: #d97706; /* Gold */

/* Neutral Colors */
--color-background: #f9fafb; /* Off-White */
--color-text-primary: #111827; /* Almost Black */
--color-text-secondary: #6b7280; /* Gray */
```

### Typography Scale

```css
/* Headings */
h1: 3.5rem (56px) - font-bold
h2: 2.5rem (40px) - font-bold
h3: 1.875rem (30px) - font-semibold
h4: 1.5rem (24px) - font-semibold

/* Body Text */
body: 1rem (16px) - font-normal
small: 0.875rem (14px) - font-normal
```

### Spacing System

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Size   | Device         |
| ---------- | ------ | -------------- |
| `sm`       | 640px  | Mobile (Large) |
| `md`       | 768px  | Tablet         |
| `lg`       | 1024px | Laptop         |
| `xl`       | 1280px | Desktop        |
| `2xl`      | 1536px | Large Desktop  |

### Example Usage

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>
```

---

## 🔒 SEO & Meta Tags

### Required Meta Tags

```html
<head>
  <title>Saad Khalid Alanazi Law & Legal Firm | Legal Consulting</title>
  <meta name="description" content="Professional legal services in Saudi Arabia..." />
  <meta name="keywords" content="law firm, legal consulting, Saudi Arabia, Dhahran" />

  <!-- Open Graph -->
  <meta property="og:title" content="Saad Khalid Alanazi Law & Legal Firm" />
  <meta property="og:description" content="..." />
  <meta property="og:type" content="website" />

  <!-- Arabic Support -->
  <html lang="ar" dir="rtl">
</head>
```

---

## 🧪 Testing Checklist

### Before Deployment

- [ ] All pages render correctly in Arabic (RTL)
- [ ] All pages render correctly in English (LTR)
- [ ] Language toggle works seamlessly
- [ ] Forms validate properly
- [ ] Mobile responsive on all screen sizes
- [ ] Images optimized and loading fast
- [ ] SEO meta tags present on all pages
- [ ] No console errors
- [ ] Accessibility tested (WCAG 2.1 Level AA)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

---

## 📚 Folder Structure (Detailed)

```
osas/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
│       ├── hero-bg.jpg
│       └── team/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       └── ContactForm.tsx
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── BlogLayout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── routes/
│   │   └── index.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── team.ts
│   │   └── blog.ts
│   ├── i18n/
│   │   ├── ar.json
│   │   ├── en.json
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useTranslation.ts
│   │   └── useDirection.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚨 Common Issues & Solutions

### Issue: RTL Layout Breaking

**Solution:**

```tsx
// Always use Tailwind's RTL-aware classes
<div className="ms-4 me-8">
  {" "}
  {/* Instead of ml-4 mr-8 */}
  Content
</div>
```

### Issue: Font Not Loading for Arabic

**Solution:**

```css
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap");

body {
  font-family: "Tajawal", "Inter", sans-serif;
}
```

### Issue: Build Errors with TypeScript

**Solution:**

```bash
# Clear cache and rebuild
npm run build -- --clearCache
```

---

## 🎓 Best Practices

### 1. Component Organization

```tsx
// ✅ Good: Single Responsibility
const ServiceCard = ({ service }: { service: Service }) => { ... }

// ❌ Bad: Multiple responsibilities
const ServicesSection = () => { /* handles data + UI + logic */ }
```

### 2. TypeScript Usage

```tsx
// ✅ Good: Proper typing
interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

// ❌ Bad: Using any
const member: any = { ... }
```

### 3. Translation Keys

```tsx
// ✅ Good: Namespaced keys
t("home.hero.title");
t("services.corporate.description");

// ❌ Bad: Flat keys
t("title");
t("description");
```

---

## 📞 Contact & Support

### Project Maintainer

- **Email**: [Your Email]
- **Phone**: [Your Phone]

### Client Information

- **Firm**: Saad Khalid Alanazi Law & Legal Firm
- **Location**: Dawan Complex, Dhahran 34247
- **Phone**: 057 576 0600

---

## 🔄 Version History

### v1.0.0 - Initial Release

- ✅ Home page with hero section
- ✅ Services page
- ✅ About page
- ✅ Team page
- ✅ Blog/Insights page
- ✅ Contact page with form
- ✅ 404 page
- ✅ Full Arabic/English i18n support
- ✅ RTL/LTR layout support
- ✅ Mobile responsive design
- ✅ SEO optimization

---

## 📝 Contributing Guidelines

### Code Style

1. Use TypeScript strict mode
2. Follow ESLint rules (no warnings)
3. Use TailwindCSS utility classes only
4. Write descriptive component names
5. Add JSDoc comments for complex functions

### Commit Messages

```
feat: Add new service card component
fix: Resolve RTL layout issue in header
docs: Update README with deployment instructions
style: Format code with Prettier
refactor: Simplify translation hook logic
```

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized build
npm run build

# Test production build locally
npm run preview
```

### Deployment Platforms

#### Vercel

```bash
npm i -g vercel
vercel --prod
```

#### Netlify

```bash
npm run build
# Upload 'dist' folder to Netlify
```

#### Traditional Hosting

```bash
npm run build
# Upload contents of 'dist' folder to your web server
```

---

## 📄 License

This project is **proprietary and confidential**.

© 2026 Saad Khalid Alanazi Law & Legal Firm. All rights reserved.

---

<div align="center">

**Built with ❤️ for Legal Excellence**

[⬆ Back to Top](#-saudi-law-firm-website)

</div>
