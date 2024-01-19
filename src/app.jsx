import AddEmployee from "./Employee/AddEmployee";
import EditEmployee from "./Employee/EditEmployee";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path ="/employees" element={<Home/>}/>
          <Route exact path ="/addEmployee" element={<AddEmployee/>}/>
          <Route exact path ="/editEmployee/:employeeID" element={<EditEmployee/>}/>
        </Routes>
      </Router>        
    </>
  );
}

