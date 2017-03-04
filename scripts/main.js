var time;
var hp;
var lives = 10;
var st = 2;
var res;
var respanel;


function main() {
    time = document.getElementById('time');
    hp = document.getElementById('hp');
    res = document.getElementById('result');
    respanel = document.getElementById('result-panel');
}
function startGame() {
    time.innerText = '60';
    hp.innerHTML = '10';
    document.getElementById('start-game-btn').style.display = 'none';
}

function timer() {
    st--;
    time.innerText = st;
    console.log(st);
    if (st == 0) {
        clearInterval(myTimer);
        if (lives > 0) {
            console.log('if');
            respanel.style.display = 'block';
            res.innerHTML = 'YOU WON';
            res.style.color = 'green';
            document.getElementById('playagainbtn').style.display = 'inline-block';
        }
    }
}

function update() {
    lives = 10;
    hp.innerHTML = '10';
    st = 60;
    time.innerText = '60';
    respanel.style.display = 'none';
}