import { table } from "../common/tables.js";

export const tableSpaceTrackGeneralInfo = async (data) => {
    const {OBJECT_TYPE,COUNTRY_CODE,LAUNCH_DATE,SITE,DECAY_DATE,DECAYED,GP_ID} = data;

    const rows = [
        { label: "Object Type", value: OBJECT_TYPE },
        { label: "Country Code", value: COUNTRY_CODE },
        { label: "Launch Date", value: LAUNCH_DATE },
        { label: "Launch Site", value: SITE },
        { label: "Decay Date", value: DECAY_DATE },
        { label: "Decayed", value: DECAYED ? "Yes" : "No" },
        { label: "GP ID", value: GP_ID }
    ];

    await table(rows, "#section__information__1", "General Information of the Space Object");
};

export const tableSpaceTrackTLEDetails = async (data) => {
    const {TLE_LINE0,TLE_LINE1,TLE_LINE2} = data;

    const rows = [
        { label: "TLE Line 0", value: TLE_LINE0 },
        { label: "TLE Line 1", value: TLE_LINE1 },
        { label: "TLE Line 2", value: TLE_LINE2 }
    ];

    await table(rows, "#description__item", "TLE Details of the Space Object");
};

export const tableSpaceTrackOrbitParameters = async (data) => {
    const {MEAN_MOTION,ECCENTRICITY,INCLINATION,RA_OF_ASC_NODE,ARG_OF_PERICENTER,MEAN_ANOMALY,SEMIMAJOR_AXIS,PERIOD,APOAPSIS,PERIAPSIS} = data;

    const rows = [
        { label: "Mean Motion", value: MEAN_MOTION.toFixed(3) },
        { label: "Eccentricity", value: ECCENTRICITY.toFixed(3) },
        { label: "Inclination", value: INCLINATION.toFixed(3) },
        { label: "Ascending Node", value: RA_OF_ASC_NODE.toFixed(3) },
        { label: "Pericenter", value: ARG_OF_PERICENTER.toFixed(3) },
        { label: "Mean Anomaly", value: MEAN_ANOMALY.toFixed(3) },
        { label: "Semimajor Axis", value: SEMIMAJOR_AXIS.toFixed(3) },
        { label: "Period", value: PERIOD.toFixed(3) },
        { label: "Apoapsis", value: APOAPSIS.toFixed(3) },
        { label: "Periapsis", value: PERIAPSIS.toFixed(3) }
    ];

    await table(rows, "#information__2", "Orbital Parameters");
};

export const tableStarlinkMissionInfo = async (data) => {
    const {name,version,date_utc,success,rocket: {name :nameRocket},launchpad: {name : nameLaunchpad},details} = data;

    const rows = [
        { label: "Name", value: name },
        { label: "Version", value: version },
        { label: "Launch Date", value: date_utc },
        { label: "Success", value: success ? "Yes" : "No" },
        { label: "Rocket", value: nameRocket },
        { label: "Launch Site", value: nameLaunchpad }
    ];

    await table(rows, "#information__2", "Starlink Mission");
};

export const tableRocketCoreLandingDetails = async (data) => {
    const {flight_number,cores} = data;

    const core = cores[0];

    const rows = [
        { label: "Flight Number", value: flight_number },
        { label: "Booster Reused", value: core.reused ? "Yes" : "No" },
        { label: "Landing Attempt", value: core.landing_attempt ? "Yes" : "No" },
        { label: "Landing Success", value: core.landing_success ? "Yes" : "No" },
        { label: "Landing Type", value: core.landing_type }
    ];

    await table(rows, "#description__item", "Rocket Core Landing Details");
};