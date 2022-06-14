// Get svg and g elements
const svg = document.getElementsByTagName("svg")[0];
const g = svg.getElementsByTagName("g")[0];

// Get ul element
const ul = document.getElementsByTagName("ul")[0];

// Boolean checking if the min view port width matches 1200px
var mediaQuery = window.matchMedia('(min-width: 1200px)');

// Boolean checking if the nav list is expanded
var navExpanded = false;

// When user clicks on the nav icon
svg.onclick = () => {

    // Toggle navExpanded boolean
    navExpanded = !navExpanded;
    // Toggle SVG animation
    g.classList.toggle("nc-int-icon-state-b")

    // If nav list is expanded
    if (navExpanded) {
        // Display <ul>
        ul.style.display = "flex";
        return;
    }

    // Hide <ul>
    ul.style.display = "none";

}

// When window is resized
window.onresize = () => {

    // Bool : <ul> has display flex ?
    const isFlexUl = ul.style.display === "flex";

    // If window width < 1200 px and nav list is expanded
    if (!mediaQuery.matches && navExpanded) {
        // Display <ul>
        ul.style.display = "flex";
        return;
    }

    // If window width < 1200 px and nav list is not expanded
    if (!mediaQuery.matches && !navExpanded) {
        // Hide <ul>
        ul.style.display = "none";
        return;
    }

    // If window width >= 1200 px and <ul> is not displayed in flex
    if (!isFlexUl) {
        // Display <ul>
        ul.style.display = "flex";
    }

}