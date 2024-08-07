export const descriptionHistory = async (history) => {

    const container = document.createElement("div");
    container.classList.add("description__container");
    container.setAttribute("style", "flex-direction: column;align-items: center;");

    const descriptionContainer2 = document.createElement("div");
    descriptionContainer2.classList.add("description__container2");
    descriptionContainer2.style.width = "80%";

    const tableContainer2 = document.createElement("div");
    tableContainer2.classList.add("table__container__1");
    tableContainer2.classList.add("bg__card");
    tableContainer2.setAttribute("style","display: flex;justify-content: center;")

    const rowElement = document.createElement("div");
    const valueElement = document.createElement("strong");
    valueElement.textContent = history.details;
    valueElement.style.textAlign = "center";
    rowElement.append(valueElement);
    tableContainer2.append(rowElement);

    const div = document.createElement("div");
    div.classList.add("information__table__1");
    div.classList.add("bg__card")
    div.style.width = "30%";

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");

    const h3 = document.createElement("h3");
    h3.textContent = "Headquarters ";
    div.append(h3);

    const hr = document.createElement("hr");
    div.append(hr);

    const rows = [
        { label: "Event Date (utc)", value: history.event_date_utc },
        { label: "Event Date (unix)", value: history.event_date_unix }
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

    descriptionContainer2.append(tableContainer2);
    container.append(descriptionContainer2);

    const descriptionItem = document.querySelector("#section__information__1");
    descriptionItem.setAttribute("style", "flex-direction: column;")
    descriptionItem.innerHTML = '';  // Limpiar el contenido existente
    descriptionItem.append(container);
    descriptionItem.append(div);

    const loadElement = descriptionItem.querySelector("div.load");
    if (loadElement) {
        loadElement.parentNode.replaceChild(container, loadElement);
    }
};

