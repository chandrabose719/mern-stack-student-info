// import { useNavigate } from "react-router-dom";

// mui
import { 
  makeStyles 
} from "@mui/styles";
import { 
  Typography, Container, 
  Grid, Link,
} from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: "#FFFFFF",
      background: "#0f2130",
      margin: "20px 0px 0px 0px",
    },
  }  
});

function CommonFooter(){
  const classes = useStyles();

  const about = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const mediaOptions = [
    {
      name: "twitter",
      title: "Twitter",
      path: "https://www.twitter.com",
    },
    {
      name: "facebook",
      title: "Facebook",
      path: "https://www.fb.com",
    },
    {
      name: "instagram",
      title: "Instagram",
      path: "https://www.instagram.com",
    },
  ];

  const companyOptions = [
    {
      name: "about",
      title: "About Us",
      path: "",
    },
    {
      name: "faq",
      title: "FAQ",
      path: "",
    },
    {
      name: "contact",
      title: "Contact Us",
      path: "",
    }
  ];

  function commLinks(option, key){
    return (
      <Typography key={key} className={classes.typoLink}>
        <Link 
          className={classes.link}
          button="true" 
          variant="subtitle2" 
          underline="none"
        > 
          { option.title } 
        </Link>
      </Typography>
    )
  }
    
  const medias = mediaOptions.map((option, k) => {
    return (
      commLinks(option, k)
    )  
  })
    
  const companies = companyOptions.map((option, k) => {
    return (
      commLinks(option, k)
    )  
  })

  return(
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle2">{ about }</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">Media</Typography>
            { medias }
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1">Resources</Typography>
            { companies }
          </Grid>
        </Grid>
      </Container>
    </div>
    
    
    // <div className={classes.footerRoot}>
    //   <Container maxWidth="lg">
    //     <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
    //       <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
    //         <div className={classes.subcription}>
    //           <Typography variant="subtitle2">Join our mailing list to receive updates from our team</Typography>
    //           <Paper component="form" className={classes.subPaper}>
    //             <InputBase
    //               placeholder="User Email"
    //               className={classes.subInput}
    //             />
    //             <Divider 
    //               className={classes.vdivider} 
    //               orientation="vertical" 
    //             />
    //             <Button 
    //               type="submit" 
    //               color="primary" 
    //               className={classes.subButton}
    //             >
    //               Search
    //             </Button>
    //           </Paper>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
    //         <Typography variant="subtitle1">Capabilities</Typography>
    //         { Capabilities }
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
    //         <Typography variant="subtitle2">Resources</Typography>
    //         { Resources }
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
    //         <Typography variant="subtitle2">Company</Typography>
    //         { Companies }
    //       </Grid>
    //       <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
    //         <Divider className={classes.hdivider} orientation="horizontal" variant="middle" />
    //       </Grid>
    //       <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
    //         <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
    //           <Grid item xs={6} sm={6} md={6} lg={8} xl={8}>
    //             <Link 
    //               className={classes.link}
    //               button="true" 
    //               variant="subtitle2" 
    //               underline="none" 
    //             > 
    //               Copyright © 2021 3D Usher, Inc.
    //             </Link>
    //           </Grid>
    //           <Grid align="right" item xs={6} sm={6} md={6} lg={4} xl={4}>
    //             <Link 
    //               className={classes.link}
    //               button="true" 
    //               variant="subtitle2" 
    //               underline="none" 
    //             > 
    //               Privacy Policy
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>  
    //   </Container>        
    // </div>    
  )
}

export default CommonFooter;












// // Material UI
// import { 
//   makeStyles, Typography, 
//   Container, Grid, Link,
//   Paper, InputBase, Divider, Button
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => {
//   return {
//     footerRoot: {
//       color: "#FFFFFF",
//       background: "#0f2130",
//       padding: theme.spacing(4),
//     },
//     subcription: {
//       padding: "10px 10px 10px 10px",
//     },
//     subPaper: {
//       display: "flex",
//       paddingLeft: "10px",
//       margin: "10px 20px 0px 0px",
//     },
//     subInput: {
//       flex: 1,
//     },
//     vdivider: {
//       height: 28,
//       margin: 3,
//     },
//     hdivider: {
//       margin: 5,
//       background: "#FFFFFF",
//     },
//     typoLink:{
//       padding: "5px 0px 5px 0px",
//     },
//     link: {
//       color: "rgb(204, 204, 204)",
//       cursor: "pointer",
//       '&:hover':{
//         color: '#FFFFFF',
//       }
//     },
//   }  
// });

// function CommonFooter(){
//   const classes = useStyles();

//   const capabilityOptions = [
//     {
//       name: "injection_molding",
//       title: "Injection Molding",
//       path: "",
//     },
//     {
//       name: "cnc_machining",
//       title: "CNC Machining",
//       path: "",
//     },
//     {
//       name: "3d_printing",
//       title: "3D Printing",
//       path: "",
//     },
//     {
//       name: "vacuum_casting",
//       title: "Vacuum Casting",
//       path: "",
//     },
//     {
//       name: "thermoforming",
//       title: "Thermoforming",
//       path: "",
//     },
//     {
//       name: "sheet_metal_forming",
//       title: "Sheet Metal Fabrication",
//       path: "",
//     },
//     {
//       name: "frp_molding",
//       title: "FRP Moldingaa",
//       path: "",
//     },
//   ];
  
//   const resourceOptions = [
//     {
//       name: "3d_viewer",
//       title: "3D Viewer",
//       path: "",
//     },
//     {
//       name: "manufacturing",
//       title: "Start Manufacturing",
//       path: "",
//     },
//     {
//       name: "design_service",
//       title: "Design Services",
//       path: "",
//     },
//     {
//       name: "knowledge_base",
//       title: "Knowledge Base",
//       path: "",
//     },
//     {
//       name: "blog",
//       title: "Blog",
//       path: "",
//     }
//   ];

//   const companyOptions = [
//     {
//       name: "about",
//       title: "About",
//       path: "",
//     },
//     {
//       name: "faq",
//       title: "FAQ",
//       path: "",
//     },
//     {
//       name: "partner",
//       title: "Become a Partner",
//       path: "",
//     },
//     {
//       name: "Contact 3D Usher",
//       title: "Vacuum Casting",
//       path: "",
//     },
//     {
//       name: "talk_to_sales",
//       title: "Talk to Sales",
//       path: "",
//     }
//   ];
  
//   function commLinks(option, key){
//     return (
//       <Typography key={key} className={classes.typoLink}>
//         <Link 
//           className={classes.link}
//           button="true" 
//           variant="subtitle2" 
//           underline="none"
//         > 
//           { option.title } 
//         </Link>
//       </Typography>
//     )
//   }

//   const Capabilities = capabilityOptions.map((option, k) => {
//     return (
//       commLinks(option, k)
//     )  
//   })

//   const Resources = resourceOptions.map((option, k) => {
//     return (
//       commLinks(option, k)
//     )  
//   })

//   const Companies = companyOptions.map((option, k) => {
//     return (
//       commLinks(option, k)
//     )  
//   })

//   return(
//     <div className={classes.footerRoot}>
//       <Container maxWidth="lg">
//         <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
//           <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
//             <div className={classes.subcription}>
//               <Typography variant="subtitle2">Join our mailing list to receive updates from our team</Typography>
//               <Paper component="form" className={classes.subPaper}>
//                 <InputBase
//                   placeholder="User Email"
//                   className={classes.subInput}
//                 />
//                 <Divider 
//                   className={classes.vdivider} 
//                   orientation="vertical" 
//                 />
//                 <Button 
//                   type="submit" 
//                   color="primary" 
//                   className={classes.subButton}
//                 >
//                   Search
//                 </Button>
//               </Paper>
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
//             <Typography variant="subtitle1">Capabilities</Typography>
//             { Capabilities }
//           </Grid>
//           <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
//             <Typography variant="subtitle2">Resources</Typography>
//             { Resources }
//           </Grid>
//           <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
//             <Typography variant="subtitle2">Company</Typography>
//             { Companies }
//           </Grid>
//           <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
//             <Divider className={classes.hdivider} orientation="horizontal" variant="middle" />
//           </Grid>
//           <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
//             <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
//               <Grid item xs={6} sm={6} md={6} lg={8} xl={8}>
//                 <Link 
//                   className={classes.link}
//                   button="true" 
//                   variant="subtitle2" 
//                   underline="none" 
//                 > 
//                   Copyright © 2021 3D Usher, Inc.
//                 </Link>
//               </Grid>
//               <Grid align="right" item xs={6} sm={6} md={6} lg={4} xl={4}>
//                 <Link 
//                   className={classes.link}
//                   button="true" 
//                   variant="subtitle2" 
//                   underline="none" 
//                 > 
//                   Privacy Policy
//                 </Link>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>  
//       </Container>        
//     </div>    
//   )
// }

// export default CommonFooter;
