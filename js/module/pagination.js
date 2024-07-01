import { basicQuery, defecto, extendedLaunchesQuery, launchQuery, launchesQuery, pagination, rocketLaunchpadQuery, rocketsQuery } from "../helper/filtros.js";
import { getAllRockets, getAlldata, getdataNoPagination } from "../module/rocket.js"
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
import { tableLaunchStats, tableLocationInfo, tableRocketInfo, tableStatusDetails, tableTimezoneInfo } from "../Components/launchpad/launchpadTable.js";
import { tablePayloadDragonInfo, tablePayloadGeneralInfo, tablePayloadOrbitInfo, tablePayloadPhysicalCharacteristics } from "../Components/payloads/payloadsTables.js";
import { informationTableRoadster, tableTeslaRoadsterDistancesAndSpeeds, tableTeslaRoadsterGeneralInfo, tableTeslaRoadsterOrbitInfo } from "../Components/roadster/roadsterTables.js";

// Company
export const paginationCompany = async () => {
    let company = await getdataNoPagination("company");
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

// Rockets
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

// Capsules
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

    let info = await getAlldata(launchesQuery(id),"capsules");
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

    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"capsules")

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

// Crew
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

    let info = await getAlldata(launchesQuery(id),"crew");
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

    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"crew")

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

// Launches
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

    let info = await getAlldata(rocketLaunchpadQuery(id),"launches");
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

    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"launches")

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

// Cores
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

    let info = await getAlldata(extendedLaunchesQuery(id),"cores");
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

    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"cores")

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

// Landpads
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
    let info = await getAlldata(launchesQuery(id),"landpads");

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

    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"landpads")

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

// Histories
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

    let info = await getAlldata(basicQuery(id),"history");
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
    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"history")

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

// Ships
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
    let info = await getAlldata(launchesQuery(id),"ships");

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
    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"ships")

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

// Dragons
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
    let info = await getAlldata(basicQuery(id),"dragons");

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
    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"dragons")

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

// Launchpad
const getLaunchpad = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunchpad(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    // Configuraciones para la consulta del Api
    let id = e.target.id;

    // Informacion de la Api
    let info = await getAlldata(rocketsQuery(id),"launchpads");

    // Desestructuracion de la data
    let { docs: Launchpad } = info;

    // Callbacks
    await load();
    await title(Launchpad[0].full_name)
    await descriptionText(Launchpad[0].details)
    await imagenCentral(Launchpad[0].images.large)
    await tableLocationInfo(Launchpad[0]);
    await tableLaunchStats(Launchpad[0]);
    await tableTimezoneInfo(Launchpad[0]);
    await tableStatusDetails(Launchpad[0]);
    await tableRocketInfo(Launchpad[0]);
    await fillerImage("launchpad.gif");

    // await loadFinish();
}

export const paginationLaunchpad = async (page = 1,limit = 4) => {
    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"launchpads")

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getLaunchpad)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchpad)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getLaunchpad)
    div.appendChild(end);
    console.log(div);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}

// Payloads
const getPayloads = async (e) => {
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationPayloads(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;

    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    // Configuraciones para la consulta del Api
    let id = e.target.id;

    // Informacion de la Api
    let info = await getAlldata(launchQuery(id),"payloads");

    // Desestructuracion de la data
    let { docs: payloads } = info;

    // Callbacks
    await load();
    await title(payloads[0].name)
    let { launch:{links:{youtube_id}} } = payloads[0];
    await videoCapsule(youtube_id, "#section__information__1")
    await tablePayloadGeneralInfo(payloads[0])
    await tablePayloadPhysicalCharacteristics(payloads[0]);
    await tablePayloadOrbitInfo(payloads[0]);
    await tablePayloadDragonInfo(payloads[0]);
    await fillerImage("payload.gif");
    // await tableStatusDetails(payloads[0]);
    // await tableRocketInfo(payloads[0]);

    await loadFinish();
}

export const paginationPayloads = async (page = 1,limit = 4) => {
    let { docs, pagingCounter, totalPages, nextPage } = await getAlldata(pagination(page,limit),"payloads")

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1)
    start.addEventListener("click", getPayloads)
    div.appendChild(start);
    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getPayloads)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1)
    end.addEventListener("click", getPayloads)
    div.appendChild(end);
    console.log(div);
    let [back, a1, a2, a3, a4, next] = div.children
    a1.click();

    return div;
}

// Roadster
export const paginationRoadster = async () => {
    // Peticion al api
    let Roadster = await getdataNoPagination("roadster");
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.id = Roadster.id;
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

    // Desestructuracion de la data
    let {video} = Roadster;
    const videoID = video.includes('youtu.be/') ? video.split('youtu.be/')[1] : video.split('v=')[1].split('&')[0];
    console.log(videoID);
    // Callbacks
    await load();
    await title(Roadster.name)
    await descriptionText(Roadster.details)
    await videoCapsule(videoID, "#description__item")
    await informationTableRoadster(Roadster)
    await imageRockets(Roadster.flickr_images);
    await tableTeslaRoadsterGeneralInfo(Roadster)
    await tableTeslaRoadsterOrbitInfo(Roadster)
    await tableTeslaRoadsterDistancesAndSpeeds(Roadster)
    await fillerImage("roadster.gif");

    await loadFinish();
    return div;
}