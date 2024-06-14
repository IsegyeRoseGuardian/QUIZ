const quizData = [
    {
        question: "2024년 알유가 여동생에게 준 생일 선물은?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: ["지갑", 
            "가방", 
            "신발", 
            "돈"],
        correct: "가방"
    },
];

let currentQuiz = 0;
let score = 0;

const quizElement = document.getElementById('quiz');
const quizImgElement = document.getElementById('quiz_image'); // img 요소를 가리킴
const choiceElements = [
    document.getElementById('multiple_choice1'),
    document.getElementById('multiple_choice2'),
    document.getElementById('multiple_choice3'),
    document.getElementById('multiple_choice4')
];

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quizElement.innerText = currentQuizData.question;
    quizImgElement.src = currentQuizData.imgSrc; // 이미지 src 설정

    choiceElements.forEach((choiceElement, index) => {
        choiceElement.innerText = currentQuizData.choices[index];
        choiceElement.onclick = () => {
            if (choiceElement.innerText === currentQuizData.correct) {
                score++;
            }
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                showResults();
            }
        };
    });
}

function showResults() {
    const resultsElement = document.getElementById('results');
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = `당신의 점수는 ${score}/${quizData.length} 입니다.`;
    resultsElement.style.display = 'block';
    document.getElementById('question').style.display = 'none';
    document.getElementById('multiple_choice').style.display = 'none';
}

loadQuiz();
