/*
//JS code goes here!
//remember to Whiteboard and Pseduocode before diving into the actual code!

//getting DOM elements
    making a functional gameboard:
        addeventlistener, loops, else if statements, functions
        be able to place O and X on the board per click depending the user
    creating score board: wins, loses, and ties
        array push and display score
    restart the board
        only making the square boxes reset so the score stays unless page is refreshed

//win conditions
    if one user scores either horizontal, vertical and diagonal 

//game logic
    2 players total
    assign players to O and X each
    1 turn per player
    the one who is able to score horizontal, vertical or diagonal symbols wins


//what else will you need? 
    bonus: having users being able to choose who to be O or X
*/


let scoreBoard = document.getElementsByClassName('score-row')
let gameBoardCells = document.querySelectorAll('.square')
//getElementByClassName creates an array since classes are not unique unlike Ids, addEventListener 
//does not work on arrays so you must specify the index if you are calling element by class name 
let restartButton = document.getElementsByClassName('restart')[0]
let isGameOver = false
let player = 'x'
let winningConditionsList = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
]

//console.log(restartButton)
//console.log(gameBoardCells)
//console.log(scoreBoard)


let changePlayer = gameBoardCells.forEach(function(cell) {
    cell.addEventListener('click', function(e) {
        if(!['x','o'].includes(cell.innerHTML)){
            
            cell.innerHTML = player
            player == 'x' ? player = 'o' : player = 'x'

            if(determineWinner()){
                console.log(`${player} is the winner`)
                isGameOver = true
            }
        }
        
    }); 

})


restartButton.addEventListener('click', (gameBoardCells, clearCells)=> {
    //console.log('reset button working')
    gameBoardCells = document.querySelectorAll('.square')
    //console.log(gameBoardCells)
    for(let i = 0; i < gameBoardCells.length; i++){
        clearCells = gameBoardCells[i].innerHTML = ''
    }
    
})


//console.log(winningConditionsList)


function determineWinner(){
    let square0 = document.getElementById('square0')
    let square1 = document.getElementById('square1')
    let square2 = document.getElementById('square2')
    let square3 = document.getElementById('square3')
    let square4 = document.getElementById('square4')
    let square5 = document.getElementById('square5')
    let square6 = document.getElementById('square6')
    let square7 = document.getElementById('square7')
    let square8 = document.getElementById('square8')

    if(square0.value === square1.value === square2.value){
        console.log('game is over')
        return true
    } else if(square3.value === square4.value === square5.value){
        console.log('game is over')
        return true
    } else if(square6.value === square7.value === square8.value){
        console.log('game is over')
        return true
    } else if(square0.value === square3.value === square6.value){
        console.log('game is over')
        return true
    } else if(square1.value === square4.value === square7.value){
        console.log('game is over')
        return true
    } else if(square2.value === square5.value === square8.value){
        console.log('game is over')
        return true
    } else if(square6.value === square7.value === square8.value){
        console.log('game is over')
        return true
    } else if(square0.value === square4.value === square8.value){
        console.log('game is over')
        return true
    }
}



// function gameScore(){

// }



