export const tableRocketColum1 = async (Rocket) => {
    const container = document.querySelector("#information__table__1");
    container.innerHTML = "";
  
    const h3 = document.createElement("h3");
    h3.textContent = "Information rocket";
    container.append(h3);
  
    const hr = document.createElement("hr");
    container.append(hr);
  
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");
  
    const rows = [
      { label: "Rocket in service", value: Rocket.active? "Active" : "Low" },
      { label: "Number of stages", value: Rocket.stages },
      { label: "Number of propellants", value: Rocket.boosters },
      { label: "Type", value: Rocket.type },
      { label: "Landing legs", value: Rocket.landing_legs.number },
      { label: "Leg material", value: Rocket.landing_legs.material || "" },
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