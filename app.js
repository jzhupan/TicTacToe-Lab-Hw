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


let scoreBoard = document.querySelectorAll('.score-row')
let gameBoardCells = document.querySelectorAll('.square')
let restartButton = document.getElementsByClassName('restart')


//console.log(gameBoardCells)

let player = 'x'
let winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
]



// let emptyBoard = ["","","","","","","","","",]




let changePlayer = gameBoardCells.forEach(function(cell) {
    cell.addEventListener('click', function(e) {
        if(!['x','o'].includes(cell.innerHTML)){
            
            cell.innerHTML = player
            player == 'x' ? player = 'o' : player = 'x'
        }
        
    }); 

})




function gameOver() {

}

function gameReset(){

}

function currentPlayersTurn(){

}

function gameScore(){

}

function detectWinner(){

}






// gameBoardCells.forEach(function gameCellsClick(cells, index){
//     cells.addEventListener("click", () => {
//         //console.log(`you clicked ${index}`)
//         cells.innerHTML = `${index}`
//     })

// })


