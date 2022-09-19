
  let computerScore = 0,
    playerScore = 0; //I want to get rid of these global variables they look awful.



function getComputerMove(){
  
    rpsListing = ["Rock","Paper","Scissors"];        //rock paper scissors listing
    let indexOf_rpsListing = Math.floor(Math.random()*3);
    return rpsListing[indexOf_rpsListing];
}


function play(computerMove, playerMove){

  /*Write only winning combination wrt to computer. I mean
    PaperRock: paper beats rock
    RockScissors: rock beats scissor
    ScissorsPaper: 
    PaperPaper-10
    RockRock-8
    ScissorsScissors-16
    samesam

    appended computer move with playermove
    if any of this occurs, Computer wins and "computer move " beats "player move"
    else, Player wins and "player move " beats "computer move"*/

    displayChosenCharacters(computerMove,playerMove);

    let concat = computerMove + playerMove;
    let lengthof_concat = concat.length;
    
    if(lengthof_concat===8||lengthof_concat===10||lengthof_concat===16){
      declareResult("Draw",computerMove,playerMove);

    }

    else {

      switch(concat){

        case "PaperRock":
          declareResult("Computer");
          break;

        case "ScissorsPaper":
          declareResult("Computer");
          break;
        
        case "RockScissors":
          declareResult("Computer");
          break;

        default:
          declareResult("Player");        
      }
    }
}

function declareResult(Winner){
  
  /*three var required, winner, computermove,playermove*/

  let grabWinnerBanner = document.querySelector(".message");
  let grabScoreBanner = document.querySelector(".score");

  switch(Winner){

    case "Draw":
      grabWinnerBanner.innerHTML = "Draw";
      break;

    case "Computer":
      computerScore++;      
      grabWinnerBanner.innerHTML = `${Winner} wins this round`;
      grabScoreBanner.innerHTML = `${playerScore}-${computerScore}`;
      checkForWin("Computer");
      break;

    default:
      playerScore++;
      grabWinnerBanner.innerHTML = `${Winner} wins this round`;
      grabScoreBanner.innerHTML = `${playerScore} - ${computerScore}`;
      checkForWin("Player");
      break;
  }
}

function checkForWin(winner){
  if(computerScore===5||playerScore==5){
    let grabMessage = document.querySelector(".message");
    grabMessage.innerHTML = `${winner} wins the game`;
    displayPlayAgain();
    disableButtons();
  }
}

function displayPlayAgain(){
  let grabButton = document.querySelector(".play-again");
  grabButton.style.visibility = "visible";
  grabButton.addEventListener('click',function(){window.location.reload();});
}

function disableButtons(){
  let disableInputButtons = document.querySelector(".select-buttons");
  // console.log(alpha.childNodes);
  for(let i=1;i<=5; i++){
    disableInputButtons.childNodes[i].disabled = 'true';
  }
}

function displayChosenCharacters(computerMove,playerMove){

  playerMove = playerMove.toLowerCase();
  computerMove = computerMove.toLowerCase();

  let playerFrame = document.querySelector(".player");
  playerFrame.src = `images/${playerMove}.png`;

  let computerFrame = document.querySelector(".computer");
  computerFrame.src = `images/${computerMove}.png`;
}

 

/*Make RPS clickable*/

function chooseCharacterButtons(){

  let rock = document.querySelector(".rock");  
  let paper = document.querySelector(".paper");  
  let scissors = document.querySelector(".scissors");
  
  rock.addEventListener("click",function(){play(getComputerMove(), "Rock")});
  paper.addEventListener("click",function(){play(getComputerMove(), "Paper")});
  scissors.addEventListener("click",function(){play(getComputerMove(), "Scissors")});

}

chooseCharacterButtons();
// console.log(grabButton.style);

