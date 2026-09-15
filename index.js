let menuBtn = document.querySelector(".navmenu");

let menuList = document.querySelector(".navmenulist");

let courseBtn = document.querySelector(".coursemenu");

let courseList = document.querySelector(".coursemenulist");

let menuIsOpen = false;
let coursemenuIsOpen = false;

void function () {
    menuList.style.display = "none";
    courseList.style.display = "none";
}

menuBtn.onclick = function () {
    if (!menuIsOpen && !coursemenuIsOpen) {
        menuList.style.display = "block";
        courseList.style.display = "none"
        menuBtn.style.backgroundPosition = "center left 50px , center, center left 50px"
        menuIsOpen = true;
        coursemenuIsOpen = false;
    }
    else if (menuIsOpen && !coursemenuIsOpen) {
        menuList.style.display = "none";
        courseList.style.display = "none"
        menuBtn.style.backgroundPosition = "center , center left 50px, center left 50px"
        coursemenuIsOpen = false;
        menuIsOpen = false;
    }
    else if (menuIsOpen && coursemenuIsOpen) {
        menuList.style.display = "block";
        courseList.style.display = "none"
        menuBtn.style.backgroundPosition = "center left 50px , center, center left 50px"
        coursemenuIsOpen = false;
        menuIsOpen = true;
    }
}

courseBtn.onclick = function () {
    if (menuIsOpen && !coursemenuIsOpen) {
        menuList.style.display = "none";
        courseList.style.display = "block"
        menuBtn.style.backgroundPosition = " center left 50px, center left 50px, center"
        coursemenuIsOpen = true;
        menuIsOpen = true;
    }
}