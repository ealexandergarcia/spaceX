export const table = async (company) => {
    let { headquarters } = company;

    const container = document.createElement("div");
    container.classList.add("description__container");
    container.setAttribute("style", "flex-direction: column;align-items: center;");

    const descriptionContainer2 = document.createElement("div");
    descriptionContainer2.classList.add("description__container2");
    descriptionContainer2.style.width = "80%";

    const tableContainer2 = document.createElement("div");
    tableContainer2.classList.add("table__container__1");

    const rowElement = document.createElement("div");
    const valueElement = document.createElement("strong");
    valueElement.textContent = company.summary;
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
        { label: "Address", value: headquarters.address },
        { label: "city", value: headquarters.city },
        { label: "State", value: headquarters.state }
    ];
    console.log(headquarters.address);
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



export const tableCompany1 = async (company) => {
    const container = document.querySelector("#information__table__1");
    container.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = "Company Information";
    container.append(h3);

    const hr = document.createElement("hr");
    container.append(hr);

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");

    const rows = [
        { label: "CEO", value: company.ceo },
        { label: "CTO", value: company.cto },
        { label: "COO", value: company.coo },
        { label: "CTO Propulsion", value: company.cto_propulsion }
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

export const tableCompany2 = async (company) => {
    const container = document.querySelector("#information__table__2");
    container.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = "Company Installation";
    const hr = document.createElement("hr");
    container.append(h3, hr);

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");

    const rows = [
        { label: "Launch Sites", value: company.launch_sites },
        { label: "Test Sites", value: company.test_sites }
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