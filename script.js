// Aqui eu defino as váriaveis de elementos que irei precisar no HTML.
// Here I define the element variables I will need in the HTML.
let conversor = document.querySelector("#conversor")
let button = document.getElementById("btn")
let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
let result = document.getElementById("result")

// Função principal que converte os graus.
// Main function that converts degrees.
function conversorCelsiusFahrenheit(){
  const valueConversor = conversor.value
  const celsiusTrue = celsius.checked
  const fahrenheitTrue = fahrenheit.checked
  let valueReturn = 0
  if(valueConversor === ""){
    result.innerHTML = `Primeiro insira o valor.`
  }
  else if(celsiusTrue === true){
    valueReturn = ((valueConversor - 32) * 5 / 9).toFixed(2)
    result.innerHTML = `${valueConversor}°F é ${valueReturn}° em Celsius🌡`
  }
  else if (fahrenheitTrue === true){
    valueReturn = ((valueConversor * 9 / 5 + 32)).toFixed(1)
    result.innerHTML = `${valueConversor}°C é ${valueReturn}° em Fahrenheit🌡`
  }else{
    result.innerHTML = `Houve um erro inesperado, verifique se está digitando um número correto ou tente novamente mais tarde.`
  }
}

