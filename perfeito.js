let perfeito = true

function VerificarNum(){
    let num
    let divisores = []
    let somadosDivisores = 0
    num = parseInt(prompt("Digite o numero:"))
    for(let i = 1; i < num; i++){
    if(num % i == 0){
        divisores.push(i)
    }
}
divisores.forEach(element => {
    somadosDivisores = somadosDivisores + element
});
if(somadosDivisores == num)
perfeito = true
else 
perfeito = false

return perfeito
}

VerificarNum()
console.log(perfeito)
