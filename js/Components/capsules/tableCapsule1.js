export const tableCapsule1 = async (Rocket) => {
    const container = document.querySelector("#information__table__1");
    container.innerHTML = "";
  
    const h3 = document.createElement("h3");
    h3.textContent = "Capsule Information ";
    container.append(h3);
  
    const hr = document.createElement("hr");
    container.append(hr);
  
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");
  
    const rows = [
      { label: "Status", value: Rocket.status },
      { label: "Type", value: Rocket.type },
      { label: "Eeuse Count", value: Rocket.reuse_count }
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
  
    container.append(tableContainer);
  };