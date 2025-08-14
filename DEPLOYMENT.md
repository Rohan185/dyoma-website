# Deployment Guide for Dyoma Labs Website

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial Dyoma Labs website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

## Alternative Deployment Options

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure redirects if needed

### AWS Amplify
1. Connect your GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Docker Deployment
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Create a `.env.local` file for environment-specific variables:
```env
NEXT_PUBLIC_SITE_URL=https://dyomalabs.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
CONTACT_EMAIL=hello@dyomalabs.com
```

## Performance Optimization

The website is already optimized with:
- ✅ Next.js 15 with Turbopack
- ✅ Automatic image optimization
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Font optimization with next/font

## SEO Optimization

- ✅ Meta tags configured
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data ready
- ✅ Semantic HTML structure

## Post-Deployment Checklist

- [ ] Test all animations and interactions
- [ ] Verify responsive design on all devices
- [ ] Check loading performance
- [ ] Test contact form functionality
- [ ] Verify all links work correctly
- [ ] Test smooth scrolling
- [ ] Check cross-browser compatibility

## Custom Domain Setup

1. **Vercel**:
   - Go to your project settings
   - Add your custom domain
   - Configure DNS records as instructed

2. **DNS Configuration**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

## Analytics Setup

Add Google Analytics or your preferred analytics:
1. Get your tracking ID
2. Add to environment variables
3. Update the layout.tsx with tracking code

## Maintenance

- Regular dependency updates: `npm update`
- Monitor Core Web Vitals
- Update content as needed
- Backup regularly
