let body = document.body;

/* Load saved theme */
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
} else {
    body.classList.add("light");
}

/* Toggle function */
function toggleTheme() {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    /* Save theme */
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}