
// Get the button
let my_scroll_up_btn = document.getElementById("my_scroll_up_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(), mySticky()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        my_scroll_up_btn.style.display = "block";
    } else {
        my_scroll_up_btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// for sticky nav
let header = document.getElementById("my_nav");
let sticky = header.offsetTop;

function mySticky() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
}

// for dark theme
    const change_theme = document.body;
    const moon = document.getElementById('moon');

    moon.onclick = function() {
        change_theme.classList.toggle('dark_theme');
        if(change_theme.classList.contains('dark_theme')){
            moon.src="image/sun.png";
        }else{
            moon.src="image/moon.png";
        }
        
    }