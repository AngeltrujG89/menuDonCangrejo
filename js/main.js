document.addEventListener("DOMContentLoaded", function() {
  let currentPage = 1;
  let isTransitioning = false; // Variable para controlar la transición de página
  const pages = document.querySelectorAll('.page');

  function showPage(pageNumber) {
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'block';
  }

  function nextPage() {
    if (!isTransitioning && currentPage < pages.length) {
      isTransitioning = true; // Bloquear transición
      currentPage++;
      showPage(currentPage);
      setTimeout(() => {
        isTransitioning = false; // Desbloquear transición después de un tiempo
      }, 500); // Tiempo de bloqueo en milisegundos
    }
  }

  function previousPage() {
    if (!isTransitioning && currentPage > 1) {
      isTransitioning = true; // Bloquear transición
      currentPage--;
      showPage(currentPage);
      setTimeout(() => {
        isTransitioning = false; // Desbloquear transición después de un tiempo
      }, 500); // Tiempo de bloqueo en milisegundos
    }
  }

  function handleSideTouchOrClick(event) {
    const screenWidth = window.innerWidth;
    const touchX = event.type === "touchstart" ? event.touches[0].clientX : event.clientX;

    // Definir un umbral para determinar si el toque o clic está en el lado izquierdo o derecho
    const threshold = screenWidth * 0.3; // Por ejemplo, un umbral del 30%

    if (touchX < threshold) {
      previousPage(); // Retroceder si el toque o clic está en el lado izquierdo
    } else if (touchX > screenWidth - threshold) {
      nextPage(); // Avanzar si el toque o clic está en el lado derecho
    }
  }

  document.addEventListener("touchstart", handleSideTouchOrClick);
  document.addEventListener("click", handleSideTouchOrClick);

  showPage(currentPage); // Mostrar la primera página al cargar la página
  });