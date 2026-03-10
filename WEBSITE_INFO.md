# RUBEN'S ROASTED Website

## Overview
Modern, warm, and appetizing website for a local barbecue and chorizo restaurant in Santa Rosa de Cabal, Risaralda, Colombia.

## Pages
1. **Home (/)** - Hero, About, Why Choose Us, Reviews, CTA sections
2. **Menu (/menu)** - Menu items with photos and descriptions
3. **Contact (/contacto)** - Map, contact info, hours, WhatsApp integration
4. **404 Page** - Custom not found page

## Key Features
✓ Fully responsive and mobile-first design
✓ Warm color palette (charcoal #2C1810, warm red #C94A3D, beige #F5E6D3)
✓ Custom Google Fonts (Poppins)
✓ Smooth scroll animations with Motion (Framer Motion)
✓ Floating WhatsApp and Call buttons
✓ Custom scrollbar styling
✓ Sticky header with mobile menu
✓ Google Maps integration
✓ SEO optimized with structured data (JSON-LD)
✓ Dynamic meta tags per page
✓ Social proof (reviews section)
✓ Trust elements (badges, ratings)

## Components
- Header - Sticky navigation with mobile menu
- Footer - Contact info and hours
- FloatingButtons - WhatsApp and call buttons
- ArtisanalBadge - 100% Artesanal badge
- LocalBusinessSchema - Structured data for SEO
- DocumentHead - Dynamic meta tags

## Contact Information
- **Phone**: +57 300 123 4567
- **Address**: Cl. 10 #14-10, Santa Rosa de Cabal, Risaralda, Colombia
- **Hours**: 
  - Monday-Saturday: 11:00 AM - 9:00 PM
  - Sunday: 11:00 AM - 7:00 PM

## Color Palette
- Primary: #2C1810 (Dark charcoal brown)
- Secondary: #C94A3D (Warm red)
- Accent: #F5E6D3 (Beige)
- Background: #FBF7F0 (Light warm beige)
- Muted: #E8DED0

## Technology Stack
- React 18.3.1
- React Router 7.13.0
- Motion (Framer Motion) 12.23.24
- Tailwind CSS 4.1.12
- Lucide React (icons) 0.487.0
- TypeScript

## Next Steps to Make it Production-Ready
1. Replace placeholder phone number (+57 300 123 4567) with real number
2. Update Google Maps coordinates with exact location
3. Add real food photography (currently using Unsplash stock)
4. Add real customer reviews
5. Consider adding:
   - Instagram feed integration
   - Online ordering system (if needed)
   - Image gallery
   - Blog/news section
   - Email newsletter signup

## File Structure
```
/src/app/
  ├── App.tsx
  ├── routes.ts
  ├── components/
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   ├── FloatingButtons.tsx
  │   ├── ArtisanalBadge.tsx
  │   ├── LocalBusinessSchema.tsx
  │   └── DocumentHead.tsx
  └── pages/
      ├── Root.tsx
      ├── Home.tsx
      ├── Menu.tsx
      ├── Contact.tsx
      └── NotFound.tsx
```
