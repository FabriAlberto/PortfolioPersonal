import React from "react";
import { Grid, Typography, Button, Link } from "@mui/material";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import styleFont from "../../styles/fontGradient.module.css";

const Main = () => {
  const styleBtn = {
    backgroundColor: "none",
    border: "1px solid #8B3491",
    color: "#A0A0A0",
    transition: "all .8s",
    "&:hover": {
      transform: "scale(.98)",
      background: "linear-gradient(139deg,#993488,#5E30AF)",
      color: "#fff",
    },
  };

  const styleTypography = {
    textShadow: "0px 0px 10px #fff8, 0px 0px 5px #fff8",
  };

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={12}
      sx={{ minHeigt: "100vh" }}
    >
      <Grid
        item
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="h2" color="#fff8" sx={styleTypography}>
          Fabrici<span>o</span> ⌨
        </Typography>
        <Typography
          className={styleFont.gradientFont}
          variant="h5"
          color="#A0A0A0"
        >
          DESARROLLADOR FRONTEND
        </Typography>
        <Typography color="#A0A0A0" sx={{ letterSpacing: "1px" }} mt={2}>
          ¡Hola! Soy desarrollador Frontend. Soy una persona a la que le gusta
          desarrollarse día a día, siempre estoy tratando de aprender cosas
          nuevas para poder seguir creciendo y poder enseñar todo lo aprendido.
          ¡Tengo muchísimas ganas de poder desafiar mis habilidades y seguir
          aprendiendo de todo lo lindo que tiene este mundo!.
        </Typography>
      </Grid>

      <Grid
        item
        sm={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img
          className="imgStyled"
          src="https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/header-img.svg"
          alt="img-astronauta"
        />
      </Grid>

      <Grid sm={12} md={12}>
        <Link
          sx={{ textDecoration: "none" }}
          href="https://drive.google.com/file/d/1LvJnQE0u1ayKlIy5F5SSRqnEPgQUUAAn/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          <Button sx={styleBtn}>
            {" "}
            <ArrowCircleDownRoundedIcon /> Descargar CV{" "}
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Main;
