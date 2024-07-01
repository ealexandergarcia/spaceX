import { table } from "../common/tables.js";

export const tablePayloadGeneralInfo = async (data) => {
    const { name, type, reused, launch:{name : launchName}, customers, nationalities, manufacturers } = data;

    const rows = [
        { label: "Name", value: name },
        { label: "Type", value: type },
        { label: "Reused", value: reused ? "Yes" : "No" },
        { label: "Launch", value: launchName },
        { label: "Customers", value: customers.join(", ") },
        { label: "Nationalities", value: nationalities.join(", ") },
        { label: "Manufacturers", value: manufacturers.join(", ") }
    ];

    await table(rows, "#description__item", "General Information");
};

export const tablePayloadPhysicalCharacteristics = async (data) => {
    const { mass_kg, mass_lbs } = data;

    const rows = [
        { label: "Mass (kg)", value: mass_kg ?? "N/A" },
        { label: "Mass (lbs)", value: mass_lbs ?? "N/A" }
    ];

    await table(rows, "#description__item", "Physical Characteristics");
};

export const tablePayloadOrbitInfo = async (data) => {
    const { orbit, reference_system, regime, periapsis_km, apoapsis_km, inclination_deg } = data;

    const rows = [
        { label: "Orbit", value: orbit },
        { label: "Reference System", value: reference_system },
        { label: "Regime", value: regime },
        { label: "Periapsis (km)", value: periapsis_km ?? "N/A" },
        { label: "Apoapsis (km)", value: apoapsis_km ?? "N/A" },
        { label: "Inclination (deg)", value: inclination_deg ?? "N/A" }
    ];

    await table(rows, "#information__2", "Orbit Information");
};

export const tablePayloadDragonInfo = async (data) => {
    const {dragon:{ capsule, mass_returned_kg, mass_returned_lbs, flight_time_sec, manifest, water_landing, land_landing }} = data;

    const rows = [
        { label: "Capsule", value: capsule ? capsule.toFixed(3)  : "No" },
        { label: "Mass Returned (kg)", value: mass_returned_kg ? mass_returned_kg : "No"  },
        { label: "Mass Returned (lbs)", value: mass_returned_lbs ? mass_returned_lbs : "No"  },
        { label: "Flight Time (s)", value: flight_time_sec ? flight_time_sec : "No"  },
        { label: "Manifest", value: manifest ? manifest : "No"  },
        { label: "Water Landing", value: water_landing ? water_landing : "No"  },
        { label: "Land Landing", value: land_landing ? land_landing : "No"  }
    ];

    await table(rows, "#information__2", "Dragon Information");
};
