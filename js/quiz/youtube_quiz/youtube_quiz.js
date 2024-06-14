const quizData = [
    {
        question: "알유 유튜브 처음으로 올라온 영상에 제목은?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: ["발로란트 뉴비 버튜버가 평생 정통 FPS만 하다 오면 생기는 일", 
            "비키니와 불화자.", 
            "발로란트 1일차 버튜버 실력 실화냐 ㄷㄷ", 
            "공감해조. 아 일단 해줘."],
        correct: "발로란트 1일차 버튜버 실력 실화냐 ㄷㄷ"
    },
    {
        question: "알유 메인 채널 URL로 옳은 것은?",
        imgSrc: "../../img/이미지 없음.jpg",
        choices: ["youtube.com/@areyou2000", 
            "youtube.com/@Areyouclips", 
            "https://www.youtube.com/@Rsong_Usong", 
            "https://www.youtube.com/@RU_Areyou"],
        correct: "https://www.youtube.com/@RU_Areyou"
    },
    {
        question: "이 영상이 올라온 날자는?",
        imgSrc: "../../img/파피3.jpg",
        choices: ["2023년 12월 27일", 
            "2024년 1월 18일", 
            "2024년 2월 3일", 
            "2024년 2월 11일"],
        correct: "2024년 2월 11일"
    }
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
