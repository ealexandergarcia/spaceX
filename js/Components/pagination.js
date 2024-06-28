import { defecto } from "../helper/filtros.js";
import { getAllRockets } from "../module/rocket.js";
import { imageRockets } from "./rockets/imagenes.js";
import { load } from "./load.js";
import { title } from "./rockets/title.js";
import { informationFirstFlightRocket, informationLaunchCostRocket, informationRockets, informationWebRocket } from "./rockets/information.js";
import { tableRocketColum1 } from "./rockets/TableRocketColum1.js";
import { tableRocketColum2 } from "./rockets/TableRocketColum2.js";
import { tableStageRocket } from "./rockets/tableStageRocket.js";
import { progressDiameterRocket, progressHeightRocket, progressPayloadWeights, progressRocketWeight, progressSecondStageDiameterRocket, progressSecondStageHeightRocket } from "./rockets/progressBar.js";

const getRocketsId = async (e) =>{
    console.log('Prueba de que funciona la pagina gg easy peace o como chingado se escriba');
    let a = e.target.parentElement.children;
    console.log(a);
    
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
    console.log(Rocket);
    
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


}

export const paginationRockets = async()=>{
    let rockets = await getAllRockets(defecto);
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
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