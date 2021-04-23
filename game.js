let startd=false;
var level =0;
var clickCounter=0;
var result=0;
let gamePattern=[];
let userClickedPattern=[];
var buttonColours =["red", "blue", "green", "yellow"];

//     --------------------------------             game start here by pressing any --------------------------------
// $(document).on('keypress',function (e){
//  if(startd==false){
//    startGame();
//   }
//
// });

$("#white").click(function(){
  if(startd==false){
    startGame();
   }
});



function startGame()
{
  level+=1;
  $("#level-title").text("Level "+level);
  // let sa=0;
  // while (sa < level) {
  // setTimeout(()=>nextSequence(),1000);
  //   sa++;
  // }

  var refreshIntervalId= setInterval(()=>nextSequence(),1000);
  setTimeout(()=> clearInterval(refreshIntervalId),level*1000)


}


function nextSequence()
{

  var randomNumber=Math.floor(Math.random()*4);
  let randomChosenColour= buttonColours[randomNumber]
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  startd=true;
  playSound(randomChosenColour);
}


  $(".btn").click(function()
  {
    clickCounter+=1;
    var userChosenColour =this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
     animatePress(userChosenColour);
    // $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // for (var i = 0; i < clickCounter; i++) {
    //   if (gamePattern[i]==userClickedPattern[i])
    //   {
    //     result=1;
    //     continue;
    //   }
    //   else {
    //     var audio = new Audio("sounds/wrong.mp3");
    //     audio.play();
    //     $("body").addClass("game-over");
    //     setTimeout(()=>$("body").removeClass("game-over"),200)
    //     startOver();
    //
    //   }
    // }
    // if(clickCounter==4 && result==1)
    // {
    // $("#level-title").text("Level "+level+" Completed");
    //   gamePattern=[];
    //   userClickedPattern=[];
    //   clickCounter=0;
    //
    //
    //  setTimeout(()=> startGame(),1000);
    //
    // }

checkAns();

  });


function checkAns()
{
  for (var i = 0; i < clickCounter; i++) {
    if( gamePattern[i]== userClickedPattern[i])
    {
    //  alert('i ='+i+'clickCounter ='+clickCounter );
    //  alert(gamePattern[i]+" "+userClickedPattern[i]);
      result=1;
      //continue;
    }
    else {
//    alert('i ='+i+'clickCounter ='+clickCounter );
    //  alert(gamePattern[i]+" "+userClickedPattern[i]);
      result=0
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over");
      setTimeout(()=>$("body").removeClass("game-over"),200)
      startOver();
    }
  }

  if (result==1 && level==1)
  {
//    alert('last if level 1');

    $("#level-title").text("Level "+level+" Completed");
      gamePattern=[];
      userClickedPattern=[];
      clickCounter=0;
     setTimeout(()=> startGame(),1000);
  }
  else if (result==1 &&  clickCounter==level) {

  //  alert('last if level more than1');

    $("#level-title").text("Level "+level+" Completed");
      gamePattern=[];
      userClickedPattern=[];
      clickCounter=0;
     setTimeout(()=> startGame(),1000);
  }
  else {

  }
}



function playSound(name){
  var audio= new Audio ("sounds/"+name+".mp3");
  audio.play();
}

function startOver()
{
$("#level-title").text("Game Over, Completed "+ (level-1) +" Levels");
  level=0;
  result=0;
  startd=false;
  gamePattern=[];
  userClickedPattern=[];
  clickCounter=0;
}


function animatePress(currentColour)
{
    //$("#"+currentColour).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#"+currentColour).addClass("pressed");
    setInterval(function () {
    $("#"+currentColour).removeClass("pressed");
    }, 100);
}
