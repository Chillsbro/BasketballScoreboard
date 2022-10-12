let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0
document.getElementById("home-score-btn-1").addEventListener('click', increaseHomeScoreOne);
document.getElementById("home-score-btn-2").addEventListener('click', increaseHomeScoreTwo);
document.getElementById("home-score-btn-3").addEventListener('click', increaseHomeScoreThree);

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0
document.getElementById("guest-score-btn-1").addEventListener('click', increaseGuestScoreOne);
document.getElementById("guest-score-btn-2").addEventListener('click', increaseGuestScoreTwo);
document.getElementById("guest-score-btn-3").addEventListener('click', increaseGuestScoreThree);

let newGameEl =document.getElementById("newgame")
document.getElementById("newgame").addEventListener('click', resetScores);

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
    
}


function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
    
}


function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
    
}
function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
    
}
function increaseGuestScoreTwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
    
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
    
}

function resetScores(){
   homeStoreEl.textContent = 0
   guestStoreEl.textContent= 0 
   homeScore= 0
   guestScore= 0
}
