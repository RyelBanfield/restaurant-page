const renderNav = () => {
  const navbar = document.createElement("nav");
  navbar.classList.add(
    "navbar",
    "navbar-dark",
    "bg-dark",
    "d-flex",
    "justify-content-center"
  );
  navbar.innerHTML = `
  <ul class="navbar-nav flex-row">
    <li class="nav-item mx-3"> <a class='home nav-link hvr-pulse' href="#">Home</a> </li>
    <li class="nav-item mx-3"> <a class='menu nav-link hvr-pulse' href="#">Menu</a> </li>
    <li class="nav-item mx-3"> <a class='contact nav-link hvr-pulse' href="#">Contact</a> </li>
  </ul>`;
  return navbar;
};
export default renderNav;
