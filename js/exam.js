let selectedQuestions = [];
let currentQuestionIndex = 0;
let answers = {};
let verified = {};
let timeRemaining = 40 * 60; // 40 minutos en segundos
let timerInterval;
let examStarted = false;

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function selectRandomQuestions() {
    selectedQuestions = [];
    
    // 10 preguntas de cada sección
    const sections = ['section1', 'section2', 'section3', 'section4'];
    sections.forEach(section => {
        const shuffled = shuffleArray(questionBank[section]);
        selectedQuestions.push(...shuffled.slice(0, 10));
    });
    
    // Mezclar el orden final
    selectedQuestions = shuffleArray(selectedQuestions);
    
    // Asignar sección a cada pregunta
    let sectionNames = {
        section1: 'Marco de Gobierno de COBIT',
        section2: 'Componentes del Sistema de Gobierno',
        section3: 'Objetivos de Gestión',
        section4: 'Implementación y Factores de Diseño'
    };
    
    selectedQuestions = selectedQuestions.map((q, idx) => {
        let sectionKey = sections[Math.floor(idx / 10)];
        return {
            ...q,
            sectionName: sectionNames[sectionKey],
            number: idx + 1
        };
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function renderQuestionNav() {
    const nav = document.getElementById('question-nav');
    nav.innerHTML = '';
    
    selectedQuestions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = idx + 1;
        btn.onclick = () => goToQuestion(idx);
        
        if (idx === currentQuestionIndex) {
            btn.classList.add('active');
        }
        if (verified[idx]) {
            btn.classList.add('verified');
        } else if (answers[idx] !== undefined) {
            btn.classList.add('answered');
        }
        
        nav.appendChild(btn);
    });
}

function renderQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <div class="question-section">
            <span class="section-tag">${question.sectionName}</span>
            <div class="question-text">
                <strong>Pregunta ${question.number}:</strong> ${question.question}
            </div>
            <div class="options">
                ${question.options.map((option, idx) => `
                    <div class="option">
                        <input type="radio" 
                               name="answer" 
                               id="option${idx}" 
                               value="${idx}"
                               ${answers[currentQuestionIndex] === idx ? 'checked' : ''}>
                        <label for="option${idx}" class="option-label">
                            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                            <span class="option-text">${option}</span>
                        </label>
                    </div>
                `).join('')}
            </div>
            <div class="verify-checkbox">
                <input type="checkbox" 
                       id="verify" 
                       ${verified[currentQuestionIndex] ? 'checked' : ''}>
                <label for="verify">✓ Marcar esta pregunta como verificada</label>
            </div>
        </div>
    `;
    
    // Agregar event listeners
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.addEventListener('change', (e) => {
            answers[currentQuestionIndex] = parseInt(e.target.value);
            updateProgress();
            renderQuestionNav();
        });
    });
    
    document.getElementById('verify').addEventListener('change', (e) => {
        verified[currentQuestionIndex] = e.target.checked;
        renderQuestionNav();
        updateProgress();
    });
    
    // Actualizar botones de navegación
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === selectedQuestions.length - 1;
    
    renderQuestionNav();
}

function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    const verifiedCount = Object.keys(verified).filter(k => verified[k]).length;
    
    document.getElementById('answered-count').textContent = `${answeredCount}/40`;
    document.getElementById('verified-count').textContent = `${verifiedCount}/40`;
}

function goToQuestion(index) {
    currentQuestionIndex = index;
    renderQuestion();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function cancelFinishExam() {
    console.log('Usuario canceló terminar examen');
    document.getElementById('confirmModal').classList.remove('active');
}

function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let details = [];
    
    selectedQuestions.forEach((q, idx) => {
        if (answers[idx] === undefined) {
            unanswered++;
            details.push({
                number: idx + 1,
                question: q.question,
                userAnswer: null,
                correctAnswer: q.options[q.correct],
                isCorrect: false
            });
        } else if (answers[idx] === q.correct) {
            correct++;
            details.push({
                number: idx + 1,
                question: q.question,
                userAnswer: q.options[answers[idx]],
                correctAnswer: q.options[q.correct],
                isCorrect: true
            });
        } else {
            incorrect++;
            details.push({
                number: idx + 1,
                question: q.question,
                userAnswer: q.options[answers[idx]],
                correctAnswer: q.options[q.correct],
                isCorrect: false
            });
        }
    });
    
    return { correct, incorrect, unanswered, details };
}

function getGrade(correct) {
    if (correct >= 36) return { grade: 'Excelente', percentage: Math.round((correct/40)*100), color: '#27AE60' };
    if (correct >= 32) return { grade: 'Muy Bueno', percentage: Math.round((correct/40)*100), color: '#2980B9' };
    if (correct >= 26) return { grade: 'Aprobado', percentage: Math.round((correct/40)*100), color: '#F39C12' };
    return { grade: 'No Aprobado', percentage: Math.round((correct/40)*100), color: '#E74C3C' };
}

function finishExam() {
    console.log('Ejecutando finishExam...');
    
    const answeredCount = Object.keys(answers).length;
    const unansweredCount = 40 - answeredCount;
    
    // Mostrar modal personalizado
    const modal = document.getElementById('confirmModal');
    const warningDiv = document.getElementById('modalWarning');
    const unansweredSpan = document.getElementById('unansweredCount');
    
    if (unansweredCount > 0) {
        warningDiv.style.display = 'block';
        unansweredSpan.textContent = unansweredCount;
    } else {
        warningDiv.style.display = 'none';
    }
    
    modal.classList.add('active');
    console.log('Modal mostrado');
}

function confirmFinishExam() {
    console.log('Usuario confirmó terminar examen');
    
    // Ocultar modal
    document.getElementById('confirmModal').classList.remove('active');
    
    console.log('Procesando resultados...');
    clearInterval(timerInterval);
    
    const results = calculateResults();
    const gradeInfo = getGrade(results.correct);
    
    const examContent = document.getElementById('exam-content');
    const resultsDiv = document.getElementById('results');
    
    examContent.style.display = 'none';
    resultsDiv.style.display = 'block';
    resultsDiv.classList.add('active');
    
    resultsDiv.innerHTML = `
        <h2 style="color: var(--primary); font-family: 'Crimson Pro', serif; font-size: 2.5em; margin-bottom: 20px;">
            Resultados del Examen
        </h2>
        
        <div class="results-score" style="color: ${gradeInfo.color};">
            ${results.correct}/40
        </div>
        
        <div class="results-grade" style="color: ${gradeInfo.color};">
            ${gradeInfo.grade} (${gradeInfo.percentage}%)
        </div>
        
        <div class="results-message">
            ${results.correct >= 26 ? 
                '¡Felicitaciones! Has aprobado el examen COBIT Foundation.' : 
                'No has alcanzado el puntaje mínimo. Te recomendamos revisar el material y volver a intentarlo.'}
        </div>
        
        <div class="results-details">
            <div class="result-card">
                <div class="result-card-value" style="color: #27AE60;">${results.correct}</div>
                <div class="result-card-label">Correctas</div>
            </div>
            <div class="result-card">
                <div class="result-card-value" style="color: #E74C3C;">${results.incorrect}</div>
                <div class="result-card-label">Incorrectas</div>
            </div>
            <div class="result-card">
                <div class="result-card-value" style="color: #95A5A6;">${results.unanswered}</div>
                <div class="result-card-label">Sin Responder</div>
            </div>
            <div class="result-card">
                <div class="result-card-value">${gradeInfo.percentage}%</div>
                <div class="result-card-label">Porcentaje</div>
            </div>
        </div>
        
        <div class="review-questions">
            <h3 style="color: var(--primary); margin-bottom: 20px; font-size: 1.5em;">Revisión de Preguntas</h3>
            ${results.details.map(detail => `
                <div class="review-question ${detail.isCorrect ? 'correct' : ''}">
                    <div class="review-question-header">
                        Pregunta ${detail.number}: ${detail.isCorrect ? '✓ Correcta' : '✗ Incorrecta'}
                    </div>
                    <div style="margin: 10px 0; color: var(--text);">${detail.question}</div>
                    ${detail.userAnswer ? `
                        <div class="review-answer ${detail.isCorrect ? 'correct' : 'incorrect'}">
                            <strong>Tu respuesta:</strong> ${detail.userAnswer}
                        </div>
                    ` : `
                        <div class="review-answer incorrect">
                            <strong>No respondida</strong>
                        </div>
                    `}
                    ${!detail.isCorrect ? `
                        <div class="review-answer correct">
                            <strong>Respuesta correcta:</strong> ${detail.correctAnswer}
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
        
        <div style="margin-top: 40px;">
            <button class="btn btn-primary" onclick="location.reload()">
                Realizar Nuevo Examen
            </button>
        </div>
    `;
    
    console.log('Examen finalizado correctamente');
}

// Inicializar examen
window.onload = function() {
    console.log('Iniciando examen...');
    selectRandomQuestions();
    renderQuestion();
    updateProgress();
    startTimer();
    examStarted = true;
    
    // Event listeners para botones de navegación
    document.getElementById('prev-btn').addEventListener('click', function() {
        previousQuestion();
    });
    
    document.getElementById('next-btn').addEventListener('click', function() {
        nextQuestion();
    });
    
    // Event listener para botón terminar - CRÍTICO
    document.getElementById('finish-btn').addEventListener('click', function() {
        console.log('Botón terminar presionado');
        finishExam();
    });
    
    // Event listeners para modal
    document.getElementById('modalConfirm').addEventListener('click', function() {
        console.log('Modal confirmado');
        confirmFinishExam();
    });
    
    document.getElementById('modalCancel').addEventListener('click', function() {
        console.log('Modal cancelado');
        cancelFinishExam();
    });
    
    // Cerrar modal al hacer clic fuera
    document.getElementById('confirmModal').addEventListener('click', function(e) {
        if (e.target === this) {
            cancelFinishExam();
        }
    });
    
    console.log('Examen iniciado correctamente');
};
