import React from "react";
import { Grid } from "@mui/material";
import { height } from "@mui/system";

const CardTech = ({ technologie }) => {
  const { name, img } = technologie;
  const styleImg = {
    width: "80px",
    height: "90px",
    objectFit: "contain",
    filter: "drop-shadow(0px 0px 1px #fff)",
    "&:hover": {
      filter: "drop-shadow(0px 0px 3px #993488)",
    },
  };
  
  return (
      <Grid
        item
        display="flex"
        height="90px"
        alignItems="center"
        justifyContent="center"
        mt={7}
        xs={6}
        sm={4}
        md={2}
      >
        <img style={styleImg} src={img} alt={name} />
      </Grid>
  );
};

export default CardTech;
