export const tableLunch3 = async (launch) => {
let {launchpad} = launch;

  const container = document.createElement("div");
  container.classList.add("description__container");

  const img = document.createElement("img");
  img.src = "storage/img/icons/mech.svg";
  container.append(img);

  const descriptionContainer2 = document.createElement("div");
  descriptionContainer2.classList.add("description__container2");
  descriptionContainer2.style.width = "80%";

  const h3 = document.createElement("h3");
  h3.textContent = "Launchpad";
  const hr = document.createElement("hr");
  descriptionContainer2.append(h3, hr);

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table__container__1");

  const rows = [
    { label: "Name", value: launchpad.name},
    { label: "Locality", value: launchpad.locality},
    { label: "Region", value: launchpad.region},
    { label: "Latitude", value: launchpad.latitude},
    { label: "Longitude", value: launchpad.longitude},
  ];

  rows.forEach((row) => {
    const rowElement = document.createElement("div");
    const labelElement = document.createElement("span");
    labelElement.textContent = row.label;
    const valueElement = document.createElement("strong");
    valueElement.textContent = row.value;
    rowElement.append(labelElement, valueElement);
    tableContainer.append(rowElement);
  });

  descriptionContainer2.append(tableContainer);
  container.append(descriptionContainer2);

  const descriptionItem = document.querySelector("#description__item");
  descriptionItem.append(container);


  const loadElement = descriptionItem.querySelector("div.load");
  loadElement.parentNode.replaceChild(container, loadElement);
};