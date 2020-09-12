function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
    if (document.getElementsByClassNem("navigation")[0].classList.contains("responsive")) {
        document.getElementsByClassNem("navigation")[0].children[0].children[0].innerHTML = "&#9830; ";
    }
    else {
        document.getElementsByClassNem("navigation")[0].children[0].children[0].innerHTML = "&#9826; Menu";
    }
}