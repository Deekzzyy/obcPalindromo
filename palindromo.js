var palavra = prompt("Escreva uma palavra para verificar se é um palíndromo:")

var palavraMinuscula = palavra.toLowerCase()

var letras = palavraMinuscula.length

var i = (letras-1)

var palindromo = ""



for(i;i >= 0 ;i--){
    console.log(i)
    
    palindromo = palindromo + palavraMinuscula[i]

}

if(palindromo!==palavraMinuscula){
    alert("Esta palavra não é um palíndromo!" + "\n" + palavraMinuscula + "\n" + palindromo)

}else{
    alert("Esta palavra é um palíndromo!" + "\n" + palavraMinuscula + "\n" + palindromo)
}


