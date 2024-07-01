import { basicQuery, defecto, extendedLaunchesQuery, launchesQuery, pagination, rocketLaunchpadQuery } from "../helper/filtros.js";
import { getAllCapsules, getAllCores, getAllCrew, getAllDragons, getAllHistories, getAllLandpads, getAllLaunches, getAllRockets, getAllShips, getCompany } from "../module/rocket.js"
import { imageRockets } from "../Components/rockets/imagenes.js";
import { load, loadFinish } from "../Components/common/load.js";
import { title, titleImage } from "../Components/common/title.js";
import { informationFirstFlightRocket, informationLaunchCostRocket, informationRockets, informationWebRocket } from "../Components/rockets/information.js";
import { tableRocketColum1 } from "../Components/rockets/TableRocketColum1.js";
import { tableRocketColum2 } from "../Components/rockets/TableRocketColum2.js";
import { tableStageRocket } from "../Components/rockets/tableStageRocket.js";
import { progressDiameterRocket, progressHeightRocket, progressPayloadWeights, progressRocketWeight, progressSecondStageDiameterRocket, progressSecondStageHeightRocket } from "../Components/rockets/progressBar.js";
import { RocketEngineThrustSeaLevel, informRocketEngineThrustVacuum } from "../Components/rockets/RocketThrustProgressBar.js";
import { tableCapsule1 } from "../Components/capsules/tableCapsule1.js";
import { tableCapsule2 } from "../Components/capsules/tableCapsule2.js";
import { imageCapsule } from "../Components/capsules/imagenes.js";
import { informationCapsule, informationWebCapsule } from "../Components/capsules/information.js";
import { videoCapsule } from "../Components/common/video.js";
import { imageCrew, imagePatch } from "../Components/crew/imagenes.js";
import { slideCrew } from "../Components/crew/slideShow.js";
import { tableCrew1 } from "../Components/crew/tableCrew1.js";
import { tableCrew2 } from "../Components/crew/tableCrew2.js";
import { imageLanches } from "../Components/launches/imagenes.js";
import { tableLunch1 } from "../Components/launches/tableLunch1.js";
import { tableLunch2 } from "../Components/launches/tableLunch2.js";
import { tableLunch3 } from "../Components/launches/tableLunch3.js";
import { tableLunch4 } from "../Components/launches/tableLunch4.js";
import { tableCores, tableCores2, tableCoresLaunch } from "../Components/cores/tableCores.js";
import { table, tableCompany1, tableCompany2 } from "../Components/company/tables.js";
import { imageCompany, imageCompany2 } from "../Components/company/imagenes.js";
import { informationCompany, informationCompany2 } from "../Components/company/infomarion.js";
import { descriptionHistory } from "../Components/histories/description.js";
import { fillerImage, imagenCentral } from "../Components/common/imagenes.js";
import { descriptionText } from "../Components/common/desciprionSection.js";
import { informationTableLandpads, tableLandpadHeadquartes, tableLandpads, tableLandpadsAS } from "../Components/Landpads/tablesLandpads.js";
import { informationTableShips, tableShipGeneralDetails, tableShipLocationMovement, tableShipPhysicalCharacteristics, tableShipRoles } from "../Components/ships/tableShip.js";
import { tableCapsule, tableDimensions, tableDragonHeatShield, tableLaunchPayload, tableReturnPayload, tableThrusters, tableTrunk } from "../Components/dragons/tableDragons.js";

export const paginationCompany = async () => {
    let company = await getCompany(defecto);
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.id = company.id;
    a.textContent = "1";
    a.addEventListener("click", (e) => {
        let a = e.target.parentElement.children;
        for (let val of a) {
            val.classList.remove('activo');
        }
        e.target.classList.add('activo');
    })
    div.appendChild(a)

    let [a1] = div.children
    a1.click();

    await titleImage()
    await table(company)
    await imageCompany()
    await imageCompany2()
    await informationCompany(company)
    await informationCompany2(company)
    await tableCompany1(company)
    await tableCompany2(company)

    return div;
}

const getRocketsId = async (e) => {
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let id = e.target.id;

    let Rocket = await getAllRockets(basicQuery(id));

    await load();
    await title(Rocket[0].name)
    await imageRockets(Rocket[0].flickr_images);
    await informationRockets(Rocket[0].country, Rocket[0].description);
    await informationLaunchCostRocket(Rocket[0].cost_per_launch);
    await informationFirstFlightRocket(Rocket[0].first_flight)
    await informationWebRocket(Rocket[0].wikipedia)
    await tableRocketColum1(Rocket[0])
    await tableRocketColum2(Rocket[0])
    await tableStageRocket(Rocket[0].first_stage, "First Stage")
    await tableStageRocket(Rocket[0].second_stage, "Second Stage")
    await progressRocketWeight(Rocket[0])
    await progressPayloadWeights(Rocket[0])
    await progressHeightRocket(Rocket[0])
    await progressDiameterRocket(Rocket[0])
    await progressSecondStageDiameterRocket(Rocket[0])
    await progressSecondStageHeightRocket(Rocket[0])
    await RocketEngineThrustSeaLevel(Rocket[0].engines.thrust_sea_level)
    await informRocketEngineThrustVacuum(Rocket[0].engines.thrust_sea_level)


}

export const paginationRockets = async () => {
    let rockets = await getAllRockets(defecto);
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    rockets.forEach(async (val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = id + 1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });

    let [a1, a2, a3, a4] = div.children
    a1.click();
    return div;
}

const getCapsulesId = async (e) => {

    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let id = e.target.id;

    let info = await getAllCapsules(launchesQuery(id));
    let { docs: capsule } = info;
    await load();
    await title(capsule[0].serial)
    await tableCapsule1(capsule[0])
    await tableCapsule2(capsule[0])
    await imageCapsule(capsule[0])
    await informationCapsule(capsule[0].last_update)
    let { launches: [{ links: { webcast } }] } = capsule[0];
    await informationWebCapsule(webcast, "Youtube")
    let { launches: [{ links: { presskit } }] } = capsule[0];
    await informationWebCapsule(presskit, "SpaceX")
    let { launches: [{ links: { wikipedia } }] } = capsule[0];
    await informationWebCapsule(wikipedia, "wikipedia")
    let { launches: [{ links: { youtube_id } }] } = capsule[0];
    await videoCapsule(youtube_id, "#section__information__1")
    await loadFinish();
}

export const paginationCapsules = async (page = 1, limit = 4) => {

    let { docs, pagingCounter, totalPages, nextPage } = await getAllCapsules(pagination(page,limit))

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();
    return div;
}

const getCrewId = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCrew(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let id = e.target.id;

    let info = await getAllCrew(launchesQuery(id));
    let { docs: crew } = info;
    await load();
    await title(crew[0].name)
    await imageCrew(crew[0]);
    await slideCrew(crew[0]);
    let { launches: [{ links: { youtube_id } }] } = crew[0];
    await videoCapsule(youtube_id, ".section__information__1");
    await tableCrew1(crew[0]);
    await tableCrew2(crew[0]);
    await imagePatch(crew[0]);
    await loadFinish();
}

export const paginationCrew = async (page = 1, limit = 4) => {

    let { docs, pagingCounter, totalPages, nextPage } = await getAllCrew(pagination(page,limit))

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getCrewId)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getCrewId)
    div.appendChild(end);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}
const getLaunches = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunches(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let id = e.target.id;

    let info = await getAllLaunches(rocketLaunchpadQuery(id));
    let { docs: launches } = info;
    // let {docs:crew}= info;
    await load();
    await title(launches[0].name)
    await imageLanches(launches[0]);
    let { links: { youtube_id } } = launches[0];
    await videoCapsule(youtube_id, ".section__information__1");
    await tableLunch1(launches[0]);
    await tableLunch2(launches[0]);
    await tableLunch3(launches[0]);
    await tableLunch4(launches[0]);
    await loadFinish();
}

export const paginationLaunches = async (page = 1, limit = 4) => {

    let { docs, pagingCounter, totalPages, nextPage } = await getAllLaunches(pagination(page,limit))

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getLaunches)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunches)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getLaunches)
    div.appendChild(end);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}
const getCores = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCore(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let id = e.target.id;

    let info = await getAllCores(extendedLaunchesQuery(id));
    localStorage.setItem("cores", JSON.stringify(info))
    console.log("funciona");
    let { docs: core } = info;
    await load();

    await title(core[0].serial);
    await tableCores(core[0]);
    await tableCores2(core[0]);
    await imageCapsule(core[0]);
    await tableCoresLaunch(core[0]);
    await loadFinish();
}

export const paginationCore = async (page = 1, limit = 4) => {

    let { docs, pagingCounter, totalPages, nextPage } = await getAllCores(pagination(page,limit))

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getCores)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCores)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getCores)
    div.appendChild(end);
    console.log(div);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}

const getLandpads = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLandpads(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    // Configuraciones para la consulta del Api
    let id = e.target.id;

    // Informacion de la Api
    let info = await getAllLandpads(launchesQuery(id));

    // Desestructuracion de la data
    let { docs: Landpad } = info;
    let [{ images: { large } }] = Landpad;
    // Callbacks
    await load();
    await title(Landpad[0].full_name)
    await imagenCentral(large[0])
    await descriptionText(Landpad[0].details)
    await fillerImage("cohete.gif");
    await tableLandpads(Landpad[0]);
    await tableLandpadsAS(Landpad[0]);
    await informationTableLandpads(Landpad[0]);
    await tableLandpadHeadquartes(Landpad[0]);
    await loadFinish();
}

export const paginationLandpads = async (page = 1, limit = 4) => {

    let { docs, pagingCounter, totalPages, nextPage } = await getAllLandpads(pagination(page,limit))

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getLandpads)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLandpads)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getLandpads)
    div.appendChild(end);
    console.log(div);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}

const getHistories = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationHistory(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let id = e.target.id;

    let info = await getAllHistories(basicQuery(id));
    console.log("funciona");
    let { docs: history } = info;
    console.log(history[0].title);
    await load();
    await title(history[0].title)
    await descriptionHistory(history[0])
    await imageCompany()
    await fillerImage("cohete.gif")
    await loadFinish();
}

export const paginationHistory = async (page = 1, limit = 4) => {
    let { docs, pagingCounter, totalPages, nextPage } = await getAllHistories(pagination(page,limit))

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getHistories)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getHistories)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getHistories)
    div.appendChild(end);
    console.log(div);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}

const getShips = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationShips(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    // Configuraciones para la consulta del Api
    let id = e.target.id;

    // Informacion de la Api
    let info = await getAllShips(launchesQuery(id));

    // Desestructuracion de la data
    let { docs: ship } = info;

    // Callbacks
    await load();
    await title(ship[0].name)
    await imagenCentral(ship[0].image)
    await fillerImage("ship.gif");
    await tableLandpads(ship[0]);
    await tableShipGeneralDetails(ship[0]);
    await tableShipLocationMovement(ship[0]);
    await tableShipPhysicalCharacteristics(ship[0]);
    await tableShipRoles(ship[0]);
    await videoCapsule("dMyNj8IMEes", "#section__information__1")
    await informationTableShips(ship[0])
    await loadFinish();
}

export const paginationShips = async (page = 1,limit = 4) => {
    let { docs, pagingCounter, totalPages, nextPage } = await getAllShips(pagination(page,limit))

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getShips)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getShips)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getShips)
    div.appendChild(end);
    console.log(div);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}
const getDragons = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationDragon(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    // Configuraciones para la consulta del Api
    let id = e.target.id;

    // Informacion de la Api
    let info = await getAllDragons(basicQuery(id));

    // Desestructuracion de la data
    let { docs: Dragon } = info;

    // Callbacks
    await load();
    await title(Dragon[0].name)
    await descriptionText(Dragon[0].description)
    await imageRockets(Dragon[0].flickr_images);
    await tableDragonHeatShield(Dragon[0]);
    await tableLaunchPayload(Dragon[0]);
    await tableReturnPayload(Dragon[0]);
    await tableTrunk(Dragon[0]);
    await tableCapsule(Dragon[0]);
    await tableDimensions(Dragon[0]);
    await tableThrusters(Dragon[0]);
    await loadFinish();
}

export const paginationDragon = async (page = 1,limit = 4) => {
    let { docs, pagingCounter, totalPages, nextPage } = await getAllDragons(pagination(page,limit))

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getDragons)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getDragons)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getDragons)
    div.appendChild(end);
    console.log(div);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}