


var oUl = document.getElementsByClassName('bra')[0];

var oSec = document.getElementsByClassName('sec')[0];
var oMin = document.getElementsByClassName('min')[0];
var oHou = document.getElementsByClassName('hou')[0];
function init() {
    // 浏览器渲染   1、先计算位置布局  2、在绘制 
    // 为了提高效率  进行一次添加
    var str = "";
    for (var i = 1; i <= 12; i++) {
        str += '<li class="num" style="transform:rotate(' + i * 30 + 'deg)">'
        str += '<span style="transform:rotate(' + i * -30 + 'deg)">' + i + '</span>'
        str += '</li>'
    }
    oUl.innerHTML = str;
}

init();

function time() {
    var newDate = new Date();
    var hour = newDate.getHours();
    var minute = newDate.getMinutes();
    var second = newDate.getSeconds();
    var mses = newDate.getMilliseconds();

    var fillSecound = second + mses / 1000;
    var ds = fillSecound * 6;
    oSec.style.transform = 'rotate(' + ds + 'deg)';

    var fillMinute = minute + fillSecound / 60;
    var dm = fillMinute * 6;
    oMin.style.transform = 'rotate(' + dm + 'deg)';

    var fullHour = hour + fillMinute / 60;
    var dh = fullHour * 30;
    oHou.style.transform = 'rotate(' + dh + 'deg)';

    //16.7  浏览器一秒刷新60次 不好在于电脑卡的时候可能不是这个参数
    setTimeout(time, 16.7);
    //h5中的提供方法   会根据计算机自动计算浏览器的刷新频率  做动画
    // requestAnimationFrame(time)

}
time();
