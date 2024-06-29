export const imageLanches = async (launch) => {    
    let {links:{patch:{small}}} = launch;

    const sectionImage = document.querySelector("#section__image");
    sectionImage.setAttribute("style","height: 260px; display:block;")
    const divs = [];


    const div = document.createElement("div");
    div.classList.add("carousel__item");
    // div.style.add("width: 250px;")

    const img = document.createElement("img");
    img.setAttribute("src", small);
    img.setAttribute("referrerpolicy", "no-referrer");
    img.setAttribute("style","width: 250px;height: 250px;")

    div.appendChild(img);
    divs.push(div);
    const loadElement = sectionImage.querySelector("div.load");

    loadElement.parentNode.replaceChild(div, loadElement);
    // sectionImage.appendChild(div);
};