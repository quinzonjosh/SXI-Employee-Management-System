import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setEmployees(result.data);
  };

  const handleDelete = async (employeeID) => {
    // console.log(employeeID);
    await axios.delete(`http://localhost:8080/employees/delete/${employeeID}`);
    loadEmployees();
  }

  return (
    <div className="">
      <div className="p-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Company ID</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                employees.map((employee, index)=>(
                    <tr>
                        <th scope="row" key={index}>{employee.employeeID}</th>
                        <td>{employee.companyID}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>
                            <Link to={`/employees/${employee.employeeID}`} className="btn btn-info mx-2">View</Link>
                            <Link to={`/editEmployee/${employee.employeeID}`} className="btn btn-dark mx-2">Edit</Link>
                            <button onClick={() => handleDelete(employee.employeeID)} className="btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
