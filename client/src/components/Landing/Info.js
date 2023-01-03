import React from "react";
import { Container, Grid, makeStyles, Typography, Card, CardHeader } from "@material-ui/core"; 
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => {
  return {
    infoRoot:{
      background: "#0f2130",
      padding: "20px 0px 20px 0px",
    },
    infoTitle: {
      color: "#FFFFFF",
      padding: "10px 0px 10px 0px",
    },
    infoCard: {
      background: "transparent",
      padding: "20px 0px 20px 0px",
    },
    infoAvatar: {
      color: "#FFFFFF",
    },
    infoHeader: {
    },
    infoSubHeader: {
      color: "#FFFFFF",
    },  
  }  
});

function Info(){
  const classes = useStyles();  

  return(
    <div>
      <div className={classes.infoRoot}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" className={classes.infoTitle}>Manufacturing for the World</Typography>
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Card elevation={0} className={classes.infoCard}>
                <CardHeader
                  avatar={ <DoneIcon className={classes.infoAvatar} /> }
                  title={ 
                    <Typography variant="h6" color="primary" align="left" className={classes.infoHeader}>1M+</Typography>
                  }
                  subheader={
                    <Typography variant="subtitle1" align="left" className={classes.infoSubHeader}>Parts Quoted</Typography>    
                  }
                />
              </Card>    
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Card elevation={0} className={classes.infoCard}>
                <CardHeader
                  avatar={ <DoneIcon className={classes.infoAvatar} /> }
                  title={ 
                    <Typography variant="h6" color="primary" align="left" className={classes.infoHeader}>20+</Typography>
                  }
                  subheader={
                    <Typography variant="subtitle1" align="left" className={classes.infoSubHeader}>Countries Served</Typography>    
                  }
                />
              </Card>    
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Card elevation={0} className={classes.infoCard}>
                <CardHeader
                  avatar={ <DoneIcon className={classes.infoAvatar} /> }
                  title={ 
                    <Typography variant="h6" color="primary" align="left" className={classes.infoHeader}>10+</Typography>
                  }
                  subheader={
                    <Typography variant="subtitle1" align="left" className={classes.infoSubHeader}>Manufacturing Processes</Typography>    
                  }
                />
              </Card>    
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Card elevation={0} className={classes.infoCard}>
                <CardHeader
                  avatar={ <DoneIcon className={classes.infoAvatar} /> }
                  title={ 
                    <Typography variant="h6" align="left" color="primary" className={classes.infoHeader}>100+</Typography>
                  }
                  subheader={
                    <Typography variant="subtitle1" align="left" className={classes.infoSubHeader}>Material Options</Typography>    
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

export default Info;














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