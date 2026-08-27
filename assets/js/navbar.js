document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer) return;

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
    // If in /en/legal/ or /en/projects/, go up one to /en/; if in /en/ root, stay in /en/
    const pageBase = isFileProtocol && isInEnDir ? (isInNestedDir ? '../' : '') : (isInEnDir ? '/en/' : '/');
    
    // Assets are always at /assets/ for web server
    // For file:// protocol: if in nested subdir, use ../../; if in /en/, use ../
    const assetBase = isFileProtocol && isInEnDir ? (isInNestedDir ? '../../' : '../') : '/';

    navbarContainer.innerHTML = `
        <nav>
            <a href="${pageBase}index.html" class="nav-brand">
                <img src="${assetBase}assets/images/logo.png" alt="Olivabot" class="nav-brand__logo" width="32" height="32" aria-hidden="true">
                <span>Olivabot<span class="tm">®</span></span>
            </a>
            <ul class="nav-links" id="nav-links">
                <li><a href="${pageBase}index.html">Home</a></li>
                <li><a href="${pageBase}projects.html">Projects</a></li>
                <li><a href="${pageBase}services.html">Services</a></li>
                <li><a href="${pageBase}about.html">About</a></li>
                <li><a href="${pageBase}contact.html">Contact</a></li>
            </ul>
            <div class="nav-controls">
                <button class="theme-btn theme-toggle" id="theme-toggle"
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
            <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="6" x2="19" y2="6"/>
                    <line x1="3" y1="11" x2="19" y2="11"/>
                    <line x1="3" y1="16" x2="19" y2="16"/>
                </svg>
            </button>
        </nav>
    `;

    // Mobile menu toggle functionality
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('open');
        });
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Auto-detect user preference from browser/device
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        
        // Determine initial theme: saved preference > system preference > default (light)
        let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        // Apply initial theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.setAttribute('aria-pressed', currentTheme === 'dark');
        
        // Show the correct icon
        const moonIcon = themeToggle.querySelector('.icon-moon');
        const sunIcon = themeToggle.querySelector('.icon-sun');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = currentTheme === 'dark' ? 'none' : 'block';
            sunIcon.style.display = currentTheme === 'dark' ? 'block' : 'none';
        }
        
        // Toggle theme on click
        themeToggle.addEventListener('click', function() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
            
            // Toggle icons
            if (moonIcon && sunIcon) {
                moonIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
                sunIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
            }
        });
        
        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                // Only auto-switch if user hasn't set a preference
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
                
                if (moonIcon && sunIcon) {
                    moonIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
                    sunIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
                }
            }
        });
    }
});

