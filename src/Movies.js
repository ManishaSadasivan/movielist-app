import React ,{useState}from 'react';
import './Movie.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory  } from "react-router-dom";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Checkbox from '@mui/material/Checkbox';
export default function Movies({movielist,setMovielist}) {
  
  console.log(movielist);
  const[Like,setLike]=useState(0);
  const[disLike,setdisLike]=useState(0);
  const history=useHistory();
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
 
  const classes = useStyles();
  function handledelete(id){
    const remainingmovie=movielist.filter((movie)=>{
      return movie.id!==id
    })
;
setMovielist(remainingmovie);
};
  return <div className="Movies" >
{movielist.map(({id,name,rating,summary,poster})=>(


    <Card className={classes.root} style={{margin:"5px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="moviePoster"
          height="400"
          image={poster}
         
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="h2">
            <div className="movieSpecs">
              <h4> {name}</h4>
              <h6 style={{color:rating<4?"red":"green"}}>⭐{rating}</h6>
             
            </div>
         
           
          </Typography>
         
          <Typography variant="body2" color="textSecondary" component="p">
           {summary}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <ThumbUpAltIcon fontSize="small" onClick={()=>{setLike(Like+1)}}></ThumbUpAltIcon>{Like}
        </Button>
        <Button size="small" color="primary">
        <ThumbDownIcon fontSize="small" onClick={()=>{setdisLike(disLike+1)}}></ThumbDownIcon>{disLike}
        </Button>
      
        <Button size="small" >
        <EditIcon fontSize="small" onClick={()=>{history.push("/EditMovie/"+id)}}></EditIcon>
        </Button>
        <Button size="small" color="secondary">
         <DeleteIcon size="small" 
         onClick={()=>handledelete(id)}></DeleteIcon>
        </Button>
      </CardActions>
    </Card>
))}
  </div>;
}
