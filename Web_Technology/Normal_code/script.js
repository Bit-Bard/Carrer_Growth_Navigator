// script.js

const quizData = [
    { question: "What interests you the most?", options: ["Data Analysis", "Designing", "Marketing", "Software Development", "Business Strategy"] },
    { question: "Which strength defines you best?", options: ["Logical Thinking", "Creativity", "Communication", "Leadership", "Empathy"] },
    { question: "How do you prefer to work?", options: ["In Teams", "Independently", "Remote", "Office", "Flexible"] },
    { question: "What's your risk appetite?", options: ["High", "Medium", "Low"] },
    { question: "Which area excites you more?", options: ["Solving Problems", "Building Visuals", "Writing Stories", "Analyzing Numbers", "Starting Companies"] },
    { question: "What's your ideal work environment?", options: ["Startup", "Corporate", "Freelance", "Nonprofit", "Academia"] }
];

const roadmapDatabase = {
    "Data Analyst": [
        { stage: "Beginner", topics: "Excel, Basic Statistics, SQL", resources: ["Khan Academy", "W3Schools", "YouTube - Alex The Analyst"] },
        { stage: "Intermediate", topics: "Python, Pandas, Data Visualization", resources: ["Kaggle", "Coursera", "YouTube - Luke Barousse"] },
        { stage: "Advanced", topics: "Machine Learning, Cloud Data Warehousing", resources: ["fast.ai", "AWS Training", "DeepLearning.AI"] }
    ],
    "UX Designer": [
        { stage: "Beginner", topics: "Design Thinking, Wireframes", resources: ["Coursera", "YouTube - Flux Academy"] },
        { stage: "Intermediate", topics: "Figma, Adobe XD, Prototyping", resources: ["Figma Learn", "Adobe Tutorials"] },
        { stage: "Advanced", topics: "Design Systems, User Research", resources: ["NNGroup", "Interaction Design Foundation"] }
    ],
    "Product Manager": [
        { stage: "Beginner", topics: "Business Basics, Customer Needs", resources: ["LinkedIn Learning", "Coursera"] },
        { stage: "Intermediate", topics: "Agile, Roadmapping, Metrics", resources: ["Scrum.org", "Product School"] },
        { stage: "Advanced", topics: "Leadership, Strategy, Market Analysis", resources: ["Harvard Business Review", "Mind The Product"] }
    ],
    "Software Engineer": [
        { stage: "Beginner", topics: "HTML, CSS, JavaScript Basics", resources: ["FreeCodeCamp", "MDN Web Docs"] },
        { stage: "Intermediate", topics: "React, Node.js, Git", resources: ["Codecademy", "The Odin Project"] },
        { stage: "Advanced", topics: "System Design, Cloud Deployment", resources: ["Grokking the System Design", "AWS Tutorials"] }
    ]
};

let currentQuestion = 0;
let answers = [];

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const nextButton = document.getElementById('next-btn');

function loadQuestion(index) {
    const item = quizData[index];
    quizContainer.innerHTML = `<div class="card"><p>${item.question}</p>` +
        item.options.map((option, idx) => `
            <label>
                <input type="radio" name="answer" value="${option}">
                ${idx + 1}. ${option}
            </label>`).join('') + `</div>`;
}

nextButton.addEventListener('click', () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert('Please select an answer before continuing!');
        return;
    }

    answers.push(selected.value);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion(currentQuestion);
    } else {
        const career = decideCareer(answers);
        showResult(career, generateMentorMessage(career, answers));
    }
});

function decideCareer(answers) {
    if (answers.includes("Data Analysis") || answers.includes("Analyzing Numbers") || answers.includes("Logical Thinking")) {
        return "Data Analyst";
    } else if (answers.includes("Designing") || answers.includes("Building Visuals") || answers.includes("Creativity")) {
        return "UX Designer";
    } else if (answers.includes("Leadership") || answers.includes("Business Strategy") || answers.includes("Starting Companies")) {
        return "Product Manager";
    } else {
        return "Software Engineer";
    }
}

function generateMentorMessage(career, answers) {
    return `Based on your choices, you show a natural tendency toward ${career === "Data Analyst" ? "analytical thinking, structured problem-solving, and curiosity about data" : career === "UX Designer" ? "creative vision, user empathy, and design aesthetics" : career === "Product Manager" ? "strategic planning, communication, and leadership" : "technical problem-solving, logical thinking, and building scalable software solutions"}. Your preferences reflect qualities that align perfectly with this career. Keep learning and stay curious!`;
}

function showResult(career, mentorMessage) {
    quizContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    resultContainer.innerHTML = `<h2>Your AI Mentor Suggests: ${career}</h2>
        <div class="result-message">${mentorMessage}</div>
        <p>Here's your personalized learning roadmap:</p>`;

    roadmapDatabase[career].forEach(step => {
        resultContainer.innerHTML += `
            <div class="card">
                <p class="stage">${step.stage}</p>
                <p><strong>Topics:</strong> ${step.topics}</p>
                <p><strong>Resources:</strong> ${step.resources.join(", ")}</p>
            </div>`;
    });
}

// Initialize the quiz
loadQuestion(currentQuestion);
