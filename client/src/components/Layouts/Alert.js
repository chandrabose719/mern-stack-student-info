import React from "react";
import { Snackbar } from "@material-ui/core";

function Alert({ isAlert, message, close }){  
  // const [ alert, setAlert ] = useState(false);

  // useEffect((isAlert) => {
  //   console.log("alert console: ",isAlert)
  // }, [])

  // const handleClose = () => {
  //   setAlert(false);  
  // };
  
  return(
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isAlert}
        autoHideDuration={4000}
        message={message}
        onClose={close}
      />
    </div>    
  )
}

export default Alert;