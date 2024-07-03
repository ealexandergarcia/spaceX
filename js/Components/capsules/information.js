export const informationCapsule = async (last_update) => {
  const container = document.createElement("div");
  container.classList.add("description__container");
  container.classList.add("bg__card")
  container.setAttribute("style","align-items: center;padding: 15px;")

  const img = document.createElement("img");
  img.src = "storage/img/icons/mech.svg";

  const title = document.createElement("h3");
  title.textContent = "Last Update";
  const desc = document.createElement("small");
  desc.textContent = last_update ? last_update : "No information available";

  const infoContainer = document.createElement("div");
  infoContainer.append(title, desc);

  container.append(img, infoContainer);

  const descriptionItem = document.querySelector("#information__2");
  // descriptionItem.append(container);

  const loadElement = descriptionItem.querySelector("div.load");

  descriptionItem.replaceChild(container, loadElement);
};

export const informationWebCapsule = async (dato,titles) => {
  
  const container = document.createElement("div");
  container.classList.add("description__container");
  container.classList.add("bg__card")
  container.setAttribute("style","padding: 15px;")


  const img = document.createElement("img");
  img.src = "storage/img/icons/mech.svg";

  const title = document.createElement("h3");
  title.textContent = "Learn more about the capsule and its launch";
  const link = document.createElement("a");
  link.href = dato;
  link.target = "_blank";
  link.textContent = titles;

  const linkContainer = document.createElement("div");
  linkContainer.append(title, link);

  container.append(img, linkContainer);

  const loadElement = document.querySelector("div.load");

  loadElement.parentNode.replaceChild(container, loadElement);
}