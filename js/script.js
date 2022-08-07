const sideMenuBtn = document.querySelector(".menuBx");
const sideBarMenu = document.querySelector(".side-menu");
const menuIcon = document.querySelector(".menuBx span");
const contentContainer = document.querySelector(".content-container");

/* Side Bar Menu Functionality */
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


/* Light and Dark Theme Functionalities */
let rootEleCss = document.querySelector(":root");
let rootEleCssStyles = getComputedStyle(rootEleCss); 
let lightThemeBtn = document.querySelector(".light-theme-btn");
let darkThemeBtn = document.querySelector(".dark-theme-btn");
// console.log(rootEleCssStyles.getPropertyValue("--body-bg"));


/* Dark Theme Colors */
let lightTopFileBarBg = "rgba(255,255,255,1)";
let lightSaveBtnBg = "#03a9f4";
let lightSaveBtnClr = "#fff";
let lightHeaderTitleClr = "#fff";
let lighttabBg = "#4da4cd";
let lightEditorBg = "#fff";
let lightFaintTextClr = "#000";
let lightTextClr = "#feffff";
let lightMenuBg = "#03a9f4";
let lightFaintClrTwo = "rgba(0,0,0,0.65)";
let lightClrTwo = "rgba(0,0,0,0.65)";
let lightSideMenuClr = "#000";
// let darkCLr = "#fd5d00";

const changeThemeToLight = () => {
    rootEleCss.style.setProperty("--top-file-bar-bg", lightTopFileBarBg);
    rootEleCss.style.setProperty("--faint-text-clr", lightFaintTextClr);
    rootEleCss.style.setProperty("--editor-bg", lightEditorBg);
    rootEleCss.style.setProperty("--text-clr", lightTextClr);
    rootEleCss.style.setProperty("--save-btn-clr", lightSaveBtnClr);
    rootEleCss.style.setProperty("--save-btn-bg", lightSaveBtnBg);
    rootEleCss.style.setProperty("--faint-clr-two", lightFaintClrTwo);
    rootEleCss.style.setProperty("--dark-clr-two", lightClrTwo);
    rootEleCss.style.setProperty("--tab-bg", lighttabBg);
    rootEleCss.style.setProperty("--header-title-clr", "#000");
    rootEleCss.style.setProperty("--menu-bg", lightMenuBg);
    rootEleCss.style.setProperty("--side-menu-clr", lightSideMenuClr);
    rootEleCss.style.setProperty("--main-heading-clr", "#fff");
}   

let darkTopFileBarBg = "rgba(44, 45, 49, 1)";
let darkSaveBtnBg = "#e6663f";
let DarktabBg = "rgba(30, 31, 35, 1)";
let DarkEditorBg = "#15161a";
let DarkFaintTextClr = "#a5a6aa";
let DarkTextClr = "#feffff";
let DarkMenuBg = "#35383f";
let DarkFaintClrTwo = "rgba(255, 255, 255, 0.6)";
let DarkSideMenuClr = "#fff";

const changeThemeToDark = () => {
    rootEleCss.style.setProperty("--top-file-bar-bg", darkTopFileBarBg);
    rootEleCss.style.setProperty("--faint-text-clr", DarkFaintTextClr);
    rootEleCss.style.setProperty("--editor-bg", DarkEditorBg);
    rootEleCss.style.setProperty("--text-clr", DarkTextClr);
    rootEleCss.style.setProperty("--save-btn-clr", "#fff");
    rootEleCss.style.setProperty("--save-btn-bg", darkSaveBtnBg);
    rootEleCss.style.setProperty("--faint-clr-two", DarkFaintClrTwo);
    rootEleCss.style.setProperty("--dark-clr-two", "rgba(0,0,0,0.65)");
    rootEleCss.style.setProperty("--tab-bg", DarktabBg);
    rootEleCss.style.setProperty("--menu-bg", DarkMenuBg);
    rootEleCss.style.setProperty("--header-title-clr", "#a5a6aa");
    rootEleCss.style.setProperty("--main-heading-clr", DarkFaintTextClr);
    rootEleCss.style.setProperty("--side-menu-clr", DarkSideMenuClr);
}

lightThemeBtn.addEventListener("click", changeThemeToLight);
darkThemeBtn.addEventListener("click", changeThemeToDark);
