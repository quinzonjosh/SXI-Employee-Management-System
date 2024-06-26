import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {

  let navigate = useNavigate();
  const { employeeID } = useParams();
  const [companies, setCompanies] = useState([]);

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

  const loadCompanies = async () => {
    const res = await axios.get(`http://localhost:8080/companies`);
    setCompanies(res.data);
  };  
  
  function areLettersOnly(str) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
  }
  
  function areNumbersOnly(str) {
    const regex = /^[0-9]+$/;
    return regex.test(str);
  }
  
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // for hire date validation
    const hireDate = new Date(employee.hireDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (
      !employee.companyID ||
      !employee.firstName ||
      !employee.middleName ||
      !employee.lastName ||
      !employee.tin ||
      !employee.sssGsis ||
      !employee.hireDate
    ) {
      alert("Please fill out all fields.");
    } else if (
      !areLettersOnly(employee.firstName) ||
      !areLettersOnly(employee.middleName) ||
      !areLettersOnly(employee.lastName)
    ) {
      alert("Please remove numbers/special characters on your name.");
    } else if (isTINEdited && !areNumbersOnly(employee.tin)) {
      alert("Please remove letters/characters on your TIN.");
    } else if (isTINEdited && employee.tin.length !== 12) {
      alert("TIN must be a 12 digit number.");
    } else if (isTINEdited && isInList(employee.tin, tins)) {
      alert("TIN already registered");
    } else if (isSSSGSISEdited && !areNumbersOnly(employee.sssGsis)) {
      alert("Please remove letters/characters on your SSS/GSIS.");
    } else if (isSSSGSISEdited && employee.sssGsis.length !== 10) {
      alert("SSS/GSIS must be a 10 digit number.");
    } else if (isSSSGSISEdited && isInList(employee.sssGsis, sssGsiss)) {
      alert("SSS/GSIS already registered");
    } else if (new Date(employee.hireDate) > new Date().setHours(0, 0, 0, 0)) {
      alert("Date must not be later than yesterday");
    } else if (!areNumbersOnly(employee.salary)) {
      alert("Please remove letters/special characters on your Salary.");
    } else if (salary < 500 || salary > 1_999_999_999 /* 2 billion */) {
      alert("Salary must be in in between 499 and 2 billion.");
    } else {
      await axios.put(
        `http://localhost:8080/employees/edit/${employeeID}`,
        employee
      );
      alert("Form updated successfully!");
      navigate("/employees");
    }
  };

  useEffect(() => {
    loadEmployee();
    loadCompanies();
    loadTINs();
    loadSSSGSISs();
  }, []);

  const loadEmployee = async (e) => {
    const res = await axios.get(
      `http://localhost:8080/employees/${employeeID}`,
      employee
    );
    setEmployee(res.data);
    // console.log(res.data);
  };

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
                {companies.map((company, index) => (
                  <option value={company.companyID}>
                    {company.companyID} - {company.companyName}
                  </option>
                ))}
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
