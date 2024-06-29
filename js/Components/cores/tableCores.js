import { table } from "../tables.js";

export const tableCores = async (core) => {

    // container.innerHTML = "";
    let div = document.createElement("div");
    div.classList.add("information__table__1");

    const h3 = document.createElement("h3");
    h3.textContent = "Core Data";
    div.append(h3);

    const hr = document.createElement("hr");
    div.append(hr);

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");

    const rows = [
        { label: "Status", value: core.status },
        { label: "Reuse Count", value: core.reuse_count },
        { label: "RTLS Attempts", value: core.rtls_attempts },
        { label: "RTLS Landings", value: core.rtls_landings },
        { label: "ASDS Attempts", value: core.asds_attempts },
        { label: "ASDS Landings", value: core.asds_landings }
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

    // Get the container element
    const informationContainerElement = document.querySelector(".section__information__1");

    informationContainerElement.append(div);

    const loadDiv = informationContainerElement.querySelector('.load');
    loadDiv.append(div);
    loadDiv.classList.replace('load', 'information__2');
};
export const tableCores2 = async (core) => {
    let conterDiv = [];
    // container.innerHTML = "";
    let div = document.createElement("div");
    div.classList.add("information__table__1");

    const h3 = document.createElement("h3");
    h3.textContent = "Core Details";
    div.append(h3);

    const hr = document.createElement("hr");
    div.append(hr);

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table__container__1");

    const rows = [
        { label: "last_update", value: core.last_update ? core.last_update : "There is no information about this core" },
    ];

    rows.forEach((row) => {
        const rowElement = document.createElement("div");

        const valueElement = document.createElement("strong");
        valueElement.setAttribute("style", "padding: 0 25px;text-align: start;")
        valueElement.textContent = row.value;
        rowElement.append( valueElement);
        tableContainer.append(rowElement);
    });
    div.append(tableContainer);
    conterDiv.push(div);


    let section__information__1 = document.querySelector(".section__information__1");
    let information__2 = section__information__1.querySelector(".information__2");
    information__2.setAttribute("style","flex-wrap: nowrap;")
    information__2.append(...conterDiv);
};

export const tableCoresLaunch = async (core)=>{
    let {launches:[{name}]} = core;
    let {launches:[{rocket}]} = core;
    let {launches:[{payloads:[{name : name2}]}]} = core;
    const rows = [
        { label: "Launch", value: name},
        { label: "Rocket", value: rocket.name},
        { label: "Payloads", value: name2}
      ];
    await table(rows,"#description__item","Launch Data")
}