import HeaderImage from "./images/background.jpg";

const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerImage = new Image();
  headerImage.src = HeaderImage;
  headerImage.classList.add("header-image");
  header.appendChild(headerImage);

  const headerTextDiv = document.createElement("div");
  headerTextDiv.classList.add("header-text-div");
  header.appendChild(headerTextDiv);

  const headerText = document.createElement("h1");
  headerText.classList.add("header-text");
  headerText.innerHTML = "CaszNights";
  headerTextDiv.appendChild(headerText);

  return header;
};
export default renderHeader;
