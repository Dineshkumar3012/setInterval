let intervalContainer = document.getElementById("interval_container");
let count= 0;
    
   function hi(name){
	   
	   if(count<5){
		let a = "Hi WELCOME";
		let pTag = document.createElement("p");
		intervalContainer.appendChild(pTag);
		count++;
		pTag.innerHTML += a ;
		}
   }
   
setInterval(hi,1000);
hi();