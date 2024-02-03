// LAST STOP: EMPLOYEEID AND COMPANY ID NOT BEING ACQUIRED BY FORM ONSUBMIT

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
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

  const {
    employeeID,
    companyID,
    firstName,
    middleName,
    lastName,
    tin,
    sssGsis,
    hireDate,
    salary,
  } = employee;

  const [companies, setCompanies] = useState([]);
  const [nextEmployeeID, setNextEmployeeID] = useState("");

  const loadCompanies = async () => {
    const res = await axios.get(`http://localhost:8080/companies`);
    setCompanies(res.data);
  };

  const loadNextEmployeeID = async () => {
    const res = await axios.get(`http://localhost:8080/employees/latestID`);
    setNextEmployeeID(res.data);
  }

  useEffect(() => {
    loadNextEmployeeID();
    loadCompanies();
  }, []);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    employee.employeeID = nextEmployeeID;    
    await axios.post("http://localhost:8080/employee", employee);
    navigate("/employees");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Employee</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label className="fw-bold" htmlFor="employeeID">Employee ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Employee ID"
                name="employeeID"
                value={nextEmployeeID}
                onChange={(e) => handleChange(e)}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="companyID" className="form-label fw-bold">
                Company ID
              </label>
              <select
                className="form-control"
                name="companyID"
                value={companyID}
                onChange={(e) => handleChange(e)}
              >
                <option value="" disabled>
                  Select Company ID
                </option>
                {companies.map((company, index) => (
                  <option value={company.companyID}>
                    {company.companyID} - {company.companyName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label fw-bold">
                Firstname
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter firstname"
                name="firstName"
                value={firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="form-label fw-bold">
                Middlename
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter middlename"
                name="middleName"
                value={middleName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label fw-bold">
                lastname
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter lastname"
                name="lastName"
                value={lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tin" className="form-label fw-bold">
                Tax Identification Number (TIN)
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter TIN"
                name="tin"
                value={tin}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sssGsis" className="form-label fw-bold">
                SSS/GSIS
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter SSS/GSIS"
                name="sssGsis"
                value={sssGsis}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="hireDate" className="form-label fw-bold">
                Hire Date
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Select Hire Date"
                name="hireDate"
                value={hireDate}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label fw-bold">
                Salary
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Salary"
                name="salary"
                value={salary}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mb-2">
              Submit
            </button>
            <button type="submit" className="btn btn-warning w-100 mb-2">
              Reset
            </button>
            <Link
              to="/employees"
              type="submit"
              className="btn btn-danger w-100 mb-2"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
