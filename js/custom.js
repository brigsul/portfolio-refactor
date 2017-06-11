/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "210px";
    document.getElementById("openButton").classList.add("hidden");
    document.getElementById("closeButton").classList.remove("hidden");
    document.getElementById("sidebar").classList.add("hidden");
}

function iconHover(element) {
    console.log(element.id);
    switch (element.id) {
        case "about":
            element.innerHTML = "ABOUT ME"
            element.style.lineHeight = "1.75rem";
            element.style.padding = "12px 0 8px 0";
            element.style.heigh = "25px";
            element.style.color = "#448AFF"
            break;
        case "skills":
            element.innerHTML = "SKILLS"
            element.style.lineHeight = "1.75rem";
            element.style.padding = "12px 0 8px 0";
            element.style.heigh = "25px";
            break;
        case "my-works":
            element.innerHTML = "MY WORKS"
            element.style.lineHeight = "1.75rem";
            element.style.padding = "12px 0 8px 0";
            element.style.heigh = "25px";
            break;
        case "contact":
            element.innerHTML = "CONTACT"
            element.style.lineHeight = "1.75rem";
            element.style.padding = "12px 0 8px 0";
            element.style.heigh = "25px";
            break;
        default:
            element.innerHTML = "TEST";
            element.style.lineHeight = "1.75rem";
            element.style.padding = "12px 0 8px 0";
            element.style.heigh = "25px";
    }
}

function textLeave(element) {
    element.innerHTML = ""
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("closeButton").classList.add("hidden");
    document.getElementById("openButton").classList.remove("hidden");
    document.getElementById("sidebar").classList.remove("hidden");
}