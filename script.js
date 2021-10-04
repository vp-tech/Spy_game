
//place's bank
const somePlace = ['Маяк', 'Больница', 'Дом пристарелых', 'Танк', 'Театр', 'Военная база',
    'Церковь', 'Армия крестоносцев', 'Аукцион',  'Палатка', 'Подводная лодка',
    'Школа', 'Лагерь', 'Концерт', 'Супермаркет', 'Свалка', 'Орбит. станция', 'Остров', 'Стройка', 
    'Пиратский корабль', 'Баня', 'Банк', 
]
//5 rem fix
document.getElementById("gameScreen-block").style.marginTop = "5rem"

var click = 0
var roleArr = []

function showStart(i){
    if (i===true){
        var gameStart = document.getElementsByClassName('game-start');
        for (var i = 0; i < gameStart.length; i ++) {
        gameStart[i].style.display = 'flex';
        }
    } else {
        var gameStart = document.getElementsByClassName('game-start');
        for (var i = 0; i < gameStart.length; i ++) {
        gameStart[i].style.display = 'none';
        }
    }
}

function showGame(i){
    if (i === true){
        var GameScreen = document.getElementsByClassName('gameScreen');
        for (var i = 0; i < GameScreen.length; i ++) {
        GameScreen[i].style.display = 'flex';
        }
    } else {
        var GameScreen = document.getElementsByClassName('gameScreen');
        for (var i = 0; i < GameScreen.length; i ++) {
        GameScreen[i].style.display = 'none';
        }
    }
}

function showTimer(i){
    if (i === true){
        var timerScreen = document.getElementsByClassName('timerScreen');
        for (var i = 0; i < timerScreen.length; i ++) {
        timerScreen[i].style.display = 'flex';
        } 
    } else {
        var timerScreen = document.getElementsByClassName('timerScreen');
        for (var i = 0; i < timerScreen.length; i ++) {
        timerScreen[i].style.display = 'none';
        } 
    }
}

function showFinal(i){
    if (i === true){
        var finalScreen = document.getElementsByClassName('finalScreen');
        for (var i = 0; i < finalScreen.length; i ++) {
        finalScreen[i].style.display = 'flex';
        }
    } else {
        var finalScreen = document.getElementsByClassName('finalScreen');
        for (var i = 0; i < finalScreen.length; i ++) {
        finalScreen[i].style.display = 'none';
        }
    }
}
function showNewGameButton(i){
    if (i === true){
        document.getElementById("newGameButton").style.display = 'flex';
    } else {
        document.getElementById("newGameButton").style.display = 'none'
    }
}

//create random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showStartScreen(){
    click = 0 
    showNewGameButton(true)
    showStart(true)
    showGame(false)
    showTimer(false)
    showFinal(false)
}

function showGameScreen(){
    showNewGameButton(true)
    showStart(false)
    showGame(true)
    showTimer(false)
    showFinal(false)
}

function showTimerScreen(){
    showNewGameButton(false)
    showStart(false)
    showGame(false)
    showTimer(true)
    showGame(false)

}

function showFinalScreen(){
    showNewGameButton(true)
    showStart(false)
    showGame(false)

    //спрятать таймер
    showTimer(false)
    
    //показать финал
    showFinal(true)
    
}

//start from 1st person
function init_step(roleArr){
    document.getElementById('gameScreen-player').innerHTML=click+1
            document.getElementById('gameScreen-role').innerHTML=roleArr[click]
            click++
}

//numPlayer - players 
function choose(numPlayer){
    //initialize
    
    const secretPlaceName = somePlace[getRandomInt(somePlace.length)]
    const spyNum = getRandomInt(numPlayer)
    const roleArr = []

    //random insert Spy in game
    for (let i=0; i<numPlayer;i++){
        if (i == spyNum) {
            roleArr.push('Шпион')
        }
        else{
            roleArr.push(secretPlaceName)
        }        
    }
    
    document.getElementById('finalScreen-answer').innerHTML = spyNum+1
    console.log(roleArr);
    showGameScreen()
    init_step(roleArr, numPlayer)
    step(roleArr,numPlayer)
}

//show role
function step(roleArr, numPlayer){
    document.querySelector('#gameScreen-nextButton').onclick = function (){
        if (click < numPlayer){
            document.getElementById('gameScreen-player').innerHTML=click+1
            document.getElementById('gameScreen-role').innerHTML=roleArr[click]
            click++
        }
        else{
            //start timer
            var someTime = 60 * (numPlayer+1),
            display = document.querySelector('#time');
            
            showTimerScreen()
            startTimer(someTime, display);
        }
        
        }
    
}

//move table under role
function move() {
    
    if (document.getElementById("gameScreen-block").style.marginTop == "5rem"){
        document.getElementById("gameScreen-block").style.marginTop = "11.5rem";
    } 
    else {
        document.getElementById("gameScreen-block").style.marginTop = "5rem";
    }
}

// timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myVar = setInterval(function () {
        

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function stopTimeOut(){
    showFinalScreen()
    clearTimeout(myVar)
}