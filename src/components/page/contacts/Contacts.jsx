import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows,columns } from "./data";
import { Box, Typography } from "@mui/material";
import Header from "../../../components/Header";


const Contacts = () => {
  return (
    <Box>
      <Header title={"CONTACTS"} subTitle={"List Of Contacts For Future Reference"}/>
    <Box
      sx={{
        height: 600,
        mx: "auto",
        width: "95%",
        // @ts-ignore
        mx: "auto",
      }}
    >
      <DataGrid
       slots={{
        toolbar: GridToolbar,
      }}
        rows={rows}
     
        // @ts-ignore
        columns={columns}
      />
    </Box>
  </Box>
  )
}

export default Contacts