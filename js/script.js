'use strict';Pace.on('done',function(){$('#preloader').hide();});$('#clock').countdown('2021/03/16').on('update.countdown',function(event){var $this=$(this).html(event.strftime(''
+'<span class="wraper-clock"><div class="value">%D</div><div class="value-label">Days</div></span><span class="sep">:</span>'
+'<span class="wraper-clock"><div class="value">%H</div><div class="value-label">Hours</div></span><span class="sep">:</span>'
+'<span class="wraper-clock"><div class="value">%M</div><div class="value-label">Minutes</div></span><span class="sep">:</span>'
+'<span class="wraper-clock"><div class="value">%S</div><div class="value-label">Seconds</div></span>'));});$(".img").on('mouseenter',function(){$(this).addClass("hover");}).on('mouseleave',function(){$(this).removeClass("hover");});$(window).on('load',function(){$('.flexslider').flexslider({animation:"fade",controlNav:true,directionNav:true,slideshowSpeed:5000,animationSpeed:1000,pauseOnAction:false,animationLoop:true,pauseOnHover:true});});var videotoolbar=document.querySelector(".video-control");if(videotoolbar){videotoolbar.addEventListener("click",function(e){var video=$("#video-slider").data("vide").getVideoObject();var button=e.target;if(!button.classList.contains("glyphicon-volume-up")&&!button.classList.contains("glyphicon-volume-off")){if(!button.classList.contains("glyphicon-pause")){video.play();button.classList.add("glyphicon-pause");button.classList.remove("glyphicon-play");}else{video.pause();button.classList.add("glyphicon-play");button.classList.remove("glyphicon-pause");};}else{if(!button.classList.contains("glyphicon-volume-up")){button.classList.add("glyphicon-volume-up");button.classList.remove("glyphicon-volume-off");}else{button.classList.add("glyphicon-volume-off");button.classList.remove("glyphicon-volume-up");};video.muted=!video.muted;};});};var audioplayer=document.getElementById("audio-player");var audiotoolbar=document.querySelector(".audio-control");if(audiotoolbar){audiotoolbar.addEventListener("click",function(e){var button=e.target;if(!button.classList.contains("glyphicon-volume-up")){audioplayer.play();button.classList.add("glyphicon-volume-up");button.classList.remove("glyphicon-volume-off");}else{audioplayer.pause();button.classList.add("glyphicon-volume-off");button.classList.remove("glyphicon-volume-up");};});};if(device.ios()||device.android()){$(".vide-video").addClass("hide");$(".vide-image").removeClass("hide");};function screenAdapter(){var screenHeight=$(window).height();$('.screen-adapter').css("height",screenHeight);};screenAdapter();$(window).resize(function(){screenAdapter();});if(!device.tablet()&&!device.mobile()){$('.animated-element').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated fadeInUp');},{offset:'90%'});});$('.animated-element-1').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated fadeIn');},{offset:'90%'});});$('.animated-element-2').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated zoomIn');},{offset:'90%'});});$('.animated-element-3').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated bounceInRight');},{offset:'90%'});});$('.animated-element-4').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated bounceInLeft');},{offset:'90%'});});$('.animated-element-5').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated fadeInLeft');},{offset:'90%'});});$('.animated-element-6').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated fadeInRight');},{offset:'90%'});});};$('.dropdown').on('mouseenter',function(){$('.dropdown-menu',this).stop(true,true).fadeIn("fast");$(this).toggleClass('open');$('b',this).toggleClass("caret caret-up");}).on('mouseleave',function(){$('.dropdown-menu',this).stop(true,true).fadeOut("fast");$(this).toggleClass('open');$('b',this).toggleClass("caret caret-up");});var navbar_transparent=$('.sticky-wrapper').waypoint(function(direction){if(direction==='down'){$("#navbar-transparent").removeClass("navbar-transparent");}else{$("#navbar-transparent").addClass("navbar-transparent");}},{offset:'-100%'});var sticky=new Waypoint.Sticky({element:$('.navbar')[0]});$("#block-main-form").validate({rules:{name:"required",message:"required",email:{required:true,email:true}},messages:{name:"Error",message:"Error",email:{required:"Error",email:"Error"}},submitHandler:function(form){$(".estatus").prop('disabled',true);$(".estatus").text('Wait...');$.ajax({type:"POST",url:"include/contact.php",data:$(form).serialize(),success:function(response){$('#success').html(response);var $this=$('.btn');$(".estatus").prop('disabled',false);setTimeout(function(){$this.button('reset');},4000);}});return false;}});$('.navbar-scroll a').smoothScroll({speed:1000,offset:-100});