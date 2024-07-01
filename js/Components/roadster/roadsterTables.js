import { table } from "../common/tables.js";

export const informationTableRoadster = async (company) => {
    let { wikipedia } = company;
    const descriptionItem = document.querySelector("#description__item");

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

export const tableTeslaRoadsterGeneralInfo = async (data) => {
    const { name, launch_date_utc, launch_mass_kg, launch_mass_lbs, norad_id } = data;

    const rows = [
        { label: "Name", value: name },
        { label: "Launch Date", value: launch_date_utc.split("T")[0] },
        { label: "Launch Mass (kg)", value: launch_mass_kg },
        { label: "Launch Mass (lbs)", value: launch_mass_lbs },
        { label: "NORAD ID", value: norad_id }
    ];

    await table(rows, "#description__item", "General Information of Tesla Roadster");
};

export const tableTeslaRoadsterOrbitInfo = async (data) => {
    const { orbit_type, apoapsis_au, periapsis_au, semi_major_axis_au, eccentricity, inclination, periapsis_arg, period_days } = data;

    const rows = [
        { label: "Orbit Type", value: orbit_type },
        { label: "Apoapsis (AU)", value: apoapsis_au.toFixed(3) },
        { label: "Periapsis (AU)", value: periapsis_au.toFixed(3) },
        { label: "Semi-Major Axis (AU)", value: semi_major_axis_au.toFixed(3) },
        { label: "Eccentricity", value: eccentricity.toFixed(3) },
        { label: "Inclination (degrees)", value: inclination.toFixed(3) },
        { label: "Periapsis Argument", value: periapsis_arg.toFixed(3) },
        { label: "Orbital Period (days)", value: period_days.toFixed(2) }
    ];

    await table(rows, "#information__2", "Orbit Information of Tesla Roadster");
};

export const tableTeslaRoadsterDistancesAndSpeeds = async (data) => {
    const { speed_kph, speed_mph, earth_distance_km, earth_distance_mi, mars_distance_km, mars_distance_mi } = data;

    const rows = [
        { label: "Speed (km/h)", value: speed_kph.toFixed(2) },
        { label: "Speed (mph)", value: speed_mph.toFixed(2) },
        { label: "Distance to Earth (km)", value: earth_distance_km.toLocaleString() },
        { label: "Distance to Earth (mi)", value: earth_distance_mi.toLocaleString() },
        { label: "Distance to Mars (km)", value: mars_distance_km.toLocaleString() },
        { label: "Distance to Mars (mi)", value: mars_distance_mi.toLocaleString() }
    ];

    await table(rows, "#information__2", "Distances and Speeds of Tesla Roadster");
};
