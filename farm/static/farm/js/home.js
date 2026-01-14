// Hamburger menu behavior for Summer Wind Farm

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove focus/active styling when menu closes
    navbarCollapse.addEventListener('hidden.bs.collapse', function() {
        navbarToggler.blur();
        navbarToggler.classList.remove('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbarCollapse.contains(event.target);
        const isClickOnToggler = navbarToggler.contains(event.target);
        const isNavOpen = navbarCollapse.classList.contains('show');
        
        if (!isClickInsideNav && !isClickOnToggler && isNavOpen) {
            // Trigger Bootstrap collapse close
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            navbarToggler.blur();
            navbarToggler.classList.remove('active');
        }
    });
    
    // Close menu when clicking on any nav link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            navbarToggler.blur();
            navbarToggler.classList.remove('active');
        });
    });
});