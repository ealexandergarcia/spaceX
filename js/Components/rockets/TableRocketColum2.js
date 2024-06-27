export const tableRocketColum2 = async (Rocket) => {
    const container = document.querySelector("#information__table__2");
    container.innerHTML = "";
  
    const h3 = document.createElement("h3");
    h3.textContent = "Engine information";
    const hr = document.createElement("hr");
    container.append(h3, hr);
  
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");
  
    const rows = [
      { label: "Maximum power loss", value: Rocket.engines.engine_loss_max || 0 },
      { label: "Engine availability", value: Rocket.engines.layout || "" },
      { label: "Number of engines", value: Rocket.engines.number || 0 },
      { label: "Stage 1 fuel", value: Rocket.engines.propellant_1 || "" },
      { label: "Stage 2 fuel", value: Rocket.engines.propellant_2 || "" },
      { label: "Type", value: `${Rocket.engines.type || 0} ${Rocket.engines.version || ""}` },
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