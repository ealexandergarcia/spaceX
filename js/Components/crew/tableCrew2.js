export const tableCrew2 = async (crews) => {
    let { launches: [{ name }] } = crews;
    let { launches: [{ date_utc }] } = crews;
    const date = date_utc.split('T')[0];
  
    const containerr = document.querySelector(".section__information__3");
    console.log(containerr);
    const container = containerr.querySelector(".carousel__item");
    console.log(container);
  
    // container.innerHTML = "";
    let div = document.createElement("div");
    div.classList.add("information__table__1");
    div.setAttribute("style","display: block; overflow-y: hidden;")
    
    const h3 = document.createElement("h3");
    h3.textContent = "Launches";
    div.append(h3);
    
    const hr = document.createElement("hr");
    div.append(hr);
  
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");
  
    const rows = [
      { label: "Mission name", value: name },
      { label: "Agency", value: crews.agency },
      { label: "Fecha", value: date },
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