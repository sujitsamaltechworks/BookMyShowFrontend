import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import theatreimg from "../../assets/image/theatre.jpg";

export default function TheatreCard({
  name = "",
  plot = "",
  city = "",
  state = "",
  country = "",
  pincode = "",
}) {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={theatreimg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} Theatre
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Address : ${plot}, ${city}, ${state}, ${country}, ${pincode}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="error">
          Delete Theatre
        </Button>
      </CardActions>
    </Card>
  );
}
