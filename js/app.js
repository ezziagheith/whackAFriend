// console.log('Hey Kenny');

// ANCHOR Add a listener to the begin button

$("button").on('click', ()=>{
console.log("Start Whacking!");
setUpRound();
setTimer();

})

// ANCHOR Set up a timer and a round.

let time = 20;
let round = 1;

const setTimer = () => {
    const timer = setInterval(() => {
        console.log(time);
        time --;
        if(time===0){
            clearInterval(timer);
            round++;
            setUpRound();
            setTimer();
        }
        updateTime();
    }, 1000)
}

const updateTime = () => {
    const $timer = $('#timer');
    $timer.text(`Timer: ${time}s`)
}

const setUpRound = () => {
    $(".pics").empty();
    $("#round").text(`Round: ${round}`);
}

const holes = $('.firstHoles')


function randomTime(min, max) {
    return Math.random() * (max-min) + min;
}

function randomHole(holes){
    console.log(holes.length)
}
