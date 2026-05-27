// modules/flashcards.js

export function initFlashcards(deck) {
    const container = document.getElementById('flashcard-container');
    if (!container) return;

    let currentIndex = 0;

    function render() {
        const card = deck[currentIndex];
        container.innerHTML = `
            <div class="flashcard-wrapper">
                <div class="flashcard" id="active-card">
                    <div class="card-front"><p>${card.front}</p></div>
                    <div class="card-back"><p>${card.back}</p></div>
                </div>
            </div>
            <div class="deck-controls">
                <button id="prev-card" ${currentIndex === 0 ? 'disabled' : ''}>&larr; Previous</button>
                <button id="flip-card">Flip Card</button>
                <button id="next-card" ${currentIndex === deck.length - 1 ? 'disabled' : ''}>Next &rarr;</button>
            </div>
        `;
        bindEvents();
    }

    function bindEvents() {
        const cardElement = document.getElementById('active-card');
        const flipBtn = document.getElementById('flip-card');
        
        const toggleFlip = () => cardElement.classList.toggle('flipped');

        cardElement.addEventListener('click', toggleFlip);
        flipBtn.addEventListener('click', toggleFlip);

        document.getElementById('prev-card').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                render();
            }
        });

        document.getElementById('next-card').addEventListener('click', () => {
            if (currentIndex < deck.length - 1) {
                currentIndex++;
                render();
            }
        });
    }

    render();
}
