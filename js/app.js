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


$("button").on("click", ()=>{
    $('.mole').hide();
    console.log("Start the game");
    setTimer();
  });

  let time = 20;
  
  const setTimer = () => {
  const timer = setInterval(()=>{
      console.log(time);
      time--;
      if(time === 0){
          clearInterval(timer);
      } updateTime();
  }, 1000)
}

const updateTime = () => {
    const $timer = $("#timer");
    $timer.text(`timer: ${time}s`);
  }

