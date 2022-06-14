const ul = document.getElementsByTagName("ul")[0];

const svg = document.getElementsByTagName("svg")[0];

const svgPath = document.getElementsByTagName("path")[1];

const mediaQuery = window.matchMedia('(min-width: 1200px)');

var navExpanded = false;

svg.onclick = () => {

    navExpanded = !navExpanded;

    if (navExpanded) {
        svgPath.setAttribute("d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z");
        ul.style.display = "flex";
        return;
    }

    svgPath.setAttribute("d", "M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z");
    ul.style.display = "none";
}

window.onresize = () => {

    if (!mediaQuery.matches && navExpanded) {
        ul.style.display = "flex";
        return;
    }

    if (!mediaQuery.matches && !navExpanded) {
        ul.style.display = "none";
        return;
    }

    ul.style.display = "flex";

}