import React from "react";

// mui
import {
  makeStyles
} from '@mui/styles';
import { 
  Backdrop, 
  CircularProgress 
} from "@mui/material";

function Loader({ isLoader }){
  const classes = useStyles();
  
  return(
    <div>
      <Backdrop className={classes.backdrop} open={isLoader}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>    
  )
}

export default Loader;

const useStyles = makeStyles((theme) =>{
  return{
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    }
  }
});
