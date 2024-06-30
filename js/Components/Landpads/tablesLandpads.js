import { table } from "../common/tables.js";

export const tableLandpads = async (data) => {
    let { launches } = data;
    const rows = [];
    launches.forEach(element => {
        rows.push(
            { label: "Launch", value: element.name }
        );
    });
    await table(rows, "#description__item", "Launch Data");
}
export const tableLandpadsAS = async (data) => {
    const { landing_attempts, landing_successes } = data;
    const rows = [
        { label: "Landing Attempts", value: landing_attempts },
        { label: "Landing Successes", value: landing_successes }
    ];
    await table(rows, "#information__2", "Attempts and Successes");
}
export const tableLandpadHeadquartes = async (data) => {
    const { locality, region,latitude,longitude } = data;
    const rows = [
        { label: "Locality", value: locality },
        { label: "Region", value: region },
        { label: "Latitude", value: latitude },
        { label: "Longitude", value: longitude }
    ];
    await table(rows, "#information__2", "HEADQUARTERS");
}

export const informationTableLandpads = async (company) => {
    let { wikipedia } = company;
    const descriptionItem = document.querySelector("#information__2");

    const rows = [
        { img: "storage/img/icons/wikipedia.svg", title: "Article", text: "Wikipedia", value: wikipedia }
    ];

    rows.forEach((row) => {
        const container = document.createElement("div");
        container.classList.add("description__container");
        container.classList.add("bg__card");
        container.setAttribute("style", "padding: 15px; align-items: center;");

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