class MobileNavbar{
    constructor(mobileMenu, navList, navLinks, ){
       this.mobileMenu = document.querySelector (mobileMenu);
       this.navList = document.querySelector (navList);
       this.navLinks = document.querySelectorAll(navLinks);
       this.menuItems1 = document.querySelector('.menu a[href^="#home"]');
       this.menuItems2 = document.querySelector('.menu a[href^="#about"]');
       this.menuItems3 = document.querySelector('.menu a[href^="#inst"]');
       this.menuItems4 = document.querySelector('.menu a[href^="#contat"]');
       this.activeClass = "active";
       

       this.handleClick = this.handleClick.bind(this);
    }


    animateLinks(){
        this.navLinks.forEach((link) => {
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation=' navLinkFade 0.5s ease forwards 0.3s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();


    }
    
    

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.menuItems1.addEventListener("click", this.handleClick);
        this.menuItems2.addEventListener("click", this.handleClick);
        this.menuItems3.addEventListener("click", this.handleClick);
        this.menuItems4.addEventListener("click", this.handleClick);
        
    }

    init(){
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }

    
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();



