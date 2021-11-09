document.addEventListener("DOMContentLoaded", () => {
  const togglenav = document.querySelector("#togglenav");
  const menuIcon = document.querySelector("#menu_icon");
  const slicknavbar = document.querySelector("#navbarSupportedContent");

  const sLinks = document.querySelectorAll(".s-menu a");
  const socialIcons = document.querySelectorAll(".social-icons li");

  var toptiptapCount = 0;

  socialIcons.forEach((icon) => {
    const tooltip = icon.children[1];

    icon.onclick = (e) => {
      if (tooltip != undefined && toptiptapCount > 0) {
        tooltip.style.display == "none"
          ? (tooltip.style.display = "block")
          : (tooltip.style.display = "none");
      }
      toptiptapCount++;
    };
  });

  sLinks.forEach((link) => {
    link.onclick = () => {
      slicknavbar.classList.remove("show");
      menuIcon.className = "menu_icon_wrapper";
    };
  });

  togglenav.addEventListener("click", () => {
    if (menuIcon.className == "menu_icon_wrapper") {
      menuIcon.className = "active_menu_icon_wrapper";
    } else {
      menuIcon.className = "menu_icon_wrapper";
    }
  });

  const hAnimWrapper = document.querySelector(".h-content-wrapper");
  const hFront = document.querySelector("#h-front");
  const hBack = document.querySelector("#h-back");

  function changeHeadingAnimation() {
    if (
      hFront.classList.contains("hf-effect") &&
      hBack.classList.contains("hb-effect")
    ) {
      hFront.classList.remove("hf-effect");
      hBack.classList.remove("hb-effect");
    } else {
      hFront.classList.add("hf-effect");
      hBack.classList.add("hb-effect");
    }
  }

  var headingAnimCounter = 0;

  var haedingAnim = setInterval(() => {
    changeHeadingAnimation();
    headingAnimCounter++;
    if (headingAnimCounter > 50) {
      clearInterval(haedingAnim);
    }
  }, 4000);

  hAnimWrapper.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    clearInterval(haedingAnim);
  });

  hAnimWrapper.addEventListener("mouseover", (e) => {
    e.stopImmediatePropagation();
    clearInterval(haedingAnim);
  });

  hAnimWrapper.addEventListener("mouseleave", (e) => {
    e.stopImmediatePropagation();
    setTimeout(() => {
      changeHeadingAnimation();
    }, 4000);
  });

  const hImageBox = document.querySelector(".effect_art");
  const hContWrap = document.querySelector(".h-content-wrap");
  //NB: must translateY -5% in css in content

  // dependecy of floatingOnScroll function
  if (window.scrollY > hContWrap.offsetTop + hContWrap.offsetHeight) {
    var ini = 5;
  } else {
    var ini = -5;
  }

  // dependecy of floatingOnScroll function
  var prevPoint = window.scrollY;

  window.addEventListener("scroll", () => {
    stickyNavbar("customNavbar");
    floatingOnScroll(hContWrap, 50);
    floatingOnScroll(hImageBox, 10);
  });

  function floatingOnScroll(content, speed) {
    if (
      window.scrollY + window.innerHeight > content.offsetTop &&
      window.scrollY < content.offsetTop + content.offsetHeight
    ) {
      if (window.scrollY - prevPoint > 0) {
        if (ini > 5) {
          ini = 5;
        }
        var inc = ini + speed / content.offsetHeight;
      } else {
        if (ini < -5) {
          ini = -5;
        }
        var inc = ini - speed / content.offsetHeight;
      }
      ini = inc;
      content.style.transform = `translateY(${inc}%)`;
      prevPoint = window.scrollY;
    }
  }

  function stickyNavbar(id) {
    const socialIconsBar = document.querySelector("#social-icons-bar");
    const headerContent = document.querySelector("#header-content");

    const cnavbar = document.querySelector(`#${[id]}`);
    const sticky = cnavbar.offsetTop;
    if (window.pageYOffset >= sticky + 300) {
      cnavbar.classList.add("NavbarSticky");
      socialIconsBar.classList.add("fixed-s-i");
      socialIconsBar.previousElementSibling.style.display = "block";
      headerContent.classList.add("sticky-content");
    } else {
      cnavbar.classList.remove("NavbarSticky");
      socialIconsBar.classList.remove("fixed-s-i");
      socialIconsBar.previousElementSibling.style.display = "none";
      headerContent.classList.remove("sticky-content");
    }
  }

  toggleNavLinkClass("menu");
  toggleNavLinkClass("s-menu");

  // cann't sync between different viewport
  function toggleNavLinkClass(menu) {
    const navItems = document.querySelectorAll(`.${menu} li`);
    navItems.forEach((navItem) => {
      navItem.onclick = () => {
        navItems.forEach((item) => {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
          }
        });
        navItem.classList.add("active");
      };
    });
  }
});
