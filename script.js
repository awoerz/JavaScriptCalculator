var input = document.getElementById('user-input')
var buttons = document.getElementsByClassName('calc-button')
var evaluateButton = document.getElementById('equals')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', e => {
        input.value += e.target.value
    })
})

evaluateButton.addEventListener('click', () => {
    input.value = eval(input.value)
})