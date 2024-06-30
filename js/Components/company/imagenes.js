export const imageCompany = async () => {    
    const sectionImage = document.querySelector("#section__image");
    if (!sectionImage) return;

    sectionImage.setAttribute("style", "height: 260px; display:block;");

    const div = document.createElement("div");
    div.classList.add("carousel__item");

    const img = document.createElement("img");
    img.setAttribute("src", "../storage/img/elon.webp");
    img.setAttribute("referrerpolicy", "no-referrer");
    img.setAttribute("style", "width: 250px;height: 250px;");

    div.appendChild(img);

    const loadElement = sectionImage.querySelector("div.load");
    if (!loadElement) return;

    loadElement.parentNode.replaceChild(div, loadElement);
};

export const imageCompany2 = async () => {    
    const sectionImage = document.querySelector(".section__information__2");
    const sectionImage2 = document.querySelector(".section__information__3");

    if (!sectionImage || !sectionImage2) return;

    sectionImage.setAttribute("style", "height: 260px; display:block;");
    sectionImage2.setAttribute("style", "height: 260px; display:block;");

    const div = document.createElement("div");
    div.classList.add("carousel__item");

    const img = document.createElement("img");
    img.setAttribute("src", "../storage/img/elonmem.webp");
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
