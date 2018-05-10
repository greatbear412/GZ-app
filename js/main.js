// gotop按钮
function goTop() {
  $("#gotop").click(function(e) {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
  });
  $(window).scroll(function(e) {
    if ($(window).scrollTop() > 100)
      $("#gotop").fadeIn(200);
    else
      $("#gotop").fadeOut(200);
  });
}

// 换页按钮
function pageChange(obj) {
  obj.on('click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })
}

// 详情页--调整下载按钮的位置
function xiangqing_adjustFix() {
  var left = parseFloat($('.btns').offset().left);
  $('.btns .download.fix').css('right', 20 + left + 'px');
  $('#gotop').css('right', 3 + left + 'px');
  $(window).resize(xiangqing_adjustFix);
}

// 详情页--滚动到下方的时候切换两按钮的显示
function xiangqing_scrollChange() {
  var btnDisplay = true;
  var height = document.body.clientHeight;
  var footer_height = $('#fixed_footer').outerHeight();
  var winWidth = document.body.clientWidth;
  var m = winWidth < 375 ? 60 : 80;
  $(window).scroll(function() {
    var bound = document.getElementById('SOHUCS').getBoundingClientRect().top + footer_height - 30;
    if (bound <= height && btnDisplay) {
      $('.fix').css('position', 'absolute').css('top', '0').css('bottom', '0').css('margin', 'auto');
      $('.fix:last').css('right', '20px');
      btnDisplay = false;
    } else if (bound > height && !btnDisplay) {
      $('.fix').css('position', 'fixed').css('top', 'auto').css('bottom', m + 10 + 'px');
      xiangqing_adjustFix();
      btnDisplay = true;
    }
  })
}

// download页--下载按钮
function download_download() {
  $('.download').on('click', function() {
    $(this).toggleClass('unable');
    if ($(this).hasClass('unable')) {
      $(this).text('外观专利暂不支持下载');
    } else {
      $(this).text('立即下载');
    }
  })
}

//分类页--切换
function fenlei_switch(obj_a, obj_ul, manner) {
  obj_a.on('click', function() {
    obj_ul.siblings().css('display', 'none');
    obj_ul.css('display', manner);
    var m_name = obj_a.text();
    p_name = obj_a.attr('name')?obj_a.attr('name'):obj_a.text();
    $('.lists .channel .name').text(m_name);
    $('.lists .title .name').text(p_name);
  })
}

//css
function css(obj, attr) {
  if (obj.currentStyle) { //IE
    return obj.currentStyle[attr];
  } else return Math.ceil(parseFloat(getComputedStyle(obj, false)[attr])); //除IE
}
//move
function move(obj, attr, target) {
  obj.timer && clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var stop = true;
    var cur = parseInt(css(obj, attr));
    speed = (target - cur) / 8;
    speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);
    if (target != cur) {
      stop = false;
      obj.style[attr] = speed + cur + 'px';
    };
    if (stop) {
      clearInterval(obj.timer);
      obj.timer = null;
    }
  }, 17)
}
