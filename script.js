paperDiv = document.querySelector('#paper-cover')
scissorsDiv = document.querySelector('#scissors-cover')
rockDiv = document.querySelector('#rock-cover')
let playerChoice = 'null'
choices = ['paper','scissors','rock']
let computerChoice = 'null'
mainDiv = document.querySelector('#g-choice')
newDiv = document.querySelector('#picked')
playerChoiceDiv = document.querySelector('#player-choice')
computerChoiceDiv = document.querySelector('#computer-choice')
winLoseDiv = document.querySelector('#win-lose')
p1 = document.querySelector('#p1')
score = document.querySelector('#s-num')
playAgain = document.querySelector('#p-again')
closedd = document.querySelector('#close')
showRules = document.querySelector('#show-rules')
rules = document.querySelector('#rules')

closedd.addEventListener('click', function(){
    showRules.style.display = 'none'
})

rules.addEventListener('click', function(){
    showRules.style.display = 'block'
})

paperDiv.addEventListener('click', function(){
    mainDiv.style.display = 'none'
    newDiv.style.display = 'flex'
    winLoseDiv.style.display = 'none'
    let dd = ""
    dd = `<div class="select-paper-cover"><div class="select-paper"></div></div>`
    playerChoiceDiv.innerHTML = dd
    playerChoice = 'paper'
    whoWon(playerChoice)
})

scissorsDiv.addEventListener('click', function(){
    mainDiv.style.display = 'none'
    newDiv.style.display = 'flex'
    winLoseDiv.style.display = 'none'
    let dd = ""
    dd = `<div class="select-scissors-cover"><div class="select-scissors"></div></div>`
    playerChoiceDiv.innerHTML = dd
    playerChoice = 'scissors'
    whoWon(playerChoice)
})

rockDiv.addEventListener('click', function(){
    mainDiv.style.display = 'none'
    newDiv.style.display = 'flex'
    winLoseDiv.style.display = 'none'
    let dd = ""
    dd = `<div class="select-rock-cover"><div class="select-rock"></div></div>`
    playerChoiceDiv.innerHTML = dd
    playerChoice = 'rock'
    whoWon(playerChoice)
})

function whoWon(thePlayersChoice){
    const random = Math.floor(Math.random() * choices.length)
    computerChoice = choices[random]
    setTimeout(function(){
        if(computerChoice == 'paper'){
            let sd = ""
            sd = `<div class="select-paper-cover"><div class="select-paper"></div></div>`
            computerChoiceDiv.innerHTML = sd
            newDiv.width = "70%"
            newDiv.maxWidth = "500px"
        }
        else if(computerChoice == 'scissors'){
            let sd = ""
            sd = `<div class="select-scissors-cover"><div class="select-scissors"></div></div>`
            computerChoiceDiv.innerHTML = sd
            newDiv.width = "70%"
            newDiv.maxWidth = "500px"
        }
        else if(computerChoice == 'rock'){
            let sd = ""
            sd = `<div class="select-rock-cover"><div class="select-rock"></div></div>`
            computerChoiceDiv.innerHTML = sd
            newDiv.width = "70%"
            newDiv.maxWidth = "500px"
        }
    }, 1000)
    setTimeout(function(){
        if(thePlayersChoice == computerChoice){
            winLoseDiv.style.display = 'block'
            newDiv.style.width = '80%'
            newDiv.style.maxWidth = '680px'
            p1.innerHTML = 'TIE'
            anotherRound()
        }
        else if(thePlayersChoice == 'paper' && computerChoice == 'rock'){
            winLoseDiv.style.display = 'block'
            newDiv.style.width = '80%'
            newDiv.style.maxWidth = '680px'
            p1.innerHTML = 'YOU WIN'
            a = score.innerHTML
            b = parseInt(a)
            b = b+1
            score.innerHTML = b
            anotherRound()
        }
        else if(thePlayersChoice == 'paper' && computerChoice == 'scissors'){
            winLoseDiv.style.display = 'block'
            newDiv.style.width = '80%'
            newDiv.style.maxWidth = '680px'
            p1.innerHTML = 'YOU LOSE'
            score.innerHTML = score.innerHTML - 1
            anotherRound()
        }
        else if(thePlayersChoice == 'scissors' && computerChoice == 'paper'){
            winLoseDiv.style.display = 'block'
            newDiv.style.width = '80%'
            newDiv.style.maxWidth = '680px'
            p1.innerHTML = 'YOU WIN'
            a = score.innerHTML
            b = parseInt(a)
            b = b+1
            score.innerHTML = b
            anotherRound()
        }
        else if(thePlayersChoice == 'scissors' && computerChoice == 'rock'){
            winLoseDiv.style.display = 'block'
            newDiv.style.width = '80%'
            newDiv.style.maxWidth = '680px'
            p1.innerHTML = 'YOU LOSE'
            score.innerHTML = score.innerHTML - 1
            anotherRound()
        }
        else if(thePlayersChoice == 'rock' && computerChoice == 'paper'){
            winLoseDiv.style.display = 'block'
            newDiv.style.width = '80%'
            newDiv.style.maxWidth = '680px'
            p1.innerHTML = 'YOU LOSE'
            score.innerHTML = score.innerHTML - 1
            anotherRound()
        }
        else if(thePlayersChoice == 'rock' && computerChoice == 'scissors'){
            winLoseDiv.style.display = 'block'
            newDiv.style.width = '80%'
            newDiv.style.maxWidth = '680px'
            p1.innerHTML = 'YOU WIN'
            a = score.innerHTML
            b = parseInt(a)
            b = b+1
            score.innerHTML = b
            anotherRound()
        }
    }, 2000)
}

function anotherRound(){
    playAgain.addEventListener('click', function(){
        mainDiv.style.display = 'block'
        newDiv.style.display = 'none'
        newDiv.style.width = '70%'
        newDiv.style.maxWidth = '500px'
        computerChoiceDiv.innerHTML = ""
    })
}
