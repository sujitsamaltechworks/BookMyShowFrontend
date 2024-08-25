import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles.css";
import {
  useCreateTheatre,
  useGetAllTheatres,
} from "../../../hooks/theatre.hook";
import TheatreCard from "../../../components/Card/TheatreCard";

function CreateTheatreForm() {
  const [name, setName] = useState("");
  const [plot, setPlot] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const { mutateAsync: createTheatreAsync } = useCreateTheatre();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await createTheatreAsync({
      name,
      plot,
      street,
      city,
      state,
      country,
      pinCode: Number(pinCode),
    });

    setName("");
    setPlot("");
    setStreet("");
    setCity("");
    setState("");
    setCountry("");
    setPinCode("");
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <div className="form-row">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
          label="Plot"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          label="Street"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="City"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={state}
          onChange={(e) => setState(e.target.value)}
          label="State"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Country"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <TextField
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          label="Pin Code"
          variant="outlined"
          fullWidth
          required
          size="small"
        />
      </div>
      <div className="form-row">
        <Button variant="contained" type="submit" fullWidth>
          Create Account
        </Button>
      </div>
    </Box>
  );
}

const CreateTheatreTab = () => {
  const { data: theatres } = useGetAllTheatres();

  return (
    <div className="create-theatre-container">
      <div className="create-theatre-form">
        <CreateTheatreForm />
      </div>
      <div className="create-theatre-cards">
        <ul>
          {theatres?.map((theatre) => (
            <li className="theatre-card-item" key={theatre._id}>
              <pre>
                <TheatreCard
                  name={theatre.name}
                  plot={theatre.plot}
                  street={theatre.street}
                  city={theatre.city}
                  state={theatre.state}
                  country={theatre.country}
                  pincode={theatre.pinCode}
                />
              </pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateTheatreTab;
