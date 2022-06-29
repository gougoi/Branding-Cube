Rotate3d = {
	init: function() {
		Rotate3d.box3dbg = document.getElementById( "bidrich-cube" );
		Rotate3d.box3d = document.getElementById( "bidrichCube" );
		Rotate3d.box3d.style.setProperty("transition", "1s");

		// control
		cubeleft = document.getElementById("leftbtn");
		cuberight = document.getElementById("rightbtn");
		cubeUp = document.getElementById("upbtn");
		cubeDown = document.getElementById("downbtn");

		let i = 0;
		let ii = 0;
		
		function Rotate(rotateA,i,rotateB,ii){
			return Rotate3d.box3d.style.transform = `${rotateA}(${i}deg) ${rotateB}(${ii}deg)`;	
		}

		cubeleft.addEventListener('click', function(){
			bidrichCube.style.animation = "unset";
				i -= 90;
				ii=0
				Rotate('rotateY',i,'rotateX',0);	
		})
		cuberight.addEventListener('click', function(){
			bidrichCube.style.animation = "unset";
				i += 90;
				ii=0;
				Rotate('rotateY',i,'rotateX',0);

		})
		cubeUp.addEventListener('click', function(){
			bidrichCube.style.animation = "unset";
				ii += 90;
				i=0
				Rotate('rotateX',ii,'rotateY',0);
		})
		cubeDown.addEventListener('click', function(){ 
			bidrichCube.style.animation = "unset";
				ii -= 90;
				i=0
				Rotate('rotateX',ii,'rotateY',0);
		})
	},
}

window.addEventListener( 'DOMContentLoaded', Rotate3d.init, false );

// ele
const closeBtn = document.getElementsByClassName( "box_close_wrap" )[0];
const cubeContain = document.getElementsByClassName( "container" )[0];
const cubeControl = document.getElementsByClassName( "bidrichCube-control" );
const bidrichCube = document.getElementById( 'bidrichCube' );
const bidrichInfoMark = document.querySelector('#BIDRICH_InfoMark_box')

$(bidrichInfoMark).fadeOut(0);
$(cubeControl).fadeOut(0);

//mouseover
function cubePopup(){
	cubeContain.style.transform = 'scale3d(1,1,1)';
	// close btn show
	$(closeBtn).fadeIn(300);
	$(cubeControl).fadeIn(300);
	$('div.hover_alert').css('display','none');
	$('.box_close_none').fadeOut(300);
	$(bidrichInfoMark).fadeIn(300);

}

// close click
closeBtn.addEventListener('click', function() {
	cubeContain.style="";
	// close btn hide
	bidrichCube.style.transform = "unset";
	bidrichCube.classList.remove('cubestop');
	bidrichCube.classList.remove('cubeani');
	bidrichCube.style.animation = 'rotate 10s linear infinite';
	$('div.hover_alert').css('display','flex');
	$('.box_close_none').fadeIn(300);
	$(closeBtn).fadeOut(300);
	$(cubeControl).fadeOut(300);
	$(bidrichInfoMark).fadeOut(300);
})

// bidrich infomark
$('#BIDRICH_InfoMark_box').hover(function(){
	$('#info_icon').css("display","none");
	$('#advertis_icon').css("display","block");
}, function(){
	$('#advertis_icon').css("display","none");
	$('#info_icon').css("display","block");
});

function MouseOn(){
	timer = setTimeout(cubePopup, 500);
}

function none(){
	document.querySelector('#b-cube-box').style.display="none"
}

