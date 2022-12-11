import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 3 //madon nopeus
const snakeBody = [{ x: 1, y: 1 }] //madon aloitussijainti

export function update(){

const inputDirection=getInputDirection()
//for loop madon liikkumiseen
for(let i=snakeBody.length -2; i>=0; i--){
    snakeBody[i+1]={...snakeBody[i]}
}

snakeBody[0].x+=inputDirection.x
snakeBody[0].y+=inputDirection.y
}


export function draw(gameBoard) {
    snakeBody.forEach(segment => {

        //luodaan mato tiettyyn ruutuun (x=1, y=1)
      const snakeElement = document.createElement('div')
      snakeElement.style.gridRowStart = segment.y
      snakeElement.style.gridColumnStart = segment.x
      snakeElement.classList.add('snake') //tällä yhdistetään css
      gameBoard.appendChild(snakeElement)
    })
  }

  export function onSnake(position){
      return snakeBody.some(segment=>{
          return equalPositions(segment, position)
      })
  }
  export function getSnakeHead() {
    return snakeBody[0]
  }

  function equalPositions(pos1, pos2){
      return pos1.x ===pos2.x && pos1.y ===pos2.y
  }