// variables
const body = document.body;
const theme = localStorage.getItem("theme");
const text = localStorage.getItem("text");

var theme_switch = document.getElementById("theme-switcher");


let onpageLoad = localStorage.getItem("theme") || "";
if (onpageLoad != null && onpageLoad == "night") {
    theme_switch.checked = true;
    document.getElementById("theme-text").innerHTML = "dark mode";
} else {
    theme_switch.checked = false;
    document.getElementById("theme-text").innerHTML = "light mode";
}
body.classList.add(onpageLoad);

// apply on reload
if (theme) {
    body.classList.add(theme);
}

// button event handlers
function themeToggle() {
    if (theme_switch.checked) {
        localStorage.setItem("theme", "night");
        body.classList.replace("day", "night");
        document.getElementById("theme-text").innerHTML = "dark mode";
        localStorage.setItem("text", "night");
    } else {
        localStorage.setItem("theme", "day");
        body.classList.replace("night", "day");
        document.getElementById("theme-text").innerHTML = "light mode";
        localStorage.setItem("text", "day");
    }
}