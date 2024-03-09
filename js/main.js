document.addEventListener("DOMContentLoaded", function() {
    let currentPage = 1;
    const pages = document.querySelectorAll('.page');
  
    function showPage(pageNumber) {
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(`page${pageNumber}`).classList.add('active');
    }
  
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 37) { // Flecha izquierda
        currentPage = (currentPage === 1) ? 4 : currentPage - 1;
        showPage(currentPage);
      } else if (event.keyCode === 39) { // Flecha derecha
        currentPage = (currentPage === 4) ? 1 : currentPage + 1;
        showPage(currentPage);
      }
    });
  });