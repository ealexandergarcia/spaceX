export const tableStageRocket = async (stage, title) => {
    const container = document.createElement("div");
    container.classList.add("description__container");
    container.classList.add("bg__card")
    container.setAttribute("style","padding: 15px;")
  
    const img = document.createElement("img");
    img.src = "storage/img/icons/mech.svg";
    container.append(img);
  
    const descriptionContainer2 = document.createElement("div");
    descriptionContainer2.classList.add("description__container2");
    descriptionContainer2.style.width = "80%";

    const h3 = document.createElement("h3");
    h3.textContent = title;
    const hr = document.createElement("hr");
    descriptionContainer2.append(h3, hr);
  
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");
  
    const rows = [
      { label: "Engines", value: stage.engines},
      { label: "Reusable", value: stage.reusable ?  "Yes" : "No"},
      { label: "Burn time (sec)", value: stage.burn_time_sec ? stage.burn_time_sec : "Unknown"},
      { label: "Fuel amount (ton)", value: stage.fuel_amount_tons},
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
  
    const descriptionItem = document.querySelector("#information__2");
    descriptionItem.append(container);
  
  
    const loadElement = descriptionItem.querySelector("div.load");
    loadElement.parentNode.replaceChild(container, loadElement);
  };