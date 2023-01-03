import React, {} from "react";
import { useNavigate } from "react-router-dom";

//mui
import {
  makeStyles
} from "@mui/styles";
import { 
  Container, Grid,
  Typography,
  Button,
} from '@mui/material';

function Home(){
  const classes = useStyles();
  const navigate = useNavigate();

  return(
    <div>
      <Container maxWidth="xl" className={classes.container}>
        <Typography variant="h6" align="center">Student Info</Typography>
        <Grid container justifyContent="center" alignItems="center" className={classes.gridContainer}>
          <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
            <Button variant="contained" fullWidth color="primary" onClick={ ()=>navigate("/student-list") }>List</Button>            
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home;

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: "15px 0px 15px 0px" 
    },
    gridContainer: {
      padding: "15px 0px 15px 0px" 
    },
  }
});


















//  <h2>Home Page</h2>
//       <Button color="inherit" onClick={ ()=>navigate("/student-list") }>List</Button>
//       <Container>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper>xs=12 sm=6 md=4</Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper>xs=12 sm=6 md=4</Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper>xs=12 sm=6 md=4</Paper>
//           </Grid>
//         </Grid>
//       </Container> */}
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

// {/* <TableRow>
//                     <TableCell>28-03-2022</TableCell>
//                     <TableCell>Bose Two</TableCell>
//                     <TableCell align="right">20</TableCell>
//                     <TableCell>Active</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>28-03-2022</TableCell>
//                     <TableCell>Bose Three</TableCell>
//                     <TableCell align="right">30</TableCell>
//                     <TableCell>Active</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>28-03-2022</TableCell>
//                     <TableCell>Bose Four</TableCell>
//                     <TableCell align="right">40</TableCell>
//                     <TableCell>Active</TableCell>
//                   </TableRow> */}