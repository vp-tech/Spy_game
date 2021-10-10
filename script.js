
//place's bank
const somePlace = ['Маяк', 'Больница', 'Дом пристарелых', 'Танк', 'Театр', 'Военная база',
'Церковь', 'Армия крестоносцев', 'Аукцион',  'Палатка', 'Подводная лодка',
'Школа', 'Лагерь', 'Концерт', 'Супермаркет', 'Свалка', 'Орбит. станция', 'Остров', 'Стройка', 
'Пиратский корабль', 'Баня', 'Банк', 'Подвал', 'Поле чудес', 'Фитнес центр', 'Бункер', 'Клуб', 'Аэропорт',
'Столовая', 'Джунгли', 'Автобус', 'Шпион', 'Полиц. участок', 'Гей Клуб', 'Корпоратив', 
'Роддом', 'Пляж', 'Аквапарк', 'Парикмахерская', 'SPA-салон', 'Тюрьма', 'Стриптиз бар', 
'Электростанция', 'Автобус', 'Аптека', 'У гадалки', 'Holywood', 'Библиотека', 'На ринге', 'Крыша', 
'Детский сад', 'Ад', 'Рай', 'База террористов', 'Магазин оружия', 'Ограбление соседа', 'Псарня', 
'Приют животных', 'Зоопарк', 'Цирк', 'Музей', 'Похороны', 'Самолет', 'Посольство', 'Партизанский отряд',
'Ресторан', 'Овощебаза', 'Полярная станция', 'Университет', 'Отель', 'Океанский лайнер', 'Казино',
'Пассажирский поезд', 'Шатл'
]

var click = 0
var roleArr = []

//Delite Played Place
function notRepeat(index){
    somePlace.splice(index, 1)
}

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

function showUpperTable(i){
    if (i === true){
        document.getElementById('gameScreen-block-second').style.display='none'
        document.getElementById('gameScreen-block').style.display='flex'
    } else{
        document.getElementById('gameScreen-block-second').style.display='flex'
        document.getElementById('gameScreen-block').style.display='none'
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
    showTimer(false)
    showFinal(true)
    
}

//start from 1st person
function init_step(roleArr){
    document.getElementById('gameScreen-player').innerHTML=click+1
            document.getElementById('gameScreen-role').innerHTML=roleArr[click]
            click++
            //show upper table
            showUpperTable(true)
}

//numPlayer - players 
function choose(numPlayer){
    //initialize
    const placeIndex = getRandomInt(somePlace.length)

    const secretPlaceName = somePlace[placeIndex]
    const spyNum = getRandomInt(numPlayer)
    const roleArr = []

    //Delite Played Place
    notRepeat(placeIndex)
    

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
    document.querySelector('#gameScreen-block').onclick = function (){
        showUpperTable(false)
    }
    
    document.querySelector('#gameScreen-block-second').onclick = function (){
        if (click < numPlayer){
            document.getElementById('gameScreen-player').innerHTML=click+1
            document.getElementById('gameScreen-role').innerHTML=roleArr[click]
            click++
            showUpperTable(true)
        }
        else{
            showTimerScreen()
            
            var duration = 60 * (numPlayer+1),
            display = document.querySelector('#time')
            if (numPlayer+1 < 10){
                mins = '0'+(numPlayer+1)
            } else{
                mins = numPlayer+1
            }
            document.getElementById('time').innerHTML=mins+':00'
            document.getElementById('timerScreen-startButton').style.display='flex'
            document.getElementById('timerScreen-stopButton').style.display='none'
            //start timer
            startTimer(duration, display)
        }
    }
}



// timer
function startTimer(duration, display) {
    document.querySelector('#timerScreen-startButton').onclick = function(){
        document.getElementById('timerScreen-startButton').style.display='none'
        document.getElementById('timerScreen-stopButton').style.display='flex'
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

    
}

function stopTimeOut(){
    showFinalScreen()
    clearTimeout(myVar)
}