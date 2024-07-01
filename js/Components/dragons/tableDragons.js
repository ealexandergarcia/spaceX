import { table, table2 } from "../common/tables.js";

export const tableDragonHeatShield = async (data) => {
    let { heat_shield: { material, size_meters, temp_degrees, dev_partner } } = data
    const rows = [
        { label: "Material", value: material ? material : "N/A" },
        { label: "Size (meters)", value: size_meters ? size_meters : "N/A" },
        { label: "Temp (degrees)", value: temp_degrees ? temp_degrees : "N/A" },
        { label: "Dev Partner", value: dev_partner ? dev_partner : "N/A" }
    ];
    await table(rows, "#information__table__1", "Heat Shield")
}
export const tableLaunchPayload = async (data) => {
    const {launch_payload_mass :{ kg, lb }} = data;
    const {launch_payload_vol: { cubic_meters, cubic_feet }} = data;

    const rows = [
        { label: "Mass (kg)", value: kg },
        { label: "Mass (lb)", value: lb },
        { label: "Volume (cubic meters)", value: cubic_meters },
        { label: "Volume (cubic feet)", value: cubic_feet }
    ];

    await table(rows, "#information__2", "Launch Payload");
};

export const tableReturnPayload = async (data) => {
    const { kg, lb } = data.return_payload_mass;
    const { cubic_meters, cubic_feet } = data.return_payload_vol;

    const rows = [
        { label: "Mass (kg)", value: kg },
        { label: "Mass (lb)", value: lb },
        { label: "Volume (cubic meters)", value: cubic_meters },
        { label: "Volume (cubic feet)", value: cubic_feet }
    ];

    await table(rows, "#information__2", "Return Payload");
};

export const tableTrunk = async (data) => {
    const { cubic_meters, cubic_feet } = data.trunk.trunk_volume;
    const { solar_array, unpressurized_cargo } = data.trunk.cargo;

    const rows = [
        { label: "Trunk Volume (cubic meters)", value: cubic_meters },
        { label: "Trunk Volume (cubic feet)", value: cubic_feet },
        { label: "Solar Array", value: solar_array },
        { label: "Unpressurized Cargo", value: unpressurized_cargo ? "Yes" : "No" }
    ];

    await table(rows, "#information__table__2", "Trunk");
};

export const tableCapsule = async (data) => {
    const { cubic_meters, cubic_feet } = data.pressurized_capsule.payload_volume;

    const rows = [
        { label: "Payload Volume (cubic meters)", value: cubic_meters },
        { label: "Payload Volume (cubic feet)", value: cubic_feet }
    ];

    await table(rows, "#description__item", "Pressurized Capsule");
};

export const tableDimensions = async (data) => {
    const { meters: height_m, feet: height_f } = data.height_w_trunk;
    const { meters: diameter_m, feet: diameter_f } = data.diameter;

    const rows = [
        { label: "Height with Trunk (meters)", value: height_m },
        { label: "Height with Trunk (feet)", value: height_f },
        { label: "Diameter (meters)", value: diameter_m },
        { label: "Diameter (feet)", value: diameter_f }
    ];

    await table(rows, "#description__item", "Dimensions");
};

export const tableThrusters = async (data) => {
    const { thrusters } = data;

    thrusters.forEach((thruster, index) => {
        const rows = [
            { label: "Type", value: thruster.type },
            { label: "Amount", value: thruster.amount },
            { label: "Pods", value: thruster.pods },
            { label: "Fuel 1", value: thruster.fuel_1 },
            { label: "Fuel 2", value: thruster.fuel_2 },
            { label: "ISP", value: thruster.isp },
            { label: "Thrust (kN)", value: thruster.thrust.kN },
            { label: "Thrust (lbf)", value: thruster.thrust.lbf }
        ];

        table(rows, `#description__item`, `Thruster ${index + 1}`);
    });
};
