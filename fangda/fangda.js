/*
* @Author: Thinkpad
* @Date:   2017-09-25 16:10:27
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-25 22:18:15
*/
window.addEventListener('load',function(){
	let box =document.querySelector('.box');
	let boxd=document.querySelector('.boxd');
	let zhe = document.querySelector('.zhe');
	let img1=box.querySelector('img');
	let img2=boxd.querySelector('img');
	let bili = img2.offsetWidth/img1.offsetWidth;
	console.log(bili)
	let sw = img1.offsetWidth,
		sh = img1.offsetHeight;
	let x1=zhe.offsetWidth/2,y1=zhe.offsetHeight/2
	let dw = img2.offsetWidth,
		dh = img2.offsetHeight;
		
	box.addEventListener('mousemove',function(e){
		let ox=e.offsetX,oy=e.offsetY;
		
		if(ox>=sw-x1){
			ox=sw-x1;
		}
		if(ox<=x1){
			ox=x1;
		}
		if(oy>=sh-y1){
			oy=sh-y1;
		}
		if(oy<=y1){
			oy=y1;
		}
		img2.style.left= -(ox * bili)+x1*2 +'px';
		img2.style.top= -(oy * bili)+y1*2+'px';
		zhe.style.opacity=1;
		zhe.style.left=ox-x1+'px';
		zhe.style.top=oy-y1+'px';
		
	})
	box.addEventListener('mouseout',function(){
		img2.style.left=0;
		img2.style.top=0;
		zhe.style.opacity=0;
	})

})	