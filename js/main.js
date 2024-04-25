let nav_text = document.querySelectorAll("#nav-text")
var btn = document.getElementById("btn")
var sidebarId= document.getElementById("sidebarId")
btn.onclick = function(){
    sidebarId.classList.toggle("sidebar-small");
    for(let i = 0 ;i<7 ; i++ ){
            nav_text[i].classList.toggle("nav-text")
    }

    
}
