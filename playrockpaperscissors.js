
// rpsListing = ["Rock","Paper","Scissors"];        //rock paper scissors listing

// function getComputer(){   //Computer chooses its move

//   let indexOf_rpsListing = Math.floor(Math.random()*3);
//   return rpsListing[indexOf_rpsListing];
// }

// function play(){

//   computerSelection = getComputer();
//   playerSelection = checkifValid(); //Player enters his move in checkifValid function and returns player's move
    
//   compareComputermovewithPlayermove(computerSelection,playerSelection); //compares Computer's move with Player's move
// }

// function checkifValid(){
  
//   /*Player enters his move in checkifValid function
//     If he enters valid move 
//     function returns the move if valid
//     else ask the player to enter his move again*/
  
//   let flag = false; //to break the while loop
//   let inputMove;

//   while(flag===false){

//     inputMove= prompt("Enter a valid move");           
//     let capitalise_inputMove = inputMove.toUpperCase();           //capitalizing input and then comparing for valid move

//     if(capitalise_inputMove==="ROCK"||capitalise_inputMove==="PAPER"||capitalise_inputMove==="SCISSORS"){  
//       flag = true;
//     }
//   }
//   inputMove = inputMove.toLowerCase(); //lower the case of word, now only first letter capitalization is left
//   let capitalisefirstLetter = (inputMove.charAt(0)).toUpperCase(); //capitalised the first letter of move
  
//   inputMove = capitalisefirstLetter + inputMove.substring(1,inputMove.length); //concatenate first and rest of the part of string

//   return inputMove;
// }

// function compareComputermovewithPlayermove(computerMove, playerMove){

//   /*Write only winning combination wrt to computer. I mean
//     PaperRock: paper beats rock
//     RockScissors: rock beats scissor
//     ScissorsPaper: 
//     PaperPaper-10
//     RockRock-8
//     ScissorsScissors-16
//     samesam

//     appended computer move with playermove
//     if any of this occurs, Computer wins and "computer move " beats "player move"
//     else, Player wins and "player move " beats "computer move"*/

//     let concat = computerMove + playerMove;
//     let lengthof_concat = concat.length;
    
//     if(lengthof_concat===8||lengthof_concat===10||lengthof_concat===16){
//       declareResult("DRAW",computerMove,playerMove);

//     }   

//     else {

//       switch(concat){

//         case "PaperRock":
//           declareResult("Computer",computerMove,playerMove);
//           break;

//         case "ScissorsPaper":
//           declareResult("Computer",computerMove,playerMove);
//           break;
        
//         case "RockScissors":
//           declareResult("Computer",computerMove,playerMove);
//           break;

//         default:
//           declareResult("Player",computerMove,playerMove);        
//       }
//     }
// }

// function declareResult(Winner, computerMove, playerMove){  
  
//   /*three var required, winner, computermove,playermove*/

//   console.log(`ComputerMove: ${computerMove}\nPlayerMove:${playerMove}`);
//   switch(Winner){

//     case "DRAW":
//       console.log(`Its a ${Winner}`);
//       break;

//     case "Computer":
//       console.log(`${Winner} wins, ${computerMove} beats ${playerMove}`);
//       break;

//     default:
//       console.log(`${Winner} wins, ${playerMove} beats ${computerMove}`);
//       break;
//   }
// }

// for(let i=1;i<=5;i++)  //to play the 5 rounds of game
//   play(); //calling play function

//activate click on images

const image = document.getElementsByClassName(".p, .rock");
console.log(image);