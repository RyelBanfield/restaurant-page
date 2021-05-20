const renderFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
  <footer class="footer mt-4 py-3 bg-dark">
  <div class="container text-center">
    <span class="text-muted">&copy; Ryel Banfield 2021</span>
  </div>
  </footer>`;
  return footer;
};
export default renderFooter;