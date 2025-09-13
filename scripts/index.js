function menuTap(){
    var navButtons=document.getElementById("navButtons");

    if(navButtons.classList.contains("navShow")) {
    navButtons.classList.remove("navShow");
    }

    else {
        navButtons.classList.add("navShow");
    }
    
}