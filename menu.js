function openMenu(){
    document.getElementById("mobileMenu").style.marginLeft = "0px";
    document.getElementById("closeButton").style.display = "flex";
    document.getElementById("openButton").style.display = "none";
}

function closeMenu(){
    document.getElementById("mobileMenu").style.marginLeft = "-1100px";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("openButton").style.display = "flex";
}