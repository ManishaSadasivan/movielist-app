import React ,{ useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import'./AddMovies.css';

export default function AddMovies({movielist,setMovielist}) {

    const history=useHistory();
const [name,setName]=useState();
const [rating,setRating]=useState();
const [poster,setPoster]=useState();
const [summary,setSummary]=useState();
  return <div className="AddMovies">
   
    <Container maxWidth="sm">
       <TextField  label="name" value={name}onChange={(event)=>{setName(event.target.value)}}/><br></br>
  <TextField label="rating" value={rating}onChange={(event)=>{setRating(event.target.value)}} id="rating"/><br></br>
  <TextField  label="poster"  value={poster}onChange={(event)=>{setPoster(event.target.value)}}/><br></br>
  <TextField  label="summary" value={summary}onChange={(event)=>{setSummary(event.target.value)}} id="summary"/><br></br>
      </Container>
   
     
<Button color="primary" onClick={()=>{
          const newMovie={
            name:name,
            rating:rating,
           poster:poster,
           summary:summary
        }
        setMovielist([...movielist,newMovie])
        history.push("/Movies")
        console.log(newMovie);
        console.log(movielist);
    }}
>Add</Button>
     
  </div>;
}
