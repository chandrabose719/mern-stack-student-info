import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authRegister } from "../../modules/api.js"; 

import { 
  makeStyles, Button, Typography, 
  TextField, Grid, Paper, Container, 
  Link, Snackbar,  
} from "@material-ui/core";

import Loader from "../Layouts/Loader";

function Register(){  
  const classes = useStyles();
  const history = useHistory();
  const [isLoader, setIsLoader] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false);
  const [alrtMsg, setAlrtMsg] = React.useState(false);
  
  let initialValues = {
    user_name: "",
    user_email: "",
    user_password: "",
    conf_password: "",
  }
  let validationSchema = Yup.object({
    user_name: Yup.string().required("Required!"),
    user_email: Yup.string().email("Unknown email format!").required("Required!"),
    user_password: Yup.string().min(6, "must be 6 chars!").required("Required!"),
    conf_password: Yup.string().oneOf([Yup.ref("user_password"), null], "Password must match!").required("Required!"),
  })
  let onSubmit = async (values) => {
    console.log("register data: ",values);
    setIsLoader(true);
    let res = await authRegister(values);
    console.log("register res: ", res);
    setIsAlert(true);
    if(res && res.msg) setAlrtMsg(res.msg);
    else setAlrtMsg("server error occured, try again!");
    setIsLoader(false);
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  const handleClose = () => {
    setAlrtMsg(null);  
    setIsAlert(false);  
  };

  return(
    <div className={ classes.loginRoot }>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isAlert}
        autoHideDuration={4000}
        message={alrtMsg}
        onClose={handleClose}
      />
      <Loader isLoader={isLoader}></Loader>
      <Container maxWidth="xl">
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} md={6} lg={4} xl={4}>
            <Paper className={classes.paper}>
            <Typography variant="h5">User Registeration</Typography>
              <form onSubmit={formik.handleSubmit}>
                <div className={classes.inputContent}>
                  <TextField
                    fullWidth
                    type="text"
                    id="user_name"
                    label="User Name"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.input}
                    value={formik.values.user_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Typography align="left" color="error" variant="body2"> { formik.touched.user_name && formik.errors.user_name ? formik.errors.user_name : null } </Typography>
                </div>  
                <div className={classes.inputContent}>
                  <TextField
                    fullWidth
                    type="email"
                    id="user_email"
                    label="User Email"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.input}
                    value={formik.values.user_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Typography align="left" color="error" variant="body2"> { formik.touched.user_email && formik.errors.user_email ? formik.errors.user_email : null } </Typography>
                </div>
                <div className={classes.inputContent}>
                  <TextField
                    fullWidth
                    type="password"
                    id="user_password"
                    label="User Password"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.input}
                    value={formik.values.user_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Typography align="left" color="error" variant="body2"> { formik.touched.user_password && formik.errors.user_password ? formik.errors.user_password : null } </Typography>
                </div>
                <div className={classes.inputContent}> 
                  <TextField
                    fullWidth
                    type="password"
                    id="conf_password"
                    label="Confirm Password"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.input}
                    value={formik.values.conf_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Typography align="left" color="error" variant="body2"> { formik.touched.conf_password && formik.errors.conf_password ? formik.errors.conf_password : null } </Typography>
                </div>
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.button}
                >
                  Submit
                </Button>
              </form>  
              <Typography variant="subtitle1">
                Account already created? 
                <Link 
                  className={classes.link}
                  button="true" 
                  variant="subtitle1" 
                  color="primary" 
                  underline="none" 
                  onClick={ () => history.push("/login")}
                > Login </Link>
                here.
              </Typography>
            </Paper> 
          </Grid>
        </Grid>
      </Container>
    </div>    
  )
}

export default Register;

const useStyles = makeStyles((theme) =>{
  return{
    loginRoot: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    paper: {
      textAlign: 'center',
      padding: theme.spacing(3),
    },
    inputContent: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    input: {
      // marginTop: theme.spacing(1),
    },
    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    link: {
      cursor: "pointer"
    },
  }
});
