// WRITE CARD CLICK CARD FUNCTIONS
var harold = document.querySelector("#harold");
harold.addEventListener("click", showHarold);

function showHarold() {
    $('#haroldModal').modal('show')
}

var hated = document.querySelector("#hated");
hated.addEventListener("click", showHated);

function showHated() {
    $('#hatedModal').modal('show')
}






var closeBtns  = document.querySelectorAll(".close");
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", closeModal);
}
function closeModal() {
    $('#haroldModal').modal('hide');
    $('#hatedModal').modal('hide');
//     $('#hunterModal').modal('hide');
//     $('#hideousModal').modal('hide');
//     $('#___Modal').modal('hide');
//     $('#___Modal').modal('hide');

}


// WRITE CODE FOR TIMER
function startTimer() {
    const timeEl = document.getElementById("timer");
    let secondsLeft = 59;
    let timerInterval = setInterval(function() {
        timeEl.innerHTML = "0:" + secondsLeft + "s";
        secondsLeft--;
            
        if(secondsLeft <= 10) {
            timeEl.setAttribute("style", "color: darkred; font-size: 20px; font-weight: bold");
        }

        if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        killPage();
        }
        }, 1000);
};

startTimer();