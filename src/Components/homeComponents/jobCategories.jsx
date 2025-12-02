import React from 'react';
import img1 from '../../Images/i8.jpg'
import img2 from '../../Images/i9.jpg'
import img3 from '../../Images/i10.jpg'
import img4 from '../../Images/i11.jpg'
import img5 from '../../Images/i12.jpg'
import img6 from '../../Images/i13.jpg'

const JobCategories = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">JOB Categories</h2>
        <p className="text-muted">8 Hours Duty + Overtime No Age Limit | No Degree | Without IELTS</p>
      </div>

      <div className="row g-4">
        {/* Security Guard */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src={img1}
              className="card-img-top" 
              alt="Security Guard"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Security Guard</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3500</h3>
              <p className="text-muted small">Canadian Dollar-commission 330</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Driver */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src={img2}
              className="card-img-top" 
              alt="Driver"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Driver</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3500</h3>
              <p className="text-muted small">Canadian Dollar-commission 330</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Cook/Chef */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src={img3}
              className="card-img-top" 
              alt="Cook/Chef"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Cook/Chef</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3000</h3>
              <p className="text-muted small">Canadian Dollar-Commission 300</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Plumber */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src={img4}
              className="card-img-top" 
              alt="Plumber"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Plumber</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3200</h3>
              <p className="text-muted small">Canadian Dollar-commission 320</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Electrician */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src={img5}
              className="card-img-top" 
              alt="Electrician"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Electrician</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3400</h3>
              <p className="text-muted small">Canadian Dollar-commission 340</p>
              <button className="btn  px-4 mt-3" style={{backgroundColor:'#FF7729'}}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Warehouse Worker */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src={img6}
              className="card-img-top" 
              alt="Warehouse Worker"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Warehouse Worker</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3100</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;