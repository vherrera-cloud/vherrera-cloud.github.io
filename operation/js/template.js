/*
Version: 1.0
Author: your name
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/



$(document).ready(function(){
// Draggable Functions - start
	$('.highlight')
	function minPos(){
		var mgT = $('#mapGroup').css('top').substring(0, $('#mapGroup').css('top').length-2);
		var mgL = $('#mapGroup').css('left').substring(0, $('#mapGroup').css('left').length-2);
		var mgH = $('#mapGroup').css('height').substring(0, $('#mapGroup').css('height').length-2);
		var mgW = $('#mapGroup').css('width').substring(0, $('#mapGroup').css('width').length-2);
		offsetT = (mgT/mgH)*-242;
		offsetL = (mgL/mgW)*-200;
		$('#mmSite').css({'top':offsetT,'left':offsetL});
	};
	$('#mapGroup').draggable({
		drag: function(){
			minPos();
		},
		stop: function() {
        	repMap();
        }
     });
	
	
	 $('#mmSite').draggable({
		drag: function(){
			var mgT = $('#mmSite').css('top').substring(0, $('#mmSite').css('top').length-2);
			var mgL = $('#mmSite').css('left').substring(0, $('#mmSite').css('left').length-2);
			var mgH = $('#minMap img').css('height').substring(0, $('#minMap img').css('height').length-2);
			var mgW = $('#minMap img').css('width').substring(0, $('#minMap img').css('width').length-2);
			offsetT = (mgT/mgH)*-2420;
			offsetL = (mgL/mgW)*-2000;
			$('#mapGroup').css({'top':offsetT,'left':offsetL});
		},
		stop: function() {
        	repMap();
        }
     });
	$('#mapGroup').on( "mousedown", function(){
		$('#mapGroup').stop();
		
	});
	var bottomBind;
	var rightBind;
	$(window).resize(function(){
		getDimensions();
		repMap();
	});
	function getDimensions(){
		var winW = $(window).width();
		var mapW = $('#theMap').width();
		rightBind = (mapW - winW)*-1;
		var winH = $(window).height();
		var mapH = $('#theMap').height();
		bottomBind = (mapH - winH)*-1;
		$('#mmSite').css({'height':$(window).height()/10,'width':$(window).width()/10});
	};
	function repMap(){
		var mapLeft = $('#mapGroup').css('left').substring(0, $('#mapGroup').css('left').length-2);
		var mapBottom = $('#mapGroup').css('top').substring(0, $('#mapGroup').css('top').length-2);
		if(mapLeft>0){
			$('#mapGroup').stop().animate({left:'0px'},{duration:1500,queue: false},'swing');
		} else if(mapLeft<rightBind){
			$('#mapGroup').stop().animate({left:rightBind+'px'},{duration:1500,queue: false},'swing');
		};
		if(mapBottom>0){
			$('#mapGroup').animate({top:'0px'},{duration:1500,queue: false},'swing');
		} else if(mapBottom<bottomBind){
			$('#mapGroup').animate({top:bottomBind+'px'},{duration:1500,queue: false},'swing');
		};
		setTimeout(minPos,1500);
	};
// Draggable Functions - end
	getDimensions();
// Sliding Nav - start
	function xToBurgie(){
		$('nav').animate({left: '-130px'}, 1500, 'swing', function(){
			$('#close').empty().append('|||');
			$('#close').css('-webkit-transform','rotate(90deg)'); 
			$('#close').css('-moz-transform','rotate(90deg)');
			$('#close').css('transform','rotate(90deg)');
		});
		$('#close').off('click').on('click', burgieToX);	
	};
	function burgieToX(){
		$('nav').animate({left: '0px', height: '600px'}, 1500, 'swing', function(){
			$('#close').empty().append('X');
			$('#close').css('-webkit-transform','rotate(0deg)'); 
			$('#close').css('-moz-transform','rotate(0deg)');
			$('#close').css('transform','rotate(0deg)');
		});
		$('#close').off('click').on('click', xToBurgie);	
	};
	$('#close').on('click', xToBurgie);
// Sliding Nav - end
	$('#loc1').on('click', function(){
		$('#mapGroup').stop().animate({top: '0px', left: '0px'}, 1000, 'swing', function(){
			$('.popup').css({top: '0px', opacity: '0'});
			$('#pop1').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
		$('#loc2').on('click', function(){
		$('#pop1').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-721px', left: '-100px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop2').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
			$('#loc3').on('click', function(){
		$('#pop2').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-1059px', left: '-100px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop3').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
	
	
			$('#loc4').on('click', function(){
		$('#pop3').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-1259px', left: '100px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop4').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
	
				$('#loc5').on('click', function(){
		$('#pop4').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-1570px', left: '-130px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop5').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
	
				$('#loc6').on('click', function(){
		$('#pop5').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-1500px', left: '530px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop6').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
	
				$('#loc7').on('click', function(){
		$('#pop6').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-1900px', left: '230px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop7').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
	
			$('#loc8').on('click', function(){
		$('#pop7').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-2700px', left: '130px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop8').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
	
			$('#loc9').on('click', function(){
		$('#pop8').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-2450px', left: '-360px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop9').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';	
		});
	
	});
	
			$('#loc10').on('click', function(){
		$('#pop9').css({opacity:'0'});
		$('#mapGroup').stop().animate({top: '-3050px', left: '-360px'}, 1000, 'swing', function(){
		$('.popup').css({top: '0px', opacity: '0'});
			$('#pop10').animate({top: '60px', left: '180px', opacity: '1'}),1500, 'swing';
			
		
		});
	
	});
	
});


const cursor= document.querySelector('.cursor');

document.addEventListener('mousemove', e =>{
	cursor.setAttribute("style","top: "+(e.pageY-10) +"px; left: "+(e.pageX-130) +"px;" )
})




















