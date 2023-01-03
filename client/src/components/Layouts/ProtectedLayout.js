import { Route, Redirect, useHistory, useLocation } from "react-router-dom";

// Material UI
import { 
  makeStyles, Drawer, Typography, 
  List, ListItem, ListItemIcon, 
  ListItemText, AppBar, Toolbar 
} from "@material-ui/core";
import { 
  AddCircleOutlined, SubjectOutlined 
} from "@material-ui/icons";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    layout: {
      width: "100%",
      background: "#f9f9f9",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
  }  
});

function ProtectedLayout({ children, ...rest }){
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  console.log("Protected Route");
  const allMenus = [
    {
      name: "details",
      text: "Manufacture Details",
      icon: <SubjectOutlined color="secondary" />,
      link: "/manufacture-details",
    },
    {
      name: "overview",
      text: "Manufacture Overview",
      icon: <AddCircleOutlined color="secondary" />,
      link: "/manufacture-overview",
    },
    {
      name: "login",
      text: "Login",
      icon: <AddCircleOutlined color="secondary" />,
      link: "/login",
    },
  ];
  function checkLogin(){
    if(location.pathname === "/manufacture-overview"){
      console.log("USER FALSE");
      return false;
    }else{
      console.log("USER TRUE");
      return true;
    }
  }
  return(
    <div className={classes.root}>
      <AppBar
        className={classes.appbar}
      >
        <Toolbar>
          <Typography>
            Website Title
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer 
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5">
          Title Name
        </Typography>
        <List>
          {allMenus.map(menu => (
            <ListItem
              button
              className={ location.pathname === menu.link ? classes.active : null }
              key={menu.name}
              onClick={ ()=>history.push(menu.link) }
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText>{menu.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.layout}>
        <div className={classes.toolbar}></div>
        {
          checkLogin() ? 
            <Route 
              {...rest} 
              render={
                () => {
                  return children
                }
              }
            ></Route>
            : 
            <Redirect to='/' />
        }     
      </div>
    </div>    
  )
}

export default ProtectedLayout;
