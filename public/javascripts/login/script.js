const senha = document.getElementById("senha");
const btn = document.getElementById("btn");

console.log("Pass filed", senha)
console.log("Pass filed", btn)


btn.onclick = () => {
    //comparando se o tipo de senha é igual ao password
    if(senha.type === "password"){
        // quando clicar no icone o "type" vai mudar de password para texto
        senha.type = 'text';
        btn.classList.add('fa-eye-slash');
        console.log('type password');
    } else {
        senha.type = 'password';
        btn.classList.remove('fa-eye-slash');
    }
}

/*
function showHide(){
    if(senha.type === "senha"){
        senha.setAttribute('type', 'text');
        showBtn.classList.add('hide')
    } else {
        senha.setAttribute('type', 'senha');
        showBtn.classList.remove('hide')
    }
}
*/

/*
showBtn.onclick = () => {
    if (senha.type === "senha"){
        senha.type = "text";
        showBtn.classList.add("wrapper");
    } else {
        senha.type = "password";
        showBtn.classList.remove("wrapper");
    }

}

/**/


