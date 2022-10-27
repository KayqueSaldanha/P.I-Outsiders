document.addEventListener("load", () => {

    const imagem1 = document.querySelector('#imagem1');
    const imagem2 = document.querySelector('#imagem2');
    const imagem3 = document.querySelector('#imagem3');
    const imagemPrincipal = document.querySelector('#imagemPrincipal');

})


const clickImagem = (imagem) => {
    if (imagem == 1) {
        imagemPrincipal.innerHTML = imagem1.innerHTML
        imagemPrincipal.classList.toggle('imagem_selecionada')
        
    } else if (imagem == 2) {
        imagemPrincipal.innerHTML = imagem2.innerHTML
        imagemPrincipal.classList.toggle('imagem_selecionada')
        
    } else if (imagem == 3) {
        imagemPrincipal.innerHTML = imagem3.innerHTML;
        imagemPrincipal.classList.toggle('imagem_selecionada')
}

        imagemPrincipal.querySelector('img').classList.add('imagem_principal')
}

    