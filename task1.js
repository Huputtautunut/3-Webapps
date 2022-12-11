import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead} from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'


let lastRenderTime = 0
let gameOver = false


const gameBoard = document.getElementById("game-board")

//game loop
function main(currentTime) {

    if (gameOver) {
        return(alert('You Lost!'))
        
    }

    window.requestAnimationFrame(main)
    //jaetaan 1000 jotta saadan ms muutettua s
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    //jos on kulunut vähemmän kuin puolisekunttia aikaa kun käärme on viiemksi kulkenut
    //sivu yrittää uudelleen alusta
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    console.log('render')

    //tämä liikuttaa matoa
    update()


    //tämä piirtää sen madon
    draw()

  
}

window.requestAnimationFrame(main)


//tämä liikuttaa matoa
function update() {
    updateSnake()
    updateFood()
    checkDeath()
}


//tämä piirtää sen madon
function draw() {
    gameBoard.innerHTML = ''//pyyhitään peräpää pois
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

//jos ajellaan yli reunojen
function checkDeath() {
    gameOver =outsideGrid(getSnakeHead())
}