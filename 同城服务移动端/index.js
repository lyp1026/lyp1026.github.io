
$(document).ready(function () {   

    //-----------条件下拉栏------------
    $(".show").click(function () {
        if ($(this).attr("src") == "../image/show.png") {
            $(this).prev().children("div.panel2").show();
            //$(".a").css("height", "auto");
            //$(this).parent().css("height", "300px");
            $(this).attr("src", "../image/hidden.png");
        }
        else {
            $(this).prev().children("div.panel2").hide();
            //$(".a").css("height", "auto");
            //$(this).parent().css("height", "60px");
            $(this).attr("src", "../image/show.png");
        }
    });

});
