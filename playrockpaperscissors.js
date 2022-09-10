
rpsListing = ["Rock","Paper","Scissors"];        //rock paper scissors listing

function getComputer(){

    let indexOf_rpsListing = Math.floor(Math.random()*3);
    return rpsListing[indexOf_rpsListing];
}

function play(){

    computerSelection = getComputer();
    playerSelection = checkifValid();
    
    console.log(computerSelection);
    console.log(playerSelection);
}

function checkifValid(){
  
  /*Player enters his move in checkifValid function
    If he enters valid move 
    function returns the move if valid
    else ask the player to enter his move again*/
  
  let flag = false; //to break the while loop
  let inputMove;

  while(flag===false){
        
    inputMove= prompt("Enter a valid move");
    let capitalise_inputMove = inputMove.toUpperCase();

    if(capitalise_inputMove==="ROCK"||capitalise_inputMove==="PAPER"||capitalise_inputMove==="SCISSORS"){  //capitalizing input and then comparing for valid move
       flag = true;
    }
  }
  return inputMove;
}

play(); //calling play function