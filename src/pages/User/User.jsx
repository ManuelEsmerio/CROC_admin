import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css";// Optional Theme applied to the Data Grid
import { useSelector } from 'react-redux';
import gridOptions, { gridDefaultColDef } from './UserGridCofig';
import { Card, CardContent, CardActions, CardHeader, Button, Divider } from '@mui/material';
import moment from 'moment';
import CardSettings from '../../components/CardSettings/CardSettings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ImportExportIcon from '@mui/icons-material/ImportExport';

 // Optional Theme applied to the Data Grid

const User = () => {
  const gridRef = useRef();
  const selectMode = useSelector((state) => state.theme.mode);

   // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState(gridOptions);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(results => results.json())
      .then(data => {
        setRowData(data);
        console.log(data);
        //  data.results[0];
      });
  }, []);

  const defaultColDef = useMemo(() => gridDefaultColDef, []);

  const cardSettingsItems = [
    {
      itemName: "New User",
      icon: <AddCircleIcon />,
      handledAction: () => {
         console.log("Click add new user");
      },
    },
    {
      itemName: "Export Excel",
      icon: <ImportExportIcon />,
      handledAction: () => {
         console.log("Click export excel");
      },
    },
  ];

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    console.log('selectedRows: ', selectedRows)
  }, []);

  return (
    <>
      <Card>
        <CardHeader
          title="User List"
          subheader={moment(new Date()).format('MMMM DD YYYY')}
          action={
            <CardSettings settings={cardSettingsItems}/>
          }
          color='secondary'
        />
        <Divider/>
        <CardContent className={(selectMode == "light") ? "ag-theme-material" : "ag-theme-material-dark"} style={{ height: 600 }}>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={colDefs}
              defaultColDef={defaultColDef}
              rowSelection={"multiple"}
              onSelectionChanged={onSelectionChanged}
            />
        </CardContent>
        <CardActions>
          <Button variant="contained" color='secondary'>Share</Button>
          <Button variant="contained" color='error'>Learn More</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default User