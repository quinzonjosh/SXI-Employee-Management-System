import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  // extra copy of the employees to be able to filter search properly
  const [ employeesCopy, setEmployeesCopy ] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/currentEmployees");
    setEmployees(result.data);
    setEmployeesCopy(result.data);
    // console.log(result.data);
  };

  const handleDelete = async (employeeID) => {
    // console.log(employeeID);
    const res = await axios.delete(
      `http://localhost:8080/employees/softDelete/${employeeID}`
    );
    // console.log(res.data);
    loadEmployees();
  };

  const handleChange = (e) => {
    const { value } = e.target;

    if(value === ""){
      setEmployees(employeesCopy);
    } else {
      console.log(value);
      const filteredEmployees = employeesCopy.filter((employee)=>
        employee.lastName.toLowerCase().startsWith(value.toLowerCase())
      );
      // console.log(filteredEmployees);
      setEmployees(filteredEmployees);
    }

  };

  return (
    <div className="container">
      <div className="p-4">
        <div class="d-flex justify-content-center">
          <input
            type="text"
            className="w-50 mb-4"
            placeholder="Search an employee"
            name="searchEmployee"
            onChange={(e) => handleChange(e)}
          />
        </div>
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
            {employees.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {employee.employeeID}
                </th>
                <td>{employee.companyID}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>
                  <Link
                    to={`/employees/${employee.employeeID}`}
                    className="btn btn-info mx-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/editEmployee/${employee.employeeID}`}
                    className="btn btn-dark mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(employee.employeeID)}
                    className="btn btn-danger mx-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
