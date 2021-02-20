document.addEventListener("DOMContentLoaded", () => {


    const togglenav = document.querySelector('#togglenav');
    const menuIcon = document.querySelector('#menu_icon');
    const slicknavbar = document.querySelector('#navbarSupportedContent');

    const sLinks = document.querySelectorAll('.s-menu a');
    const socialIcons = document.querySelectorAll('.social-icons li');

    var toptiptapCount = 0;
    
    socialIcons.forEach(icon => {
        const tooltip = icon.children[1];
        
        icon.onclick = (e) => {
            if(tooltip != undefined && toptiptapCount > 0){
                tooltip.style.display == "none" ? tooltip.style.display = "block" : tooltip.style.display = "none";
                
            }
            toptiptapCount ++;
        }
        
    });

    sLinks.forEach(link => {
        link.onclick = () => {
            slicknavbar.classList.remove('show');
            menuIcon.className = "menu_icon_wrapper";
        }
    });
    
    togglenav.addEventListener("click", () =>{
        if(menuIcon.className == "menu_icon_wrapper"){
            menuIcon.className = "active_menu_icon_wrapper";
        }
        else{
            menuIcon.className = "menu_icon_wrapper";
        }
    })



    window.addEventListener('scroll', ()=>{

        stickyNavbar('customNavbar');

    })


    function stickyNavbar(id){
        const socialIconsBar = document.querySelector('#social-icons-bar');
        
		const cnavbar = document.querySelector(`#${[id]}`);
		const sticky = cnavbar.offsetTop;
		if(window.pageYOffset >= sticky+300){
			cnavbar.classList.add('NavbarSticky');
            socialIconsBar.classList.add('fixed-s-i');
            socialIconsBar.previousElementSibling.style.display = "block";
		}
		else{
			cnavbar.classList.remove('NavbarSticky');
            socialIconsBar.classList.remove('fixed-s-i');
            socialIconsBar.previousElementSibling.style.display = "none";
		}
	}

    toggleNavLinkClass('menu');
    toggleNavLinkClass('s-menu');

    // cann't sync between different viewport 
    function toggleNavLinkClass(menu){
        const navItems = document.querySelectorAll(`.${menu} li`);
        navItems.forEach(navItem => {
            navItem.onclick = () => {
                navItems.forEach(item => {
                    if(item.classList.contains('active')){
                        item.classList.remove('active');
                    }
                })
                navItem.classList.add('active');

            }

        });
    }  

});