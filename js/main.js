import { load } from "./Components/common/load.js"; 
import { paginationCapsules, paginationCompany, paginationCore, paginationCrew, paginationDragon, paginationHistory, paginationLandpads, paginationLaunches, paginationRockets, paginationShips } from "./module/pagination.js";
import { defecto, masa } from "./helper/filtros.js";
import { getAllRockets } from "./module/rocket.js";

let data3 = await getAllRockets(defecto);

let data = await getAllRockets(masa);




let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}
let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

let crew = document.querySelector("#crew")
crew.addEventListener("click", async(e)=>{
    await footerSelect(e, crew)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrew())
})
let launches = document.querySelector("#launches")
launches.addEventListener("click", async(e)=>{
    await footerSelect(e, launches)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunches())
})

let core = document.querySelector("#core")
core.addEventListener("click", async(e)=>{
    await footerSelect(e, core)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCore())
})

let company = document.querySelector("#company")
company.addEventListener("click", async(e)=>{
    await footerSelect(e, company)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCompany())
})

let history = document.querySelector("#history")
history.addEventListener("click", async(e)=>{
    await footerSelect(e, history)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationHistory())
})

let landpads = document.querySelector("#landpads")
landpads.addEventListener("click", async(e)=>{
    await footerSelect(e, landpads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLandpads())
})

let ships = document.querySelector("#ships")
ships.addEventListener("click", async(e)=>{
    await footerSelect(e, ships)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationShips())
})

let dragon = document.querySelector("#dragon")
dragon.addEventListener("click", async(e)=>{
    await footerSelect(e, dragon)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationDragon())
})

let launchpad = document.querySelector("#launchpad")
launchpad.addEventListener("click", async(e)=>{
    await footerSelect(e, launchpad)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunchpad())
})


launchpad.click();