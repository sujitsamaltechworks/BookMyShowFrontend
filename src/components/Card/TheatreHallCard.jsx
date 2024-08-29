import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./styles.css";

const TheatreHallCard = ({ name, number, seatingCapacity }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {name}
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Screen {number}
        </Typography>
        <Typography variant="body2">
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            Seating capacity
          </Typography>
          {seatingCapacity}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TheatreHallCard;
