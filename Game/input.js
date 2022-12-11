//tämä file kontrolloi nuolinäppäimiä
let inputDirection = { x: 1, y: 0 } //tämä laitta otuksen liikkeelle alussa
//outs kulkee siis kohti näytön oikeaa reunaa niin kauan kunnes käyttäjä muuttaa liikettä nuolinäppäimillä

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            inputDirection = { x: 0, y: -1 }/*huom! y=-1 ylös ja y=1 alas*/
            break
        case 'ArrowDown':
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    return inputDirection
}