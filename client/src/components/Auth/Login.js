import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authLogin } from "../../modules/api.js"; 

import { 
  makeStyles, Button, Typography, 
  TextField, Grid, Paper, Container, 
  Link, Snackbar, 
} from "@material-ui/core";

import Loader from "../Layouts/Loader";

function Login(){
  const classes = useStyles();
  const history = useHistory();
  const [isLoader, setIsLoader] = useState(false);
  const [ isAlert, setIsAlert ] = useState(false);
  const [ alrtMsg, setAlrtMsg ] = useState(null);

  const initialValues = {
    user_email: "",
    user_password: "",
  }
  const onSubmit = async (values) => {
    console.log("login data: ",values);
    setIsLoader(true);
    let res = await authLogin(values);
    console.log("login res: ", res);
    setIsAlert(true);
    if(res && res.msg) setAlrtMsg(res.msg);
    else setAlrtMsg("server error occured, try again!");
    setIsLoader(false);
  }
  const validationSchema = Yup.object({
    user_email: Yup.string().email("Unknown email format!").required("Required!"),
    user_password: Yup.string().required("Required!"),
  })
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
              <Typography variant="h5">User Login</Typography>
              <form onSubmit={formik.handleSubmit}>
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
                  <Typography align="left" color="error" variant="body2"> { formik.touched.user_email ? formik.errors.user_email : null } </Typography>
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
                  <Typography align="left" color="error" variant="body2"> { formik.touched.user_password ? formik.errors.user_password : null } </Typography>
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
                Don't have account? 
                <Link 
                  className={classes.link}
                  button="true" 
                  variant="subtitle1" 
                  color="primary" 
                  underline="none" 
                  onClick={ () => history.push("/register")}
                > Register </Link>
                new account.
              </Typography>
            </Paper> 
          </Grid>
        </Grid>
      </Container>
    </div>    
  )
}

export default Login;

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