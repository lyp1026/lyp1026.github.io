//��¼����ҳ��
$(document).ready(function ($) {

    $('.denglu').click(function () {
        $('.dlBg').show();
        $('.dlBg').height($(document).height());
        $('.login1').slideDown(200);
    })
    $('.head .close').click(function () {
        $('.dlBg').hide();
        $('.login1').slideUp(200);
    })

});
//ע�ᵯ��ҳ��
$(document).ready(function ($) {

    $('.zhuce').click(function () {
        $('.zcBg').show();
        $('.zcBg').height($(document).height());
        $('.login2').slideDown(200);
    })
    $('.head .close').click(function () {
        $('.zcBg').hide();
        $('.login2').slideUp(200);
    })

});
//��ϸ��Ϣ

