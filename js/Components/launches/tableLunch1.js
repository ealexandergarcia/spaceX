export const tableLunch1 = async (launch) => {
  const containerr = document.querySelector(".section__information__2");
  console.log(containerr);
  const container = containerr.querySelector(".carousel__item");
  console.log(container);

  // container.innerHTML = "";
  let div = document.createElement("div");
  div.classList.add("information__table__1");
  
  const h3 = document.createElement("h3");
  h3.textContent = "Launch Data ";
  div.append(h3);
  
  const hr = document.createElement("hr");
  div.append(hr);

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table__container__1");

  const rows = [
    { label: "Launch Date", value: launch.date_utc.split('T')[0] },
    { label: "Success", value: launch.success },
    { label: "Failures", value: launch.failures[0] ? launch.failures[0].reason : "No failures" },
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