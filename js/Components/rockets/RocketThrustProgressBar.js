import { RocketEngineTotal } from "../../helper/filtros.js";
import { getAllRockets } from "../../module/rocket.js";

export const RocketEngineThrustSeaLevel = async (thrust_sea_level) => {
    const [{engines}] = await getAllRockets(RocketEngineTotal);
    let data =engines.thrust_sea_level;
    let {kN:totalKN} = data;
    let pocentaje = (thrust_sea_level.kN * 100) / totalKN
    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)

    let section__information__1 = document.querySelector(".section__information__2");
    let firstDiv = section__information__1.querySelector("div:first-child");
    section__information__1.replaceChild(div, firstDiv); // Reemplaza el primer div con el nuevo elemento
}