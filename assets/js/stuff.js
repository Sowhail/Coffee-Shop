let nav = document.querySelector("nav")
let navButton = document.getElementById("navButton");


// mobile navigation button
function toggleMenu(event) {
    event.preventDefault();
    if (nav.classList.contains("enableNav")) {
        navButton.innerHTML = '<img src="assets/icons/navButton.svg" alt="navigation">'
        nav.classList.remove("enableNav")
    } else {
        navButton.innerHTML = '<img src="assets/icons/xmark.svg" alt="navigation">'
        nav.classList.add("enableNav")
    }
}


// scrolling by clicking navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 130; // Adjust the offset as needed
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            if (nav.clientWidth <= 720) {
                navButton.innerHTML = '<img src="assets/icons/navButton.svg" alt="navigation">'
                nav.classList.remove("enableNav")
            }
        }
    });
});



// Up button scrolling and changing footer opacity
let upButton = document.getElementById("upButton")
let footer = document.querySelector("footer")
window.addEventListener('scroll', () => {
    const Y = window.scrollY
    if (Y > 150) {
        upButton.style.display = 'block'; // Show the button when scrolled down
    } else {
        upButton.style.display = 'none'; // Hide the button when at the top
    }

    const footerPosition = footer.getBoundingClientRect().top + Y
    if(Y + window.innerHeight - 30 >= footerPosition) {
        footer.style.opacity = '1';
    } else {
        footer.style.opacity = '0';
    }
});

upButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});