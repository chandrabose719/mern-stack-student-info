import React from "react";
import { Container, Grid, makeStyles, Typography, Paper } from "@material-ui/core"; 

import autoDeskImg from "./images/auto-desk.png";
import squipImg from "./images/squip.png";
import qateyImg from "./images/qatey.png";
import sentientImg from "./images/sentient.png";
import ushaImg from "./images/usha.png";

const useStyles = makeStyles((theme) => {
  return {
    trustedRoot:{
      padding: "25px 0px 25px 0px",
    },
    trustedTitle: {
      padding: "10px 0px 10px 0px",
    },
    trustedPaper: {
      textAlign: 'center',
      padding: theme.spacing(2),
      margin: theme.spacing(2),
    },  
    trustedImg: {
      width: "100%",
      height: "50px",
    },
  }  
});

function Trusted(){
  const classes = useStyles();  

  return(
    <div>
      <div className={classes.trustedRoot}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" className={classes.trustedTitle}>Trusted By</Typography>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
              <Paper align="center" elevation={3} className={classes.trustedPaper}>
                <img align="center" src={autoDeskImg} alt={autoDeskImg} className={classes.trustedImg} />
              </Paper>      
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
              <Paper elevation={3} className={classes.trustedPaper}>
                <img src={squipImg} alt={squipImg} className={classes.trustedImg} />
              </Paper>    
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
              <Paper elevation={3} className={classes.trustedPaper}>
                <img src={qateyImg} alt={qateyImg} className={classes.trustedImg} />           
              </Paper>    
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
              <Paper elevation={3} className={classes.trustedPaper}>
                <img src={sentientImg} alt={sentientImg} className={classes.trustedImg} />        
              </Paper>    
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
              <Paper elevation={3} className={classes.trustedPaper}>
                <img src={ushaImg} alt={ushaImg} className={classes.trustedImg} />        
              </Paper>    
            </Grid>
          </Grid>
        </Container>
      </div>  
    </div>
  )
}

export default Trusted;














// import React from "react";
// import { makeStyles, Button, Typography, Snackbar, } from "@material-ui/core";
// import { useHistory } from "react-router-dom";

// import Loader from "../Layouts/Loader";

// const useStyles = makeStyles((theme) =>{
//   return{
//     backdrop: {
//       zIndex: theme.zIndex.drawer + 1,
//       color: '#fff',
//     }
//   }
// });

// function Index(){
//   const classes = useStyles();
//   const history = useHistory();
//   const [isLoader, setIsLoader] = React.useState(false);
//   const [isSnackBar, setIsSnackBar] = React.useState(false);
//   console.log(isSnackBar);
//   const handleToggle = () => {
//     setIsLoader(true);
//   }
//   const handleSnackBar = () => {
//     console.log(isSnackBar);
//     setIsSnackBar(true);
//   }
//   const handleSnackBarClose = () => {
//     console.log(isSnackBar);
//     setIsSnackBar(false);
//   };

//   return(
//     <div className={ classes.homeRoot }>
//       <Loader isLoader={isLoader}></Loader>
//       <Snackbar
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//         open={isSnackBar}
//         autoHideDuration={10}
//         message="Sample Message!"
//         onClose={handleSnackBarClose}
//       />
//       <Typography variant="h1">Home Page</Typography>
//       <Button
//         type="button"
//         color="secondary"
//         variant="contained"
//         onClick={()=>history.push("/login")}
//       >
//         Login
//       </Button>
//       <Button
//         type="button"
//         color="secondary"
//         variant="contained"
//         onClick={()=>history.push("/manufacture-details")}
//       >
//         Details
//       </Button>
//       <Button variant="outlined" color="primary" onClick={handleToggle}>
//         Show backdrop
//       </Button>
//       <Button variant="outlined" color="primary" onClick={handleSnackBar}>
//         Show SnackBar
//       </Button>
//     </div>    
//   )
// }

// export default Index;