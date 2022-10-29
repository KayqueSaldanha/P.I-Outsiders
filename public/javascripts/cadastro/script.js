const form = document.getElementById("form");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const senha = document.getElementById("password");

form.addEventListener('submit', (e)  => {
    //evento para prevenir o carregamento do botão caso esteja vazio  
    e.preventDefault()
    const valid = checkInputs()
    if (valid) {
        form.submit()
    };
});

function checkInputs (){    
    const nomeValue = nome.value;
    const sobrenomeValue = sobrenome.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    let isValid = true;

    //função para verificar se as informações do input estão vazias
    //nome
    if (nomeValue === ""){
        setErrorFor(nome, "O nome de usuário é obrigatório")
        isValid = false;
    }else{
        setSuccessFor(nome);
    }
    
    //sobrenome
    if (sobrenomeValue === ""){
        setErrorFor(sobrenome, "O sobrenome é obrigatório")
        isValid = false;
    }else{
        setSuccessFor(sobrenome);
    }

    //email
    if(emailValue === ""){
        setErrorFor(email, "O email é obrigatório");
        isValid = false;
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido");
        isValid = false;
    }else {
        setSuccessFor(email);
    }

    //senha
    if(senhaValue === ""){
        setErrorFor(senha, "A senha é obrigatória");
        isValid = false;
    }else if(senhaValue.length < 8 ){
        setErrorFor(senha, "Pelo menos 8 caracteres");
        isValid = false;
    }else{
        setSuccessFor(senha);
    }

    return isValid;
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    small.innerText = message
    formControl.className = "form-control error"
}

function setSuccessFor (input){
    const formControl = input.parentElement
    formControl.className = "form-control success"
}



