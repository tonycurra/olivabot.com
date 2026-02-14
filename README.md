# Olivabot

Website for the Olivabot. olivabot.com

## Tech
- HTML
- CSS
- JavaScript (minimal, for interactivity)

## Files
- [index.html](index.html): Main entry point for the website.
- [style.css](style.css): Stylesheet for layout, theming, and responsiveness.
- `assets/`: Contains images and other static assets.

## Updates
- Version updated on 14 Feb 2026: Added Mk2 harvesting methods, refined prototype section, ensured navbar/footer consistency, and improved SEO.

## Technical Documentation

### index.html
- **Header**: Includes a responsive topbar with a logo, brand name, navigation links, and a theme toggle button.
- **Hero Section**: Displays the site title and tagline.
- **Prototype Section**: Describes the Gibbon Bot Mk1 and Mk2 prototypes, including a gallery with a lightbox feature.
- **Research Section**: Highlights collaborations and research partnerships.
- **Footer**: Contains company information, contact links, and legal details.
- **SEO Enhancements**: Added meta tags for description, Open Graph, and Twitter cards. Included JSON-LD schema for the prototype.
- **JavaScript**: Handles navigation toggle, theme switching, and lightbox functionality.

### style.css
- **Global Styles**: Defines CSS variables for light and dark themes, with support for system preferences.
- **Header and Navbar**: Styled for responsiveness, including a hamburger menu for mobile devices.
- **Hero Section**: Centered layout with responsive typography.
- **Prototype Section**: Grid-based gallery layout with hover effects and lightbox styling.
- **Footer**: Responsive grid layout for multi-column alignment on desktop and single-column on mobile.
- **Theming**: Implements dark and light themes using CSS variables and media queries.
- **Responsive Design**: Uses media queries to adjust layouts for smaller screens (max-width: 720px).

### assets/
- **Logo**: `Olivabot_Logo.png` and `olivabot logo.svg` for branding.
- **Prototype Images**: `gibbon-bot-mk1/` contains three JPG images showcasing the Mk1 prototype in action.
- **Optimization**: Provided a script to generate optimized images (resized JPEGs and WebP) for faster loading.

## Development Notes
- Open `index.html` in a browser to view the site locally.
- Modify `style.css` to adjust styles or add new rules.
- Add new assets to the `assets/` folder and reference them in `index.html`.
- For image optimization, run the provided script to create resized and WebP versions of images.
