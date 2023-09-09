import { Paper, Stack } from "@mui/material";
import Pie from "../pie/Pie";
import Bar from "../bar/Bar";
import Geo from "../geography/geo";

const Row3 = () => {
  return (
    <Stack mt={3} direction={"row"} gap={2} flexWrap={"wrap"}>
      <Paper sx={{ width: "33%" }}>
        <Pie />
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: 300, width: "33%" }}><Bar/>
      
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: 300, width: "33%" }}>
        <Geo/>
      </Paper>
    </Stack>
  );
};

export default Row3;
