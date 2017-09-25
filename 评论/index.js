/*
* @Author: Thinkpad
* @Date:   2017-09-25 18:28:59
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-25 22:12:14
*/
window.addEventListener('load',function(){
	let text = document.querySelector('textarea');
	let btn = document.querySelector('button');
	let que = document.querySelector('.queding');
	let quyu = document.querySelector('.quyu');
	let span = quyu.querySelector('span');
	text.addEventListener('click',function(){
		animate(que,{opacity:1})
	})
	HTMLElement.prototype.prependChild = function(element){
			let first = this.firstElementChild;
			// console.log(first)
			if(first){
				this.insertBefore(element,first)
			}else{
				this.appendChild(element)
			}
		}

	btn.addEventListener('click',function(){
		que.style.opacity=0;
		let p =document.createElement('p');
		p.innerHTML=text.value;
		quyu.prependChild(p,span);
		span.style.opacity=0;
		text.value=null;
	})


});