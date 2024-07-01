export const defecto = {
    "options": {
        "select": {

        },
        "sort": {

        }
    }
}

export const masa = {
    "options": {
        "select": {
            "name": 1,
            "mass": 1
        },
        "sort": {
            "mass.kg": "desc"
        },
        "limit": 1
    }
}

export const carga = {
    "options": {
        "select": {
            "name": 1,
            "payload_weights": 1
        },
        "sort": {
            "payload_weights.kg": "desc"
        },
    }
}

export const RocketHeightTotal = {
    "options": {
        "select": {
            "height": 1
        },
        "sort": {
            "height.meters": "desc"
        }
    }
}

export const RocketDiameterTotal = {
    "options": {
        "select": {
            "diameter": 1
        },
        "sort": {
            "diameter.meters": "desc"
        }
    }
}

export const SecondStageDiameterTotal = {
    "options": {
        "select": {
            "second_stage.payloads.composite_fairing.diameter": 1
        },
        "sort": {
            "second_stage.payloads.composite_fairing.diameter": "desc"
        }
    }
}

export const SecondStageHeightTotal = {
    "options": {
        "select": {
            "second_stage.payloads.composite_fairing.height": 1
        },
        "sort": {
            "second_stage.payloads.composite_fairing.height": "desc"
        }
    }
}

export const RocketEngineTotal = {
    "options": {
        "select": {
            "engines": 1
        },
        "sort": {
            "engines.thrust_sea_level": "desc"
        }
    }
}
export const RocketEngineVacuumTotal = {
    "options": {
        "select": {
            "engines": 1
        },
        "sort": {
            "engines.thrust_vacuum": "desc"
        }
    }
}

export const pagination = (page, limit) => {
    let optionPaginarion = {
        "options": {
            page,
            limit
        }
    }
    return optionPaginarion;
}

export const basicQuery = (id) => {
    let basicQuery = {
        "query": {
            "_id": id
        }
    }
    return basicQuery;
}
export const launchesQuery = (id) => {
    let launchesQuery = {
        "query": {
            "_id": id
        },
        "options": {
            "populate": [
                {
                    "path": "launches"
                }
            ]
        }
    }
    return launchesQuery;
}
export const launchQuery = (id) => {
    let launchQuery = {
        "query": {
            "_id": id
        },
        "options": {
            "populate": [
                {
                    "path": "launch"
                }
            ]
        }
    }
    return launchQuery;
}
export const rocketsQuery = (id) => {
    let rocketsQuery = {
        "query": {
            "_id": id
        },
        "options": {
            "populate": [
                {
                    "path": "rockets"
                }
            ]
        }
    }
    return rocketsQuery;
}
export const rocketLaunchpadQuery = (id) => {
    let rocketLaunchpadQuery = {
        "query": {
            "_id": id
        },
        "options": {
            "populate": [
                "rocket",
                "launchpad"
            ]
        }
    }
    return rocketLaunchpadQuery;
}
export const extendedLaunchesQuery = (id) => {
    let extendedLaunchesQuery = {
        "query": {
            "_id": id
        },
        "options": {
            "populate": [
                {
                    "path": "launches",
                    "populate": [
                        { "path": "rocket" },
                        { "path": "payloads" }
                    ]
                }
            ]
        }
    }
    return extendedLaunchesQuery;
}