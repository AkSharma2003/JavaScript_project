let guessNum=parseInt(Math.random()*100+1);
const userGuess=document.querySelector('#num');
console.log(guessNum);
const submit=document.querySelector('#button');
const prguesses=document.querySelector('#result');
const remaining=document.querySelector('#remaining');
const userHelp=document.querySelector('#userHelp');
const newg=document.querySelector('#newgame');

let prprint=[]
let remaining_gusses=10;
let playGame=true

const p=document.createElement('p');

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=userGuess.value;
        console.log(guess);
        vaildGues(guess);
    })
}

function vaildGues (userGuess){
    if(isNaN(userGuess)||userGuess.trim()===''){
        alert("please enter a vailid number!")
    }
    else if(userGuess<0){
        alert("please inter grater than or equal to 1!")
    }
    else if(userGuess<0){
        alert("please inter less than or equal to 100!")
    }
    else{
        remaining_gusses=remaining_gusses-1;
        checkGuess(userGuess)
    }
}

function checkGuess(userGuess){
    if(remaining_gusses<1){
        p.innerHTML = `You are Looser <br>Computer generater number was ${guessNum}`;
        p.style.textAlign = "center";
        messeges(p);   
        displayGuess();
        endgame()
    }
    else if(userGuess<guessNum){
        p.innerHTML=`${userGuess} is smaller than than computer generate number`
        p.style.textAlign = "center";
        messeges(p)
        prprint.push(userGuess);
        displayGuess();
    }
    else if(userGuess>guessNum){
        p.innerHTML=`${userGuess} is greater than than computer generate number`
        p.style.textAlign = "center";
        messeges(p)
        prprint.push(userGuess);
        displayGuess();
    }
    else{
        p.innerHTML = `You are Winner <br> Your number is ${userGuess} and computer number is also ${guessNum}`;
        p.style.textAlign = "center";
        messeges(p);   
        displayGuess();
        endgame()

    }
}

function displayGuess(){
    prguesses.innerHTML=`${prprint}`;
    console.log(prprint)
    remaining.innerHTML=`${remaining_gusses}`;
}

function messeges(msg){
    userHelp.innerHTML=""
    // userHelp.innerHTML=`${msg}`;
    userHelp.appendChild(msg);
}

function endgame(){
    userGuess.value=""  ;
    userGuess.setAttribute('disabled','');
    submit.disabled=true;
    newg.classList.add('button');
    newg.innerHTML=`<h2 id="newGame"> Start New Game </h2>`
    playGame=false;
    newgame();
}

function newgame(){
    const newGameButton=document.querySelector('#newgame')
    newGameButton.addEventListener('click',()=>{
        guessNum=parseInt(Math.random()*100+1);
        prprint=[];
        p.innerHTML="";
        remaining_gusses=10;
        prguesses.innerHTML=`${prprint}`;
        remaining.innerHTML=`${remaining_gusses}`;
        userGuess.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        playGame=true;
        newg.innerHTML='';

    })

}
