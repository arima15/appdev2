function toggleDropdown(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === 'block' && !event.target.matches('#studentMenu') && !event.target.closest('#dropdownMenu')) {
        dropdown.style.display = 'none';
    }
}