import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

import { getOneStudent, editStudent } from "../../../modules/api.js";
import Loader from "../../Layouts/Loader";

// mui
import {
  makeStyles
} from '@mui/styles';
import { 
	Container, Typography,
	Grid, TextField, Button,
  Breadcrumbs, Link 
} from '@mui/material';

function Edit(){
	const classes = useStyles();
  const navigate = useNavigate();
	const { id } = useParams();
	const [isLoader, setIsLoader] = useState(false);
	const [initialValues] = useState({ s_name: "", s_age: "" });
	
  useEffect(() => {
    async function getStudent(){
      setIsLoader(true);
      let res = await getOneStudent(id);
      console.log("edit student item: ", res);
      initialValues.s_name = res.data.s_name;
      initialValues.s_age = res.data.s_age;
			setIsLoader(false);
    }
    getStudent();
  }, [id, initialValues]);
  
  let validationSchema = Yup.object({
    s_name: Yup.string().required("Required!"),
    s_age: Yup.number().max(99, "Age should not cross more than 99!").required("Required!"),
  })
  let onSubmit = async (values) => {
    console.log("student updated data: ",values);
    setIsLoader(true);
    let res = await editStudent(values, id);
    console.log("updated student res: ", res);
    setIsLoader(false);
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
	
	return(
		<div>
			<Loader isLoader={isLoader}></Loader>
			<Container maxWidth="xl" className={classes.container}>
        <Typography variant="h6" align="center">Edit Student</Typography>
        <Breadcrumbs 
          className={classes.breadcrumb}
        >  
          <Link
            className={classes.breadcrumbLink} 
            underline="none"
            color="inherit" 
            onClick={ ()=>navigate("/") }
          >
            Home
          </Link>
          <Link
            className={classes.breadcrumbLink} 
            underline="none"
            color="inherit" 
            onClick={ ()=>navigate("/student-list") }
          >
            List
          </Link>
          <Typography color="primary">Edit</Typography>
        </Breadcrumbs>
        <Grid container justifyContent="center" alignItems="center" className={classes.gridContainer}>
          <Grid item xs={12} sm={10} md={6} lg={4} xl={4}>
            <form onSubmit={formik.handleSubmit}>
              <div className={classes.inputContent}>
                <TextField
                  fullWidth
                  type="text"
                  id="s_name"
                  label="Student Name"
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.input}
                  value={formik.values.s_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Typography align="left" color="error" variant="body2"> { formik.touched.s_name && formik.errors.s_name ? formik.errors.s_name : null } </Typography>
              </div>  
              <div className={classes.inputContent}>
                <TextField
                  fullWidth
                  type="number"
                  id="s_age"
                  label="Student Age"
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.input}
                  value={formik.values.s_age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Typography align="left" color="error" variant="body2"> { formik.touched.s_age && formik.errors.s_age ? formik.errors.s_age : null } </Typography>
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
          </Grid>
        </Grid>
      </Container>
		</div>
	)
};

export default Edit;

const useStyles = makeStyles((theme) => {
  return{
    container: {
      padding: "15px 0px 15px 0px"
    },
    breadcrumb: {
      background: "#F5F5F5",
      padding: "10px 10px 10px 10px"
    },
    breadcrumbLink: {
      cursor: "pointer"
    },
    gridContainer: {
      background: "#F5F5F5",
      padding: "20px 0px 20px 0px"
    },
    inputContent: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }
});
