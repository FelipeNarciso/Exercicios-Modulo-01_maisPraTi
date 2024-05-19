//Sequência de Fibonacci//

let n1 = 0
let n2 = 1
let sf = n1 + n2
for(i = 0; i < 10; i++){
   console.log(sf)
   sf = n1 + n2
   n1 = n2
   n2 = sf
}
