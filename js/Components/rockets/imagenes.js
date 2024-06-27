export const imageRockets = async (flickr_images) => {    
    const sectionImage = document.querySelector("#section__image");
    const divs = [];

    for (const imageUrl of flickr_images) {
        const div = document.createElement("div");
        div.classList.add("carousel__item");

        const img = document.createElement("img");
        img.setAttribute("src", imageUrl);
        img.setAttribute("referrerpolicy", "no-referrer");

        div.appendChild(img);
        divs.push(div);
    }

    for (const div of divs) {
        sectionImage.appendChild(div);
    }
    
};