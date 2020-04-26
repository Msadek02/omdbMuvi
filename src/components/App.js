import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';




const Movie_API_URL = 'http://www.omdbapi.com/?s=avengers&apikey=11eb0e56';


const App = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(()=> {
    fetch(Movie_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  },[]);


  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=11eb0e56`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };



  return (
    <div className="App">
     <Header text="OMDB Muvi" />
     <Search search={search} />
     <p className="App-intro">Sharing a few of our favorite movies and shows</p>
     <Grid container justify="center" spacing={2}>
     
       {loading && !errorMessage ? (
        <div><CircularProgress /></div>
        ) : errorMessage ? (
         <div className="errorMessage">{errorMessage}</div>
       ) : (
         movies.map((movie, index) => (
           <Movie key={`${index}-${movie.Title}`} movie={movie} />
         ))
       )}

     </Grid>
   </div>
 );
}

export default App;
