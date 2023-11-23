var typed = new Typed(".texto-animado", {
    strings: ["Descubre el mundo, vive experiencia inolvidables"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 5000,
    loop: false
})

var typed = new Typed("#searchInput", {
    strings: ["A donde quieres ir?"],
    typeSpeed: 40,
    backSpeed: 110,
    backDelay: 6000,
    loop: true
})

function toggleMenu() {
    var dropdownMenu = document.getElementById("myDropdown");
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
}

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}


