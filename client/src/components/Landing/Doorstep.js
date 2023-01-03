import React from "react";
import { Container, Grid, makeStyles, Typography, Card, CardHeader } from "@material-ui/core"; 
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => {
  return {
    doorstepRoot: {
      padding: "20px 0px 20px 0px",
    },
    doorstepTitle: {
      paddingTop: "20px",
    },
    doorstepCard: {
      background: "transparent",
    },
    doorstepHeader: {
      padding: "5px 0px 5px 0px",
    },
  }  
});

function Doorstep(){
  const classes = useStyles();  

  return(
    <div>
      <div className={classes.doorstepRoot}>
        <Container maxWidth="md">
          <Grid container direction="row" justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h5" align="left" className={classes.doorstepTitle}>High Quality Parts Delivered to Your Doorstep</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card elevation={0} color="transparent" className={classes.doorstepCard}>
                <CardHeader
                  avatar={ <DoneIcon /> }
                  title={ 
                    <Typography variant="h6" align="left" className={classes.doorstepHeader}>Intellectual Property</Typography>
                  }
                  subheader={
                    <Typography variant="subtitle2" align="left" className={classes.doorstepSubHeader}>We ensure end to end file protection with AICPA SOC 2 Type II certified servers</Typography>    
                  }
                />
              </Card>  
              <Card elevation={0} color="transparent" className={classes.doorstepCard}>
                <CardHeader
                  avatar={ <DoneIcon /> }
                  title={ 
                    <Typography variant="h6" align="left" className={classes.doorstepHeader}>Quality Control</Typography>
                  }
                  subheader={
                    <Typography variant="subtitle2" align="left" className={classes.doorstepSubHeader}>Your parts go through inspections at multiple stages of manufacturing process ensuring high tolerance output</Typography>
                  }
                />
              </Card>
              <Card elevation={0} color="transparent" className={classes.doorstepCard}>
                <CardHeader
                  avatar={ <DoneIcon /> }
                  title={ 
                    <Typography variant="h6" align="left" className={classes.doorstepHeader}>Certifications</Typography>
                  }
                  subheader={
                    <Typography variant="subtitle2" align="left" className={classes.doorstepSubHeader}>Our manufacturing network is qualified with ISO 9001, ISO 13485, USP Class VI for your needs</Typography>
                  }
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Doorstep;














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