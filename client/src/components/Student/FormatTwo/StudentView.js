import React from 'react';
import moment from 'moment';

// mui
import {
  makeStyles
} from '@mui/styles';
import {
	Grid, Paper,
	Table, TableBody, TableCell, 
	TableContainer, TableRow,
} from '@mui/material';

function StudentView({studentViewFlag, studentViews}){
	const classes = useStyles();
	
	const ShowStudentViews = () => {
    if(studentViewFlag && studentViews && studentViews._id){
      return(
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow hover>
                <TableCell align="right" className={classes.tableHeader}>Date</TableCell>
                <TableCell>{ moment(studentViews.created).format("DD-MM-YYYY") }</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="right" className={classes.tableHeader}>Student Name</TableCell>
                <TableCell>{ studentViews.s_name }</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="right" className={classes.tableHeader}>Student Age</TableCell>
                <TableCell>{ studentViews.s_age }</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="right" className={classes.tableHeader}>Status</TableCell>
                <TableCell>{ studentViews.status ? "Active" : "Inactive" }</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )
    }else{
      return("")
    }    
  }
  
  return(
		<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <ShowStudentViews />
    </Grid>
	)  
};

export default StudentView;

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
