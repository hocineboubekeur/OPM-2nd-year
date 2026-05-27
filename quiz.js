// modules/quiz.js
import { Storage } from './storage.js';

export function initQuiz(questions) {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    let currentIdx = Storage.get('quiz_progress') || 0;
    let userAnswers = Storage.get('quiz_answers') || {};

    function renderQuestion() {
        const q = questions[currentIdx];
        const progressPercent = ((currentIdx + 1) / questions.length) * 100;

        container.innerHTML = `
            <div class="progress-container">
                <div class="progress-bar" style="width: ${progressPercent}%"></div>
            </div>
            <div class="question-block">
                <h3>Question ${currentIdx + 1} of ${questions.length}</h3>
                <p class="question-text">${q.question}</p>
                <div class="options-list">
                    ${q.options.map((opt, i) => `
                        <label class="option-item ${userAnswers[currentIdx] === i ? 'selected' : ''}">
                            <input type="radio" name="quiz-opt" value="${i}" ${userAnswers[currentIdx] === i ? 'checked' : ''}>
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-nav-actions">
                <button id="quiz-back" ${currentIdx === 0 ? 'disabled' : ''}>Back</button>
                ${currentIdx === questions.length - 1 
                    ? '<button id="quiz-finish" class="btn-submit">Submit Answers</button>' 
                    : '<button id="quiz-forward">Next Question</button>'}
            </div>
        `;
        bindQuizEvents();
    }

    function bindQuizEvents() {
        const options = document.querySelectorAll('input[name="quiz-opt"]');
        options.forEach(input => {
            input.addEventListener('change', (e) => {
                const val = parseInt(e.target.value, 10);
                userAnswers[currentIdx] = val;
                Storage.save('quiz_answers', userAnswers);
                
                document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
                e.target.closest('.option-item').classList.add('selected');
            });
        });

        document.getElementById('quiz-back')?.addEventListener('click', () => {
            if (currentIdx > 0) {
                currentIdx--;
                Storage.save('quiz_progress', currentIdx);
                renderQuestion();
            }
        });

        document.getElementById('quiz-forward')?.addEventListener('click', () => {
            if (currentIdx < questions.length - 1) {
                currentIdx++;
                Storage.save('quiz_progress', currentIdx);
                renderQuestion();
            }
        });

        document.getElementById('quiz-finish')?.addEventListener('click', evaluateExam);
    }

    function evaluateExam() {
        let score = 0;
        questions.forEach((q, idx) => {
            if (userAnswers[idx] === q.correctAnswer) score++;
        });

        Storage.clear('quiz_progress');
        Storage.clear('quiz_answers');

        container.innerHTML = `
            <div class="quiz-results card">
                <h2>Exam Complete!</h2>
                <p class="final-score">You scored <strong>${score}</strong> out of <strong>${questions.length}</strong> (${Math.round((score/questions.length)*100)}%).</p>
                <button id="restart-quiz">Retry Exam</button>
            </div>
        `;

        document.getElementById('restart-quiz').addEventListener('click', () => {
            currentIdx = 0;
            userAnswers = {};
            renderQuestion();
        });
    }

    renderQuestion();
}