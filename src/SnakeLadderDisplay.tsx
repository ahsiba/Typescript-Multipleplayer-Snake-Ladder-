
interface SnakeLadderDisplay{
    number:number,
    snake:string,
    ladder:string,
    playerEmoji:any

}
// import React from 'react'
const SnakeLadderDisplay = (Grid:SnakeLadderDisplay) => {
    return (
        <div>
            <div>
            {Grid.number}
            {Grid.snake}
            {Grid.ladder}
            </div>
            <p><span>
              {Grid.playerEmoji}
            </span></p>
            

        </div>
    )
}

export default SnakeLadderDisplay