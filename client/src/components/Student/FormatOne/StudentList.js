import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import { getAllStudent } from "../../../modules/api.js";
import Loader from "../../Layouts/Loader";

//mui
import {
  makeStyles
} from "@mui/styles";
import { 
  Container, Grid, Paper,
  Typography, TableContainer, Table,
  TableHead, TableRow,
  TableCell, TableBody, IconButton, 
  Breadcrumbs, Link,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

function StudentList(){
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);
  const [studentLists, setStudentLists] = useState([]);

  useEffect(() => {
    async function getStudentLists(){
      setIsLoader(true);
      let res = await getAllStudent();
      console.log("onload all students list: ", res);
      setStudentLists(res.data);
      setIsLoader(false);
    }
    getStudentLists();
  }, []);

  const onSelectStudent = (item) => {
    console.log("selected student: ", item);
    navigate("/student/"+item._id);
  }

  return(
    <div>
      <Loader isLoader={isLoader}></Loader>
      <Container maxWidth="xl" className={classes.container}>
        <Typography variant="h6" align="center">Student List</Typography>
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
            onClick={ ()=>navigate("/student/new") }
          >
            New
          </Link>
          <Typography color="primary">List</Typography>
        </Breadcrumbs>
        <Grid container justifyContent="center" alignItems="center" className={classes.gridContainer}>
          <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
            <TableContainer component={Paper} className={classes.tableContainer}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {
                  studentLists.map(item => {
                    return (
                      <TableRow 
                        key={item._id} 
                        hover
                      >
                        <TableCell>{ moment(item.created).format("DD-MM-YYYY") }</TableCell>
                        <TableCell>{ item.s_name }</TableCell>
                        <TableCell align="right">{ item.s_age }</TableCell>
                        <TableCell>{ item.status ? "Active" : "Inactive" }</TableCell>
                        <TableCell>
                          <IconButton color="info" size="small" onClick={ () => onSelectStudent(item) }>
                            <InfoIcon />
                          </IconButton>
                          <IconButton color="warning" size="small" onClick={ () => navigate("/student/edit/"+item._id )}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  })
                }
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default StudentList;

const useStyles = makeStyles((theme) => {
  return {
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
      background: "#F5F5F5"
    },
    tableContainer: {
      margin: "10px 5px 10px 5px"
    },
    tableRow: {
      backgroundColor: "#0CB5F3",
    }
  }
});
