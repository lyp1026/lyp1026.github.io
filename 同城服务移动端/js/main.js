

var z = new Array();  //翻页数据
var group = new Array();  //页数
$(document).ready(function () {
    for (var i = 1; i <= 13; i++) {
        z[i] = 0;
        var img = $("#change" + i).next().children().children();
        group[i] = img.length / 2;
    }

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
//点击翻页
function c1(a, i) {
    //var a = event.target;             
    z[i] = z[i] + 1;    
    if (z[i] >= group[i]) {
        var top = 250 * group[i] - 250;
        $(a).next().children().animate({ top: '+=' + top });
        z[i] = 0;        
        return;
    }   
    $(a).next().children().animate({ top: '-=250px' });
}

//关闭按钮
function close() {
    $(this).parent().css("display", "none");
}
//显示登陆面板
function showlogin() {
    $(".loginpanel").css("dispaly", "block");
}
 
//显示注册协议面板
function showagreement() {
    $(".agreement").css("display","block")
}
