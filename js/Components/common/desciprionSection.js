export const descriptionText = async (data) => {
    const container = document.createElement("div");
    container.classList.add("description__container");
    container.style.cssText = "flex-direction: column; align-items: center; margin: 0;";

    const descriptionContainer2 = document.createElement("div");
    descriptionContainer2.classList.add("bg__card");
    descriptionContainer2.style.width = "80%";

    const tableContainer2 = document.createElement("div");
    tableContainer2.classList.add("table__container__1");
    tableContainer2.style.padding = "0";

    const rowElement = document.createElement("div");
    rowElement.style.margin = "0";

    const valueElement = document.createElement("strong");
    valueElement.style.cssText = "text-align: center; overflow: auto; height: 100px; overflow-x: hidden;";
    valueElement.textContent = data;

    rowElement.append(valueElement);
    tableContainer2.append(rowElement);
    descriptionContainer2.append(tableContainer2);
    container.append(descriptionContainer2);

    const descriptionItem = document.querySelector("#section__information__1");
    descriptionItem.style.flexDirection = "column";
    descriptionItem.innerHTML = '';  // Limpiar el contenido existente
    descriptionItem.append(container);

    const loadElement = descriptionItem.querySelector("div.load");
    if (loadElement) {
        loadElement.parentNode.replaceChild(container, loadElement);
    }
};
