window.addEventListener('DOMContentLoaded', () => {
    
    const hammy = document.getElementById("hammyButton");
    let firstClick = true;
    
    hammy.onclick = function() {
        if (firstClick) {
            // Primer click
            const containerNav = document.getElementById("containerNav");
            containerNav.style.display = 'block';
            hammy.classList.toggle('opened');
            firstClick = false;
        } else {
            // Segundo click
            hammy.classList.remove("opened");
            const containerNav = document.getElementById("containerNav");
            containerNav.style.display = 'none';
            firstClick = true;
        }
    }
    
});