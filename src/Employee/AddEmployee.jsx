import React from 'react';

const AddEmployee = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Add Employee</h2>
          <div className="mb-3">
            <label htmlFor='employeeID' className='form-label'>
              Employee ID
            </label>
            <input
              type="text"
              className='form-control'
              placeholder='Enter employee ID'
              name="employeeID"
            />
          </div>
          <div className="mb-3">
            <label htmlFor='companyID' className='form-label'>
              Company ID
            </label>
            <select
              className='form-select'
              name="companyID"
            >
              {/* Add options for company ID dropdown */}
              <option value="company1">Company 1</option>
              <option value="company2">Company 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor='firstName' className='form-label'>
              First Name
            </label>
            <input
              type="text"
              className='form-control'
              placeholder='Enter first name'
              name="firstName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor='middleName' className='form-label'>
              Middle Name
            </label>
            <input
              type="text"
              className='form-control'
              placeholder='Enter middle name'
              name="middleName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <input
              type="text"
              className='form-control'
              placeholder='Enter last name'
              name="lastName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor='tin' className='form-label'>
              TIN (Tax Identification Number)
            </label>
            <input
              type="number"
              className='form-control'
              placeholder='Enter TIN'
              name="tin"
            />
          </div>
          <div className="mb-3">
            <label htmlFor='sssGsis' className='form-label'>
              SSS/GSIS
            </label>
            <input
              type="number"
              className='form-control'
              placeholder='Enter SSS/GSIS'
              name="sssGsis"
            />
          </div>
          <div className="mb-3">
            <label htmlFor='hireDate' className='form-label'>
              Hire Date
            </label>
            <input
              type="date"
              className='form-control'
              name="hireDate"
            />
          </div>
          <div className="mb-3">
            <label htmlFor='salary' className='form-label'>
              Salary
            </label>
            <input
              type="number"
              className='form-control'
              placeholder='Enter salary'
              name="salary"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 mb-2">Submit</button>
          <button type="submit" className="btn btn-warning w-100 mb-2">Cancel</button>
          <button type="submit" className="btn btn-danger w-100 mb-2">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
