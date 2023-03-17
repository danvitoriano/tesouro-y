const stringArr = [[1, 4, 8, 3], [11, 7, 4, 7], [0, 3, 8, 6]]
const positions = { andre: [0, 0], kana: [2, 2], tesouro: [2, 3] }
const h_andre = 3
const h_kana = 2

let kana_position = stringArr[2][2]
let andre_position = stringArr[0][0]
let treasure_position = stringArr[2][3]

let andre_moves = []
let moves = []
let direction = "right"
let hunters = []

function Movement(obj){

    positions.andre

    if(hunter > positions.tesouro){
        direction = "left"
    }

    if(direction === "right"){
        moves.push(hunter[0])
        moves.push(hunter[1] + 1)
    }

    return moves
}

// console.log(positions.kana > positions.tesouro)
// console.log(positions.kana[0] + 1)
console.log(Movement(positions))