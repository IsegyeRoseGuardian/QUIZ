const quizData = [
    {
        question: "알유의 생일은?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: ["4월 20일", 
                "5월 13일", 
                "7월 6일", 
                "12월 23일"],
        correct: "4월 20일"
    },
    {
        question: "알유의 키는?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: ["158cm", 
            "163cm", 
            "167cm", 
            "171cm"],
        correct: "167cm"
    },
    {
        question: "알유의 형액형은?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: [
            "A형",
            "B형",
            "AB형",
            "O형"
        ],
        correct: "B형"
    },
    {
        question: "알유가 살고 있는 나라는?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: [
            "대한민국",
            "싱가포르",
            "미국",
            "중국"
        ],
        correct: "싱가포르"
    },
    {
        question: "알유의 팬덤명은?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: [
            "유랑",
            "고도리",
            "촐랑이",
            "너구리"
        ],
        correct: "유랑"
    },
    {
        question: "알유의 상징색은?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: [
            "파란색",
            "검은색",
            "로얄 블루",
            "회색"
        ],
        correct: "로얄 블루"
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
