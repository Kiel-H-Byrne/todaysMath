swiped from: https://stackoverflow.com/questions/38103672/simple-numerology-with-javascript
and converted to use es6

const charMap = {A:1, J:1, S:1, B:2, K:2, T:2, C:3, L:3, U:3, D:4, 
  M:4, V:4, E:5, N:5, W:5, F:6, O:6, X:6, G:7, P:7, Y:7, H:8, 
  Q:8, Z:8, I:9, R:9};
  
let name = prompt ("Type your name in CAPS"); //for example: TOM

let wordScore =  Array.from(name).reduce((nameScore, element) => {
    let curValue = charMap[element]
     return (nameScore + curValue)
  },0)

let finalScore = Array.from(String(wordScore), Number).reduce((score, element) => {
  
  return score > 10 ? score + element : score
})


alert(finalScore)

//add dictionary for numbers
