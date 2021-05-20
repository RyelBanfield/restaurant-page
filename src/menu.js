const renderMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add(
    "menuDiv",
    "container",
    "d-flex",
    "flex-wrap",
    "justify-content-evenly"
  );

  const cardOne = document.createElement("div");
  cardOne.innerHTML = `
  <div class="card hvr-pulse" style="width: 18rem;">
    <img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Single Slice</h5>
      <p class="card-text">Hungry and need a quick bite?</p>
    </div>
  </div>`;
  menu.appendChild(cardOne);

  const cardTwo = document.createElement("div");
  cardTwo.innerHTML = `
  <div class="card hvr-pulse" style="width: 18rem;">
    <img src="https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Something Cheezy</h5>
      <p class="card-text">Get extra cheesy with this one.</p>
    </div>
  </div>`;
  menu.appendChild(cardTwo);

  const cardThree = document.createElement("div");
  cardThree.innerHTML = `
  <div class="card hvr-pulse" style="width: 18rem;">
    <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Pepperoni</h5>
      <p class="card-text">Good old pepperoni.</p>
    </div>
  </div>`;
  menu.appendChild(cardThree);

  const cardFour = document.createElement("div");
  cardFour.innerHTML = `
  <div class="card hvr-pulse" style="width: 18rem;">
    <img src="https://images.pexels.com/photos/2741457/pexels-photo-2741457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Cheezy Beef</h5>
      <p class="card-text">The name says it all.</p>
    </div>
  </div>`;
  menu.appendChild(cardFour);

  return menu;
};
export default renderMenu;
