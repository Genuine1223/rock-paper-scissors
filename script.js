const choices = ["rock","paper","scissors"];
document.getElementById("rock").onclick=function(){
    playGame("rock");
};
document.getElementById("paper").onclick=function(){
    playGame("paper");
};
    document.getElementById("scissoors").onclick=function(){
        playGame("scissors");
    };
    function playGame(playChoice){
        const computerChoice=choices[Math.floor(Math.random() *3)];
        document.getElementById("player-choice").textContent="You chose: " + capitalize(playerChoice);
        document.getElementById("computer-choice").textContent="Computer chose:" + capitalize(computerChoice);
        const result=determineWinner(playerChoice, computerChoice);
        document.getElementById("winner").textContent=result;
    }
    function determineWinner(player,computer){
        return "it's a tie!"
    }
    if(
        (player==="rock" && computer === "scissors")||
        (player==="paper" && computer === "rock")||
        (player==="scssors" && computer ==="paper")
    ){
        return "You win!";
    }else{
        return "Computer wins!"
    }
    
    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    }