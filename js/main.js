// change nav when scroll
window.addEventListener("scroll", function () {
  var nav = document.getElementById("navbar-example2");
  if (window.scrollY > 100) {
    nav.classList.add("scrolled-nav");
    nav.classList.remove("bg-transparent");
  } else {
    nav.classList.remove("scrolled-nav");
    nav.classList.add("bg-transparent");
  }
});

document.addEventListener('DOMContentLoaded', function() {
 
  const filterBtns = document.querySelectorAll('.portfolio-filters .nav-link');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      

      filterBtns.forEach(b => b.classList.remove('active'));
      

      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Back to top button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });
  
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});