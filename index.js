// Buttons 
let startHome = 0
let startGuest = 0
let home1= document.getElementById('home-1')
let home2= document.getElementById('home-2')
let home3= document.getElementById('home-3')
let guest1= document.getElementById('guest-1')
let guest2= document.getElementById('guest-2')
let guest3= document.getElementById('guest-3')

// Score Divs
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeScore.textContent = startHome
guestScore.textContent = startGuest
// Functions

function homeScore1(){
    startHome += 1
    homeScore.textContent = startHome
    
}
function homeScore2(){
    startHome += 2
    homeScore.textContent = startHome
    
}
function homeScore3(){
    startHome += 3
    homeScore.textContent = startHome
    
}

function guestScore1(){
    startGuest += 1
    guestScore.textContent = startGuest
}

function guestScore2(){
    startGuest += 2
    guestScore.textContent = startGuest
}

function guestScore3(){
    startGuest += 3
    guestScore.textContent = startGuest
}

function resetScore(){
    guestScore.textContent = 0
    homeScore.textContent = 0
}
    

