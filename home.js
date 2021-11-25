let flag=0;
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