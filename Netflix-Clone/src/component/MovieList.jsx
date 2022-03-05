import Movie from "./Movie";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import ModalMovie from "./ModalMovie";

let MovieList = (props) =>{
  const [chosenMovie, setChosenMovie] = useState()
  // console.log(props.movies);




  function handelChosenMovie(movie){
    // console.log(props);

  };
  return(
    <div className="films">
    {
        props.movies.map(movie => {
            return(<Movie movie={movie}/>
            )
        })
        
    }
   
    </div>
)
}
export default MovieList;