const questions = [
    {
        type: "multiple",
        question: "O que é dengue?",
        options: [
            "Uma doença transmitida por bactérias",
            "Uma doença viral transmitida por mosquitos",
            "Uma infecção alimentar"
        ],
        answer: 1
    },
    {
        type: "multiple",
        question: "Qual mosquito é o principal transmissor da dengue?",
        options: [
            "Aedes aegypti",
            "Anopheles",
            "Culex"
        ],
        answer: 0
    },
    {
        type: "truefalse",
        question: "A dengue é transmitida apenas durante o dia.",
        options: ["Verdadeiro", "Falso"],
        answer: 0
    },
    {
        type: "multiple",
        question: "Qual é um dos principais sintomas da dengue?",
        options: [
            "Febre alta",
            "Dor de estômago",
            "Espirros"
        ],
        answer: 0
    },
    {
        type: "multiple",
        question: "Qual dessas opções é uma forma de prevenir a dengue?",
        options: [
            "Manter a casa sempre limpa",
            "Colocar água em pneus velhos",
            "Usar repelente somente à noite"
        ],
        answer: 0
    },
    {
        type: "truefalse",
        question: "A dengue é mais comum em países tropicais.",
        options: ["Verdadeiro", "Falso"],
        answer: 0
    },
    {
        type: "multiple",
        question: "Quantos tipos de dengue existem?",
        options: [
            "Um",
            "Dois",
            "Quatro"
        ],
        answer: 2
    },
    {
        type: "truefalse",
        question: "Uma pessoa pode contrair dengue mais de uma vez.",
        options: ["Verdadeiro", "Falso"],
        answer: 0
    },
    {
        type: "multiple",
        question: "Qual é o tratamento recomendado para a dengue?",
        options: [
            "Antibióticos",
            "Repouso e hidratação",
            "Medicamentos antivirais"
        ],
        answer: 1
    },
    {
        type: "multiple",
        question: "Qual é um dos sinais de alerta para dengue grave?",
        options: [
            "Sangramento",
            "Tosse",
            "Dores musculares"
        ],
        answer: 0
    },
    {
        type: "multiple",
        question: "Quais destas práticas ajudam a combater o mosquito da dengue?",
        options: [
            "Deixar água acumulada em vasos de plantas",
            "Descartar corretamente o lixo",
            "Usar telas em portas e janelas"
        ],
        answer: 1
    },
    {
        type: "multiple",
        question: "Qual é a principal forma de transmissão da dengue?",
        options: [
            "Picadas de mosquito",
            "Relações sexuais",
            "Contato físico"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let startTime;
let interval;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    startTimer();
});

function startTimer() {
    startTime = Date.now();
    interval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById("time").textContent = elapsedTime;
    }, 1000);
}

function loadQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    const questionObj = questions[currentQuestion];
    const questionEl = document.createElement("p");
    questionEl.className = "question";
    questionEl.textContent = questionObj.question;
    quizContainer.appendChild(questionEl);

    questionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        quizContainer.appendChild(button);
    });

    document.getElementById("next-btn").style.display = "none"; // Esconde o botão "Próxima Pergunta"
}

function checkAnswer(selectedIndex) {
    const questionObj = questions[currentQuestion];
    if (selectedIndex === questionObj.answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        clearInterval(interval);
        showResult();
    }
}

function showResult() {
    const resultDiv = document.getElementById("result");
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    resultDiv.textContent = `Você acertou ${score} de ${questions.length} perguntas! Tempo total: ${timeTaken} segundos.`;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
}
