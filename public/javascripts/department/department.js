// Função de dropdown
$(document).ready(function () {
    $('.filters>ul>li>span').on('click', function () {
        if (!$(this).parent().hasClass('opened')) {
            $('.filters>ul>li').removeClass('opened')
        }
        $(this).parent().toggleClass('opened');
    });   
});

const showAltImage = (id) => {
    const imagem2 = document.querySelector(`#imagem2_${id}`);

    imagem2.classList.remove('opacity-none');
}

const showCoverImage = (id) => {
    const imagem2 = document.querySelector(`#imagem2_${id}`);

    imagem2.classList.add('opacity-none');
}