const inputCep = document.getElementById('cep');
const form = document.querySelector('form');
const cep = document.getElementById('cep');
const cidade = document.getElementById('city');
const rua = document.getElementById('street');
const numero = document.getElementById('number');
const bairro = document.getElementById('neighborhood');
const complemento = document.getElementById('complement');
const estado = document.getElementById('floatingSelect');

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    checkInputs();
});

inputCep.addEventListener('keypress', () => {
    let inputLength = inputCep.value.length;

    if (inputLength === 5) {
        inputCep.value += '-';
    }
});

function checkInputs() {
    const cepValue = cep.value;
    const cidadeValue = cidade.value;
    const ruaValue = rua.value;
    const numeroValue = numero.value;
    const bairroValue = bairro.value;
    const estadoValue = estado.value;

    const errorMsg = 'Campo obrigatório!'

    if (cepValue === '') {
        setErrorFor(cep, errorMsg);
    }

    if (cidadeValue === '') {
        setErrorFor(cidade, errorMsg);
    }

    if (ruaValue === '') {
        setErrorFor(rua, errorMsg);
    }

    if (numeroValue === '') {
        setErrorFor(numero, errorMsg);
    }

    if (bairroValue === '') {
        setErrorFor(bairro, errorMsg);
    }

    if (estadoValue === '') {
        setErrorFor(estadoValue, errorMsg);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}