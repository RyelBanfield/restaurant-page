const renderMain = () => {
  const main = document.createElement("main");
  main.classList.add("main", "container", "text-center", "mt-5");

  const mainAboutUsHeader = document.createElement("h2");
  mainAboutUsHeader.innerHTML = "About Us";
  main.appendChild(mainAboutUsHeader);

  const mainAboutUsContent = document.createElement("p");
  mainAboutUsContent.classList.add("fs-4");
  mainAboutUsContent.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis ac dui quis rhoncus. Nullam sodales lobortis blandit. Aliquam facilisis mi vitae sapien bibendum tincidunt. Sed iaculis nisl eget ipsum fermentum, eu faucibus lectus egestas. Nulla ac varius lorem. Vestibulum sodales elit id nisi placerat hendrerit. Nam faucibus lacus in enim bibendum ultrices.";
  main.appendChild(mainAboutUsContent);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("d-flex", "justify-content-evenly", "mt-5");

  const hoursDiv = document.createElement("div");
  const mainHoursHeader = document.createElement("h3");
  mainHoursHeader.innerHTML = "Hours";
  hoursDiv.appendChild(mainHoursHeader);

  const mainHoursContent = document.createElement("p");
  mainHoursContent.innerHTML = `
  Sunday: 8am - 8pm</br>
  Monday: 6am - 6pm</br>
  Tuesday: 6am - 6pm</br>
  Wednesday: 6am - 6pm</br>
  Thursday: 6am - 10pm</br>
  Friday: 6am - 10pm</br>
  Saturday: 8am - 10pm</br>`;
  hoursDiv.appendChild(mainHoursContent);

  const locationDiv = document.createElement("div");
  const mainLocationHeader = document.createElement("h3");
  mainLocationHeader.innerHTML = "Location";
  locationDiv.appendChild(mainLocationHeader);

  const mainLocation = document.createElement("p");
  mainLocation.innerHTML = "Just Somewhere Nice.";
  locationDiv.appendChild(mainLocation);

  infoDiv.append(hoursDiv, locationDiv);
  main.appendChild(infoDiv);

  return main;
};
export default renderMain;
