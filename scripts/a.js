/**
 * @author 叫兽
 */
 $(function(){
        var pageW=parseInt($(document).width());	//获取页面宽度
        //alert(pageW);
        var pageH=parseInt($(document).height());	//获取页面高度
        var boxDom=$("#boxDom");
        var btnDom=$("#btn");
        var Top,Right;
        var width;
        width=pageW;
        var colorArr=["#cfaf12","#12af01","#981234","#adefsa","#db6be4","#f5264c","#d34a74"];
        btnDom.bind("click",auto);
        function auto(){
            var creSpan=$("<span class='string'></span>");
            var text=$("#text").val();
            //alert(text);
            creSpan.text(text);
            //alert(creSpan.text());
            Top=parseInt(pageH*(Math.random()));
            var num=parseInt(colorArr.length*(Math.random()));
            if(Top>pageH-90){
                Top=pageH-90;
            }
            //creSpan.css({"top":Top,"right":-300,"color":colorArr[num]});
            creSpan.css({"top":Top,"right":-300,"color":getRandomColor()});//扩展字幕颜色
            boxDom.append(creSpan);
            var spanDom=$("#boxDom>span:last-child");
            //alert(spanDom.html());
            spanDom.stop().animate({"right":pageW+300},10000,"linear",function(){
                        $(this).remove();
                    });
        }
        function getRandomColor(){
            return '#' + (function(h){
                return new Array(7 - h.length).join("0") + h;
            })((Math.random() * 0x1000000 << 0).toString(16));
        }
   });