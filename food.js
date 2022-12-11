
import {onSnake} from './snake.js'

let food = {x:20, y:20}

export function update(){
    if (onSnake(food)){
        (alert('You won!'))
    }
}
    
    export function draw(gameBoard) {
        //luodaan maali tai "ruoka"
        const foodElement = document.createElement('div')
         foodElement.style.gridRowStart = food.y
         foodElement.style.gridColumnStart = food.x
         foodElement.classList.add('food') //tällä yhdistetään css
          gameBoard.appendChild(foodElement)
      }