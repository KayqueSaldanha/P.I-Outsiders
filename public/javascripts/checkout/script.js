const inputCep = document.getElementById('cep');

inputCep.addEventListener('keypress', () => {
    let inputLength = inputCep.value.length;

    if (inputLength === 5) {
        inputCep.value += '-'
    }
})