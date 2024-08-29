export const getTheatreNameById = (theatres, id) => {
  const theatre = theatres.find((theatre) => id == theatre._id);
  return theatre?.name;
};
