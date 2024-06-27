let secreatNumber=Math.trunc(Math.random()*20+1);
console.log(secreatNumber);
let score=20;
let Highscore=0;
document.getElementById("checkBtn").addEventListener('click',()=>{

const guessNo=Number(document.getElementById('guess').value);
console.log(guessNo);
//if there is no number display//
if(!guessNo){
    document.querySelector('.message').textContent="No number!";
}
//when the player win logic//
else if( guessNo===secreatNumber){
    document.querySelector('.message').textContent="Correct number";
document.querySelector('.number').textContent=secreatNumber;
document.querySelector('body').style.backgroundColor="green";
if(score> Highscore){
    Highscore=score;
    document.getElementById('score').textContent=Highscore;
}
    
}
else if(guessNo>secreatNumber){
    if(score>1){
    document.querySelector('.message').textContent="Too High!";
    score= score-1;
    document.getElementById('scores').textContent=score;
    } else{
        document.querySelector('.message').textContent="Game over";
        document.getElementById('scores').textContent=0;
    }
}
else if(guessNo<secreatNumber){
    if(score>1){
    document.querySelector('.message').textContent="Too Low!";
    score= score-1;
    document.getElementById('scores').textContent=score;
    }
    else{
        document.querySelector('.message').textContent="Game over";
        document.getElementById('scores').textContent=0;
        document.querySelector('.body').style.backgroundColor="red";
       
    }
}

})
//for again button
document.querySelector('.btn').addEventListener('click',()=>{
    score=20;
    let secreatNumber=Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent="Start guessing...";
    document.getElementById('scores').textContent=score;
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('.number').textContent='?';
    document.getElementById('guess').value="";
    document.getElementById('score').textContent=0;
})
