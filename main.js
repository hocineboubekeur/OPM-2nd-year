/// =================================================================
// 0. GLOBAL UTILITY ARCHITECTURE & FALLBACKS
// =================================================================
// Safe utility bindings for module environment scopes
function safeDefineGlobal(name, fn) {
    if (typeof defineGlobal === 'function') {
        defineGlobal(name, fn);
    } else {
        window[name] = fn;
    }
}

// Localized string escape safeguard to protect script layouts
function safeEscapeHtml(text) {
    if (typeof escapeHtml === 'function') return escapeHtml(text);
    if (typeof text !== 'string') return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/// =================================================================
// 1. DOM INITIALIZATION LIFECYCLE ROUTER
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Check local storage configuration for permanent user theme persistence
    const savedTheme = localStorage.getItem('opm-app-theme') || 'light';
    if (savedTheme === 'night') {
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
    }

    // Call standard startup routines if available
    if (typeof initializePlatformComponents === 'function') {
        initializePlatformComponents();
    }
    
    // Inject synchronized custom UX systems
    setupThemeToggleButton();
    setupKeyboardAccessibilityListeners();
});


// =================================================================
// 2. CORE APPLICATION STATE BLOCK
// =================================================================
let pyodideInstance = null;
let isPyodideLoading = true;
let flashcardDeck = [];
let activeCardIndex = 0;


// =================================================================
// 3. DOCUMENT RUNTIME BOOTSTRAP LIFECYCLE
// =================================================================
window.addEventListener('load', async () => {
    if (document.getElementById('definitions-grid')) {
        renderDefinitionsGrid();
    }
    if (document.getElementById('fc-card')) {
        initializeFlashcardSystem();
    }
    if (document.getElementById('practice-chapter-filter')) {
        populatePracticeNavigationDropdowns();
        loadSelectedPracticeProblem();
    }
    if (document.getElementById('env-status')) {
        bootstrapPyodideVirtualMachine();
    }
});


// =================================================================
// 4. WEBASSEMBLY VIRTUAL MACHINE INITIALIZATION
// =================================================================
async function bootstrapPyodideVirtualMachine() {
    const banner = document.getElementById('env-status');
    const spinner = document.getElementById('status-spinner');
    const statusTxt = document.getElementById('status-text');
    if (!banner) return;

    try {
        pyodideInstance = await loadPyodide();
        // 1. Updated message to show matplotlib is loading
        statusTxt.innerText = "Loading scientific packages (numpy, sympy, matplotlib)...";
        
        // 2. Added 'matplotlib' to your core package delivery array
        await pyodideInstance.loadPackage(['numpy', 'sympy', 'matplotlib']);
        
        // 3. Initialized basic modules and set Matplotlib to headless 'Agg' mode
        await pyodideInstance.runPythonAsync(`
import numpy as np
import sympy as sp
import matplotlib
matplotlib.use('Agg')  # Stops Python from trying to open desktop windows
`);
        
        banner.classList.add('loaded');
        if (spinner) spinner.style.display = "none";
        statusTxt.innerHTML = "✨ Python 3.13 Environment fully online (Pyodide Matrix Sandbox & Drawings ready!)";
        isPyodideLoading = false;
    } catch (err) {
        statusTxt.innerText = "Error mounting WebAssembly sandbox framework environment.";
        console.error(err);
    }
}


// =================================================================
// 5. DEFINITIONS ENGINE & ARCHIVE RENDERING
// =================================================================
function renderDefinitionsGrid(filteredItems) {
    const grid = document.getElementById('definitions-grid');
    if (!grid) return;
    grid.innerHTML = "";

    // Safe lookup evaluation to avoid late-binding interpretation exceptions
    if (typeof filteredItems === 'undefined') {
        filteredItems = typeof definitionDb !== 'undefined' ? definitionDb : (window.definitionDb || []);
    }

    if (filteredItems.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; background:white; border-radius:12px;"><h3>No matching functions found</h3></div>`;
        return;
    }

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'def-card';
        card.innerHTML = `
            <div>
                <div class="def-meta"><span class="def-tag">${item.chapTitle}</span></div>
                <h3>${item.func}</h3>
                <p>${item.desc}</p>
            </div>
            <div class="def-example-box"><code>${safeEscapeHtml(item.example)}</code></div>
        `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    const searchBar = document.getElementById('search-bar');
    const chapterSelect = document.getElementById('chapter-select');
    const query = searchBar ? searchBar.value.toLowerCase().trim() : "";
    const selectedChapter = chapterSelect ? chapterSelect.value : "all";
    
    const currentDb = typeof definitionDb !== 'undefined' ? definitionDb : (window.definitionDb || []);
    const results = currentDb.filter(item => {
        const matchesSearch = item.func.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
        const matchesChapter = (selectedChapter === 'all' || item.chap === selectedChapter);
        return matchesSearch && matchesChapter;
    });
    renderDefinitionsGrid(results);
}


// =================================================================
// 6. INTERACTIVE FLASHCARD COMPONENT ENGINE (3D & SRS UPGRADED)
// =================================================================
function getSRSStorageData() {
    return JSON.parse(localStorage.getItem('opm-flashcard-intervals-v2')) || {};
}

function saveSRSStorageData(data) {
    localStorage.setItem('opm-flashcard-intervals-v2', JSON.stringify(data));
}

function populateCategoryDropdown() {
    const select = document.getElementById('fc-category-select');
    if (!select) return;

    const currentDb = typeof definitionDb !== 'undefined' ? definitionDb : (window.definitionDb || []);
    const uniqueChapters = [...new Set(currentDb.map(item => item.chapTitle || item.chap))];
    
    let optionsHtml = `<option value="all">🌐 All Platform Functions</option>
                       <option value="srs-review">⚠️ Review Deck (Cards You Missed)</option>`;
    
    uniqueChapters.forEach(chap => {
        if (chap) optionsHtml += `<option value="${chap}">📁 ${chap}</option>`;
    });
    
    select.innerHTML = optionsHtml;
}

function initializeFlashcardSystem() {
    const select = document.getElementById('fc-category-select');
    
    if (select && select.children.length === 0) {
        populateCategoryDropdown();
    }

    const selectedFilter = select ? select.value : 'all';
    const srsData = getSRSStorageData();
    
    const currentDb = typeof definitionDb !== 'undefined' ? definitionDb : (window.definitionDb || []);
    let structuralWorkingDeck = [...currentDb];

    const customCards = JSON.parse(localStorage.getItem('opm-custom-user-cards')) || [];
    structuralWorkingDeck = structuralWorkingDeck.concat(customCards);

    if (selectedFilter === 'srs-review') {
        structuralWorkingDeck = structuralWorkingDeck.filter(item => {
            const state = srsData[item.func];
            if (!state) return false; 
            return state.box === 1 || Date.now() >= state.nextReviewTime;
        });
    } else if (selectedFilter !== 'all') {
        structuralWorkingDeck = structuralWorkingDeck.filter(item => (item.chapTitle === selectedFilter || item.chap === selectedFilter));
    }

    flashcardDeck = structuralWorkingDeck;

    if (flashcardDeck.length === 0) {
        activeCardIndex = 0;
        updateFlashcardDisplay();
        return;
    }

    for (let i = flashcardDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardDeck[i], flashcardDeck[j]] = [flashcardDeck[j], flashcardDeck[i]];
    }
    
    activeCardIndex = 0;
    updateFlashcardDisplay();
}

function updateFlashcardDisplay() {
    const cardWrapper = document.getElementById('fc-card');
    if (!cardWrapper) return;

    cardWrapper.classList.remove('flipped');

    if (flashcardDeck.length === 0) {
        document.getElementById('fc-tag').innerText = "System Notification";
        document.getElementById('fc-term').innerText = "Deck Depleted";
        document.getElementById('fc-definition').innerText = "No operational indices match this configuration filter.";
        document.getElementById('fc-code').innerText = "# Try modifying your active matrix scope filter dropdown selection.";
        
        const badge = document.getElementById('fc-srs-status');
        if (badge) { badge.innerText = "Empty"; badge.className = "srs-badge unseen"; }
        return;
    }

    setTimeout(() => {
        const item = flashcardDeck[activeCardIndex];
        
        document.getElementById('fc-tag').innerText = item.chapTitle || "General Runtime";
        document.getElementById('fc-term').innerText = item.func;
        document.getElementById('fc-definition').innerText = item.desc;
        document.getElementById('fc-code').innerText = item.example || "# No syntax prototype declaration mapped.";
        
        const srsData = getSRSStorageData();
        const cardState = srsData[item.func] || { box: 1, nextReviewTime: 0 };
        const badge = document.getElementById('fc-srs-status');
        
        if (badge) {
            if (srsData[item.func]) {
                badge.innerText = cardState.box > 1 ? `✅ Box ${cardState.box} (Passed)` : "⚠️ Box 1 (Needs Review)";
                badge.className = cardState.box > 1 ? "srs-badge mastered" : "srs-badge review";
            } else {
                badge.innerText = "🆕 New Card";
                badge.className = "srs-badge unseen";
            }
        }
    }, 180);
}

function triggerCardFlip() {
    const card = document.getElementById('fc-card');
    if (card && flashcardDeck.length > 0) {
        card.classList.toggle('flipped');
    }
}

function handleCardNav(direction) {
    if (flashcardDeck.length === 0) return;
    
    activeCardIndex += direction;
    if (activeCardIndex >= flashcardDeck.length) activeCardIndex = 0;
    else if (activeCardIndex < 0) activeCardIndex = flashcardDeck.length - 1;
    
    updateFlashcardDisplay();
}

function handleCardShuffle() {
    initializeFlashcardSystem();
}

function handleCategoryChange() {
    initializeFlashcardSystem();
}

function handleSRSScore(isCorrect) {
    if (flashcardDeck.length === 0) return;

    const currentCardItem = flashcardDeck[activeCardIndex];
    const srsData = getSRSStorageData();
    
    let cardState = srsData[currentCardItem.func] || { box: 1, nextReviewTime: 0 };

    if (isCorrect) {
        cardState.box = Math.min(cardState.box + 1, 5); 
    } else {
        cardState.box = 1; 
    }

    const intervals = [0, 1, 10, 60, 1440, 5760]; 
    cardState.nextReviewTime = Date.now() + (intervals[cardState.box] * 60 * 1000);
    
    srsData[currentCardItem.func] = cardState;
    saveSRSStorageData(srsData);

    const badge = document.getElementById('fc-srs-status');
    if (badge) {
        badge.innerText = isCorrect ? `✅ Box ${cardState.box} (Passed)` : "⚠️ Box 1 (Needs Review)";
        badge.className = isCorrect ? "srs-badge mastered" : "srs-badge review";
    }

    setTimeout(() => {
        handleCardNav(1);
    }, 350);
}


// =================================================================
// 7. PRACTICAL CHALLENGE WORKOUT IDE ENGINE (PRESERVATION & PROGRESS)
// =================================================================
let lastPracticeStdout = ""; 

function getPracticeCompletedMap() {
    return JSON.parse(localStorage.getItem('opm-practice-completed-v1')) || {};
}

function savePracticeCompletedMap(map) {
    localStorage.setItem('opm-practice-completed-v1', JSON.stringify(map));
}

function populatePracticeNavigationDropdowns() {
    const chapSelect = document.getElementById('practice-chapter-filter');
    if (!chapSelect) return;
    chapSelect.innerHTML = "";

    const workouts = typeof practiceWorkouts !== 'undefined' ? practiceWorkouts : (window.practiceWorkouts || []);
    workouts.forEach((workout, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.innerText = `${workout.badge}: ${workout.title}`;
        chapSelect.appendChild(opt);
    });
}

function loadSelectedPracticeProblem() {
    const filterEl = document.getElementById('practice-chapter-filter');
    if (!filterEl) return;
    const index = filterEl.value;
    
    const workouts = typeof practiceWorkouts !== 'undefined' ? practiceWorkouts : (window.practiceWorkouts || []);
    const workout = workouts[index];
    if (!workout) return;

    const badgeEl = document.getElementById('instruction-badge');
    const titleEl = document.getElementById('instruction-title');
    const bodyEl = document.getElementById('instruction-body');
    const idealEl = document.getElementById('instruction-ideal');

    if (badgeEl) badgeEl.innerText = workout.badge;
    if (titleEl) titleEl.innerText = workout.title;
    if (bodyEl) bodyEl.innerHTML = workout.instructions;
    if (idealEl) idealEl.innerText = workout.expected;
    
    const savedDraft = localStorage.getItem(`opm-practice-code-${index}`);
    const editor = document.getElementById('practice-editor');
    if (editor) {
        editor.value = savedDraft !== null ? savedDraft : workout.starter;
        
        if (!editor.dataset.observed) {
            editor.addEventListener('input', () => {
                const currentIdx = document.getElementById('practice-chapter-filter').value;
                localStorage.setItem(`opm-practice-code-${currentIdx}`, editor.value);
            });
            editor.dataset.observed = "true";
        }
    }

    const terminal = document.getElementById('practice-terminal');
    lastPracticeStdout = ""; 
    if (terminal) {
        terminal.className = 'terminal-box';
        const completedMap = getPracticeCompletedMap();
        if (completedMap[index]) {
            terminal.innerHTML = "✨ <strong>Challenge Completed Passed!</strong> Your saved solution previously matched validation coordinates. Run code again to re-execute calculations.";
        } else {
            terminal.innerText = "Console ready. Load exercise objectives and execute code!";
        }
    }

    updatePracticeProgressBar();
}

function updatePracticeProgressBar() {
    const fillEl = document.getElementById('practice-progress-fill');
    const textEl = document.getElementById('practice-progress-text');
    const badgeEl = document.getElementById('practice-progress-badge');
    
    const workouts = typeof practiceWorkouts !== 'undefined' ? practiceWorkouts : (window.practiceWorkouts || []);
    const total = workouts.length;
    if (total === 0 || !fillEl || !textEl) return;

    const completedMap = getPracticeCompletedMap();
    let completedCount = 0;
    workouts.forEach((_, idx) => {
        if (completedMap[idx]) completedCount++;
    });

    const percentage = Math.round((completedCount / total) * 100);
    
    fillEl.style.width = `${percentage}%`;
    if (badgeEl) badgeEl.innerText = `${percentage}%`;
    textEl.innerText = `${completedCount} of ${total} worksheet challenges completed successfully (${percentage}% completion rate).`;
}

function handlePracticeChapterChange() { loadSelectedPracticeProblem(); }

function resetPracticeBoilerplate() { 
    const filterEl = document.getElementById('practice-chapter-filter');
    if (!filterEl) return;
    const index = filterEl.value;
    
    if (confirm("Are you sure you want to discard your current modifications and reset this challenge back to the original starter boilerplate?")) {
        localStorage.removeItem(`opm-practice-code-${index}`);
        loadSelectedPracticeProblem();
    }
}

function resetSandboxCode() { 
    const sandboxEditor = document.getElementById('sandbox-editor');
    if (sandboxEditor) {
        sandboxEditor.value = "# Sandbox Cleared.\n";
    }
}


// =================================================================
// 8. WEBASSEMBLY SANDBOX COMPILER LOGIC & VALIDATION MODES
// =================================================================
async function executePythonRun(editorId, terminalId) {
    const code = document.getElementById(editorId).value;
    const terminal = document.getElementById(terminalId);
    if (!terminal) return;

    if (isPyodideLoading) {
        terminal.className = 'terminal-box error';
        terminal.innerText = "Python engine initialization in progress. Please hold.";
        return;
    }

    terminal.className = 'terminal-box';
    terminal.innerText = "Running calculations...\n";

    try {
        // --- 1. INITIALIZE CANVAS WORKSPACE ON EVERY CLICK RUN ---
        const plotContainer = document.getElementById('plot-output-container');
        if (plotContainer) {
            plotContainer.innerHTML = `
                <p style="color: var(--text-muted); font-size: 0.85rem; font-style: italic; margin: 0;">
                    ⏳ Compiling execution script matrices...
                </p>`;
        }

        // --- 2. MOUNT DEPENDENCY PACKAGES FROM IMPORTS ---
        await pyodideInstance.loadPackagesFromImports(code);

        // --- 3. REDIRECT STANDARD TEXT STREAM STACKS ---
        await pyodideInstance.runPythonAsync(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

        // --- 4. INJECT THE DUAL MODE INTERCEPTOR CORE ENGINE ---
        const dualModeInterceptor = `
import io
import base64
import warnings
import matplotlib.pyplot as plt

warnings.filterwarnings("ignore")

def advanced_dual_rendering_pipeline():
    if len(plt.get_fignums()) > 0: 
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png', bbox_inches='tight', dpi=140)
        buffer.seek(0)
        img_str = base64.b64encode(buffer.read()).decode('utf-8')
        plt.close('all') 
        
        from js import renderPythonPlot
        renderPythonPlot(img_str)
    else:
        from js import notifyNoPlotGenerated
        notifyNoPlotGenerated()

plt.show = advanced_dual_rendering_pipeline
`;
        await pyodideInstance.runPythonAsync(dualModeInterceptor);

        // --- 5. EXECUTE USER SCRIPT ---
        await pyodideInstance.runPythonAsync(code);

        // --- 6. EXTRACT TEXT STREAM LOGS IMMEDIATELY ---
        const stdout = await pyodideInstance.runPythonAsync("sys.stdout.getvalue()");
        const stderr = await pyodideInstance.runPythonAsync("sys.stderr.getvalue()");

        terminal.classList.remove('error');

        // --- 7. RE-ROUTING STREAM AND RENDERING CONTROLS ---
        if (stderr.trim()) {
            terminal.className = 'terminal-box error';
            terminal.innerText = "Runtime Error:\n" + stderr;
            if (editorId === 'practice-editor') lastPracticeStdout = "";
        } else {
            // Assign stdout to console first
            terminal.innerText = stdout || "🚀 Code executed successfully. (No standard text outputs generated)";
            
            if (editorId === 'practice-editor') {
                lastPracticeStdout = stdout;
                const feedbackMode = document.getElementById('practice-feedback-mode')?.value || 'instant';
                if (feedbackMode === 'instant') {
                    verifyActiveExerciseSolution(stdout, false);
                }
            }
        }

        // --- 8. TRIGGER PLOT CAPTURE *AFTER* PARSING CONSOLE TEXT ---
        // This ensures plt.show() checks if drawings were created organically by user code
        await pyodideInstance.runPythonAsync(`
import matplotlib.pyplot as plt
if len(plt.get_fignums()) > 0:
    plt.show()
else:
    from js import notifyNoPlotGenerated
    notifyNoPlotGenerated()
`);

    } catch (err) {
        terminal.className = 'terminal-box error';
        terminal.innerText = "Syntax / Compilation Error:\n" + err.message;
        if (editorId === 'practice-editor') lastPracticeStdout = "";
    }
}

// Driver A: Fires natively when a compiled image data vector comes out of Python
window.renderPythonPlot = function(base64ImageStr) {
    const container = document.getElementById('plot-output-container');
    if (container) {
        container.innerHTML = `
            <img src="data:image/png;base64,${base64ImageStr}" 
                 alt="Calculated Sandbox Data Plot Diagram" 
                 style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.12);" />
        `;
    }
};

// Driver B: Fires natively if the code finished without setting up any drawings safely
window.notifyNoPlotGenerated = function() {
    const container = document.getElementById('plot-output-container');
    if (container) {
        container.innerHTML = `
            <p style="color: var(--text-muted); font-size: 0.85rem; font-style: italic; text-align: center; margin: 0;">
                ℹ️ Standard log matrix completed. No visual plot variables were initialized.
            </p>
        `;
    }
};

function verifyActiveExerciseSolution(currentStdout, isManualTrigger) {
    const filterEl = document.getElementById('practice-chapter-filter');
    const terminal = document.getElementById('practice-terminal');
    if (!filterEl || !terminal) return;

    const index = parseInt(filterEl.value, 10);
    const workouts = typeof practiceWorkouts !== 'undefined' ? practiceWorkouts : (window.practiceWorkouts || []);
    const workout = workouts[index];
    if (!workout) return;

    const cleanOutput = (currentStdout || "").trim().toLowerCase();
    const cleanExpected = (workout.expected || "").trim().toLowerCase();

    const isCorrect = cleanOutput.includes(cleanExpected) || cleanExpected.includes(cleanOutput) && cleanOutput.length > 0;
    const completedMap = getPracticeCompletedMap();

    if (isCorrect) {
        completedMap[index] = true;
        savePracticeCompletedMap(completedMap);
        updatePracticeProgressBar();

        terminal.className = 'terminal-box';
        terminal.innerHTML = `✨ <strong>Verification Successful!</strong>\n\n[Console Output matches Expected Target Layout Blueprint]\n\n${safeEscapeHtml(currentStdout || "Code completed with no outputs.")}`;
        
        if (isManualTrigger) {
            alert(`🎉 Success! Challenge "${workout.title}" verified correctly.`);
        }
    } else {
        if (isManualTrigger) {
            terminal.className = 'terminal-box error';
            terminal.innerHTML = `⚠️ <strong>Verification Mismatch:</strong>\n\nYour code execution completed, but standard outputs do not match the exercise requirements blueprint.\n\n<strong>Expected target lines:</strong>\n${safeEscapeHtml(workout.expected)}\n\n<strong>Your console produced:</strong>\n${safeEscapeHtml(currentStdout || "[No text printed]")}`;
        }
    }
}

function handleManualVerify() {
    if (!lastPracticeStdout) {
        const terminal = document.getElementById('practice-terminal');
        const text = terminal ? terminal.innerText : "";
        if (text && !text.startsWith("Console ready") && !text.startsWith("Running calculations")) {
            verifyActiveExerciseSolution(text, true);
            return;
        }
        alert("Please execute code using '▶ Run Code' first to populate your terminal matrix outputs before verifying!");
        return;
    }
    verifyActiveExerciseSolution(lastPracticeStdout, true);
}

function handleFeedbackModeChange() {
    const mode = document.getElementById('practice-feedback-mode')?.value;
    if (mode === 'deferred') {
        alert("⏳ Deferred Feedback Mode Activated.\n\nYour scripts will execute output sequences silently without real-time evaluation. Click '📊 Review Summary Scorecard' at any time to open your comprehensive workspace performance report!");
    } else {
        alert("⚡ Instant Feedback Mode Activated.\n\nYour challenge solutions will be evaluated automatically against structural validation targets on every runtime run.");
    }
}

function openDeferredScorecardModal() {
    const modal = document.getElementById('practice-scorecard-modal');
    const content = document.getElementById('scorecard-modal-content');
    
    const workouts = typeof practiceWorkouts !== 'undefined' ? practiceWorkouts : (window.practiceWorkouts || []);
    if (!modal || !content || workouts.length === 0) return;

    const completedMap = getPracticeCompletedMap();
    let completedCount = 0;
    
    let html = `<p style="font-size:0.9rem; margin-bottom:1.2rem; color:#57606f;">Below is an aggregate solution status audit across your lab workouts. Use this to review target outputs and navigate back to unresolved sections.</p>`;
    html += `<div style="display:grid; gap:0.85rem;">`;
    
    workouts.forEach((workout, idx) => {
        const isPassed = !!completedMap[idx];
        if (isPassed) completedCount++;
        
        const statusBadge = isPassed 
            ? `<span style="background: #2ed573; color: white; padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">✅ PASSED</span>`
            : `<span style="background: #ff4757; color: white; padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">❌ INCOMPLETE</span>`;

        html += `
            <div style="background: #f8f9fa; border: 1px solid #e1e4e8; border-radius: 8px; padding: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem; border-left: 5px solid ${isPassed ? '#2ed573' : '#ff4757'};">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <strong style="color: #2c3e50; font-size: 0.95rem;">${workout.badge}: ${workout.title}</strong>
                    <div>${statusBadge}</div>
                </div>
                <div style="font-size: 0.8rem; color: #4b5563; background: #ffffff; padding: 0.5rem; border-radius: 4px; border: 1px solid #f1f2f6;">
                    <strong>Target Structural Checklist Rule:</strong><br>
                    <pre style="margin: 0.25rem 0 0 0; background: #f1f2f6; padding: 0.3rem; border-radius: 4px; font-family: monospace; font-size: 0.75rem; white-space: pre-wrap;">${safeEscapeHtml(workout.expected)}</pre>
                </div>
                <div style="text-align: right;">
                    <button onclick="jumpToPracticeChallenge(${idx})" style="background: #1e90ff; color: white; border: none; padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; cursor: pointer;">
                        🎯 Load This Challenge
                    </button>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    const gradePct = Math.round((completedCount / workouts.length) * 100);
    const summaryCard = `
        <div style="background: #f1f2f6; border-radius: 8px; padding: 1rem; text-align: center; margin-bottom: 1.2rem; border: 1px solid #dcdde1;">
            <div style="font-size: 1.4rem; font-weight: bold; color: #2c3e50;">${completedCount} / ${workouts.length} Completed</div>
            <div style="font-size: 0.9rem; color: #57606f; margin-top: 0.2rem;">Current Grade Score: <strong>${gradePct}%</strong></div>
        </div>
    `;
    
    content.innerHTML = summaryCard + html;
    modal.style.display = "flex";
}

function closeDeferredScorecardModal() {
    const modal = document.getElementById('practice-scorecard-modal');
    if (modal) modal.style.display = "none";
}

function jumpToPracticeChallenge(idx) {
    const filterEl = document.getElementById('practice-chapter-filter');
    if (filterEl) {
        filterEl.value = idx;
        loadSelectedPracticeProblem();
        closeDeferredScorecardModal();
        document.getElementById('sec-practice')?.scrollIntoView({ behavior: 'smooth' });
    }
}

// Custom User Card Submission Processing Function
function createNewFlashcardSubmission() {
    const nameInput = document.getElementById('custom-name');
    const descInput = document.getElementById('custom-desc');
    const codeInput = document.getElementById('custom-code');

    if (!nameInput.value || !descInput.value) {
        alert("Please complete both the function name and definition inputs!");
        return;
    }

    const currentSavedCards = JSON.parse(localStorage.getItem('opm-custom-user-cards')) || [];
    
    const configuredPayload = {
        chap: "custom",
        chapTitle: "User Custom Submissions",
        func: nameInput.value.trim(),
        desc: descInput.value.trim(),
        example: codeInput.value.trim() || "# Standard usage syntax prototype default text"
    };

    currentSavedCards.push(configuredPayload);
    localStorage.setItem('opm-custom-user-cards', JSON.stringify(currentSavedCards));

    nameInput.value = ""; descInput.value = ""; codeInput.value = "";
    alert("✨ Custom flashcard successfully forged and integrated into deployment lists!");
    initializeFlashcardSystem();
}

// REGISTER TO WINDOW HOOK AT BOTTOM OF MAIN.JS
safeDefineGlobal('createNewFlashcardSubmission', createNewFlashcardSubmission);

// =================================================================
// 9. AUTOMATED UTILITY SETUP AND INTEGRATION
// =================================================================
function setupThemeToggleButton() {
    const headerContainer = document.querySelector('.header-container');
    if (!headerContainer) return;

    let toggleBtn = document.getElementById('theme-toggle-btn');
    if (!toggleBtn) {
        toggleBtn = document.createElement('button');
        toggleBtn.id = 'theme-toggle-btn';
        toggleBtn.className = 'theme-toggle-btn';
        headerContainer.appendChild(toggleBtn);
    }

    const updateLabel = () => {
        const isNight = document.body.classList.contains('night-mode');
        toggleBtn.innerHTML = isNight ? '☀️ Day Mode' : '🌙 Night Mode';
    };
    updateLabel();

    toggleBtn.onclick = () => {
        document.body.classList.toggle('night-mode');
        const nowNightModeActive = document.body.classList.contains('night-mode');
        localStorage.setItem('opm-app-theme', nowNightModeActive ? 'night' : 'light');
        updateLabel();
    };
}

function setupKeyboardAccessibilityListeners() {
    document.addEventListener('keydown', (e) => {
        const card = document.getElementById('fc-card');
        if (!card || flashcardDeck.length === 0) return;

        if ((e.key === ' ' || e.key === 'Enter') && document.activeElement === card) {
            if (e.key === ' ') e.preventDefault(); 
            triggerCardFlip();
        }
        if (e.key === 'ArrowRight' && document.activeElement === card) {
            handleCardNav(1);
        }
        if (e.key === 'ArrowLeft' && document.activeElement === card) {
            handleCardNav(-1);
        }
    });
}


// Expose methods safely into global window layout contexts
safeDefineGlobal('triggerCardFlip', triggerCardFlip);
safeDefineGlobal('handleCardNav', handleCardNav);
safeDefineGlobal('handleCardShuffle', handleCardShuffle);
safeDefineGlobal('handleCategoryChange', handleCategoryChange);
safeDefineGlobal('handleSRSScore', handleSRSScore);
safeDefineGlobal('handlePracticeChapterChange', handlePracticeChapterChange);
safeDefineGlobal('resetPracticeBoilerplate', resetPracticeBoilerplate);
safeDefineGlobal('resetSandboxCode', resetSandboxCode);
safeDefineGlobal('executePythonRun', executePythonRun);
safeDefineGlobal('applyFilters', applyFilters);

safeDefineGlobal('handleManualVerify', handleManualVerify);
safeDefineGlobal('handleFeedbackModeChange', handleFeedbackModeChange);
safeDefineGlobal('openDeferredScorecardModal', openDeferredScorecardModal);
safeDefineGlobal('closeDeferredScorecardModal', closeDeferredScorecardModal);
safeDefineGlobal('jumpToPracticeChallenge', jumpToPracticeChallenge);
safeDefineGlobal('setupThemeToggleButton', setupThemeToggleButton);
safeDefineGlobal('setupKeyboardAccessibilityListeners', setupKeyboardAccessibilityListeners);

function backupProfileToJSON() {
    const workouts = typeof practiceWorkouts !== 'undefined' ? practiceWorkouts : (window.practiceWorkouts || []);
    const totalWorkouts = workouts.length > 0 ? workouts.length : 20;

    const aggregatePackage = {
        themeConfig: localStorage.getItem('opm-app-theme'),
        srsBackup: localStorage.getItem('opm-flashcard-intervals-v2'),
        challengesFinished: localStorage.getItem('opm-practice-completed-v1'),
        userCreatedCards: localStorage.getItem('opm-custom-user-cards')
    };

    for (let currentId = 0; currentId < totalWorkouts; currentId++) {
        const structuralKey = `opm-practice-code-${currentId}`;
        if (localStorage.getItem(structuralKey)) {
            aggregatePackage[structuralKey] = localStorage.getItem(structuralKey);
        }
    }

    const payloadBlob = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(aggregatePackage));
    const artificialAnchor = document.createElement('a');
    artificialAnchor.setAttribute("href", payloadBlob);
    artificialAnchor.setAttribute("download", "opm_learning_profile_backup.json");
    document.body.appendChild(artificialAnchor);
    artificialAnchor.click();
    artificialAnchor.remove();
}

function restoreProfileFromJSON(inputElementEvent) {
    const fileReaderInstance = new FileReader();
    fileReaderInstance.onload = function(loadEvent) {
        try {
            const compiledObject = JSON.parse(loadEvent.target.result);
            Object.keys(compiledObject).forEach(keyElement => {
                if (compiledObject[keyElement]) {
                    localStorage.setItem(keyElement, compiledObject[keyElement]);
                }
            });
            alert("🎯 Progress parameters parsed and mapped successfully! Reloading portal context...");
            window.location.reload();
        } catch (error) {
            alert("Security parsing failure. File type mismatch detected.");
        }
    };
    fileReaderInstance.readAsText(inputElementEvent.target.files[0]);
}

// BIND SAFELY TO GLOBAL SCOPE AT THE BOTTOM
safeDefineGlobal('backupProfileToJSON', backupProfileToJSON);
safeDefineGlobal('restoreProfileFromJSON', restoreProfileFromJSON);