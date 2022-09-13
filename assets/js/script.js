// WRITE CARD CLICK CARD FUNCTIONS

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