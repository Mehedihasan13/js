
$(document).ready(function(){

$('.click').click(function(){
$('.click').css("background","red");
});
$('.dbl').dblclick(function(){
$('.dbl').css("background","green")
});

$('.mouseenter').mouseenter(function(){
$('.mouseenter').css("background","blue",)
});

$('.mouseleave').mouseleave(function(){
$('.mouseleave').css("background","green")
});
var i = 0;
$('input').keypress(function(){
$('.span1').text(i+=1)
});

$('.input1').keydown(function(){
$('.input1').css("background","red")
});
$('.input1').keyup(function(){
$('.input1').css("background","green")
});

$('#f-name,#l-name,select').focus(function(){
$(this).css("background","red")
});

$('#f-name,#l-name,select').select(function(){
$(this).css("background","yellow")
});

$('#f-name,#l-name,select').blur(function(){
$(this).css("background","")
});

$('select').change(function(){
$(this).css("background","green")
});

$('select').change(function(){
  var a = $(this).val();
  $('#cng').html(a);

});

$('#s-form').submit(function(){
alert('Form Submit Succes')
});
var x = 0;
$(window).scroll(function(){
$('.scroll').text(x +=1);
});
var y = 0;
$(window).resize(function(){
$('.resize').text(y +=1);
});


});
document.querySelector(".mouseenterjs").addEventListener("mouseenter",a);
function a(){
  document.querySelector(".mouseenterjs").style.background = "red";
}

document.querySelector(".mouseleavejs").addEventListener("mouseenter",b);
function b(){
  document.querySelector(".mouseleavejs").style.background = "red";
}