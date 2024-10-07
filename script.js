function lightswitch(){
    const body = document.body;
    const themeswitch = document.getElementById("light-switch");
    if (body.classList.contains("light-theme")){
        body.classList.remove("light-theme");
        themeButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
    } else {
        body.classList.add("light-theme");
        themeButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
    }
}
