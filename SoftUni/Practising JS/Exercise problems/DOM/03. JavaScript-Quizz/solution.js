function solve() {
    let numberOfQuestions = 3;
    let quizzie = document.getElementById("quizzie");
    let sections = document.getElementsByTagName('section');
    let result = document.querySelector(".results-inner h1");
    let correctAnswers = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents'
    ];
    let userAnswers = [];
    let currentStep = 0;
    let handler = (e) => {


        if (e.target.className === "answer-text") {

            userAnswers.push(e.target.innerText);
            //console.log(correctAnswers.includes(e.target.innerText))

        }
        currentStep++;
        if (currentStep < numberOfQuestions) {
            sections[currentStep - 1].style.display = "none";
            sections[currentStep].style.display = "block";

        }
        if (currentStep === numberOfQuestions) {
            quizzie.removeEventListener("click", handler);
            sections[currentStep - 1].style.display = "none";
            userAnswers = userAnswers.filter(x => correctAnswers.includes(x));
            if (userAnswers.length === numberOfQuestions) {
                result.innerHTML = "You are recognized as top JavaScript fan!";
            } else {
                result.innerHTML = `You have ${userAnswers.length} right answers`;
            }
            document.querySelector("#results").style.display = "block";
        }

    }

    quizzie.addEventListener("click", handler)


}