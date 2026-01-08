# Olivabot Website - App Directory

This directory contains the Next.js application for the Olivabot website, a platform showcasing Olivabot's bio-inspired olive harvesting robot technology.

## Overview

Olivabot is an innovative, biodegradable robot designed for gentle, contamination-free olive harvesting. The website is built with Next.js and supports multiple languages, featuring a modern, responsive design with SEO optimization.

## Website Structure

### Root Layout (`layout.tsx`)
- **Title**: Olivabot - Bio-Inspired Olive Harvesting Robot
- **Description**: Innovative biodegradable robot with soft grippers for gentle, contamination-free olive harvesting.
- **Languages Supported**: English (en), Italian (it), Greek (el), Spanish (es), Portuguese (pt)
- **SEO Features**: Comprehensive metadata, structured data, favicon configuration
- **Components**: Speed Insights, theme provider, language provider, dynamic layout, navbar, footer

### Language-Specific Layout (`[lang]/layout.tsx`)
- **Dynamic routing** for internationalization
- **SEO metadata** with language alternates
- **Performance monitoring** and analytics integration
- **Preload resources** for optimized loading

### Home Page (`[lang]/page.tsx`)
The homepage features several key sections:

#### Hero Section
- **Title**: Olivabot
- **Subtitle**: Bio-Inspired Robots for Olive Harvesting
- **Description**: Lightweight, solar-powered climbing robot for harvesting olives—quietly, gently, and without damaging trees or terrain.
- **Call-to-Actions**: "Let's Talk" (contact) and "View Product"

#### Prototype Gallery Section
- **Heading**: Latest Prototype: Gibbon Bot mk1
- **Subtitle**: Successfully tested in August 2025 in Southern Italy olive groves
- **Gallery Features**: Field testing images with badges for different aspects (Field Testing, Branch Attachment, Gripper Design, etc.)
- **Images**: 6 prototype testing photos from August 2025 field tests

#### Page Abstracts Section
Four cards linking to main sections:
1. **Product**: Discover the advanced olive harvesting robot with detailed specifications
2. **Impact**: Explore contributions to UN Sustainable Development Goals
3. **Mission**: Learn about vision for sustainable agriculture
4. **Contact**: Get in touch with the team

#### Contact Section
- **Email**: hello@olivabot.com
- **Phone**: +31 6 47 338 467
- **LinkedIn**: https://www.linkedin.com/company/olivabot/

### Product Page (`[lang]/product/page.tsx`)
Detailed product information including:
- **Hero**: The Gentle Gibbon-Inspired Harvester
- **Features**: Agile Climber, Autonomous Harvesting, Bioinspired Hands, Sustainable Build
- **Productivity**: ~2,000 kg olives per week, 0.5-1 hectare coverage
- **Development Status**: Under development, field tested August 2025
- **Next Developments**: Enhanced fingers, improved battery, advanced AI, automated funnel

### Mission Page (`[lang]/mission/page.tsx`)
- **Vision**: Growing a Greener, Healthier Future with Olivabot
- **Values**: Environmental Stewardship, Social Responsibility, Innovation with Purpose
- **Goals**: Short-term (2025-2026) and Long-term (2027-2030) objectives
- **Impact**: Sustainable harvesting practices, reduced environmental damage

### Impact Page (`[lang]/impact/page.tsx`)
- **Focus**: Making a Positive Difference for People and Planet
- **UN SDGs Alignment**: Supports 7 Sustainable Development Goals
  - Zero Hunger (SDG 2)
  - Clean Water & Sanitation (SDG 6)
  - Affordable Clean Energy (SDG 7)
  - Industry, Innovation & Infrastructure (SDG 9)
  - Responsible Consumption & Production (SDG 12)
  - Climate Action (SDG 13)
  - Life on Land (SDG 15)

### Contact Page (`[lang]/contact/page.tsx`)
- **Company Info**: Olivabot B.V., Amsterdam, Netherlands
- **Contact Details**: Email, phone, LinkedIn
- **Business Info**: Agricultural Technology Startup focused on Sustainable Olive Harvesting Robotics

## Technical Features

### Internationalization
- **Languages**: English, Italian, Greek, Spanish, Portuguese
- **Translation Files**: Located in `lib/i18n/`
- **Language Context**: Managed via `language-context.tsx`

### SEO & Performance
- **Structured Data**: Organization, website, product, breadcrumb schemas
- **Meta Tags**: Comprehensive SEO metadata for each page
- **Performance Monitoring**: Built-in performance tracking
- **Image Optimization**: Next.js Image component with priority loading

### Design System
- **UI Components**: Custom components in `components/ui/`
- **Theme**: Light/dark mode support
- **Styling**: Tailwind CSS with custom gradients and animations
- **Icons**: Lucide React icons

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Alt texts and structured content

## File Structure

```
app/
├── globals.css                 # Global styles
├── layout.tsx                  # Root layout
├── not-found.tsx              # 404 page
├── robots.ts                  # Robots.txt generation
├── [lang]/                    # Internationalized routes
│   ├── layout.tsx            # Language-specific layout
│   ├── page.tsx              # Homepage
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── courses/
│   │   └── page.tsx          # Courses page
│   ├── impact/
│   │   └── page.tsx          # Impact page
│   ├── mission/
│   │   └── page.tsx          # Mission page
│   └── product/
│       └── page.tsx          # Product page
```

## Key Components Used

- **Navbar**: Navigation with language switcher
- **Footer**: Company info, links, contact details
- **ImageGallery**: Prototype image display with badges
- **Seo**: SEO metadata and structured data management
- **ThemeProvider**: Dark/light theme management
- **LanguageProvider**: Internationalization context
- **PerformanceMonitor**: Performance tracking
- **PreloadResources**: Resource preloading for optimization

## Content Highlights

- **Bio-Inspired Design**: Inspired by gibbons for agile tree climbing
- **Sustainability Focus**: Biodegradable materials, solar power, no microplastics
- **Field Testing**: Real-world testing in Southern Italy olive groves (August 2025)
- **UN SDG Alignment**: Direct contributions to 7 Sustainable Development Goals
- **Innovation**: Autonomous harvesting with AI and computer vision
- **Environmental Impact**: Gentle harvesting that protects ancient olive trees

## Contact Information

- **Email**: hello@olivabot.com
- **Phone**: +31 6 47 338 467
- **LinkedIn**: https://www.linkedin.com/company/olivabot/
- **Address**: VU StartHub, De Boelelaan 1095a, 1A-21, 1081HV Amsterdam, The Netherlands
- **VAT**: NL866797373B01
- **Chamber of Commerce**: 94493200</content>
<parameter name="filePath">/home/tony/Documents/olivabot/olivabot-website/app/README.md