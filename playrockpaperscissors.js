
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
    let capitalise_inputMove = inputMove.toUpperCase();           //capitalizing input and then comparing for valid move

    if(capitalise_inputMove==="ROCK"||capitalise_inputMove==="PAPER"||capitalise_inputMove==="SCISSORS"){  
       flag = true;
    }
  }
  inputMove = inputMove.toLowerCase(); //lower the case of word, now only first letter capitalization is left
  let capitalisefirstLetter = (inputMove.charAt(0)).toUpperCase(); //capitalised the first letter of move
  
  inputMove = capitalisefirstLetter + inputMove.substring(1,inputMove.length); //concatenate first and rest of the part of string

  return inputMove;
}

play(); //calling play function