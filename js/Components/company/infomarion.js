export const informationCompany = async (company) => {
    const descriptionItem = document.querySelector("#description__item");
    descriptionItem.innerHTML = ""; // Limpiar el contenido existente

    const rows = [
        { img: "storage/img/icons/founder.svg", title: "Founder", value: company.founder },
        { img: "storage/img/icons/founded.svg", title: "Founded", value: company.founded },
        { img: "storage/img/icons/employees.svg", title: "Employees", value: company.employees },
        { img: "storage/img/icons/valuation.svg", title: "Valuation", value: company.valuation }
    ];

    rows.forEach((row) => {
        const container = document.createElement("div");
        container.classList.add("description__container");
        container.classList.add("bg__card");
        container.setAttribute("style","padding: 15px;")

        const img = document.createElement("img");
        img.style.width = "40px";
        img.src = row.img;

        const innerDiv = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = row.title;

        const desc = document.createElement("small");
        desc.textContent = row.value;

        innerDiv.append(title, desc);
        container.append(img, innerDiv);

        descriptionItem.appendChild(container);
    });

    // const loadElement = descriptionItem.querySelector("div.load");
    // loadElement.parentNode.replaceChild(descriptionItem, loadElement);
};
export const informationCompany2 = async (company) => {
    let {links} = company;
    const descriptionItem = document.querySelector("#information__2");
    descriptionItem.innerHTML = ""; // Limpiar el contenido existente

    const rows = [
        { img: "storage/img/icons/founder.svg", title: "website", text:"Space X" ,value: links.website },
        { img: "storage/img/icons/founded.svg", title: "Flickr", text:"Official SpaceX Photos" ,value: links.flickr },
        { img: "storage/img/icons/employees.svg", title: "Twitter", text:"@SpaceX" ,value: links.twitter },
        { img: "storage/img/icons/valuation.svg", title: "Elon Twitter", text:"@elonmusk" ,value: links.elon_twitter }
    ];

    rows.forEach((row) => {
        const container = document.createElement("div");
        container.classList.add("description__container");
        container.classList.add("bg__card");
        container.setAttribute("style","padding: 15px;")

        const img = document.createElement("img");
        img.style.width = "40px";
        img.src = row.img;

        const innerDiv = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = row.title;

        const desc = document.createElement("small");
        desc.textContent = row.text;

        const a = document.createElement("a");
        a.href = row.value;

        a.append(desc);
        innerDiv.append(title, a);
        container.append(img, innerDiv);

        descriptionItem.appendChild(container);
    });

};
