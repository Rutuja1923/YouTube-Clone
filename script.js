const menuIcon = document.querySelector("#hamburger");
const sideBar = document.querySelector(".side-bar")

menuIcon.onclick=function(){
    sideBar.classList.toggle("small-sidebar");
}