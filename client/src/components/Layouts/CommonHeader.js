import { useNavigate } from "react-router-dom";

//mui
import { 
  makeStyles 
} from "@mui/styles";
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

const useStyles = makeStyles((theme) => {
  return {
    disableRipple: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  }  
});

function CommonHeader(){
  const navigate = useNavigate();
  const classes = useStyles();
  
  const menuOptions = [
    {
      path: "/student-list",
      title: "Format 1"
    },
    {
      path: "/student/list/view",
      title: "Format 2"
    }
  ];

  const btns = menuOptions.map((option, k)=>{
    return(
      <Button
        key={k}
        color="inherit"
        onClick={ ()=>navigate(option.path) }
      >
        { option.title }
      </Button>
    )
  });
    
  return(
    <div>
      <AppBar elevation={0} position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Button
              disableRipple
              variant="text"
              color="primary"
              className={classes.disableRipple}
              onClick={ ()=>navigate("/") }
            >
              STUDENT INFO
            </Button>
          </Typography>
          { btns }
        </Toolbar>
      </AppBar>
    </div>    
  )
}

export default CommonHeader;








































// import { useHistory, } from "react-router-dom";
// // Material UI
// // import { 
// //   makeStyles, Typography, 
// //   AppBar, Toolbar, Button,  
// // } from "@material-ui/core";

// // const useStyles = makeStyles((theme) => {
// //   return {
// //     appbar: {

// //     },
// //     headerTitle: {
// //       flexGrow: 1,
// //     },
// //     btnSecondary: {
// //       border: "1px solid #1dbf89",
// //     },
// //     button: {
// //       marginRight: theme.spacing(2),
// //     },
// //     disableRipple: {
// //       '&:hover': {
// //         backgroundColor: 'transparent',
// //       },
// //     },
// //   }  
// // });

// function CommonHeader(){
//   console.log("common header page....");
//   // const classes = useStyles();
//   const history = useHistory();

//   const menuOptions = [
//     {
//       name: "login",
//       title: "Login",
//       path: "/login",
//     },
//     {
//       name: "manufacture",
//       title: "Manufacture",
//       path: "",
//     },
//   ];  
  
//   const btns = menuOptions.map((option, k) => {
//     return (
//       <Button 
//         key={k}  
//         className={ `${classes.button} ${classes.btnSecondary}` } 
//         variant="outlined" 
//         color="primary" 
//         onClick={ ()=>history.push(option.path) }>
//         {option.title}
//       </Button>
//     )  
//   })

//   return(
//     <div className={classes.headerRoot}>
//       <AppBar elevation={0} color="secondary" className={classes.appbar}>
//         <Toolbar className={classes.toolbar}>
//         <Typography color="primary" className={classes.headerTitle}>
//           <Button 
//             disableRipple 
//             variant="text" 
//             color="primary" 
//             className={classes.disableRipple} 
//             onClick={ ()=>history.push("/") }
//           >
//             USR React Sample
//           </Button>  
//         </Typography>
//         { btns }
//         </Toolbar>
//       </AppBar>      
//     </div>    
//   )
// }

// export default CommonHeader;
