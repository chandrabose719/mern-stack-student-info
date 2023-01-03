import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

import { getOneStudent } from "../../../modules/api.js";
import Loader from "../../Layouts/Loader";

// mui
import {
  makeStyles
} from '@mui/styles';
import { 
	Container, Typography,
	Grid, Paper,
	Table, TableBody, TableCell, 
	TableContainer, TableRow,
  Breadcrumbs, Link 
} from '@mui/material';

function View(){
	const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
	const [isLoader, setIsLoader] = useState(false);
	const [studentItem, setStudentItem] = useState({});
	
	useEffect(() => {
    async function getStudent(){
      setIsLoader(true);
      let res = await getOneStudent(id);
      console.log("onload student item: ", res);
      setStudentItem(res.data);
			setIsLoader(false);
    }
    getStudent();
  }, [id]);
	
	return(
		<div>
			<Loader isLoader={isLoader}></Loader>
			<Container maxWidth="xl" className={classes.container}>
        <Typography variant="h6" align="center">Student Info</Typography>
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
          <Typography color="primary">View</Typography>
        </Breadcrumbs>
        <Grid container justifyContent="center" alignItems="center" className={classes.gridContainer}>
          <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
						<TableContainer component={Paper} className={classes.tableContainer}>
							<Table className={classes.table}>
								<TableBody>
									<TableRow hover>
										<TableCell align="right" className={classes.tableHeader}>Date</TableCell>
										<TableCell>{ moment(studentItem.created).format("DD-MM-YYYY") }</TableCell>
									</TableRow>
									<TableRow hover>
										<TableCell align="right" className={classes.tableHeader}>Student Name</TableCell>
										<TableCell>{ studentItem.s_name }</TableCell>
									</TableRow>
									<TableRow hover>
										<TableCell align="right" className={classes.tableHeader}>Student Age</TableCell>
										<TableCell>{ studentItem.s_age }</TableCell>
									</TableRow>
									<TableRow hover>
										<TableCell align="right" className={classes.tableHeader}>Status</TableCell>
										<TableCell>{ studentItem.status ? "Active" : "Inactive" }</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
};

export default View;

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
      background: "#F5F5F5"
    },
    tableContainer: {
      margin: "10px 5px 10px 5px"
    },
		tableHeader: {
			fontWeight: "600 !important"
		}		
	}
});
