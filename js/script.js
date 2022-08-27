menu.onclick = function dropList(){
    var x = document.getElementById("myTopNav");

    if (x.className === "topNav"){
        x.className += " responsive";
    } else {
        x.className = "topNav"
    }
}

/*
function changeBgImg(){
    var x = document.getElementById(intro);

    if (x.style.backgroundImage === "url('../img/intro/intro__background__main.jpg')"){
        x.style.backgroundImage = "url('../img/intro/intro__background__phone.jpg')"
    } else {
        x.style.backgroundImage = "url('../img/intro/intro__background__main.jpg')"
    };
}*/
