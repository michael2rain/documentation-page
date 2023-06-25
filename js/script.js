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

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
  });