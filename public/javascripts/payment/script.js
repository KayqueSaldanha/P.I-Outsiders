const inputCpf = document.getElementById('credit-card-cpf');
const inputCard = document.getElementById('credit-card-nmb');
const inputValidity = document.getElementById('credit-card-expiration');

inputValidity.addEventListener('keypress', () => {
    let inputLength = inputValidity.value.length;

    if (inputLength === 2) {
        inputValidity.value += '/'
    }
})

inputCard.addEventListener('keypress', () => {
    let inputLength = inputCard.value.length;

    if (inputLength === 4 || inputLength === 9 || inputLength === 14) {
        inputCard.value += '.'
    }
})

inputCpf.addEventListener('keypress', () => {
    let inputLength = inputCpf.value.length;

    if (inputLength === 3 || inputLength === 7) {
        inputCpf.value += '.'
    } else if (inputLength === 11) {
        inputCpf.value += '-'
    }
})