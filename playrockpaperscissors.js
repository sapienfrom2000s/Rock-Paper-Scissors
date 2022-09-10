
rpsListing = ["Rock","Paper","Scissors"];        //rock paper scissors listing

function computerMove(){

    let indexOf_rpsListing = Math.floor(Math.random()*3);
    console.log(rpsListing[indexOf_rpsListing]);
}

for(let i=0;i<10;i++)
  computerMove();