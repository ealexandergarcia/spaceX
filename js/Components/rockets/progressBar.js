import { RocketDiameterTotal, RocketHeightTotal, SecondStageDiameterTotal, SecondStageHeightTotal, carga, defecto, masa } from "../../helper/filtros.js";
import { getAllRockets } from "../../module/rocket.js";

export const progressRocketWeight = async (rocket) => {
  let [{ mass: maxMassRocket }] = await getAllRockets(masa);

  // Create elements
  const container = document.createElement("div");
  container.classList.add("information__container");

  const weightLabel = document.createElement("label");
  weightLabel.textContent = "Rocket weight:";

  const progressBar = document.createElement("progress");
  progressBar.max = maxMassRocket.kg;
  progressBar.value = rocket.mass.kg;
  progressBar.textContent = `${rocket.mass.kg}%`;

  const weightInfo = document.createElement("span");
  const kgFormatted = new Intl.NumberFormat('cop').format(rocket.mass.kg);
  const lbFormatted = new Intl.NumberFormat('cop').format(rocket.mass.lb);
  weightInfo.innerHTML = `${kgFormatted} kg <br> ${lbFormatted} lb`;

  // Append elements
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  div1.append(weightLabel, progressBar);
  container.append(div1);
  div2.append(weightInfo)
  container.append(div2);
  // container.append(weightInfo);

  // Get the container element
  const informationContainerElement = document.querySelector(".section__information__1");

  informationContainerElement.append(container);

  const loadDiv = informationContainerElement.querySelector('.load');
  loadDiv.append(container);
  loadDiv.classList.replace('load', 'information__2');
};

export const progressPayloadWeights = async (Rockets) => {
  let docs = await getAllRockets(carga);
  let data = []
  docs.forEach(val => data.push(...val.payload_weights))
  data.sort((a, b) => b.kg - a.kg)
  let [maxPayloadWeightsRocket] = data;
  let { kg } = maxPayloadWeightsRocket

  let conterDiv = [];

  // Paso 3: Iterar sobre la lista de pesos de carga útil
  Rockets.payload_weights.forEach((val) => {
    // Paso 4: Crear el contenedor de información
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");

    // Paso 5: Crear la etiqueta y el progreso
    let divFirst = document.createElement("div");
    let labelFist = document.createElement("label");
    labelFist.textContent = `${val.name} :`;

    let ProgressFist = document.createElement("progress");
    ProgressFist.max = kg;
    ProgressFist.value = `${val.kg}`;
    ProgressFist.textContent = `${val.kg}%`;

    // Paso 6: Crear el span con la información de peso
    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    let numKg = new Intl.NumberFormat('cop').format(val.kg);
    let numLb = new Intl.NumberFormat('cop').format(val.lb);
    spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`;

    // Paso 7: Agregar los elementos al contenedor
    divFirst.append(labelFist);
    divFirst.append(ProgressFist);
    divLast.append(spanLast);
    divInformationContainer.append(divFirst);
    divInformationContainer.append(divLast);
    conterDiv.push(divInformationContainer);
  });

  // Paso 8: Agregar los contenedores al elemento information__2
  let section__information__1 = document.querySelector(".section__information__1");
  let information__2 = section__information__1.querySelector(".information__2");
  information__2.append(...conterDiv);
};

