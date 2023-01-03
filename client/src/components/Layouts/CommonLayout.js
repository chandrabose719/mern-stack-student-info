import { Outlet } from "react-router-dom";

// layout
import CommonHeader from "./CommonHeader";

function CommonLayout(){  
  return(
    <div>
      <div>
        <CommonHeader />
      </div>
      <div>
        <Outlet />
      </div>
    </div>    
  )
}

export default CommonLayout;
