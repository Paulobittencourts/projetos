const display = document.getElementById('visor_low')
const key = document.querySelectorAll('[id*=tecla]')
const operator = document.querySelectorAll('[id*=operador]')

let newNumber = true
let number
let operators

const calcular = () =>{
    if(pendingOperation()){
        const currentNumber = parseFloat(display.textContent)
        newNumber = true

        const result = eval(`${number}${operators}${currentNumber}`)
        updateDisplay(result)
    }    
}

const updateDisplay = (text) => {
    if(newNumber){
        display.textContent = text
        newNumber = false
    }else{
        display.textContent += text
    }
}

const selectOperator = (evento) =>{
    if(!newNumber){
        calcular()
        newNumber = true
        operators = evento.target.textContent
        number = parseFloat(display.textContent)        
    }
}

const equal = () =>{
    calcular()
    operators = undefined
}

const clean = () =>{
    cancelEntry()
    newNumber = true
    operators = undefined
    currentNumber = undefined
}

const cancelEntry = () => display.textContent = ''

const reverseSign = () => {
    newNumber = true
    updateDisplay(display.textContent * -1)

}

const backspace = () => display.innerHTML = display.innerText.slice(0, -1)
const insertNumber = (evento) => updateDisplay(evento.target.textContent)
const pendingOperation = () => operators != undefined
document.getElementById('apagar').addEventListener('click', clean) 
document.getElementById('backspace').addEventListener('click', backspace)
document.getElementById('limpar').addEventListener('click', cancelEntry)
document.getElementById('igual').addEventListener('click', equal)
document.getElementById('inverteOpera').addEventListener('click', reverseSign)
key.forEach(key => key.addEventListener('click', insertNumber))
operator.forEach(operator => operator.addEventListener('click', selectOperator))