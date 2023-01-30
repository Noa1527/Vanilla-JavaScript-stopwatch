let timer = document.getElementById('timer')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')
let intervalID
let hour = 0;
let minuts = 0;
let seconds = 0;

startTimer = () => {
    intervalID = setInterval(function () {
        timer.innerHTML =
            (hour ? hour + ':' : '') +
            (minuts < 10 ? '0' + minuts : minuts) +
            ':' +
            (seconds < 10 ? '0' + seconds : seconds);

        seconds++;

        if(seconds == 60){
            minuts++
            seconds = 0
        }

        if(minuts == 60){
            hour++
            minuts = 0
        }

    }, 1000)
}

stopTimer = () => {
    clearInterval(intervalID);
    let timerStopted = document.getElementById("timer").innerHTML
    timer.innerHTML = timerStopted

}

resetTimer = () => {
    clearInterval(intervalID);
    timer.innerHTML = '0' + (minuts = 0) + ':0' + (seconds = 0); 
}
