import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import movieimg from "../../assets/image/movie.jpg";

export default function MovieCard({
  title = "",
  description = "",
  language = "",
  imageUrl = "",
  duration = "",
}) {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl === "" ? movieimg : imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {language}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {duration}
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
