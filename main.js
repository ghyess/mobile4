$(document).ready(function() {
    //메뉴-활성화
    $("#hd #gnb_bt").click(function() {
       $("#gnb").addClass("on");
        $(".gnb_bg").addClass("on");
    });
    
    $("#gnb #close").click(function() {
       $("#gnb").removeClass("on");
        $(".gnb_bg").removeClass("on");
    });
    
    //메뉴
    $("#gnb .menu>li").click(function() {
       $(this).find(".submenu").stop().slideDown(600);
        $(this).addClass("on")
        $(this).siblings().find(".submenu").not().slideUp(300);
        $(this).siblings().removeClass("on");
    });
});