import SimpleTextEditor from "../../utils/SimpleTextEditor";

export const gridDefaultColDef = {
    minWidth: 100,
    filter: "agTextColumnFilter",
    suppressHeaderMenuButton: true,
    suppressHeaderContextMenu: true,
}

const gridOptions = [
    {
        headerName: "Id",
        field: "id",
        width: 100
    },
    {
        headerName: "Name",
        field: "name"
    },
    {
        headerName: "Username",
        field: "username",
        width: 200
    },
    {
        headerName: "Email",
        field: "email",
        width: 250
    },
    {
        headerName: "Phone",
        field: "phone"
    },
    {
        headerName: "Website",
        field: "website"
    },
    {
        headerName: "Address",
        field: "address", // Assuming your data contains 'cell' property with the Cell object
        width: 350,
        valueGetter: (params) => {
            const {data} = params;
            return `${data.address.street} ${data.address.city} ${data.address.zipcode}`
        },
        cellEditor: SimpleTextEditor,
    },
    {
        headerName: "Company",
        field: "company", // Assuming your data contains 'cell' property with the Cell object
        width: 350,
        valueGetter: (params) => {
            const {data} = params;
            return `${data.company.name}`
        }
    },
    {
        headerName: "Job Position",
        field: "company", // Assuming your data contains 'cell' property with the Cell object
        width: 350,
        valueGetter: (params) => {
            const {data} = params;
            return `${data.company.bs}`
        }
    }
];

export default gridOptions;