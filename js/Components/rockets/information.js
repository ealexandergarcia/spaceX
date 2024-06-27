export const informationRockets = async (country, description) => {
  const container = document.createElement("div");
  container.classList.add("description__container");

  const img = document.createElement("img");
  img.src = "storage/img/icons/mech.svg";

  const title = document.createElement("h3");
  title.textContent = country;
  const desc = document.createElement("small");
  desc.textContent = description;

  const infoContainer = document.createElement("div");
  infoContainer.append(title, desc);

  container.append(img, infoContainer);

  const descriptionItem = document.querySelector("#description__item");
  descriptionItem.append(container);

  const loadElement = document.querySelector("div.load");

  loadElement.parentNode.replaceChild(container, loadElement);
};

export const informationLaunchCostRocket = async (cost_per_launch) => {
  const container = document.createElement("div");
  container.classList.add("description__container");

  const img = document.createElement("img");
  img.src = "storage/img/icons/mech.svg";

  const title = document.createElement("h3");
  title.textContent = "The estimated cost per rocket launch";
  const cost = document.createElement("small");
  const formattedCost = new Intl.NumberFormat("cop").format(cost_per_launch);
  cost.textContent = `$ ${formattedCost}`;

  const infoContainer = document.createElement("div");
  infoContainer.append(title, cost);

  container.append(img, infoContainer);

  const descriptionItem = document.querySelector("#description__item");
  descriptionItem.append(container);

  const loadElement = document.querySelector("div.load");

  loadElement.parentNode.replaceChild(container, loadElement);
};

export const informationFirstFlightRocket = async(first_flight) => {
  const container = document.createElement("div");
  container.classList.add("description__container");

  const img = document.createElement("img");
  img.src = "storage/img/icons/mech.svg";
  
  const title = document.createElement("h3");
  title.textContent = "The date of the first flight of the rocket";
  const firstFlight = document.createElement("small");
  firstFlight.textContent = first_flight;

  const infoContainer = document.createElement("div");
  infoContainer.append(title, firstFlight);

  container.append(img, infoContainer);

  const loadElement = document.querySelector("div.load");

  loadElement.parentNode.replaceChild(container, loadElement);
}

export const informationWebRocket = async (wikipedia) => {
  const container = document.createElement("div");
  container.classList.add("description__container");

  const img = document.createElement("img");
  img.src = "storage/img/icons/mech.svg";

  const title = document.createElement("h3");
  title.textContent = "Read more about the rocket";
  const link = document.createElement("a");
  link.href = wikipedia;
  link.target = "_blank";
  link.textContent = "Wikipedia";

  const linkContainer = document.createElement("div");
  linkContainer.append(title, link);

  container.append(img, linkContainer);

  const loadElement = document.querySelector("div.load");

  loadElement.parentNode.replaceChild(container, loadElement);
}