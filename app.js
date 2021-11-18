let allTbodyRow = document.querySelectorAll('tbody tr');

Array.from(allTbodyRow).forEach(function (eachTbodyRow) {
    eachTbodyRow.addEventListener("click", (e) => {
        radioIconSrc = eachTbodyRow.querySelector(".radioIcon").src;
        console.log(radioIconSrc);
        if (radioIconSrc.includes("grayCircle")) {
          eachTbodyRow.querySelector(".radioIcon").src =
            "../images/greenCheckedCircle.png";
        }
        console.log(eachTbodyRow.querySelector(".radioIcon").src);

    });
});

const correctAnswers = [];