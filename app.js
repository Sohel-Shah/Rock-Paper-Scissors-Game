let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

choices.forEach((choice) => {                                   //choice function
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame=(userChoice)=>{                                 // Game main logic
    console.log("User choice = ",userChoice);
    // generate computer choice
    const compChoice = genComChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){                                    
        drawGame();
    }else{
        let userWin=true;                                              
        if(userChoice==="rock"){
            //scissors, paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock, paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){                                                                //user winner 
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;                                                                //computer winner
        compScorePara.innerText=compScore;
        console.log("You Lose");
        msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const genComChoice= () =>{                                                      //computer random choice function
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3 );
    return options[randomIdx];
};

const drawGame = () => {                                                        //draw function
    console.log("Draw was Game--------");
    msg.innerText="Game Draw. Play again! "
};







