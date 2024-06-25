export const getdataNoPagination = async (optio)=>{
    const url =`https://api.spacexdata.com/v4/${optio}`
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "GET"
    }
    let res = await fetch(url, config);
    let data = await res.json();
    return data;
}
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
export const getAlldata = async (optio,endpoint)=>{
    const url = `https://api.spacexdata.com/v4/${endpoint}/query `
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(optio)
    }
    let res = await fetch(url, config);
    let data = await res.json();
    return data;
}
export const getAllHistories = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/history/query"
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(optio)
    }
    let res = await fetch(url, config);
    let data = await res.json();
    return data;
}

export const getAllLandpads = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/landpads/query"
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(optio)
    }
    let res = await fetch(url, config);
    let data = await res.json();
    return data;
}

export const getAllShips = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/ships/query"
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(optio)
    }
    let res = await fetch(url, config);
    let data = await res.json();
    return data;
}

export const getAllDragons = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/dragons/query"
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(optio)
    }
    let res = await fetch(url, config);
    let data = await res.json();
    return data;
}
