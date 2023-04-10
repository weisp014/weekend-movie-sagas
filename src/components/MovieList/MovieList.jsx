import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const clickHandler = (id) => {
    console.log("go to details page for movie:", id);
    dispatch({
      type: "FETCH_MOVIE_DETAILS",
      payload: id,
    });
    history.push("/details");
  };

  return (
    <main>
      <h1>Movie List</h1>
      {/* <section className="movies"> */}
      <Grid container spacing={2}>
        {movies.map((movie) => {
          return (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 500 }}
                  image={movie.poster}
                  title={movie.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.description.slice(0, 80)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      clickHandler(movie.id);
                    }}
                    size="small"
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {/* </section> */}
    </main>
  );
}

export default MovieList;
