const openSidebar = document.querySelector(".btnsidebar");
const overlay=document.querySelector(".overlay");
const sidebar=document.querySelector(".sidebar");
const closebtn = document.querySelector(".closebtn");

openSidebar.onclick=()=>{
  
    overlay.classList.add("show-overlay");
    sidebar.classList.add("showSidebar");
}

closebtn.onclick=()=>{
  
    overlay.classList.remove("show-overlay");
    sidebar.classList.remove("showSidebar");
}