// console.log('Hey Kenny');

// ANCHOR Step One
// Click start Button 
// - add an event listener to click on button and function for timer to start
// - function for timer to stop and to start again for round 2 and 3 with less time
// images disappear when the time starts

// ANCHOR Step Two
// function? for images to begin sliding up/down randomly 
// appear and disappear slower for round 1 
// appear and disappear a little faster for round 2
// appear and disappear faster for round 3

// ANCHOR Step Three
// Player clicks on appearing images
// function -- if player clicks on student, add a point
// function -- if player clicks on instructor, minus a point

// ANCHOR Step Four
// At the end of round 3, display score



// Begin button to start the game and make images disappear

$("button").on("click", ()=>{
    $('.mole').hide();
    console.log("Start the game");
    setUpRound();
    moleFade();
  });
/*
  $("bothButtons").on("click", () => {

  } */

// Set timer and round

let time = 20;
let round = 1;
let moleInterval;
  
  
const setTimer = () => {
    const timer = setInterval(()=>{
        console.log(time);
        time--;
        if(time === 0){
            clearInterval(timer);
            $(`body`).append(`
            <div class="roundAlert">
                <h1>Round ${round +1}</h1>
            </div>`);
            setTimeout(() => {
                $(`.roundAlert`).hide();
            }, 1000);
            round++;
            
            setUpRound();
        } 
        updateTime();
        updateRound();
    }, 1000)
}

const updateTime = () => {
    const $timer = $("#timer");
    $timer.text(`Timer: ${time}s`);
  }
  let fadeOutSpeed = 5000;

  const setUpRound = () => {
      if(round < 4) {setTimer()};
      if(round === 1){   
          fadeOutSpeed = 5000;
          time = 20;
           
      } else if(round === 2){
          fadeOutSpeed = 3000;
        time = 15;
      } else if(round === 3){
          fadeOutSpeed = 1000;
          time = 10;
      } else {
        $(`.mole`).fadeOut();
        clearInterval(moleInterval);
        console.log('Game over');
      }
  }

  const updateRound = () => {
      const $round = $("#round");
      $round.text(`Round: ${round}`);
  }


// Have images randomly fade in and randomly fade out
  
const moleFade = () => {
   moleInterval = setInterval(() => {
        const mole = $('.mole').eq(Math.floor(Math.random()* $('.mole').length))
        const person = faces[Math.floor(Math.random() * faces.length)]
        mole.attr('src',person.img)
        mole.addClass(person.type)
        mole.fadeIn('slow', function(){
            setTimeout(() => {
                mole.fadeOut();
                mole.removeClass(person.type);
            }, Math.floor(Math.random()* fadeOutSpeed)); 
    }) 
   }, 1000);
}



// Score will add points if click on student, score will minus points is click on instructor
// class=student class=instructor

let score = 0;

$(".mole").on("click", function(e) {
    console.log(e)
    for (let i = 0; i < e.target.classList.length; i++) {
        if (e.target.classList[i] === "student") {
            score ++;
            console.log('hitStudent', score);
            $('h2').text(`Total Score: ${score}`);
        } else if (e.target.classList[i] === "instructor") {
            score--;
            console.log('hitInstructor', score);
            $('h2').text(`Total Score: ${score}`);
        }
    }
    $(this).siblings(`.logoImage`).toggle();
    setTimeout( () => {
        $(this).siblings(`.logoImage`).toggle()
    }, 500);
})


// add image to every image == class name
// style class ^^display: none
// click event to click a mole, toggle that class off so image is no longer displayed none, .5 second retoggle class

// random random random

let faces = [{img:"../assets/images/Kenny.png", type: 'instructor'}, {img:"../assets/images/Lindsey.png", type: 'student'}, {img: "../assets/images/Carson.png", type: 'student'}, {img: "../assets/images/Ali.png", type: 'student'}, {img: "../assets/images/Dalton.png", type: 'instructor'}, {img: "../assets/images/Matt.png", type: 'instructor'}, 
{img: "../assets/images/Hermin.png", type: 'student'},{img: "../assets/images/Brent.png", type: 'student'}, {img: "../assets/images/Jeff.png", type:'student'} ];

