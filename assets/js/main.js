let valorInicial = document.querySelector('.valor_inicial')

let valorFinal = document.querySelector('.total')
let cantidadFinal = document.querySelector('.cantidad')
let colorFinal = document.querySelector('.color')

function calcularTotal(){
    
    let cantidadInput = document.querySelector('.cantidadInput').value
    let colorInput = document.querySelector('.colorInput').value
  
    let precio = Number(valorInicial.innerHTML)

    let total = cantidadInput * precio

    valorFinal.innerHTML = total.toLocaleString()
    cantidadFinal.innerHTML = cantidadInput
    colorFinal.style.backgroundColor = colorInput

}