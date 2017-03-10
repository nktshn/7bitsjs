var time, hp, lives, st, res, respanel, buttons, r, sleeptime, timeOut, end, lvlupper;


function main() {
    time = document.getElementById('time');
    hp = document.getElementById('hp');
    res = document.getElementById('result');
    respanel = document.getElementById('result-panel');
    lives = 10;
    st = 10;
    buttons = document.getElementsByClassName('main-btn');
    sleeptime = 1400;
    end = false;
    lvlupper = 6;
}

function startGame() {
    time.innerText = st;
    hp.innerHTML = lives;
    document.getElementById('start-game-btn').style.display = 'none';
    clicked('b1'); //emulation
}

function youWon() {
    respanel.style.display = 'block';
    res.innerHTML = 'YOU WON';
    res.style.color = 'green';
    document.getElementById('playagainbtn').style.display = 'inline-block';
    hideButtons();
    clearInterval(timeOut);
    clearInterval(lvlTimeOut);
}

function youLose() {
    respanel.style.display = 'block';
    res.innerHTML = 'YOU LOSE';
    res.style.color = 'RED';
    document.getElementById('playagainbtn').style.display = 'inline-block';
    document.getElementById('playagainbtn').innerText = 'TRY AGAIN';
    hideButtons();
    clearInterval(timeOut);
    clearInterval(lvlTimeOut);
}

function timer() {
    st--;
    time.innerText = st;
    if (st == 0) {
        if (lives > 0) {
            youWon();
            clearInterval(myTimer);
        }
    }

}

function update() {
    lives = 10;
    hp.innerHTML = lives;
    st = 60;
    time.innerText = hp;
    respanel.style.display = 'none';
    sleeptime = 1400;
    lvlupper = 6;
}

function miss() {
    lives--;
    if (lives == 0) {
        youLose();
        clearInterval(myTimer);
    }
    hp.innerHTML = lives;
    st = 60;
    time.innerText = st;
    sleeptime = 1400;
    lvlupper = 6;
}

function getRandom() {
    var rn = Math.random() * 4;
    rn = Math.floor(rn);
    return rn;
}

function generate() {
    hideButtons();
    if (lives != 0 && st != 0) {
        r = getRandom();
        buttons[r].style.display = 'table';
    // } else {
    //     end = true;
    }
}

function hideButtons() {
    for (var i = 0; i < 4; i++) {
        buttons[i].style.display = 'none';
    }
}

function clicked(id) {
    document.getElementById(id).style.display = 'none';
    clearInterval(timeOut);
    setTimeout(generate, 100);
    sleep();
    console.log(sleeptime);
}

function sleep() {
    timeOut = setInterval(poof, sleeptime);
}

function poof() {
    miss();
    generate();
    // if(end) {
    //     clearInterval(myTimer);
    //     clearInterval(timeOut);
    //     hideButtons();
    // }
}

function lvlup() {
    if (lvlupper == 0){
        return;
    }
    lvlupper--;
    sleeptime -= 100;
}