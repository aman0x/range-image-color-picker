	$(document).ready(function(){
	//localStorage.removeItem('t',this.value);
	$('#intp').keyup(function(e){
				if(this.value.match(/^\d+$/) != null){
   					localStorage.setItem('t',this.value);
	   				if($('#intp').val() >= 500){
		   				localStorage.setItem('t','0');
		   				alert('out of limit');
		   			}
					$('canvas').trigger('click', function(e) {
				
					});
				}	
				else{
					$("#errmsg").html("Digits Only").show().fadeOut("slow");
            		return false;
   				}	
	
	})
	
		
	});
	
(function($){
	$.fn.canvasify = function(f){ 
		return this.map(function(){
			if (this.nodeName=="IMG"){
				var canvas=$('<canvas>')
				this.src = this.src 
				$(this).one('load',function(){
					canvas.attr({width:this.width,height:this.height})
					canvas[0].getContext('2d').drawImage(this,0,0,this.width,this.height)
					$(this).replaceWith(canvas)
				})
				return canvas[0]
			}else{
				return this
			}
		})
		
	}
	function Rgba(rgba){
		this.rgba = rgba
		this.toString = function(){ return "rgba("+Array.prototype.join.call(this.rgba,',')+")" }
	}
	$.Event.prototype.rgba=function(){ 
		var x =  localStorage.getItem('t');
		y =  10,
		nodeName = this.target.nodeName
		if (nodeName==="CANVAS") {
			return new Rgba(this.target.getContext('2d').getImageData(x,y,1,1).data)
		}
		else if (nodeName==="IMG"){ alert('img');
			var canvas=document.createElement("canvas")
			canvas.width=1
			canvas.height=1
			canvas.getContext('2d').drawImage(this.target,x,y,1,1,0,0,1,1)
			return new Rgba(canvas.getContext('2d').getImageData(0,0,1,1).data)
		} else return null
	}
})(jQuery)
	$(function() {
		//$("section").append("<p class=rgba>");
		$("section").append("<img id='proimg' src='img/ind.png' >");
		$('img#colopic').canvasify().click(demo);
		$("section").append("<p class=lcolor>Mumbai :</p>");
		//$('img').trigger().click().canvasify();
		
		function demo(e){
			var rgba=e.rgba();
			section = $(this).parent();
			$('.lcolor').css('color',rgba);
			$('.lcolor').html('Mumbai :' + localStorage.getItem('t'));
			$("#proimg").css({'position':'relative','left' : localStorage.getItem('t')+'px'});
		
		function print(){
		var mwin = window.open('index.html','','width=200 ,height:100');
		alert( localStorage.getItem('t'));
		//mwin.document.wirte("<p>This</p>");
		//mwin.document.close();
		//mwin.print();
		mwin.focus();
		//mwin.document.write("<p>aman</p>");
		mwin.print('index.html');
		//mwin.close();
	}
		}
	});
	
	