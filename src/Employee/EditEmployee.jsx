// TODO: HANDLE GET DATA ON COMPANY ID TO DISPLAY ON THE DROPDOWN LIST
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate , Link, useParams} from "react-router-dom";

const EditEmployee = () => {
  const [employee, setEmployee] = useState({

    // employeeID: "",
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
    // employeeID,
    companyID,
    firstName,
    middleName,
    lastName,
    tin,
    sssGsis,
    hireDate,
    salary,
  } = employee;

  const {employeeID} =useParams()

  const loadEmployeeData = async ()=>{
    const res=await axios.get(`http://localhost:8080/employees/${employeeID}`)
    setEmployee(res.data)
  }

  useEffect(()=>{
    loadEmployeeData()
  }, [])

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employees/edit/${employeeID}`, employee);
    navigate("/employees")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="employeeID" className="form-label">
                Employee ID
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee ID"
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
                className="form-select"
                name="companyID"
                value={companyID}
                onChange={(e) => handleChange(e)}
              >
                {/* Add options for company ID dropdown */}
                <option value="company1">ABC</option>
                <option value="company2">DEF</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                name="firstName"
                value={firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter middle name"
                name="middleName"
                value={middleName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                name="lastName"
                value={lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tin" className="form-label">
                TIN (Tax Identification Number)
              </label>
              <input
                type="number"
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
                type="number"
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
                placeholder="Enter salary"
                name="salary"
                value={salary}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mb-2">
              Submit
            </button>
            <Link to="/employees" className="btn btn-warning w-100 mb-2">
              Cancel
            </Link>
            <button type="submit" className="btn btn-danger w-100 mb-2">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
