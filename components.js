// =================================================================
// SYSTEM SHARED LAYOUT COMPONENTS INJECTOR (HEADER & FOOTER ENGINE)
// =================================================================
(function() {
    function injectSharedComponents() {
        // --- 1. INJECT NAVIGATION HEADER ---
        let header = document.querySelector('header');
        if (!header) {
            header = document.createElement('header');
            document.body.insertBefore(header, document.body.firstChild);
        }

        header.innerHTML = `
            <div class="header-container">
                <div class="logo-section">
                    <h1>Python Lab Platform <span>PRO</span></h1>
                </div>
                <nav>
                    <a href="index.html" data-page="index.html">Definitions</a>
                    <a href="flashcards.html" data-page="flashcards.html">Flashcards</a>
                    <a href="practice.html" data-page="practice.html">Practice IDE</a>
                    <a href="free-training.html" data-page="free-training.html">Free Training</a>
                    <a href="visualization-lab.html" data-page="visualization-lab.html">Visualization</a>
                </nav>
            </div>
        `;

        // --- 2. ENVIRONMENT STATUS BANNER (only where needed) ---
        // The banner is already hardcoded in practice.html and free-training.html,
        // so we do NOT inject it here. It will be updated by main.js.

        // --- 3. INJECT FOOTER ---
        let footer = document.querySelector('footer');
        if (!footer) {
            footer = document.createElement('footer');
            document.body.appendChild(footer);
        }

        footer.innerHTML = `
            <p>© ${new Date().getFullYear()} <strong>NHSM student</strong> | Built for Academic Revision | 
               <a href="mailto:hocineboubekeurr@gmail.com?subject=Python%20Lab%20Platform%20Feedback"
                  class="footer-contact-link">
                  ✉️ Reach Out &amp; Contact Me
               </a>
            </p>
            <p class="footer-note">
                📚 Coursework content, lab documentation, and worksheet metrics are properties of the respective university department.
                <br>Special thanks to the beta testing crew for hunting down bugs and helping with the design!
            </p>
        `;

        // --- 4. HIGHLIGHT ACTIVE NAV LINK ---
        const currentPath = window.location.pathname;
        const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

        const navLinks = header.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const page = link.getAttribute('data-page');
            if (currentFile === page || (currentFile === '' && page === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectSharedComponents);
    } else {
        injectSharedComponents();
    }
})();