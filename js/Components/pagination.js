import { defecto } from "../helper/filtros.js";
import { getAllCapsules, getAllCrew, getAllRockets } from "../module/rocket.js";
import { imageRockets } from "./rockets/imagenes.js";
import { load, loadFinish } from "./load.js";
import { title } from "./title.js";
import { informationFirstFlightRocket, informationLaunchCostRocket, informationRockets, informationWebRocket } from "./rockets/information.js";
import { tableRocketColum1 } from "./rockets/TableRocketColum1.js";
import { tableRocketColum2 } from "./rockets/TableRocketColum2.js";
import { tableStageRocket } from "./rockets/tableStageRocket.js";
import { progressDiameterRocket, progressHeightRocket, progressPayloadWeights, progressRocketWeight, progressSecondStageDiameterRocket, progressSecondStageHeightRocket } from "./rockets/progressBar.js";
import { RocketEngineThrustSeaLevel, informRocketEngineThrustVacuum } from "./rockets/RocketThrustProgressBar.js";
import { tableCapsule1 } from "./capsules/tableCapsule1.js";
import { tableCapsule2 } from "./capsules/tableCapsule2.js";
import { imageCapsule } from "./capsules/imagenes.js";
import { informationCapsule, informationWebCapsule } from "./capsules/information.js";
import { videoCapsule } from "./capsules/video.js";

const getRocketsId = async (e) =>{
    let a = e.target.parentElement.children;
    
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let id =e.target.id;
    let Rocketdata = {
        "query": {
            "_id": id
          }
    }

    let Rocket = await getAllRockets(Rocketdata);
    
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

export const paginationRockets = async()=>{
    let rockets = await getAllRockets(defecto);
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");
  
    rockets.forEach( async (val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4] = div.children
    a1.click();
    return div;
}

const getCapsulesId = async(e)=>{

    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo'); 
    let id =e.target.id;
    let capsuleData = {
        "query": {
            "_id": id
        },
        "options": {
            "populate": [
                "launches"
            ]
        }
    }

    let info = await getAllCapsules(capsuleData);
    let {docs:capsule}= info;
    await load();
    await title(capsule[0].serial)
    await tableCapsule1(capsule[0])
    await tableCapsule2 (capsule[0])
    await imageCapsule (capsule[0])
    await informationCapsule(capsule[0].last_update)
    let {launches:[{links:{webcast}}]} = capsule[0];
    await informationWebCapsule(webcast, "Youtube")
    let {launches:[{links:{presskit}}]} = capsule[0];
    await informationWebCapsule(presskit, "SpaceX")
    let {launches:[{links:{wikipedia}}]} = capsule[0];
    await informationWebCapsule(wikipedia, "wikipedia")
    let {launches:[{links:{youtube_id}}]} = capsule[0];
    await videoCapsule(youtube_id)
    // await loadFinish();
}

export const paginationCapsules = async(page=1, limit=4)=>{  
    const AllCapsules = {
        "options": {
            page,
            limit
        }
    } 
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(AllCapsules)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");
    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

const getCrewId = async(e)=>{

    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo'); 
    await load();
    // let id =e.target.id;
    // let capsuleData = {
    //     "query": {
    //         "_id": id
    //     },
    //     "options": {
    //         "populate": [
    //             "launches"
    //         ]
    //     }
    // }

    // let info = await getAllCapsules(capsuleData);
    // let {docs:capsule}= info;
    // await load();
    // await title(capsule[0].serial)
    // await tableCapsule1(capsule[0])
    // await tableCapsule2 (capsule[0])
    // await imageCapsule (capsule[0])
    // await informationCapsule(capsule[0].last_update)
    // let {launches:[{links:{webcast}}]} = capsule[0];
    // await informationWebCapsule(webcast, "Youtube")
    // let {launches:[{links:{presskit}}]} = capsule[0];
    // await informationWebCapsule(presskit, "SpaceX")
    // let {launches:[{links:{wikipedia}}]} = capsule[0];
    // await informationWebCapsule(wikipedia, "wikipedia")
    // let {launches:[{links:{youtube_id}}]} = capsule[0];
    // await videoCapsule(youtube_id)
    // await loadFinish();
}

export const paginationCrew = async(page=1, limit=4)=>{  
    const allCrew = {
        "options": {
            page,
            limit
        }
    } 
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrew(allCrew)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");
    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCrewId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}