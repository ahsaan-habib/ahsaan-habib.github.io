function toggleClass(element){
	var menu = document.getElementById('menu').children;
	for(var m = 0 ; m < menu.length ; m++){
		menu[m].className = 'normal_m';
	}
	element.className = 'active_m';
	hiddenMenu.className = "menu";
	menuIcon.className = "menu_icon_wrapper";
};



var hiddenMenu = document.getElementById('menu');

function toggleMenu(){
	if(hiddenMenu.className == "menu"){
		hiddenMenu.className = "menu_visible";
	}
	else{
		hiddenMenu.className = "menu";
	}
}




		var menuIcon = document.getElementById('menu_icon');

function toggleMenuSign(){
	if(menuIcon.className == "menu_icon_wrapper"){
		menuIcon.className = "active_menu_icon_wrapper";
	}
	else{
		menuIcon.className = "menu_icon_wrapper";
	}
}
