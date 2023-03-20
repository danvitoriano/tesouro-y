const stringArr = [[1, 4, 8, 3], [11, 7, 4, 7], [0, 3, 8, 6]]
const positions = { andre: [0, 0], kana: [2, 2], tesouro: [2, 3] }
const h_andre = 3
const h_kana = 2

let kana_position = stringArr[2][2]
let andre_position = stringArr[0][0]
let treasure_position = stringArr[2][3]

let andre_moves = "Andre: "
let kana_moves = "Kana: "
let direction = "right"
let hunters = []
let players = ["Andre", "Kana"]
let results = ""
let tesouro = []
let alturaTotal = 0

function Movement(rows, hunter, h_andre){
    tesouro = hunter.tesouro
    delete hunter.tesouro

    for (const [key, value] of Object.entries(hunter)) {
        // montando o resultado com a primeira letra do nome do caçador em maiúscula
        results += key.charAt(0).toUpperCase() + key.slice(1) + ": " + value

        // variável temporária para salvar os movimentos
        let moves = []
        
        // se a posicao j do caçador no array [i,j] for maior que a posicao j do tesouro em [i,j]
        // significa q o caçador está a frente do tesouro e pode mudar de direção 
        if(value[0] > tesouro[0] && value[1] > tesouro[1]){
            direction = "left"
        }

        // se a direção for pra direita, adiciona 1 casa da posicao j de [i,j]
        // preenche a variavel de moves
        if(direction === "right"){
            console.log("valor de " + key + " é de " + value )
            if (key == "andre"){

                // rows[2][2]


                // rows[0].map((row, index) => {
                //     return rows.map((column) => {
                //       return console.log(column[row])
                //     })
                //   })


                // rows[0].map(
                //     index => 
                // )
                

                alturaTotal = value[1] + h_andre
                console.log("altura de " + key + " é de " + value[1] )
                console.log("altura total é de " + alturaTotal )
                console.log("altura do tesouro " + tesouro[1] )
                if(alturaTotal <= tesouro[1]){
                    
                }
            }
            moves.push(value[0])
            moves.push(value[1] + 1)
        }

        // se a direção for pra esquerda, substrai 1 casa da posicao j de [i,j]
        // preenche a variavel de moves
        if(direction === "left"){
            moves.push(value[0])
            moves.push(value[1] - 1)
        }

        // monta o moves na variavel de resultado
        results += " -> " + moves + "\n"

      }

      
      // retorna o resultado
      return results;
    

    // kana_moves += hunter

    // if(hunter > positions.tesouro){
    //     direction = "left"
    // }

    // if(direction === "right"){

    //     // onde esta o tesouro

    //     // qual minha altura
    //     // posicao atual + altura <= tesouro ? anda : descarta

    //     moves.push(hunter[0])
    //     moves.push(hunter[1] + 1)
    //     kana_moves += " -> " + moves
    // }

    // return kana_moves
}

// console.log(positions.kana > positions.tesouro)
// console.log(positions.kana[0] + 1)
console.log(Movement(stringArr, positions, h_andre))