export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.removeAttribute("style")

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.removeAttribute("style")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.classList.remove("bg__card");
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;
    let carousel__item = document.querySelector(".carousel__item")
    carousel__item.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.removeAttribute("style")
    let carousel__item2 = section__information__3.querySelector(".carousel__item")
    carousel__item2.removeAttribute("style")
    carousel__item2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.removeAttribute("style")
    section__image.innerHTML = `
        <div class="load" style="height: 350px"></div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.classList.remove("bg__card");
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
}

export const loadFinish = async ()=>{
    const loadElements = document.querySelectorAll("div.load");
    loadElements.forEach((element) => {
    element.classList.remove("load");
    });
}