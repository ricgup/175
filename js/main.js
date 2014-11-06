	// preload the given total amount of images
	function preload(totalImages) {

		//append li's equivalent to total no of images
		for(var j = 0; j < totalImages; j++) {
			$("#pageHeight").append("<li id='listitem_"+j+"00' data-frame='"+j+"'> I am in frame no :"+j+"</li>")
		}

		function fetch(url) {
		  var image = new Image();
		  image.src = url;
		}
		
		for (var i = 0; i < totalImages; i++) {
			fetch(getImgUrl(i));
		}
	}
	
	function getImgUrl(num) {
		return "images/image" + num + ".jpg";
	}
	
	function changeImgSrcOnScroll (position) {
		var imageNo;
		imageNo = parseInt(position/100);
		$('.movieArea img').attr({'src':'images/image'+imageNo+'.jpg'});
	}
	
	function showHotspot(ele){
		$(ele).css({
			"display": "block"
		})
	}
	
	function hideHotspot(ele){
		$(ele).css({
			"display": "none"
		})
	}
	
	function moveHotspot(ele){
		$(ele).css({
			"background-size": "3%",
			"opacity": "1"
		})
	}

	function moveHotspotout(ele){
		$(ele).css({
			"opacity": "0"
		})
	}

	$('.icon').on('click', function() {
		showHotspot('.hotspot1');
	})
	
	
	$('.nav a').on('click', function() {
		var startFrameNo;
		var stopFrameNo;
		var startFramePos = $(window).scrollTop();
		var stopFramePos = $(this).attr('href').split('_')[1];

		//console.log('startFramePos', startFramePos);
		//console.log('stopFramePos', stopFramePos);

		var stopFrameNo = $($(this).attr('href')).data('frame');
		
		//console.log('stopFrameNo', stopFrameNo);

		startFrameNo = parseInt(startFramePos/100);

		//console.log('startFrameNo', startFrameNo);

		if(startFramePos < stopFramePos) { 
			var startAnimation = setInterval(function() {
				$('.movieArea img').attr("src", 'images/image'+startFrameNo+'.jpg');
				console.log('images/image'+startFrameNo+'.jpg');
				startFrameNo++;
				if(startFrameNo == stopFrameNo) {
					clearInterval(startAnimation);
				}
			}, 50)
		}else if(startFramePos == stopFramePos) {
			console.log('equal do nothing');
		} else {
			var startAnimation = setInterval(function() {
				$('.movieArea img').attr("src", 'images/image'+startFrameNo+'.jpg');
				startFrameNo--;
				if(startFrameNo == stopFrameNo) {
					clearInterval(startAnimation);
				}
			}, 50)
		}
	});
	

	$(window).scroll(function () { 
		var scrollpos = $(window).scrollTop();
		console.log(scrollpos);
		if(scrollpos >= 100 && scrollpos <= 101) {
			$( window ).tween({
				scroll:{
					stop: 4100,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 3900 && scrollpos <= 3901) {
			$( window ).tween({
				scroll:{
					stop: 0,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 4300 && scrollpos <= 4301) {
			$( window ).tween({
				scroll:{
					stop: 8000,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 7800 && scrollpos <= 7801) {
			$( window ).tween({
				scroll:{
					stop: 4000,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 8100 && scrollpos <= 8101) {
			$( window ).tween({
				scroll:{
					stop: 12000,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 11900 && scrollpos <= 11901) {
			$( window ).tween({
				scroll:{
					stop: 8000,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 12100 && scrollpos <= 12101) {
			$( window ).tween({
				scroll:{
					stop: 16100,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 16100 && scrollpos <= 16101) {
			$( window ).tween({
				scroll:{
					stop: 19340,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 15900 && scrollpos <= 15901) {
			$( window ).tween({
				scroll:{
					stop: 12000,
					time: 0,
					duration: 3,
					effect:'easeInOut'
				}
			});
		$.play();
		}
		if(scrollpos >= 2200 && scrollpos <= 2600 ) {
		//	showHotspot('.icon');
			moveHotspot('.icon');
		} else {
		//	moveHotspotout('.icon');
		//	hideHotspot('.icon');
		}
		if(scrollpos >= 5100 && scrollpos <= 5400 ) {
			showHotspot('.hotspot2');
		} else {
			hideHotspot('.hotspot2');
		}
		if(scrollpos >= 18900 && scrollpos <= 19000 ) {
			showHotspot('.hotspot3');
		} else {
			hideHotspot('.hotspot3');
		}
		
		$('.showscrollpos').text(scrollpos);
		changeImgSrcOnScroll(scrollpos);
	});

	$('document').ready(function() {
		preload(200);
	})