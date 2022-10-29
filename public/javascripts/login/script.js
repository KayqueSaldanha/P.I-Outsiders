const senha = document.getElementById("senha");
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hidden");


const showHide = () => {
    console.log('type password');
    //comparando se o tipo de senha é igual ao password
    if(senha.type === "password"){
        // quando clicar no icone o "type" vai mudar de password para texto
        senha.type = 'text';
        btnHide.classList.remove('none');
        console.log('teste1')

    } else if (senha.type === "text") {
        senha.type = 'password';
        btnHide.classList.toggle('none');
        console.log('teste2')
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


