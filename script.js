alert("press 'f' to toggle fullscreen");

let fsc = false;

document.addEventListener("keypress", (e) => {
    if (e.key == 'f' && !fsc) {
        document.querySelector("body").requestFullscreen();
        fsc = true;
    } else {
        document.exitFullscreen();
        fsc = false;
    }
});