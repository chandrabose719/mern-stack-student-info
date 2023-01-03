import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core"; 

import instantQuoteImg from "./images/instant-quote.svg";
import globallyCompetitivePricingImg from "./images/globally-competitive-pricing.svg";
import leadTimeImg from "./images/lead-time.svg";

const useStyles = makeStyles((theme) => {
  return {
    partnerTitle: {
      color: "#FFFFFF"
    },
    partnerRoot: {
      padding: theme.spacing(5),
      backgroundColor: '#0f2130'
    },
    partnerImg: {
      width: "25%"
    },
    partnerHeader: {
      color: "#FFFFFF"  
    },
    partnerSubTitle: {
      color: "rgb(108, 117, 125)"  
    },
  }  
});

function Partner(){
  const classes = useStyles();  

  return(
    <div>
      <div className={classes.partnerRoot}>
        <Container maxWidth="lg">
          <Typography align="center" variant="h5" color="secondary" className={classes.partnerTitle}>3D Usher As Your Manufacturing Partner</Typography>
          <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
            <Grid item align="center" xs={12} sm={10} md={4} lg={4} xl={4}>
              <img src={instantQuoteImg} alt={instantQuoteImg} className={classes.partnerImg} />
              <Typography className={classes.partnerHeader} align="center" variant="h6">Injection Molding</Typography>
              <Typography className={classes.partnerSubTitle} align="center" variant="subtitle1">Get instant quote for injection molding, vacuum casting and plastic 3D printing processes</Typography>
            </Grid>
            <Grid item align="center" xs={12} sm={10} md={4} lg={4} xl={4}>
              <img src={globallyCompetitivePricingImg} alt={globallyCompetitivePricingImg} className={classes.partnerImg} />
              <Typography className={classes.partnerHeader} align="center" variant="h6">Globally Competitive Pricing</Typography>
              <Typography className={classes.partnerSubTitle} align="center" variant="subtitle1">Competitive pricing guaranteed with 3D Usher assured global manufacturing network</Typography>
            </Grid>
            <Grid item align="center" xs={12} sm={10} md={4} lg={4} xl={4}>
              <img src={leadTimeImg} alt={leadTimeImg} className={classes.partnerImg} />
              <Typography className={classes.partnerHeader} align="center" variant="h6">Reduce Go-To-Market Lead Time</Typography>
              <Typography className={classes.partnerSubTitle} align="center" variant="subtitle1">Scale your product with 3D Usher capacity from prototype to production</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Partner;














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