Rotate3d = {
	init: function() {
		Rotate3d.box3dbg = document.getElementById( "bidrich-cube" );
		Rotate3d.box3d = document.getElementById( "bidrichCube" );
		Rotate3d.box3d.style.setProperty("transition", "1s");
		// control
		cubeleft = document.getElementById("leftbtn");
		cuberight = document.getElementById("rightbtn");
		
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
	},
}
window.addEventListener( 'DOMContentLoaded', Rotate3d.init, false );
//mouseleave
function cubeplay(){
	bidrichCube.style.animation = 'rotate 10s linear infinite';
}
function MouseOut(){
	timer = setTimeout(cubeplay, 1000);
}

