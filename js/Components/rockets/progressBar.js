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

