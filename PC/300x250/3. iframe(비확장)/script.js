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
const cubeControl = document.getElementsByClassName( "bidrichCube-control" );
$(cubeControl).fadeOut(0);

//mouseover
function controlPop(){
	$(cubeControl).fadeIn(300);
}
//mouseleave
function controlnone(){
	$(cubeControl).fadeOut(300);
	bidrichCube.style.animation = 'rotate 10s linear infinite';
	cubeplay.style.display = "";
}

function MouseOn(){
	timer = setTimeout(controlPop, 500);
}
function MouseOut(){
	timer = setTimeout(controlnone, 1000);
}


