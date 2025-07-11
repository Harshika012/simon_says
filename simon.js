let gameSeq=[];
let userSeq=[];

let btns= ["yellow", "red", "purple", "green"];
let started= false;
let level=0;
let previousScore=0;

let h2= document.querySelector('h2');

document.addEventListener("keypress", function(){
    if(started== false){
        console.log("game is started");
        started= true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;

let randIdx= Math.floor(Math.random() *4);
let randColor= btns[randIdx];
let randbtn= document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randbtn);
}
function checkAns(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        previousScore= Math.max(level, previousScore);
        h2.innerHTML=`Game over! Your score was <b> ${level}</b> <br>Press any key to restart.<br> Highest score is ${previousScore}`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        }, 150);
        reset()
    }
}

function btnPress(){
    let btn= this;
    userFlash(btn);
    
    let userColor= btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns= document.querySelectorAll('.btn');

for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
} 

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}