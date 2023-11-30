var typed = new Typed(".texto-animado", {
    strings: ["Descubre el mundo y vive experiencias inolvidables"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 5000,
    loop: false
})

var typed = new Typed(".animation", {
    strings: ["A donde quieres viajar?"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 5000,
    loop: false
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


function clearPlaceholder() {
    document.getElementById("placeholder").placeholder = "";
}

function restorePlaceholder() {
    document.getElementById("placeholdert").placeholder = "A donde quieres viajar?";
}

function searchHotels() {
    var searchInput = document.getElementById("placeholder").value;
    if (searchInput.trim() !== "") {
        window.location.href = "hoteles.html";
    }
}

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.body.footer.add("active");
    } else {
        document.body.footer.remove("active");
    }
};
