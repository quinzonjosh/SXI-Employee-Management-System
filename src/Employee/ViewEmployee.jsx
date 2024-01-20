import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
  const [employee, setEmployee] = useState({
    companyID: "",
    firstName: "",
    middleName: "",
    lastName: "",
    tin: "",
    sssGsis: "",
    hireDate: "",
    salary: 500,
  });

  const { employeeID } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async (e) => {
    const res = await axios.get(
      `http://localhost:8080/employees/${employeeID}`,
      employee
    );
    setEmployee(res.data);
    console.log(res.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              <div className="mb-2">
                Details of employee ID: {employee.employeeID}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name: </b>
                  {employee.firstName}
                </li>
                <li className="list-group-item">
                  <b>Middle Name: </b>
                  {employee.middleName}
                </li>
                <li className="list-group-item">
                  <b>Last Name: </b>
                  {employee.lastName}
                </li>
                <li className="list-group-item">
                  <b>Company ID: </b>
                  {employee.companyID}
                </li>
                <li className="list-group-item">
                  <b>TIN: </b>
                  {employee.tin}
                </li>
                <li className="list-group-item">
                  <b>SSS/GSIS: </b>
                  {employee.sssGsis}
                </li>
                <li className="list-group-item">
                  <b>Hire Date: </b>
                  {employee.hireDate}
                </li>
                <li className="list-group-item">
                  <b>Salary: </b>
                  {employee.salary}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2 w-100" to="/employees">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
