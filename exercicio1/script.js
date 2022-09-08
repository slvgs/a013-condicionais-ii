const num = Number(prompt("Digite um número"))

if(num % 2 === 0){
    console.log("Este número é divisivel por 2")
    if(num % 3 === 0){
        console.log("Este número é divisivel por 3")
    }else{
        console.log("Não é divisivel por 3!")
    }
}else{
    console.log("Não é divisivel por 2")
}if(num % 3 === 0){
    console.log("É divisivel por 3")
}else{
    console.log("Não é divisivel por 3 nem por 2!")
}

if(num % 2 === 0 || num % 3 === 0){
    console.log("É divisivel")
}else{
    console.log("Este número não é divisivel")
}