import { table, table2 } from "../common/tables.js";

export const tableShipGeneralDetails = async (data)=>{
    let {legacy_id, type, model, year_built} = data
    const rows = [
        { label: "Legacy ID", value: legacy_id},
        { label: "Type", value: type},
        { label: "Model", value: model? model:"N/A"},
        { label: "Year Built", value: year_built}
      ];
    await table2(rows,"#information__table__1","General Details")
}
export const tableShipLocationMovement = async (data)=>{
    let {latitude, longitude, speed_kn, course_deg} = data
    const rows = [
        { label: "Latitude", value: latitude? latitude:"N/A"},
        { label: "Longitude", value: longitude? longitude:"N/A"},
        { label: "Speed (kn)", value: speed_kn? speed_kn:"N/A"},
        { label: "Course (deg)", value: course_deg? course_deg:"N/A"}
      ];
    await table2(rows,"#information__table__2","General Details")
}
export const tableShipPhysicalCharacteristics = async (data)=>{
  let {mass_kg, mass_lbs} = data
  const rows = [
      { label: "Mass (kg))", value: mass_kg? mass_kg:"N/A"},
      { label: "Mass (lbs)", value: mass_lbs? mass_lbs:"N/A"}
    ];
  await table(rows,"#information__2","Physical Characteristics")
}

export const tableShipRoles = async (data) => {
  const { roles } = data;

  const rows = roles.map((role, index) => ({
      label: `Role ${index + 1}`,
      value: role
  }));

  await table(rows, "#information__2", "Roles");
}

export const informationTableShips = async (data) => {
  let { link } = data;
  const descriptionItem = document.querySelector("#description__item");

  const rows = [
      { img: "storage/img/icons/marineTrafic.svg", title: "Marine Trafic", text: "Website", value: link }
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