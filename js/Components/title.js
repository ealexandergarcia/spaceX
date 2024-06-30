export const title = async(name)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
}
export const title3 = async(title)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = title;
}
export const title2 = async() => {
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";  // Limpiar el contenido existente

    let img = document.createElement("img");  // Crear un nuevo elemento img
    img.src = "../storage/img/icons/SpaceX-Logo.svg";  // Establecer la URL de la imagen
    img.alt = "Header Image";  // Establecer un texto alternativo para la imagen

    header__title.appendChild(img);  // Agregar la imagen al elemento
}
