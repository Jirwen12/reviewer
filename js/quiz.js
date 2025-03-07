// Quiz data structure
const quizzes = {
    1: {
        title: "Introduction to Software Development",
        questions: [
            {
                question: "What is software development?",
                options: [
                    "The process of writing code only",
                    "The systematic process of designing, creating, testing, and maintaining software",
                    "The process of selling software",
                    "The process of using software"
                ],
                correct: 1
            },
            {
                question: "Which of the following is NOT a key phase in software development?",
                options: [
                    "Requirements gathering",
                    "Marketing and sales",
                    "Design and implementation",
                    "Testing and maintenance"
                ],
                correct: 1
            },
            {
                question: "What is the primary goal of software development?",
                options: [
                    "To make money",
                    "To write complex code",
                    "To solve specific problems or meet user needs",
                    "To create documentation"
                ],
                correct: 2
            },
            {
                question: "What is the first step in the software development process?",
                options: [
                    "Writing code",
                    "Requirements gathering and analysis",
                    "Testing",
                    "Deployment"
                ],
                correct: 1
            },
            {
                question: "What is a software requirement?",
                options: [
                    "A programming language",
                    "A description of what the software should do",
                    "A computer hardware specification",
                    "A development tool"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of software testing?",
                options: [
                    "To make the software look better",
                    "To identify and fix defects or bugs",
                    "To write documentation",
                    "To sell the software"
                ],
                correct: 1
            },
            {
                question: "What is software maintenance?",
                options: [
                    "Cleaning the computer",
                    "Updating hardware",
                    "Modifying and updating software after delivery",
                    "Installing new programs"
                ],
                correct: 2
            },
            {
                question: "What is version control in software development?",
                options: [
                    "Controlling computer versions",
                    "Managing changes to source code over time",
                    "Controlling software prices",
                    "Managing user accounts"
                ],
                correct: 1
            },
            {
                question: "What is debugging?",
                options: [
                    "Creating new features",
                    "Writing documentation",
                    "Finding and fixing software defects",
                    "Installing software"
                ],
                correct: 2
            },
            {
                question: "What is the purpose of software documentation?",
                options: [
                    "To make the software run faster",
                    "To increase software cost",
                    "To provide information about the software",
                    "To create user accounts"
                ],
                correct: 2
            },
            {
                question: "What is a software development methodology?",
                options: [
                    "A programming language",
                    "A framework for organizing software development",
                    "A type of computer",
                    "A software license"
                ],
                correct: 1
            },
            {
                question: "What is the role of a software developer?",
                options: [
                    "To sell software",
                    "To create and maintain software applications",
                    "To repair computers",
                    "To manage networks"
                ],
                correct: 1
            },
            {
                question: "What is software architecture?",
                options: [
                    "Building design",
                    "The fundamental structure of a software system",
                    "Computer hardware layout",
                    "Network design"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of code review?",
                options: [
                    "To count lines of code",
                    "To evaluate and improve code quality",
                    "To delete code",
                    "To rename files"
                ],
                correct: 1
            },
            {
                question: "What is software deployment?",
                options: [
                    "Writing code",
                    "Testing software",
                    "Making software available for use",
                    "Creating documentation"
                ],
                correct: 2
            },
            {
                question: "What is the purpose of user acceptance testing?",
                options: [
                    "To test hardware",
                    "To verify the software meets user requirements",
                    "To write code",
                    "To create documentation"
                ],
                correct: 1
            },
            {
                question: "What is a software bug?",
                options: [
                    "A computer virus",
                    "An error or defect in software",
                    "A feature request",
                    "A software license"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of software design?",
                options: [
                    "To make software look attractive",
                    "To plan how the software will be built",
                    "To sell software",
                    "To install software"
                ],
                correct: 1
            },
            {
                question: "What is software quality assurance?",
                options: [
                    "Testing hardware",
                    "Maintaining quality standards in software development",
                    "Writing documentation",
                    "Installing software"
                ],
                correct: 1
            },
            {
                question: "What is the role of project management in software development?",
                options: [
                    "Writing code",
                    "Testing software",
                    "Coordinating and managing the development process",
                    "Creating documentation"
                ],
                correct: 2
            }
        ]
    },
    2: {
        title: "Evolution of Software Development",
        questions: [
            {
                question: "Which era marked the beginning of modern software development?",
                options: [
                    "1940s - Early computers",
                    "1960s - Structured programming",
                    "1990s - Internet boom",
                    "2000s - Mobile revolution"
                ],
                correct: 0
            },
            {
                question: "What is a key characteristic of Agile development?",
                options: [
                    "Long development cycles",
                    "Minimal customer involvement",
                    "Iterative and incremental development",
                    "Complete upfront planning"
                ],
                correct: 2
            },
            {
                question: "Which of these is a future trend in software development?",
                options: [
                    "Low-code/No-code platforms",
                    "Manual testing only",
                    "Waterfall methodology",
                    "Single platform development"
                ],
                correct: 0
            },
            {
                question: "When was the first computer program written?",
                options: [
                    "1843 by Ada Lovelace",
                    "1936 by Alan Turing",
                    "1951 by Grace Hopper",
                    "1969 by Dennis Ritchie"
                ],
                correct: 0
            },
            {
                question: "What was the first high-level programming language?",
                options: [
                    "FORTRAN",
                    "COBOL",
                    "Assembly",
                    "C"
                ],
                correct: 0
            },
            {
                question: "When was the Waterfall model introduced?",
                options: [
                    "1956",
                    "1970",
                    "1985",
                    "2000"
                ],
                correct: 1
            },
            {
                question: "Which development methodology emerged in the 1990s?",
                options: [
                    "Waterfall",
                    "Structured Programming",
                    "Agile",
                    "DevOps"
                ],
                correct: 2
            },
            {
                question: "What major change did object-oriented programming bring?",
                options: [
                    "Faster computers",
                    "Better code organization and reuse",
                    "Cheaper software",
                    "More documentation"
                ],
                correct: 1
            },
            {
                question: "When did web development become mainstream?",
                options: [
                    "1980s",
                    "1990s",
                    "2000s",
                    "2010s"
                ],
                correct: 1
            },
            {
                question: "What impact did mobile devices have on software development?",
                options: [
                    "Simplified development",
                    "Reduced need for testing",
                    "Created new development paradigms",
                    "Eliminated web development"
                ],
                correct: 2
            },
            {
                question: "When did cloud computing become significant in software development?",
                options: [
                    "1990s",
                    "Early 2000s",
                    "Late 2000s",
                    "2020s"
                ],
                correct: 2
            },
            {
                question: "What characterized the early days of software development?",
                options: [
                    "Rapid development",
                    "Machine language programming",
                    "Agile methodologies",
                    "Cloud computing"
                ],
                correct: 1
            },
            {
                question: "Which development practice emerged with continuous integration?",
                options: [
                    "Manual testing",
                    "Waterfall model",
                    "Automated testing",
                    "Documentation first"
                ],
                correct: 2
            },
            {
                question: "What was the primary focus of software development in the 1950s?",
                options: [
                    "Scientific calculations",
                    "Business applications",
                    "Mobile apps",
                    "Web development"
                ],
                correct: 0
            },
            {
                question: "When did software testing become a formal discipline?",
                options: [
                    "1950s",
                    "1960s",
                    "1970s",
                    "1980s"
                ],
                correct: 2
            },
            {
                question: "What major change did the internet bring to software development?",
                options: [
                    "Simpler programming",
                    "Less security concerns",
                    "Distributed computing",
                    "Fewer developers needed"
                ],
                correct: 2
            },
            {
                question: "When did version control systems become widely used?",
                options: [
                    "1960s",
                    "1970s",
                    "1980s",
                    "1990s"
                ],
                correct: 2
            },
            {
                question: "What impact did open source have on software development?",
                options: [
                    "Increased costs",
                    "Reduced collaboration",
                    "Increased innovation",
                    "Slower development"
                ],
                correct: 2
            },
            {
                question: "When did artificial intelligence start influencing software development?",
                options: [
                    "1950s",
                    "1970s",
                    "1990s",
                    "2010s"
                ],
                correct: 3
            },
            {
                question: "What characterized the shift to modern software development?",
                options: [
                    "Less automation",
                    "More rigid processes",
                    "Increased agility",
                    "Reduced testing"
                ],
                correct: 2
            }
        ]
    },
    3: {
        title: "Types of Software Development",
        questions: [
            {
                question: "Which type of software development focuses on creating programs for mobile devices?",
                options: [
                    "Web development",
                    "Mobile development",
                    "Desktop development",
                    "Cloud computing"
                ],
                correct: 1
            },
            {
                question: "What is the main purpose of backend development?",
                options: [
                    "Creating user interfaces",
                    "Handling server-side logic and database operations",
                    "Designing graphics",
                    "Testing software"
                ],
                correct: 1
            },
            {
                question: "Which development type deals with creating software for specific hardware?",
                options: [
                    "Web development",
                    "Cloud development",
                    "Embedded systems development",
                    "Mobile development"
                ],
                correct: 2
            },
            {
                question: "What is frontend development primarily concerned with?",
                options: [
                    "Database management",
                    "Server configuration",
                    "User interface and experience",
                    "Network security"
                ],
                correct: 2
            },
            {
                question: "Which type of development focuses on business applications?",
                options: [
                    "Enterprise software development",
                    "Game development",
                    "Mobile development",
                    "Web development"
                ],
                correct: 0
            },
            {
                question: "What is the main focus of DevOps?",
                options: [
                    "User interface design",
                    "Integration and deployment automation",
                    "Mobile app development",
                    "Database management"
                ],
                correct: 1
            },
            {
                question: "Which type of development creates interactive entertainment software?",
                options: [
                    "Business software",
                    "System software",
                    "Game development",
                    "Utility software"
                ],
                correct: 2
            },
            {
                question: "What is the primary focus of cloud development?",
                options: [
                    "Desktop applications",
                    "Mobile apps",
                    "Web-based services",
                    "Embedded systems"
                ],
                correct: 2
            },
            {
                question: "Which type of development deals with operating systems?",
                options: [
                    "Application development",
                    "Systems development",
                    "Web development",
                    "Mobile development"
                ],
                correct: 1
            },
            {
                question: "What is cross-platform development?",
                options: [
                    "Development for a single platform",
                    "Development for multiple platforms",
                    "Web development only",
                    "Mobile development only"
                ],
                correct: 1
            },
            {
                question: "Which type of development focuses on data analysis?",
                options: [
                    "Data science development",
                    "Web development",
                    "Mobile development",
                    "Game development"
                ],
                correct: 0
            },
            {
                question: "What is the main focus of security software development?",
                options: [
                    "User interface",
                    "Data protection",
                    "Game mechanics",
                    "Social features"
                ],
                correct: 1
            },
            {
                question: "Which type of development creates software for scientific calculations?",
                options: [
                    "Scientific software development",
                    "Web development",
                    "Mobile development",
                    "Game development"
                ],
                correct: 0
            },
            {
                question: "What is the primary focus of IoT development?",
                options: [
                    "Web applications",
                    "Mobile apps",
                    "Connected devices",
                    "Desktop software"
                ],
                correct: 2
            },
            {
                question: "Which type of development focuses on artificial intelligence?",
                options: [
                    "AI development",
                    "Web development",
                    "Mobile development",
                    "Game development"
                ],
                correct: 0
            },
            {
                question: "What is the main purpose of middleware development?",
                options: [
                    "User interfaces",
                    "Connecting different software systems",
                    "Mobile apps",
                    "Games"
                ],
                correct: 1
            },
            {
                question: "Which type of development creates educational software?",
                options: [
                    "E-learning development",
                    "Game development",
                    "Mobile development",
                    "Web development"
                ],
                correct: 0
            },
            {
                question: "What is the focus of blockchain development?",
                options: [
                    "Mobile apps",
                    "Web applications",
                    "Distributed ledger technology",
                    "Desktop software"
                ],
                correct: 2
            },
            {
                question: "Which type of development creates financial software?",
                options: [
                    "Fintech development",
                    "Game development",
                    "Mobile development",
                    "Web development"
                ],
                correct: 0
            },
            {
                question: "What is the main focus of real-time systems development?",
                options: [
                    "Web applications",
                    "Time-critical operations",
                    "Mobile apps",
                    "Games"
                ],
                correct: 1
            }
        ]
    }
};

let currentQuiz = null;
let currentQuestion = 0;
let userAnswers = [];

// Add detailed explanations to quiz questions
quizzes[1].questions.forEach(q => {
    switch(q.question) {
        case "What is software development?":
            q.explanation = "Software development is more than just writing code. The systematic process of designing, creating, testing, and maintaining software encompasses the entire lifecycle of software creation, from initial concept to final deployment and ongoing updates.";
            break;
        case "Which of the following is NOT a key phase in software development?":
            q.explanation = "While marketing and sales are important for software success, they are not core phases of the development process. The key phases are requirements gathering, design, implementation, testing, and maintenance - all technical aspects of creating software.";
            break;
        case "What is the primary goal of software development?":
            q.explanation = "Solving specific problems or meeting user needs is the fundamental purpose of software development. While making money or writing code are part of the process, the ultimate goal is to create solutions that address real-world problems and user requirements.";
            break;
        case "What is the first step in the software development process?":
            q.explanation = "Requirements gathering and analysis is crucial as the first step because it defines what the software needs to do. Without proper requirements, developers would not know what to build or how to meet user needs effectively.";
            break;
        case "What is a software requirement?":
            q.explanation = "A description of what the software should do is the correct definition because requirements specify the functionality, features, and constraints that the software must satisfy to meet user needs and business objectives.";
            break;
        case "What is the purpose of software testing?":
            q.explanation = "Identifying and fixing defects or bugs is essential for ensuring software quality. Testing helps verify that the software works as intended and meets the specified requirements before deployment.";
            break;
        case "What is software maintenance?":
            q.explanation = "Modifying and updating software after delivery is crucial because software needs continuous improvements, bug fixes, and adaptations to new requirements and environments throughout its lifecycle.";
            break;
        default:
            q.explanation = "The correct answer represents the most accurate understanding of this software development concept based on industry standards and best practices.";
    }
});

quizzes[2].questions.forEach(q => {
    switch(q.question) {
        case "Which era marked the beginning of modern software development?":
            q.explanation = "The 1940s marked the beginning with early computers like ENIAC. This era introduced the fundamental concepts of programming and laid the groundwork for all future software development.";
            break;
        case "What is a key characteristic of Agile development?":
            q.explanation = "Iterative and incremental development is the core of Agile methodology. It allows for flexibility, rapid response to changes, and continuous delivery of working software through short development cycles.";
            break;
        case "When was the first computer program written?":
            q.explanation = "Ada Lovelace wrote the first algorithm intended to be processed by a machine in 1843. Her work on the Analytical Engine included the first published computer program, making her the world's first programmer.";
            break;
        default:
            q.explanation = "This milestone in software development history represents a significant advancement that has shaped how we develop software today.";
    }
});

quizzes[3].questions.forEach(q => {
    switch(q.question) {
        case "Which type of software development focuses on creating programs for mobile devices?":
            q.explanation = "Mobile development specifically deals with creating applications for smartphones and tablets. It requires understanding mobile platforms, user interface guidelines, and mobile-specific constraints.";
            break;
        case "What is the main purpose of backend development?":
            q.explanation = "Handling server-side logic and database operations is crucial for backend development. It manages data processing, business logic, and server operations that power the user-facing frontend.";
            break;
        case "What is frontend development primarily concerned with?":
            q.explanation = "User interface and experience is the focus of frontend development. It involves creating the visual elements and interactions that users directly engage with in software applications.";
            break;
        default:
            q.explanation = "This type of software development addresses specific needs in the industry, requiring specialized knowledge and techniques for its particular domain.";
    }
});

// Start quiz functionality
function startQuiz(quizId) {
    const button = event.target;
    setButtonLoading(button, true);

    if (quizzes[quizId]) {
        // Simulate loading time for better UX
        setTimeout(() => {
            currentQuiz = quizId;
            currentQuestion = 0;
            userAnswers = [];
            
            // Update UI elements
            document.getElementById('quiz-title').textContent = quizzes[quizId].title;
            document.querySelector('.quiz-selection').style.display = 'none';
            document.getElementById('question-container').style.display = 'block';
            
            displayQuestion();
            updateQuizControls();
            setButtonLoading(button, false);
        }, 500);
    }
}

// Display current question
function displayQuestion() {
    const quiz = quizzes[currentQuiz];
    const question = quiz.questions[currentQuestion];
    const container = document.getElementById('question-container');
    
    // Update progress
    document.getElementById('quiz-progress').textContent = 
        `Question ${currentQuestion + 1} of ${quiz.questions.length}`;

    // Create question HTML
    let html = `
        <div class="question">
            <h4>${question.question}</h4>
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestion] === index;
        html += `
            <div class="option ${isSelected ? 'selected' : ''}" 
                 onclick="selectOption(${index})"
                 style="pointer-events: auto;">
                ${option}
            </div>
        `;
    });

    html += `</div></div>`;
    container.innerHTML = html;

    // Reset next button text
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = 'Check Answer';

    updateQuizControls();
}

// Handle option selection with debounce
let selectionTimeout;
function selectOption(optionIndex) {
    const option = event.target;
    if (option.classList.contains('selected')) return;

    clearTimeout(selectionTimeout);
    selectionTimeout = setTimeout(() => {
        userAnswers[currentQuestion] = optionIndex;
        displayQuestion();
    }, 150);
}

// Navigation and control functions with loading states
function previousQuestion() {
    const button = document.getElementById('prev-btn');
    setButtonLoading(button, true);

    setTimeout(() => {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion();
        }
        setButtonLoading(button, false);
    }, 300);
}

function nextQuestion() {
    const button = document.getElementById('next-btn');
    const quiz = quizzes[currentQuiz];
    const question = quiz.questions[currentQuestion];
    
    // If feedback is already shown, proceed to next question
    const existingFeedback = document.querySelector('.answer-feedback');
    if (existingFeedback) {
        if (currentQuestion < quiz.questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        }
        return;
    }

    // Show answer feedback
    setButtonLoading(button, true);
    const userAnswer = userAnswers[currentQuestion];
    
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === userAnswer && userAnswer !== question.correct) {
            option.classList.add('incorrect');
        }
        // Disable option clicking after showing answer
        option.style.pointerEvents = 'none';
    });

    // Add explanation
    const container = document.getElementById('question-container');
    const feedback = document.createElement('div');
    feedback.className = 'answer-feedback';
    feedback.innerHTML = `
        <p class="${userAnswer === question.correct ? 'correct' : 'incorrect'}">
            ${userAnswer === question.correct ? 'Correct!' : 'Incorrect.'} 
            ${question.explanation}
        </p>
        <p class="feedback-hint">Click Next to proceed to the next question</p>
    `;
    container.appendChild(feedback);

    // Update button text
    button.textContent = 'Next Question';
    setButtonLoading(button, false);
}

function updateQuizControls() {
    const quiz = quizzes[currentQuiz];
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === quiz.questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Submit quiz and show results
function submitQuiz() {
    const button = document.getElementById('submit-btn');
    setButtonLoading(button, true);

    const quiz = quizzes[currentQuiz];
    let score = 0;
    let totalAnswered = 0;

    userAnswers.forEach((answer, index) => {
        if (answer !== null) {
            totalAnswered++;
            if (answer === quiz.questions[index].correct) {
                score++;
            }
        }
    });

    // Check if all questions are answered
    if (totalAnswered < quiz.questions.length) {
        alert(`Please answer all questions before submitting. You have answered ${totalAnswered} out of ${quiz.questions.length} questions.`);
        setButtonLoading(button, false);
        return;
    }

    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    // Update progress
    progress.quizScores.push(percentage);
    progress.quizzesCompleted[currentQuiz] = true;
    localStorage.setItem('reviewerProgress', JSON.stringify(progress));
    updateProgressDisplay();

    // Show results
    const container = document.getElementById('question-container');
    container.innerHTML = `
        <div class="quiz-results">
            <h3>Quiz Complete!</h3>
            <div class="result-stats">
                <p>Score: ${score} out of ${quiz.questions.length}</p>
                <p>Percentage: ${percentage}%</p>
                <p class="result-status ${percentage >= 75 ? 'passed' : 'failed'}">
                    ${percentage >= 75 ? 'PASSED' : 'FAILED'}
                </p>
            </div>
            <div class="quiz-actions">
                <button class="quiz-btn" onclick="reviewQuiz()">Review Answers</button>
                <button class="quiz-btn" onclick="resetQuiz()">Try Again</button>
            </div>
        </div>
    `;

    // Hide navigation buttons
    document.getElementById('prev-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
    
    setButtonLoading(button, false);
}

// Review quiz answers
function reviewQuiz() {
    const quiz = quizzes[currentQuiz];
    const container = document.getElementById('question-container');
    let html = '<div class="quiz-review">';

    quiz.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;

        html += `
            <div class="review-question">
                <h4>Question ${index + 1}: ${question.question}</h4>
                <div class="review-options">
        `;

        question.options.forEach((option, optIndex) => {
            let className = '';
            if (optIndex === question.correct) {
                className = 'correct';
            } else if (optIndex === userAnswer && userAnswer !== question.correct) {
                className = 'incorrect';
            }

            html += `
                <div class="option ${className}">
                    ${option}
                    ${optIndex === question.correct ? ' ✓' : ''}
                </div>
            `;
        });

        html += `
                </div>
                <div class="answer-feedback">
                    <p class="${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? 'Correct!' : 'Incorrect.'} 
                        ${question.explanation}
                    </p>
                </div>
            </div>
        `;
    });

    html += `
        <div class="quiz-actions">
            <button class="quiz-btn" onclick="resetQuiz()">Try Again</button>
        </div>
    `;

    container.innerHTML = html;
}

// Reset quiz state
function resetQuiz() {
    document.querySelector('.quiz-selection').style.display = 'block';
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('quiz-title').textContent = 'Select a Quiz to Begin';
    document.getElementById('quiz-progress').textContent = '';
    
    // Reset navigation buttons
    document.getElementById('prev-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'none';
    
    currentQuiz = null;
    currentQuestion = 0;
    userAnswers = [];
}

// Initialize quiz event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
});

// Add CSS for the new feedback hint
const style = document.createElement('style');
style.textContent = `
    .feedback-hint {
        margin-top: 1rem;
        color: var(--text-color);
        font-style: italic;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style); 