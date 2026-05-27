// =================================================================
// SYSTEM SHARED LAYOUT COMPONENTS INJECTOR (HEADER & FOOTER ENGINE)
// =================================================================
(function() {
    function injectSharedComponents() {
        // --- 1. HANDLE HEADER NAVIGATION BAR ASSEMBLY ---
        let header = document.querySelector('header');
        if (!header) {
            header = document.createElement('header');
            document.body.insertBefore(header, document.body.firstChild);
        }

        // Structural Universal Navigation Template alignment matching style.css rules
        header.innerHTML = `
            <div class="header-container">
                <div class="logo-section">
                    <h1>🐍 Python Lab Platform <span>PRO</span></h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html" data-page="index.html">📁 Dashboard</a></li>
                        <li><a href="flashcards.html" data-page="flashcards.html">🎴 Flashcards</a></li>
                        <li><a href="practice.html" data-page="practice.html">💻 Practice IDE</a></li>
                        <li><a href="free-training.html" data-page="free-training.html">🚀 Training</a></li>
                    </ul>
                </nav>
            </div>
        `;

        // --- 2. HANDLE ENVIRONMENT LOADER BANNER SUB-LAYER ---
        let envStatus = document.getElementById('env-status');
        if (!envStatus) {
            envStatus = document.createElement('div');
            envStatus.id = 'env-status';
            envStatus.className = 'loaded'; // Automatically flags operational state
            header.parentNode.insertBefore(envStatus, header.nextSibling);
        }
        envStatus.innerHTML = `⚡ Runtime Core Environment: Connected & Active`;

        // --- 3. HANDLE FOOTER CREATION & ACKNOWLEDGEMENTS Notice ---
        let footer = document.querySelector('footer');
        if (!footer) {
            footer = document.createElement('footer');
            document.body.appendChild(footer);
        }

        // Injects Copyright notation, interactive custom Contact Email Mailto links, and beta credits
        footer.innerHTML = `
            <p>© ${new Date().getFullYear()} <strong>Your Name</strong> | All Rights Reserved | 
               <a href="mailto:your-email@example.com?subject=OPM%20Platform%20Feedback" style="color: var(--primary-teal); text-decoration: none; font-weight: 600; margin-left: 5px; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">✉️ Contact Me</a>
            </p>
            <p style="margin-top: 0.5rem; font-size: 0.825rem; color: var(--text-muted); font-style: italic; letter-spacing: 0.3px;">
                ✨ Special thanks to the beta testing crew for hunting down bugs and making this platform solid!
            </p>
        `;

        // --- 4. DYNAMIC LINK HIGHLIGHT DETECTOR ROUTINE ---
        const currentUrlPath = window.location.pathname;
        const currentFilename = currentUrlPath.substring(currentUrlPath.lastIndexOf('/') + 1) || 'index.html';
        
        const navigationLinks = header.querySelectorAll('nav a');
        navigationLinks.forEach(link => {
            const targetedAttrPage = link.getAttribute('data-page');
            if (currentFilename === targetedAttrPage || (currentFilename === '' && targetedAttrPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Runs automatically as soon as the browser compiles document layout trees safely
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectSharedComponents);
    } else {
        injectSharedComponents();
    }
})();