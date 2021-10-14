import React, { useState } from "react";
import styled from "styled-components";
import CarsData from "../../../data/CarsData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { cardHeaderClasses, Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";

import CarInfoModal from "./CarInfoModal";

const CarContainerView = () => {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState();

  const handleClickOpen = (car) => {
    setCar(car);
    setOpen(true);
  };

  const handleClose = () => {
    setCar();
    setOpen(false);
  };
  return (
    <Wrapper>
      <Grid container alignItems="center" justifyContent="center">
        {CarsData.map((car, index) => {
          return (
            <Grid item style={{ padding: "20px" }}>
              <Card sx={{ minWidth: 350 }}>
                <CardActionArea onClick={() => handleClickOpen(car)}>
                  <CardMedia
                    component="img"
                    alt={car.id}
                    height="140"
                    width="160"
                    image={car.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {car.make} {car.model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {car.category} {car.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${car.priceMin} - ${car.priceMax}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <CarInfoModal open={open} handleClose={handleClose} car={car} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CarContainerView;
