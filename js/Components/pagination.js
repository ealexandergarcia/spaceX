import { defecto } from "../helper/filtros.js";
import { getAllRockets } from "../module/rocket.js";
import { load } from "./load.js";
import { title } from "./title.js";

const getRocketsId = async (e) =>{
    console.log('Prueba de que funciona la pagina gg easy peace o como chingado se escriba');
    let a = e.target.parentElement.children;
    console.log(a);
    
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let id =e.target.id;
    let Rocketdata = {
        "query": {
            "_id": id
          }
    }

    let Rocket = await getAllRockets(Rocketdata);
    console.log(Rocket);
    
    await title(Rocket[0].name)
    // await load();
}

export const paginationRockets = async()=>{
    let rockets = await getAllRockets(defecto);
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    
    return div;
}