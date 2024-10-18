"use strict";

const againBtn = document.querySelector(".try-again-btn");
let resultShow = document.querySelector(".result-show");
const checkBtn = document.querySelector(".check-btn");
const wrapper = document.querySelector(".wrapper");
let statHigh = document.querySelector(".stat-high");
let statCong = document.querySelector(".stat-cong");
let statScore = document.querySelector(".stat-score");
let statHighscore = document.querySelector(".stat-highscore");
const headerGuess = document.querySelector(".guess-header");
let vHighscore =0; 
let vScore = 20;
let randomNumber;
let flag = false;
let  inputText;
let inputTextOnly = document.getElementById("input-num");

// read the input from the text box

function randomNumberGenerator(){
    randomNumber = Math.trunc(Math.random() * (20-1) + 1);
}

randomNumberGenerator();

checkBtn.addEventListener("click", function(){
    console.log("pressed the button");
    console.log(randomNumber);
    inputText = Number(document.getElementById("input-num").value);
   
    // check the random number with input number
    // for(let i=0 ; (i>0 && flag ===false)  ;i++ ){

    if(flag == false){
    if(randomNumber === inputText)
    {
        statHigh.textContent= "Matched 🍾..";
        
        statCong.textContent = "Congrats🎉🎉!!";
        resultShow.textContent = randomNumber;
        wrapper.style.background = "#44013b";
        headerGuess.textContent = "You Won 👑 !!!"
        flag = true;
        checkBtn.disabled = true;
        inputTextOnly.disabled = true;
        againBtn.classList.toggle("btn-anim");
        if(vHighscore <= vScore)
        {
            vHighscore = vScore;
            statHighscore.textContent = vHighscore;
        }
        else
        {
            console.log("highscore");
        }
        

    }

    else if(randomNumber > inputText){
        console.log("Number is too low");
        statHigh.textContent= "Too Low";
        vScore--;
        statScore.textContent = vScore;
        statCong.textContent = "Keep trying..."
    }

    else{
        console.log("NUmber is too high");
        statHigh.textContent = "Too High";
        vScore--;
        statScore.textContent = vScore;
        statCong.textContent = "Keep trying..."
    }
    console.log(flag);
}

else{
    console.log("You already won");
}

})

againBtn.addEventListener("click", function(){
    randomNumberGenerator();
    againBtn.classList.toggle("btn-anim");
    checkBtn.disabled = false;
    inputTextOnly.disabled = false;
    flag = false;
    headerGuess.textContent = "Guess My Number !";
    statHigh.textContent= "Stats ..";
    vScore=20;
    statScore.textContent = vScore;
    // vHighscore = vScore;
    // statHighscore.textContent = vHighscore;
    statCong.textContent = "Let's Play...!!!";
    resultShow.textContent = "?";
    wrapper.style.background = "#131010";
})




    
