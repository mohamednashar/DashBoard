import { Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={<EmailIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"11,450"}
        subTitle={"Emails Sent"}
        increase={"+15%"}
        data={data1} scheme={"nivo"}      />

      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"428,123"}
        subTitle={"Sales obtained"}
        increase={"+25%"}
        data={data2}
        scheme={"category10"} 
      />

      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"30,321"}
        subTitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"} 
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,225,541"}
        subTitle={"Traffic Received"}
        increase={"+47%"}
        data={data4}
        scheme={"dark2"} 
      />
    </Stack>
  );
};

export default Row1;