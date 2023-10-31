function showPage() {
    var select = document.getElementById("pageSelect");
    var selectedPage = select.options[select.selectedIndex].value;

    // Hide all pages
    var pages = document.getElementsByClassName("page-mainpage");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
        pages[i].style.opacity = 1;
    }

    // Show the selected page
    var page = document.getElementById(selectedPage);
    page.style.display = "block";
    page.style.opacity = 1;

    frame = document.getElementById(selectedPage+"frame");
    frame.src = frame.src

}

// Call the showPage function to display the initial selected page
showPage();