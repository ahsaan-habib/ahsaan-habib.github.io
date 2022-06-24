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

  window.addEventListener("scroll", () => {
    stickyNavbar("customNavbar");
  });

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

  const projectNavLink = document.querySelectorAll(".dropdown-link");
  const projects = document.querySelectorAll(".project-class");

  const url = window.location;
  if (url.href.includes("#")) {
    console.log(url.hash);
    projects.forEach((project) => {
      project.style.display = "none";
    });
    const projectType = document.querySelectorAll(
      `.${url.hash.slice(1)}-project`
    );

    projectType.forEach((project) => {
      project.style.display = "block";
    });
    if (projectType.length === 0) {
      projects.forEach((project) => {
        project.style.display = "block";
      });
    }
  } else {
    projects.forEach((project) => {
      project.style.display = "block";
    });
  }

  projectNavLink.forEach((projectLink) => {
    projectLink.onclick = () => {
      projects.forEach((project) => {
        project.style.display = "none";
      });
      const projectType = document.querySelectorAll(
        `.${projectLink.hash.slice(1)}-project`
      );
      projectType.forEach((project) => {
        project.style.display = "block";
      });
    };
  });
});
