function css(obj, attr) {
  if (obj.currentStyle) { //IE
    return obj.currentStyle[attr];
  } else return Math.ceil(parseFloat(getComputedStyle(obj, false)[attr])); //除IE
}


// 运动
function move(obj, attr, target) {
  obj.timer && clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var stop = true;
    var cur = parseInt(css(obj, attr));
    speed = 2;
    if (obj.n % 125 === 0) {
      var m = obj.m + 3;
      var img_last = $('.caro_img').get(m);
      var img_first = $('.caro_img').get(obj.m);
        // 最后一个元素的延迟改变会与初始化冲突，故舍弃
        if (m < 13) {
          move_img(img_last, 'width', '190');
          setTimeout(function() {
            $('.move .item:eq(' + m + ') p').css('display', 'block');
          }, 800);
        }
        move_img(img_first, 'width', '0');
        $('.move .item:eq(' + obj.m + ') p').css('display', 'none');
        obj.m++;
    };
    if (target != cur) {
      stop = false;
      obj.style[attr] = speed + cur + 'px';
      obj.n++;
    };
    if (obj.m === 5) {
      $('.move img:lt(3)').css('width', '100%');
      $('.move .item:lt(3) p').css('display', 'block');
    };
    if (stop) {
      clearInterval(obj.timer);
      obj.timer = null;
      obj.style[attr] = -50 + 'px';
      obj.n = 0;
      obj.m = 0;
      $('.move img:gt(2)').css('width', 0);
      $('.move .item:gt(2) p').css('display', 'none');
      move(obj, 'right', 2450);
    }
  }, 30)
}

// 因为IE lt(10)10以下不支持transition,所以用运动函数
function move_img(obj, attr, target) {
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
  }, 30)
}

function pictureMove(version) {
  // var pic = document.getElementsByClassName('move')[0];
  var pic = $('.move').get(0);
  // n:运动了多少个；m：变换了多少个图片
  pic.n = 0;
  pic.m = 0;
  $('.move .item:gt(3) p').css('display', 'none');
  // 每个item宽250px，14个共3500px
  $('.move img:lt(4)').css('width', '100%');
  $('.move img:gt(3)').css('width', 0);

  move(pic, 'right', 2450);
}

function videoChange() {
  var videoList={
    a1:'http://player.video.qiyi.com/4654004ea84245882a195c76711907c9/0/0/w_19rth63uzp.swf-albumId=4312964809-tvId=4312964809-isPurchase=0-cnId=27',
    a1title:'《软件著作权申请好处多》',
    a2:'http://share.vrs.sohu.com/my/v.swf&topBar=1&id=81744759&autoplay=false&from=page',
    a2title:'《申请专利》',
    a3:'http://player.video.qiyi.com/3af805a161c1914821aa22537ad7aa55/0/0/w_19rtgnejvl.swf-albumId=4562732109-tvId=4562732109-isPurchase=0-cnId=27',
    a3title:'《如何申请软件著作权》',
    a4:'http://player.video.qiyi.com/33afb492808dedaa2a062beb5195bf81/0/0/w_19rrufbpdh.swf-albumId=4259122009-tvId=4259122009-isPurchase=0-cnId=27',
    a4title:'《申请注册商标》',
    b1:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=x0532f4r2dg&auto=0',
    b1title:'《国家知识产权运营公共服务平台》',
    b2:'http://share.vrs.sohu.com/my/v.swf&topBar=1&id=79890036&autoplay=false&from=page',
    b2title:'《中国知识产权运营联盟成立》',
    b3:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=j05640ia4er&auto=0',
    b3title:'《知识产权运营创新模式》',
    b4:'http://player.video.qiyi.com/c04a3bb363747df237ff1057fcbdf6c0/0/0/w_19rwhor5ql.swf-albumId=10839029409-tvId=10839029409-isPurchase=0-cnId=25',
    b4title:'《知识产权运作:商标》',
    b5:'http://player.video.qiyi.com/cad09cd316de97a1d81fbad005d395d8/0/0/w_19ruv3ui5x.swf-albumId=10555978009-tvId=10555978009-isPurchase=0-cnId=25',
    b5title:'《知识产权运作:专利》',
    c1:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=j0568odysz3&auto=0',
    c1title:'《如何保护自己的知识产权？》',
    c2:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=z05294n24pc&auto=0',
    c2title:'《知识产权维权诉讼技巧及案例解析》',
    c3:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=D0010fcBzyD&auto=0',
    c3title:'《中国知识产权法的孕育与诞生（一）》',
    c4:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=j0010msFjc6&auto=0',
    c4title:'《中国知识产权法的孕育与诞生（二）》',
    d1:'http://player.video.qiyi.com/1fffe62d583cc68f89ebb70d5176b776/0/0/w_19rspefmg9.swf-albumId=6127752709-tvId=6127752709-isPurchase=0-cnId=21',
    d1title:'《中国知识产权纪录片》',
    d2:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=i06279y0r1g&auto=0',
    d2title:'《可可小爱：拒绝盗版，尊重知识产权》',
    d3:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=c0022s6nq8b&auto=0',
    d3title:'《共享单车的知识产权》',
    d4:'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=c0626hxyg78&auto=0',
    d4title:'《国家知识产权宣传片》'
  }
  setTimeout(function () {
    $('.video1 .v_param').attr('value',videoList.a1);
    $('.video1 .v_object').attr('data',videoList.a1);
  },300);
  setTimeout(function () {
    $('.video2 .v_param').attr('value',videoList.b1);
    $('.video2 .v_object').attr('data',videoList.b1);
  },600);
  setTimeout(function () {
    $('.video3 .v_param').attr('value',videoList.c1);
    $('.video3 .v_object').attr('data',videoList.c1);
  },900);
  setTimeout(function () {
    $('.video4 .v_param').attr('value',videoList.d1);
    $('.video4 .v_object').attr('data',videoList.d1);
  },1200);

  // 初始化
  $('.video .change span:first-child').css('backgroundColor', 'rgb(255, 52, 52)');
  //点击切换
  $('.change').on('click',function(e) {
    if ($(e.target).is('span')) {
      $(this).children().css('backgroundColor', 'rgb(255, 255, 255)');
      $(e.target).css('backgroundColor', 'rgb(255, 52, 52)');

      // index = $(e.target).attr('class').replace(/[a-z]/ig, '');
      index = $(e.target).attr('class');
      $(this).siblings().find('.v_param').attr('value',videoList[index]);
      $(this).siblings().find('.v_object').attr('data',videoList[index]);
      $(this).siblings().find('.title').text(videoList[index+'title']);
    }
  })
}
//10以下不支持transition
function BrowserType() {
  var userAgent = navigator.userAgent;
  var isIE = window.ActiveXObject || "ActiveXObject" in window;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (userAgent.indexOf('MSIE 6.0') != -1) {
      return "6";
    } else if (fIEVersion == 7) {
      return "7";
    } else if (fIEVersion == 8) {
      return "8";
    } else if (fIEVersion == 9) {
      return "9";
    } else {
      return "0"
    } //大于等于10
  } //isIE end
}

document.onreadystatechange = function changeselect() {
  if (document.readyState == "complete") {
    var version_IE = BrowserType();
    if (version_IE <= 8 && version_IE > 0) {
      $('.video .item').css('backgroundImage', 'none');
      $('.policy .container').css('backgroundImage', 'none');
    }
    pictureMove(version_IE);
    videoChange();
    var pic = $('.move').get(0);
    $('.wrap').on('mouseover',function () {
      pic.timer && clearInterval(pic.timer);
      console.log(111);
    });
    $('.wrap').on('mouseout',function () {
      move(pic, 'right', 2450);
    })
  }
}
