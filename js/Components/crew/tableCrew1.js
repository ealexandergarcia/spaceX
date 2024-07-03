export const tableCrew1 = async (crews) => {
  let { launches: [{ crew: [{ role }] }] } = crews;

  const containerr = document.querySelector(".section__information__2");
  console.log(containerr);
  const container = containerr.querySelector(".carousel__item");
  container.classList.add("bg__card")
  console.log(container);

  // container.innerHTML = "";
  let div = document.createElement("div");
  div.classList.add("information__table__1");
  
  const h3 = document.createElement("h3");
  h3.textContent = "Crew Information ";
  div.append(h3);
  
  const hr = document.createElement("hr");
  div.append(hr);

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table__container__1");

  const rows = [
    { label: "Name", value: crews.name },
    { label: "Agency", value: crews.agency },
    { label: "role", value: role }
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
  div.append(tableContainer);
  // container.append(tableContainer);
  let firstDiv = container.querySelector("div:first-child");
    container.replaceChild(div, firstDiv);
};