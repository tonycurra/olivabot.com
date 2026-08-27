document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    // Get current path to determine if we're in /en/ directory
    const currentPath = window.location.pathname;
    const isFileProtocol = window.location.protocol === 'file:';
    
    // Check if path contains /en/ as a directory segment
    // Use multiple checks to handle different path formats
    const pathSegments = currentPath.split('/').filter(s => s);
    const isInEnDir = currentPath.includes('/en/') || pathSegments.includes('en');
    // Check if path contains a nested /en/ subdirectory (e.g. legal/, projects/)
    const isInNestedDir = pathSegments.includes('legal') || pathSegments.includes('projects') || pathSegments.includes('services');
    
    // For file:// protocol with /en/ in path, use relative paths
    // If in nested subdir, go up to /en/; if in /en/ root, stay in /en/
    const pageBase = isFileProtocol && isInEnDir ? (isInNestedDir ? '../' : '') : (isInEnDir ? '/en/' : '/');
    
    // For legal pages, use absolute /en/legal/ for web server
    const legalBase = isFileProtocol ? (isInNestedDir ? '../' : '') : (isInEnDir ? '/en/' : '/');
    
    // Assets are always at /assets/ for web server
    const assetBase = isFileProtocol && isInEnDir ? (isInNestedDir ? '../../' : '../') : '/';

    footerContainer.innerHTML = `
        <div class="footer-inner">
            <div class="footer-top">
                <a href="${pageBase}index.html" class="footer-brand">
                    <img src="${assetBase}assets/images/logo.png" alt="Olivabot" class="footer-brand__logo" width="40" height="40" aria-hidden="true">
                    <span>Olivabot<span class="tm">®</span></span>
                </a>
                <nav class="footer-nav" aria-label="Footer navigation">
                    <a href="${pageBase}index.html">Home</a>
                    <a href="${pageBase}projects.html">Projects</a>
                    <a href="${pageBase}services.html">Services</a>
                    <a href="${pageBase}about.html">About</a>
                    <a href="${pageBase}dlab.html">DLAB</a>
                    <a href="${pageBase}contact.html">Contact</a>
                </nav>
            </div>
            <div class="footer-bottom">
                <div class="footer-meta">
                    <a href="mailto:info@olivabot.com" class="footer-email">info@olivabot.com</a>
                    <span>&copy; 2026 Olivabot<span class="tm">®</span>. All rights reserved.</span>
                </div>
                <div class="footer-right">
                    <div class="footer-legal">
                        <a href="${legalBase}legal/privacy.html">Privacy</a>
                        <a href="${legalBase}legal/terms.html">Terms</a>
                        <a href="${legalBase}legal/cookies.html">Cookies</a>
                        <a href="${legalBase}legal/disclaimer.html">Disclaimer</a>
                    </div>
                    <div class="footer-controls">
                        <button class="theme-btn theme-toggle theme-btn--footer" id="footer-theme-toggle"
                                aria-label="Toggle dark mode"
                                aria-pressed="false">
                            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:none">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/>
                                <line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Theme toggle functionality for footer
    const footerThemeToggle = document.getElementById('footer-theme-toggle');
    if (footerThemeToggle) {
        // Sync with navbar theme toggle
        const navbarThemeToggle = document.getElementById('theme-toggle');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        
        // Determine initial theme: saved preference > system preference > default (light)
        let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        // Apply initial theme to document element
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Apply initial theme to button
        footerThemeToggle.setAttribute('aria-pressed', currentTheme === 'dark');
        
        // Show the correct icon
        const moonIcon = footerThemeToggle.querySelector('.icon-moon');
        const sunIcon = footerThemeToggle.querySelector('.icon-sun');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = currentTheme === 'dark' ? 'none' : 'block';
            sunIcon.style.display = currentTheme === 'dark' ? 'block' : 'none';
        }
        
        // Toggle theme on click
        footerThemeToggle.addEventListener('click', function() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            footerThemeToggle.setAttribute('aria-pressed', newTheme === 'dark');
            
            // Update both toggles' icons
            const allMoonIcons = document.querySelectorAll('.theme-toggle .icon-moon');
            const allSunIcons = document.querySelectorAll('.theme-toggle .icon-sun');
            allMoonIcons.forEach(icon => icon.style.display = newTheme === 'dark' ? 'none' : 'block');
            allSunIcons.forEach(icon => icon.style.display = newTheme === 'dark' ? 'block' : 'none');
            
            // Sync navbar toggle if it exists
            if (navbarThemeToggle) {
                navbarThemeToggle.setAttribute('aria-pressed', newTheme === 'dark');
            }
        });
        
        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                // Only auto-switch if user hasn't set a preference
                const newTheme = e.matches ? 'dark' : 'light';
                footerThemeToggle.setAttribute('aria-pressed', newTheme === 'dark');
                
                if (moonIcon && sunIcon) {
                    moonIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
                    sunIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
                }
            }
        });
    }
});

