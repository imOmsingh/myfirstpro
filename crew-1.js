let element=document.getElementsByClassName("crew-text");
let eleimg=document.getElementsByClassName("crew-img");
let flag=0;
let newele;
let dot;
var start=0;
if (start==0){
	for (var i=0;i<element.length;i++){
		if (i==0){
		element[i].style.display="block";
		let newele=element[i].children;

		
		for (var j=0;j<newele.length;j++){
			newele[j].style.display="block";
			};
		let dot=newele[4].children;
		for (var k=0;k<dot.length;k++){
			dot[k].style.display="block";
		}
	}
		else{
			element[i].style.display="none";
			newele=element[i].children;
			for (var j=0;j<newele.length;j++){
				newele[j].style.display="none";
			}
			dot=newele[4].children;
			for (var k=0;k<dot.length;k++){
				
				dot[k].style.display="block";
			}
			

		};
	};
	

start=1;
eleimg[0].style.display="block";
};



function change(n){
	
	for (var i=0;i<element.length;i++){

		if (i==n){
			element[i].style.display="block";
			newele=element[i].children;
			console.log(newele);
			for (var j=0;j<newele.length;j++){
				newele[j].style.display="block";
			}
			let dot=newele[4].children;
			for (var k=0;k<dot.length;k++){
				dot[k].style.display="block";
				if(k==n){
					dot[k].style.borderStyle="solid";
				}
				
			}
		}
		else{
			element[i].style.display="none";
			console.log(element[i]);
			newele=element[i].children;
			for (var j=0;j<newele.length;j++){
				newele[j].style.display="none";
			}

		}
	}
	

	for (var i=0;i<eleimg.length;i++){
		if (i==n){
			eleimg[i].style.display="block";
		}
		else{
			eleimg[i].style.display="none";
		};
	};
};



function menubar(){
	menutoggle=document.querySelector(".menu-bar");
	menubut=document.getElementsByClassName("menu-but");
	if (flag==0){
		flag=1;
		menutoggle.style.display="block";
		menutoggle.style.animationName="menucont";
		
		Array.from(menubut).forEach(element =>{
		element.style.animationName="menutab";
		element.style.display="block";

	
	});
	}
	else{
		flag=0;
		menutoggle.style.display="none";
		menutoggle.style.animationName="none";
		Array.from(menubut).forEach(element =>{
			element.style.display="none";
		})
	}
};