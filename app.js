document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk munculkan elemen saat masuk ke dalam tampilan
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;
  
    function checkPosition() {
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = element.getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
  
    checkPosition();
  
    // Fungsi untuk animasi scroll smooth saat tautan ditekan
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });