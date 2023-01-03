import React from "react";
import { Container, Grid, makeStyles, Typography, Paper } from "@material-ui/core"; 

import injectionMoldingImg from "./images/injection-molding.png";
import cncMoldingImg from "./images/cnc-machining.png";
import printingImg from "./images/3d-printing.png";
import vacuumCastingImg from "./images/vacuum-casting.png";
import sheetMetalImg from "./images/sheet-metal.png";
import frpMoldingImg from "./images/frp-molding.png";

const useStyles = makeStyles((theme) => {
  return {
    serviceRoot: {
      padding: theme.spacing(5),
    },  
    paper: {
      textAlign: 'center',
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
    serviceImg: {
      width: "100%",
      height: "150px"
    },
  }  
});

function Service(){
  const classes = useStyles();  

  return(
    <div>
      <div className={classes.serviceRoot}>
        <Container maxWidth="xl">
          <Typography align="center" variant="h5" color="secondary" className={classes.serviceTitle}>Our Services</Typography>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={10} md={4} lg={2} xl={2}>
              <Paper elevation={3} className={classes.paper}>
                <img src={injectionMoldingImg} alt={injectionMoldingImg} className={classes.serviceImg} />
                <Typography variant="h6">Injection Molding</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10} md={4} lg={2} xl={2}>
              <Paper elevation={3} className={classes.paper}>
                <img src={cncMoldingImg} alt={cncMoldingImg} className={classes.serviceImg} />
                <Typography variant="h6">CNC Machiming</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10} md={4} lg={2} xl={2}>
              <Paper elevation={3} className={classes.paper}>
                <img src={printingImg} alt={printingImg} className={classes.serviceImg} />
                <Typography variant="h6">3D Printing</Typography>
              </Paper>  
            </Grid>
            <Grid item xs={12} sm={10} md={4} lg={2} xl={2}>
              <Paper elevation={3} className={classes.paper}>
                <img src={vacuumCastingImg} alt={vacuumCastingImg} className={classes.serviceImg} />
                <Typography variant="h6">Vacuum Casting</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10} md={4} lg={2} xl={2}>
              <Paper elevation={3} className={classes.paper}>
                <img src={sheetMetalImg} alt={sheetMetalImg} className={classes.serviceImg} />
                <Typography variant="h6">Sheet Metal</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10} md={4} lg={2} xl={2}>
              <Paper elevation={3} className={classes.paper}>
                <img src={frpMoldingImg} alt={frpMoldingImg} className={classes.serviceImg} />
                <Typography variant="h6">FRP Molding</Typography>
              </Paper>  
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Service;














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