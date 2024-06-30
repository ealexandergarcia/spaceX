import { table } from "../common/tables.js"; 

export const tableLandpads = async (data) => {
    let { launches } = data;
    const rows = [];
    launches.forEach(element => {
        rows.push(
            { label: "Launch", value: element.name }
        );
    });
    await table(rows, "#description__item", "Launch Data");
}
