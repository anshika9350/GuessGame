/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number';
console.log(document.querySelector('.guess').value = 12); //i/p holds value */

let score = 20;
let highscore=0;
const secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.check').addEventListener('click',function(){
        const guess =Number(document.querySelector('.guess').value);
        
        if(score>1){
        if(!guess){
            document.querySelector('.message').textContent='No Number!'
        }
        
        else if(guess===secretNumber) {
            document.querySelector('.message').textContent='Correct Number!';
            document.querySelector('body').style.backgroundColor='#3eac47';
            document.querySelector('.number').style.width='30rem';
            if(score>highscore){
                highscore =score;
                document.querySelector('.highscore').textContent=highscore}

        }else if (guess<secretNumber){
            document.querySelector('.message').textContent='Too low!';
            score--;
            document.querySelector('.score').textContent=score

        }else if(guess>secretNumber){
            document.querySelector('.message').textContent='Too high!';
            score--;
            document.querySelector('.score').textContent=score
        }}
        else{
            document.querySelector('.message').textContent='You Lose.';
            document.querySelector('.score').textContent='0'
        }
        

    })
    document .querySelector('.again').addEventListener('click',function(){
        score=20;
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.message').textContent='Start guessing...';
        document.querySelector('.guess').value='';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem'


    })