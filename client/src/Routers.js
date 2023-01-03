import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

// layout
import CommonLayout from "./components/Layouts/CommonLayout";
// landing
import Home from "./components/Landing/Home";
// student
import StudentList from "./components/Student/FormatOne/StudentList";
import New from "./components/Student/FormatOne/New";
import View from "./components/Student/FormatOne/View";
import Edit from "./components/Student/FormatOne/Edit";
import StudentListView from "./components/Student/FormatTwo/StudentListView";

function Routers(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <CommonLayout/> }>
          <Route index element={ <Home/> }></Route>
          <Route path='/student-list' element={ <StudentList/> }></Route>
          <Route path='/student/new' element={ <New/> }></Route>
          <Route path='/student/:id' element={ <View/> }></Route>
          <Route path='/student/edit/:id' element={ <Edit/> }></Route>
          <Route path='/student/list/view' element={ <StudentListView/> }></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default Routers;
