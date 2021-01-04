let moleHolder = document.querySelectorAll(".mole-holder")[0];

let hillsToCreate = 6; //how many mole hills do you want to create?
let i = 0;	//just a counter for the mole hills while loop
let x = 0; //holder for the random mole hill generator
let daScore = 0; //total score holder
let timer = 10000; //seconds * 1000;
let moleSpeed  = 600; //mole popup speed

//create the mole hills
while (i <= hillsToCreate) {
  moleHolder.innerHTML += "<div><img class='moleimage' src='./mole-hill.jpeg'/></div>";
  i++;
}

//for each mole hill created
document.querySelectorAll(".moleimage").forEach(function (thisMoleHill) {

    thisMoleHill.addEventListener("click", function() {

        //when this is clicked and the image source contains mole-appear
        if (this.src.includes("mole-appear.jpg")) {
            daScore = daScore + 1;
            document.querySelectorAll(".daScoreHolder")[0].innerHTML = daScore;
        }

    });
    
});

//the start button click event
document.querySelectorAll(".start")[0].addEventListener("click", function() {

    //LETS START!

    //THIS STARTS THE GAME (INTERVAL LOOP)

    //this is an interval that generate the mole popup
    let moleLoop = setInterval(() => {

        //generate random mole hill based on number of hills created
        x = Math.floor(Math.random() * hillsToCreate);

        //0.1 of a second before each interval fires, set all the mole hills back to default
        setTimeout(() => {

            //for each mole hill created
            document.querySelectorAll(".moleimage").forEach(function (thisMoleHill) { 
                thisMoleHill.src = "./mole-hill.jpeg"; 
            });

        }, moleSpeed - 100); //molespeed - 0.1 seconds (just before)

        //select the hill using it's index 
        document.querySelectorAll(".moleimage")[x].src = "./mole-appear.jpg";


    }, moleSpeed);

    //THIS STOPS THE GAME (TIMEOUT COUNTDOWN)

    //start the countdown
    setTimeout(() => {

        //do stuff when the countdown has finished

        //stop the interval loop
        clearInterval(moleLoop);

        //set all the images back to default
        document.querySelectorAll(".moleimage").forEach(function (thisMoleHill) { 
            thisMoleHill.src = "./mole-hill.jpeg"; 
        });

        //show final score
        var r = confirm("Your final score is: " + daScore + ". Play again?");

        if (r == true) {
          //play again
          location.reload();
        } else {
          //don't play again
          alert('ooooooooh');
        }

    }, timer);

});
