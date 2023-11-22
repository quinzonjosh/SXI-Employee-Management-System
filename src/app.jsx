import AddEmployee from "./Employee/AddEmployee";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/addEmployee" element={<AddEmployee/>}/>
        </Routes>
      </Router>        
    </>
  );
}

