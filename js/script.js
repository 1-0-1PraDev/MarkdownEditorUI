const sideMenuBtn = document.querySelector(".menuBx");
const sideBarMenu = document.querySelector(".side-menu");
const menuIcon = document.querySelector(".menuBx span");
const contentContainer = document.querySelector(".content-container");

let closeMenuIcon = "close";
let openMenuIcon = "menu";
let isMenuClicked = false;

const toggleMenu = () => {
    sideBarMenu.classList.toggle('active');
    contentContainer.classList.toggle('active');
    if(!isMenuClicked){
        // menuIcon.classList[0].replace();
        menuIcon.innerText = "";
        menuIcon.innerText = `${closeMenuIcon}`;
    }else{
        menuIcon.innerText = "";
        menuIcon.innerText = `${openMenuIcon}`;
    }
    isMenuClicked = !isMenuClicked;
    console.log(menuIcon.classList[0])
}



sideMenuBtn.addEventListener("click", toggleMenu);
