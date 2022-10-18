// Função de dropdown
$(document).ready(function () {
    $('.filters>ul>li>span').on('click', function () {
        if (!$(this).parent().hasClass('opened')) {
            $('.filters>ul>li').removeClass('opened')
        }
        $(this).parent().toggleClass('opened');
    });
});

