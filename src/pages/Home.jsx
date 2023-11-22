import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setEmployees(result.data);
  };

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
