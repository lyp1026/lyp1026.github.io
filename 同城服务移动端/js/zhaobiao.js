  
  
   $(document).ready(function () {
       //alert("hello");
       //      图片切换效果js

       var z = new Array();  //翻页数据
       var group = new Array();  //页数
       for (var i = 1; i <= 13; i++) {
           z[i] = 0;
           var img = $("#change" + i).next().children().children();
           group[i] = img.length / 2;
       }
       //点击翻页
        
       $("#change1").click(function () {
           z[1] = z[1] + 1;
           if (z[1] >= group[1]) {
               var top = 250 * group[1] - 250;
               $(this).next().children().animate({ top: '+=' + top });
               z[1] = 0;
               return;
           }
           $(this).next().children().animate({ top: '-=250px' });
       });
       $("#change2").click(function () {
           z[2] = z[2] + 1;
           if (z[2] >= group[2]) {
               var top = 250 * group[2] - 250;
               $(this).next().children().animate({ top: '+=' + top });
               z[2] = 0;
               return;
           }
           $(this).next().children().animate({ top: '-=250px' });
       });

       $("#change3").click(function () {
           z[3] = z[3] + 1;
           if (z[3] >= group[3]) {
               var top = 250 * group[3] - 250;
               $(this).next().children().animate({ top: '+=' + top });
               z[3] = 0;
               return;
           }
           $(this).next().children().animate({ top: '-=250px' });
       });

       //-----------条件下拉栏------------
       $(".show").click(function () {
           if ($(this).attr("src") == "../image/show.png")
           {
               $(this).prev().children("div.panel2").show();
               //$(".a").css("height", "auto");
               //$(this).parent().css("height", "300px");
               $(this).attr("src","../image/hidden.png");  
           }
           else {
               $(this).prev().children("div.panel2").hide();
               //$(".a").css("height", "auto");
               //$(this).parent().css("height", "60px");
               $(this).attr("src", "../image/show.png");
           }
       });
   });
