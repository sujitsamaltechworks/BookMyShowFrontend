import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles.css";
import {
  useCreateTheatreHall,
  useGetAllTheatreHalls,
  useGetAllTheatres,
} from "../../../hooks/theatre.hook";
import TheatreHallCard from "../../../components/Card/TheatreHallCard";
import { getTheatreNameById } from "../../../utils/functions";

function CreateShowHallForm({
  selectedTheatreId,
  setSelectedtheatreId,
  theatres,
}) {
  const [number, setNumber] = useState();
  const [seatingCapacity, setSeatingCapacity] = useState();
  const { mutateAsync: createHallAsync } = useCreateTheatreHall();

  useEffect(() => {
    if (theatres.length != 0) {
      setSelectedtheatreId(theatres[0]._id);
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Outside", number, seatingCapacity, selectedTheatreId);

    await createHallAsync({
      number: Number(number),
      seatingCapacity: Number(seatingCapacity),
      theatreId: selectedTheatreId,
    });

    setNumber("");
    setSeatingCapacity("");
  };

  const handleTheatreSelect = (e) => {
    setSelectedtheatreId(e.target.value);
    theatreId = e.target.value;
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <Typography variant="h3">Create Theatre Hall</Typography>
      <div className="form-row">
        <select onChange={handleTheatreSelect}>
          {theatres.map((theatre) => (
            <option key={theatre._id} value={theatre._id}>
              {theatre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <TextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          label="Hall Number"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={seatingCapacity}
          onChange={(e) => setSeatingCapacity(e.target.value)}
          label="Seating Capacity"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <Button variant="contained" type="submit" fullWidth>
          Add Hall
        </Button>
      </div>
    </Box>
  );
}

const CreateTheatreHallTab = () => {
  const [selectedTheatreId, setSelectedtheatreId] = useState();
  const [selectedTheatreName, setSelectedtheatreName] = useState();
  const { data: theatres } = useGetAllTheatres();
  const { data: halls } = useGetAllTheatreHalls(selectedTheatreId);

  useEffect(() => {
    setSelectedtheatreName(getTheatreNameById(theatres, selectedTheatreId));
  }, [selectedTheatreId]);

  return (
    <div className="create-movie-container">
      <div className="create-movie-form">
        <CreateShowHallForm
          selectedTheatreId={selectedTheatreId}
          setSelectedtheatreId={setSelectedtheatreId}
          theatres={theatres}
        />
      </div>
      <div className="create-movie-cards">
        <ul>
          {halls?.map((hall) => (
            <li className="movie-card-item" key={hall._id}>
              <TheatreHallCard
                name={selectedTheatreName}
                seatingCapacity={hall.seatingCapacity}
                number={hall.number}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateTheatreHallTab;
