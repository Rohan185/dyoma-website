# Dyoma Labs Website

A modern, interactive website for Dyoma Labs - an AI & Engineering consulting company. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents inspired by AEOS Labs
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Custom cursor, loading screen, and hover effects
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js 15 and Turbopack
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dyoma-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── Services.tsx        # Services showcase
│   ├── Features.tsx        # Features with benefits
│   ├── About.tsx           # About section with stats
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer with links and social
│   ├── LoadingScreen.tsx   # Animated loading screen
│   └── CustomCursor.tsx    # Custom cursor effect
```

## 🎨 Customization

### Colors
The website uses a dark theme with customizable CSS variables in `globals.css`:
- `--background`: Main background color (#080808)
- `--foreground`: Text color (#ffffff)
- `--accent`: Accent color (#6366f1)
- `--muted`: Muted elements (#404040)

### Content
Update the content in each component file:
- **Hero.tsx**: Main headline and description
- **Services.tsx**: Service offerings and descriptions
- **About.tsx**: Company information and stats
- **Contact.tsx**: Contact information and form
- **Testimonials.tsx**: Client testimonials

### Animations
Animations are configured using Framer Motion. You can adjust:
- Animation delays and durations
- Easing functions
- Hover effects
- Scroll-triggered animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1200px

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, contact us at hello@dyomalabs.com
