$(function(){
	var arr="移动互联，商机无限，创新链接，尽在指尖！"
	$('.main-all h3').text('');
	var i=0;
	var a=setInterval(function(){
		$('.main-all h3').text(arr.substr(0,i)+'|');
		i++;
		if(i>arr.length){
			$('.main-all h3').text(arr.substr(0,i));
			clearInterval(a);
		}
	},300)
	
	$('.main-img img').css({
		left:300
	});
	$('.main-img img').eq(0).animate({
		left:0
	});
	$('.main-img img').eq(2).animate({
		left:600
	});
	$('.main-img img').click(function(){
		var index = $(this).index();
		if(index == 0)
		{
			$('.main-img img').eq(0).animate({
				left:600,
				zIndex: 0
			},function(){
				$('.main-img').append($(this));
			});
			$('.main-img img').eq(1).animate({
				left:0,
				width:372,
				height:372,
				zIndex: 1
			});
			$('.main-img img').eq(2).animate({
				left:300,
				width:412,
				height:412,
				zIndex: 2
			})
		}else if(index == 2){
			$('.main-img img').eq(2).animate({
				left:0,
				zIndex: 0
			},function(){
				$('.main-img').prepend($('.main-img img').eq(2))
			});
			$('.main-img img').eq(1).animate({
				left:600,
				width:372,
				height:372,
				zIndex: 1
			});
			$('.main-img img').eq(0).animate({
				left:300,
				width:412,
				height:412,
				zIndex: 2
			})
		}
	});
	var ccc = setInterval(function(){
			$('.main-img img').eq(2).animate({
				left:0,
				zIndex: 0
			},function(){
				$('.main-img').prepend($('.main-img img').eq(2))
			});
			$('.main-img img').eq(1).animate({
				left:600,
				width:372,
				height:372,
				zIndex: 1
			});
			$('.main-img img').eq(0).animate({
				left:300,
				width:412,
				height:412,
				zIndex: 2
			})
		},1000)
	$('.main-img img').mouseover(function(){
		clearInterval(ccc);
	})
	$('.main-img img').mouseout(function(){
		ccc = setInterval(function(){
			$('.main-img img').eq(2).animate({
				left:0,
				zIndex: 0
			},function(){
				$('.main-img').prepend($('.main-img img').eq(2))
			});
			$('.main-img img').eq(1).animate({
				left:600,
				width:372,
				height:372,
				zIndex: 1
			});
			$('.main-img img').eq(0).animate({
				left:300,
				width:412,
				height:412,
				zIndex: 2
			})
		},1000)
	})
	var roll;
	var i = true;
	$(document).scroll(function(){
		roll=$(document).scrollTop();
		if(roll>250){
			if(i){
				i=false;
				$('.header').css({
					position:'fixed',
					zIndex:5,
					top:-61,
				});
				$('.header').animate({
					top:0
				});
				$('.main-all').css({
					paddingTop:157
				})
			}
		}else{
			i = true;
			$('.header').css({
					position:'static',
				})
			$('.main-all').css({
					paddingTop:96
				})
		}
	})
	
})