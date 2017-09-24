/*
* @Author: Thinkpad
* @Date:   2017-09-23 11:59:51
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-23 19:40:40
*/
window.onload = function(){
	let floor = document.querySelectorAll('.floor');
	// let imgs = document.querySelectorAll('img');
	let h = innerHeight;
	let floorarr=[]
	let aside = document.querySelectorAll('ul')[0];
	let lis = aside.querySelectorAll('li');
	let arr=['red','green','yellow','blue','pink']
	let sec=document.querySelector('section');
	let ret =document.querySelector('.return');
	floor.forEach(element=>{
		floorarr.push(element.offsetTop);
	})
	let flag =true;
	lis.forEach((element,index)=>{
		element.onclick=function(){
			
			for(let i=0;i<arr.length;i++){
			lis[i].style.background='none'
			}
			lis[index].style.background=arr[index];
			flag=false;
			animate(document.body,{scrollTop:floorarr[index]},function(){
				flag=true;
			});

		}
	})
	ret.onclick=function(){
		animate(document.body,{scrollTop:0})	
	}
	window.onscroll=function(){
		if(!flag){
			return;
		}
		let top = document.body.scrollTop;
		if(top>=300){
			animate(sec,{opacity:1})
		}else{
			animate(sec,{opacity:0})
		}
		if (top>0) {
			ret.style.opacity=1;
		}else{
			ret.style.opacity=0;
		}
		
		floorarr.forEach((value,index)=>{
			if(top+h>=value+200){
				let imgs = floor[index].getElementsByTagName('img');
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].getAttribute('newsrc')

				} 
				for(let i=0;i<arr.length;i++){
					lis[i].style.background='none'
				}
				lis[index].style.background=arr[index];
			}
		 })
	}
	

	
	//  
	
}