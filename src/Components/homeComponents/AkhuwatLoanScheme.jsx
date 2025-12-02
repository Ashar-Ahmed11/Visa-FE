import React from 'react';
import Akhuwat12 from '../../Images/i16.jpg'
import { getCdnUrl } from '../../utils/cdnImage'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Support Lives with Travel Embassy Job Apply</h1>
            
            <p className="mb-4 fw-bold mt-1">
            Travel Embassy Job Apply is designed to be simple and fair. The easy application and minimal paperwork help you get support quickly with clear, reliable steps.
            </p>
            <p className="mb-4 fw-bold mt-1">
            With Travel Embassy, every application is a step toward opportunity. We help you pursue education, business, housing, and career goals with friendly guidance at every step.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              When you contribute or participate, you become part of a movement that uplifts communities and spreads kindness, showing that even small acts of support can create lasting change in someone’s life.

              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={getCdnUrl(Akhuwat12)}
              alt="Travel Embassy Job Apply Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;