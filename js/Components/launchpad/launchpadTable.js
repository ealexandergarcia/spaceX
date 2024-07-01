import { table } from "../common/tables.js";

export const tableLocationInfo = async (data) => {
    const rows = [
        { label: "Locality", value: data.locality },
        { label: "Region", value: data.region },
        { label: "Latitude", value: data.latitude.toFixed(3) },
        { label: "Longitude", value: data.longitude.toFixed(3) }
    ];
    await table(rows, "#description__item", "Location Information");
}

export const tableLaunchStats = async (data) => {
    const rows = [
        { label: "Launch Attempts", value: data.launch_attempts },
        { label: "Launch Successes", value: data.launch_successes }
    ];
    await table(rows, "#description__item", "Launch Statistics");
}

export const tableTimezoneInfo = async (data) => {
    const rows = [
        { label: "Timezone", value: data.timezone }
    ];
    await table(rows, "#description__item", "Timezone Information");
}

export const tableStatusDetails = async (data) => {
    const rows = [
        { label: "Status", value: data.status }
    ];
    await table(rows, "#information__table__1", "Status and Details");
}

export const tableRocketInfo = async (data) => {
    if (!data.rockets || data.rockets.length === 0) {
        console.error("No rocket data available.");
        return;
    }

    const rocket = data.rockets[0]; // Asumiendo que sólo hay un cohete en el array
    
    const rows = [
        { label: "Name", value: rocket.name || "N/A" },
        { label: "Height (m)", value: rocket.height?.meters || "N/A" },
        { label: "Height (ft)", value: rocket.height?.feet || "N/A" },
        { label: "Diameter (m)", value: rocket.diameter?.meters || "N/A" },
        { label: "Diameter (ft)", value: rocket.diameter?.feet || "N/A" },
        { label: "Mass (kg)", value: rocket.mass?.kg || "N/A" },
        { label: "Mass (lb)", value: rocket.mass?.lb || "N/A" },
        { label: "First Stage Thrust (Sea Level, kN)", value: rocket.first_stage?.thrust_sea_level?.kN || "N/A" },
        { label: "First Stage Thrust (Sea Level, lbf)", value: rocket.first_stage?.thrust_sea_level?.lbf || "N/A" },
        { label: "Second Stage Thrust (kN)", value: rocket.second_stage?.thrust?.kN || "N/A" },
        { label: "Second Stage Thrust (lbf)", value: rocket.second_stage?.thrust?.lbf || "N/A" },
        { label: "First Flight", value: rocket.first_flight || "N/A" },
        { label: "Country", value: rocket.country || "N/A" },
        { label: "Company", value: rocket.company || "N/A" },
        { label: "Cost per Launch (USD)", value: rocket.cost_per_launch ? `$${rocket.cost_per_launch.toLocaleString()}` : "N/A" },
        { label: "Success Rate (%)", value: rocket.success_rate_pct ? `${rocket.success_rate_pct}%` : "N/A" }
    ];

    await table(rows, "#information__2", "Rocket Information");
}