export const getCompany = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/company"
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
    return data;
}
export const getAllCrew = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/crew/query"
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

export const getAllLaunches = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/launches/query"
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

export const getAllCores = async (optio)=>{
    const url ="https://api.spacexdata.com/v4/cores/query"
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
