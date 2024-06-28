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

export const progressHeightRocket = async (Rockets) => {
  // Paso 1: Obtener la altura total de los cohetes
  let [{ height }] = await getAllRockets(RocketHeightTotal);
  let { meters } = height;

  // Paso 2: Crear un array para almacenar los contenedores
  let conterDiv = [];

  // Paso 3: Iterar sobre la lista de alturas de cohetes
  [Rockets.height].forEach((val) => {
    // Paso 4: Crear el contenedor de información
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");

    // Paso 5: Crear la etiqueta y el progreso
    let divFirst = document.createElement("div");
    let labelFist = document.createElement("label");
    labelFist.textContent = `Rocket Height :`;

    let ProgressFist = document.createElement("progress");
    ProgressFist.max = meters;
    ProgressFist.value = `${val.meters}`;
    ProgressFist.textContent = `${val.meters}%`;

    // Paso 6: Crear el span con la información de altura
    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    let numMeters = new Intl.NumberFormat('cop').format(val.meters);
    let numFeet = new Intl.NumberFormat('cop').format(val.feet);
    spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

    // Paso 7: Agregar los elementos al contenedor
    divFirst.append(labelFist);
    divFirst.append(ProgressFist);
    divLast.append(spanLast);
    divInformationContainer.append(divFirst);
    divInformationContainer.append(divLast);
    conterDiv.push(divInformationContainer);
  });

  let section__information__1 = document.querySelector(".section__information__1");
  let information__2 = section__information__1.querySelector(".information__2");
  information__2.append(...conterDiv);
};

export const progressDiameterRocket = async (Rockets) => {
  // Paso 1: Obtener el diámetro total de los cohetes
  let [{ diameter }] = await getAllRockets(RocketDiameterTotal);
  let { meters } = diameter;

  // Paso 2: Crear un array para almacenar los contenedores
  let conterDiv = [];

  // Paso 3: Iterar sobre la lista de diámetros de cohetes
  [Rockets.diameter].forEach((val) => {
    // Paso 4: Crear el contenedor de información
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");

    // Paso 5: Crear la etiqueta y el progreso
    let divFirst = document.createElement("div");
    let labelFist = document.createElement("label");
    labelFist.textContent = `Rocket diameter :`;

    let ProgressFist = document.createElement("progress");
    ProgressFist.max = meters;
    ProgressFist.value = `${val.meters}`;
    ProgressFist.textContent = `${val.meters}%`;

    // Paso 6: Crear el span con la información de diámetro
    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    let numMeters = new Intl.NumberFormat('cop').format(val.meters);
    let numFeet = new Intl.NumberFormat('cop').format(val.feet);
    spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

    // Paso 7: Agregar los elementos al contenedor
    divFirst.append(labelFist);
    divFirst.append(ProgressFist);
    divLast.append(spanLast);
    divInformationContainer.append(divFirst);
    divInformationContainer.append(divLast);
    conterDiv.push(divInformationContainer);
  });

  // Paso 8: Agregar los contenedores al elemento HTML
  let section__information__1 = document.querySelector(".section__information__1");
  let information__2 = section__information__1.querySelector(".information__2");
  information__2.append(...conterDiv);
};

export const progressSecondStageDiameterRocket = async (Rockets) => {
  // Paso 1: Obtener el diámetro del escudo de la segunda etapa de los cohetes
  let [{ second_stage: { payloads: { composite_fairing: { diameter } } } }] = await getAllRockets(SecondStageDiameterTotal);
  let { meters } = diameter;

  // Paso 2: Crear un array para almacenar los contenedores
  let conterDiv = [];

  // Paso 3: Iterar sobre la lista de diámetros del escudo de la segunda etapa de cohetes
  [Rockets.second_stage.payloads.composite_fairing.diameter].forEach((val) => {
    // Paso 4: Crear el contenedor de información
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");

    // Paso 5: Crear la etiqueta y el progreso
    let divFirst = document.createElement("div");
    let labelFist = document.createElement("label");
    labelFist.textContent = `Diameter rocket shield :`;

    let ProgressFist = document.createElement("progress");
    ProgressFist.max = meters;
    ProgressFist.value = `${val.meters}`;
    ProgressFist.textContent = `${val.meters}%`;

    // Paso 6: Crear el span con la información de diámetro
    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    let numMeters = new Intl.NumberFormat('cop').format(val.meters);
    let numFeet = new Intl.NumberFormat('cop').format(val.feet);
    spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

    // Paso 7: Agregar los elementos al contenedor
    divFirst.append(labelFist);
    divFirst.append(ProgressFist);
    divLast.append(spanLast);
    divInformationContainer.append(divFirst);
    divInformationContainer.append(divLast);
    conterDiv.push(divInformationContainer);
  });

  // Paso 8: Agregar los contenedores al elemento HTML
  let section__information__1 = document.querySelector(".section__information__1");
  let information__2 = section__information__1.querySelector(".information__2");
  information__2.append(...conterDiv);
};

export const progressSecondStageHeightRocket = async (Rockets) => {
  // Paso 1: Obtener la altura del escudo de la segunda etapa de los cohetes
  let [{ second_stage: { payloads: { composite_fairing: { height } } } }] = await getAllRockets(SecondStageHeightTotal);
  let { meters } = height;

  // Paso 2: Crear un array para almacenar los contenedores
  let conterDiv = [];

  // Paso 3: Iterar sobre la lista de alturas del escudo de la segunda etapa de cohetes
  [Rockets.second_stage.payloads.composite_fairing.height].forEach((val) => {
    // Paso 4: Crear el contenedor de información
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");

    // Paso 5: Crear la etiqueta y el progreso
    let divFirst = document.createElement("div");
    let labelFist = document.createElement("label");
    labelFist.textContent = `Height rocket shield :`;

    let ProgressFist = document.createElement("progress");
    ProgressFist.max = meters;
    ProgressFist.value = `${val.meters}`;
    ProgressFist.textContent = `${val.meters}%`;

    // Paso 6: Crear el span con la información de altura
    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    let numMeters = new Intl.NumberFormat('cop').format(val.meters);
    let numFeet = new Intl.NumberFormat('cop').format(val.feet);
    spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

    // Paso 7: Agregar los elementos al contenedor
    divFirst.append(labelFist);
    divFirst.append(ProgressFist);
    divLast.append(spanLast);
    divInformationContainer.append(divFirst);
    divInformationContainer.append(divLast);
    conterDiv.push(divInformationContainer);
  });

  // Paso 8: Agregar los contenedores al elemento HTML
  let section__information__1 = document.querySelector(".section__information__1");
  let information__2 = section__information__1.querySelector(".information__2");
  information__2.append(...conterDiv);
};