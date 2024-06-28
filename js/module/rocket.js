export const getAllRockets = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/rockets/query"
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(optio)
    }
    let res = await fetch(url, config);
    let {docs:mass}= await res.json();
    return mass;
}
export const getAllCapsules = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/capsules/query"
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(optio)
    }
    let res = await fetch(url, config);
    let data = await res.json();
    console.log(data);
    return data;
}

