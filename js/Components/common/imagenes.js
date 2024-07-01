export const imagenCentral = async (data) => {    

    const sectionImage = document.querySelector("#section__image");
    sectionImage.setAttribute("style","height: 260px; display:block;")
    const divs = [];


    const div = document.createElement("div");
    div.classList.add("carousel__item");
    // div.style.add("width: 250px;")

    const img = document.createElement("img");
    img.setAttribute("src", data);
    img.setAttribute("referrerpolicy", "no-referrer");
    img.setAttribute("style","width: 250px;height: 250px;")

    div.appendChild(img);
    divs.push(div);
    const loadElement = sectionImage.querySelector("div.load");

    loadElement.parentNode.replaceChild(div, loadElement);
    // sectionImage.appendChild(div);
};

export const fillerImage = async (imgName) => {    
    const sectionImage = document.querySelector(".section__information__2");
    const sectionImage2 = document.querySelector(".section__information__3");

    if (!sectionImage || !sectionImage2) return;

    sectionImage.setAttribute("style", " display:block;");
    sectionImage2.setAttribute("style", " display:block;transform: scaleX(-1);");

    const div = document.createElement("div");
    div.classList.add("carousel__item");

    const img = document.createElement("img");
    img.setAttribute("src",  `../storage/img/${imgName} `);
    img.setAttribute("referrerpolicy", "no-referrer");
    img.setAttribute("style", "width: 250px;height: 250px;");

    div.appendChild(img);

    const carousel__item = sectionImage.querySelector(".carousel__item");
    const carousel__item2 = sectionImage2.querySelector(".carousel__item");

    if (!carousel__item || !carousel__item2) return;

    const loadElement = carousel__item.querySelector("div.load");
    const loadElement2 = carousel__item2.querySelector("div.load");

    if (!loadElement || !loadElement2) return;

    loadElement.parentNode.replaceChild(div, loadElement);
    loadElement2.parentNode.replaceChild(div.cloneNode(true), loadElement2);
};
