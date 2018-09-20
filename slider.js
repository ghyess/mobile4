$(document).ready(function(){
    //첫번째 슬라이드
    var wd = parseInt($("#vs").width());
    var sw = true;
    var intv = setInterval(function() { nAni() }, 3000);
    
    function nAni() {
        $("#vs .imgBox").not(":animated").animate({"margin-left":-wd+"px"}, 800, function() {
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .imgBox").css("margin-left", "0px");
            $("#vs .btn_box .f_btn").removeClass("on");
            $("#vs .btn_box .f_btn").eq(0).appendTo($("#vs .btn_box"));
            $("#vs .btn_box .f_btn").eq(0).addClass("on");
        });
    };
    // 첫번째 슬라이드 버튼목록 리스트
    $("#vs .btn_box .f_btn").click(function() {
       clearInterval(intv);
        var idx = $(this).index();
        for(var i=0; i<idx-2;i++){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .btn_box .f_btn").eq(0).appendTo($("#vs .btn_box"));
        }
        nAni();
        intv = setInterval(function() { nAni(); }, 3000);
    });
    
    //두 번째 슬라이드
    var Swd = parseInt($("#vs_sec").width());
    var cnt = $("#vs_sec .img_Box li").length;
    var sb = true;
    var s_intv = setInterval(function() { sn_Ani(); }, 3000);
    // 다음
    function sn_Ani(){
            $("#vs_sec .img_Box").not(":animated").animate({"margin-left" : -Swd+"px"}, 800, function(){
                $("#vs_sec .img_Box li").eq(0).appendTo($("#vs_sec .img_Box"));
                $("#vs_sec .img_Box").css("margin-left", "0px");
                $("#vs_sec #sec_bb .sbtn").removeClass("on");
                $("#vs_sec #sec_bb .sbtn").eq(0).appendTo($("#vs_sec #sec_bb"));
                $("#vs_sec #sec_bb .sbtn").eq(0).addClass("on");
            });
        };
    
    // 두 번째 슬라이드 버튼목록 리스트
    $("#vs_sec #sec_bb .sbtn").click(function() {
       clearInterval(s_intv);
        var s_idx = $(this).index();
        for(var i=0; i<s_idx-2;i++){
            $("#vs_sec .img_Box li").eq(0).appendTo($("#vs_sec .img_Box"));
            $("#vs_sec #sec_bb .sbtn").eq(0).appendTo($("#vs_sec #sec_bb"));
        }
        sn_Ani();
        s_intv = setInterval(function() { sn_Ani(); }, 3000);
    });
    
    // 이전
    function sp_Ani() {
        $("#vs_sec .img_Box li").eq(cnt-1).prependTo($("#vs_sec .img_Box"));
        $("#vs_sec .img_Box").css("margin-left", -Swd+"px");
        $("#vs_sec .img_Box").not(":animated").animate({"margin-left":"0px"}, 800);
    };
    
    // 두 번째 좌우 버튼-좌
    $("#vs_sec .btnwrap #prev").click(function() {
        clearInterval(s_intv);
        sp_Ani();
        s_intv = setInterval(function(){ sn_Ani(); }, 3000);
    });
    // 두 번째 좌우 버튼-우
    $("#vs_sec .btnwrap #next").click(function() {
       clearInterval(s_intv);
        sn_Ani();
        s_intv = setInterval(function() { sn_Ani(); }, 3000);
    });
});