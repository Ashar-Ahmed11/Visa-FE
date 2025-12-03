import React, { useContext } from 'react';
import AppContext from '../context/appContext';
import img1 from '../../Images/i8.jpg'
import img2 from '../../Images/i9.jpg'
import img3 from '../../Images/i10.jpg'
import img4 from '../../Images/i11.jpg'
import img5 from '../../Images/i12.jpg'
import img6 from '../../Images/i13.jpg'
import img7 from '../../Images/carpenter.avif'
import img8 from '../../Images/painter.avif'
import img9 from '../../Images/mechanics.avif'
import { getCdnUrl } from '../../utils/cdnImage'

const JobCategories = () => {
  const { setUserData, userData } = useContext(AppContext);

  const handleApply = (job) => {
    setUserData({ ...userData, job });
    const el = document.getElementById('loan-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">JOB Categories</h2>
        <p className="text-muted">8 Hours Duty + Overtime No Age Limit | No Degree | Without IELTS</p>
      </div>

      <div className="row g-4">
        {/* Security Guard */}
        <div  data-aos="fade-right"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img1)}
              className="card-img-top" 
              alt="Security Guard"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Security Guard</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3500</h3>
              <p className="text-muted small">Canadian Dollar-commission 330</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Security Guard')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Driver */}
        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img2)}
              className="card-img-top" 
              alt="Driver"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Driver</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3500</h3>
              <p className="text-muted small">Canadian Dollar-commission 330</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Driver')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Cook/Chef */}
        <div  data-aos="fade-right"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img3)}
              className="card-img-top" 
              alt="Cook/Chef"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Cook/Chef</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3000</h3>
              <p className="text-muted small">Canadian Dollar-Commission 300</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Cook/Chef')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Plumber */}
        <div  data-aos="fade-left"
            data-aos-duration="500
            " className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img4)}
              className="card-img-top" 
              alt="Plumber"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Plumber</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3200</h3>
              <p className="text-muted small">Canadian Dollar-commission 320</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Plumber')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Electrician */}
        <div  data-aos="fade-right"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img5)}
              className="card-img-top" 
              alt="Electrician"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Electrician</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3400</h3>
              <p className="text-muted small">Canadian Dollar-commission 340</p>
              <button className="btn  px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Electrician')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Warehouse Worker */}
        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img6)}
              className="card-img-top" 
              alt="Warehouse Worker"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Warehouse Worker</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3100</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Warehouse Worker')}>Apply Now</button>
            </div>
          </div>
        </div>


        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img7)}
              className="card-img-top" 
              alt="Warehouse Worker"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3"> Carpenter</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3100</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Warehouse Worker')}>Apply Now</button>
            </div>
          </div>
        </div>
        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img8)}
              className="card-img-top" 
              alt="Warehouse Worker"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Painter</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3300</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Warehouse Worker')}>Apply Now</button>
            </div>
          </div>
        </div>
        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img9)}
              className="card-img-top" 
              alt="Warehouse Worker"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Mechanic</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3400</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#FF7729'}} onClick={() => handleApply('Warehouse Worker')}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;