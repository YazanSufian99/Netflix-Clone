import { useState,useEffect } from 'react';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import React from 'react';
export default function Home({movies}){

  const [favMovies,setFavMovies]=useState([])

  async function getFavMovies(){
    const resopnse=await fetch(`${process.env.REACT_APP_SERVER}/trending`);
    const data= await resopnse.json();
    setFavMovies(data);
  }
  useEffect(()=>{
    getFavMovies()

  },[])
console.log(favMovies);
 
async function handelDelet(id){
  const url =`${process.env.REACT_APP_SERVER}/deleteMovie/${id}`;

  const resopnse = await fetch(
    {
      method: 'DELETE', 
    });
  location.reload();
}

  return( 
      <>
      <Header/>
      <h1>Your Favourate Movies</h1>
      {
        favMovies && favMovies.map((movies)=>{
          return(
      <div key={movies.title}  style={{ }}>
              <Card  style={{ width: '18rem', padding:"10px ", margin:"15px ",justifyContent:'space-evenly',display:'-ms-flexbox',flexWrap:'wrap' }}>
                <Card.Img variant="top" src={movies.poster_path} />
                <Card.Body>
                  <Card.Title style={{ color: 'red' }}>{movies.id}</Card.Title>
                  <Card.Text style={{ fontFamily: 'cursive', letterSpacing: '1px', lineHeight:'12px' }}>
                    {movies.overview}.
                  </Card.Text>
                  <Card.Subtitle>
                    {movies.release_date}
                  </Card.Subtitle>
                  
                  <Button style={{margin:'6px'}} variant="success" >Update</Button>
                  <Button onClick={()=>handelDelet(movies.id)} style={{margin:'6px'}} variant="outline-danger" >Delete</Button>
                </Card.Body>
              </Card>

            </div>
          )
        })
      }
      </>
    )
  }