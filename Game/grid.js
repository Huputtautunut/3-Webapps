const GRID_SIZE = 20

export function outsideGrid(position) {
    return (
      position.x < 1 || position.x > GRID_SIZE ||
      position.y < 1 || position.y > GRID_SIZE
    )
  }