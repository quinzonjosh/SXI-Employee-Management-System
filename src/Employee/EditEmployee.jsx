import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
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
    companyID,
    firstName,
    middleName,
    lastName,
    tin,
    sssGsis,
    hireDate,
    salary,
  } = employee;

  const {employeeID} = useParams()

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employees/edit/${employeeID}`, employee);
    navigate("/employees");
  };

  useEffect(()=>{
    loadEmployee()
  }, [])

  const loadEmployee = async (e) =>{
    const res = await axios.get(`http://localhost:8080/employees/${employeeID}`, employee)
    setEmployee(res.data)
    console.log(res.data)

    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="employeeID">Employee ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Employee ID"
                name="employeeID"
                value={employeeID}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="companyID" className="form-label">
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
                <option value="ABC">ABC</option>
                <option value="ABC">DEF</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
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
              <label htmlFor="middleName" className="form-label">
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
              <label htmlFor="lastName" className="form-label">
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
              <label htmlFor="tin" className="form-label">
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
              <label htmlFor="sssGsis" className="form-label">
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
              <label htmlFor="hireDate" className="form-label">
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
              <label htmlFor="salary" className="form-label">
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

export default EditEmployee;
