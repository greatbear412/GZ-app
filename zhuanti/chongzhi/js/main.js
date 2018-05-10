window.onload = function () {
  function browserForTopBg() {
    var userAgent = navigator.userAgent;
    var isIE = window.ActiveXObject || "ActiveXObject" in window;
    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if (userAgent.indexOf('MSIE 6.0') != -1 || fIEVersion == 7 || fIEVersion == 8) {
        $('.top').css('background','none');
        $('i').css('background','none');
      }
    }
  }

  function chooseVIP() {
    var num,left;
    $('.buy .container div').on('click',function () {
      num = $(this).attr('class').replace(/[a-z]/g,'');
      left = (num-1)*400+350;
      $('.choosed').css('left',left).css('display','block');
      $('.buy .container div').removeClass('active');
      $(this).addClass('active');
    })
  };

  function submitVIP() {
    $('.sub').on('click',function () {
      var c = $('.buy .active').attr('class');
      var VIPtype = c ? c.replace(/[a-z]/g,''):0;
      $.ajax({
        url: "#",
        type: "POST",
        //VIPtype:0 = 未选择；1 = 周费； 2 = 月费； 3 = 年费；
        data: {type:VIPtype},
        success: function(){
            window.open('http://yh.vipzhuanli.com/member/service/pay-vip.html');
        }
    });
    return false;
    })
  }

  browserForTopBg();
  chooseVIP();
  submitVIP();
}
