import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles.css";
import MovieCard from "../../../components/Card/MovieCard";
import { useCreateMovie, useGetAllMovies } from "../../../hooks/movie.hook";

function CreateMovieForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [image, setImage] = useState("");
  const [duration, setDuration] = useState("");

  const { mutateAsync: createMovieAsync } = useCreateMovie();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await createMovieAsync({
      title,
      description,
      language,
      image,
      duration: Number(duration),
    });

    setTitle("");
    setDescription("");
    setLanguage("");
    setImage("");
    setDuration("");
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <Typography variant="h3">Create Movie</Typography>
      <div className="form-row">
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          label="Language"
          variant="outlined"
          fullWidth
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={image}
          onChange={(e) => setImage(e.target.value)}
          label="Image URL"
          variant="outlined"
          fullWidth
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          label="Duration (in minutes)"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <Button variant="contained" type="submit" fullWidth>
          Add MOVIE
        </Button>
      </div>
    </Box>
  );
}

const CreateMovieTab = () => {
  const { data: movies } = useGetAllMovies();

  return (
    <div className="create-movie-container">
      <div className="create-movie-form">
        <CreateMovieForm />
      </div>
      <div className="create-movie-cards">
        <ul>
          {movies?.map((movie) => (
            <li className="movie-card-item" key={movie._id}>
              <MovieCard
                title={movie.title}
                description={movie.description}
                language={movie.language}
                imageUrl={movie.imageURL}
                duration={movie.durationInMinutes}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateMovieTab;
