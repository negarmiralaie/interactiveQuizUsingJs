const body = document.body;
let main = document.querySelector("main");
const qRowClasses = [
    ".q1Table",
    ".q2Table",
    ".q3Table",
    ".q4Table",
    ".q5Table",
];
let userAnswers = [{
        qno: 0,
        ans: 0,
    },
    {
        qno: 1,
        ans: 0,
    },
    {
        qno: 2,
        ans: 0,
    },
    {
        qno: 3,
        ans: 0,
    },
    {
        qno: 4,
        ans: 0,
    },
];

for (i = 0; i < qRowClasses.length; i++) {
    let row = main.querySelector(qRowClasses[i]);
    let allTbodyRow = row.querySelectorAll("tbody tr");
    let qNo = i;

    // when an answer row is clicked, its icons changes to green  checked circle
    Array.from(allTbodyRow).forEach(function (eachTbodyRow) {
        eachTbodyRow.addEventListener("click", (e) => {
            radioIconSrc = eachTbodyRow.querySelector(".radioIcon").src;
            indexOfSelected = indexOfSelectedAnswer(allTbodyRow);

            if (indexOfSelected <= allTbodyRow.length) {
                toggleRadioIcon(allTbodyRow[indexOfSelected]);
            }
            toggleRadioIcon(eachTbodyRow);
            userAnswers[qNo].ans = indexOfSelectedAnswer(allTbodyRow);
        });
    });
}

// start counting and showing score
const form = document.querySelector(".quizForm");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector(".submitFormBtn");
    submitBtn.addEventListener("click", (e) => {
        console.log(111111);
        result.classList.toggle("showScore");
        result.classList.toggle("hideScore");
        scrollTo(0, 0);
        let output = 0;
        let userScore = countScore();
        const score = userScore;
        
        const timer = setInterval((userScore) => {
            if (output === score * 10) {
                clearInterval(timer);
            } else {
                output++;
                result.querySelector("span").textContent = `${output}`;
            }
        }, 10);
    });
});

function toggleRadioIcon(eachTbodyRow) {
    if (eachTbodyRow.querySelector(".radioIcon").src.includes("grayCircle")) {
        eachTbodyRow.querySelector(".radioIcon").src =
            "../images/greenCheckedCircle.png";
    } else {
        eachTbodyRow.querySelector(".radioIcon").src = "../images/grayCircle.png";
    }
}

function indexOfSelectedAnswer(allTbodyRow) {
    for (i = 0; i < allTbodyRow.length; i++) {
        if (
            allTbodyRow[i]
            .querySelector(".radioIcon")
            .src.includes("greenCheckedCircle")
        ) {
            return i;
        }
    }
}


function countScore() {
    let score = 0;
    for (i = 0; i < 5; i++) {
        score += userAnswers[i].ans;
    }
    return score;
};