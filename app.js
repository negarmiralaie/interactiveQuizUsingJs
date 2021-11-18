let allTbodyRow = document.querySelectorAll("tbody tr");
Array.from(allTbodyRow).forEach(function (eachTbodyRow) {
  eachTbodyRow.addEventListener("click", (e) => {
    radioIconSrc = eachTbodyRow.querySelector(".radioIcon").src;
    indexOfSelected = indexOfSelectedAnswer(allTbodyRow);
    if (indexOfSelected <= allTbodyRow.length) {
      toggleRadioIcon(allTbodyRow[indexOfSelected]);
    }
    toggleRadioIcon(eachTbodyRow);
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

const correctAnswers = [];
