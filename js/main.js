document.addEventListener("DOMContentLoaded", function() {
  let currentPage = 1;
  const pages = document.querySelectorAll('.page');

  function showPage(pageNumber) {
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'block';
  }

  function nextPage() {
    if (currentPage < pages.length) {
      currentPage++;
      showPage(currentPage);
    }
  }

  function previousPage() {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  }

  function handleSideTouchOrClick(event) {
    const screenWidth = window.innerWidth;
    const touchX = event.type === "touchstart" ? event.touches[0].clientX : event.clientX;

    if (touchX > screenWidth / 2) {
      nextPage();
    } else {
      previousPage();
    }
  }

  document.addEventListener("touchstart", handleSideTouchOrClick);
  document.addEventListener("click", handleSideTouchOrClick);

  showPage(currentPage); // Mostrar la primera página al cargar la página
  });