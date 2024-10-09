const menuIcon = document.querySelector("#hamburger");
const sideBar = document.querySelector(".side-bar")
const container = document.querySelector(".main-container")
menuIcon.onclick=function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}