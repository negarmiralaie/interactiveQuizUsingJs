const body = document.body;
let main = document.querySelector("main");
const qRowClasses = [".q1Table", ".q2Table", ".q3Table", ".q4Table", ".q5Table"];
let userAnswers = [
  { qno: 0, ans: 0 },
  { qno: 1, ans: 0 },
  { qno: 2, ans: 0 },
  { qno: 3, ans: 0 },
  { qno: 4, ans: 0 },
];

for (i = 0; i < qRowClasses.length; i++) {
    let row = main.querySelector(qRowClasses[i]);
    let allTbodyRow = row.querySelectorAll("tbody tr");
    let qNo=i;

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