import React from 'react';

const WorkProcess = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-warning mb-2" style={{borderLeft: '3px solid #ff6b35', paddingLeft: '10px', display: 'inline-block'}}>
          Work Process
        </p>
        <h2 className="fw-bold mb-3">Our Streamlined Visa Process</h2>
        <p className="text-muted">
          We make your Canada job visa application journey smooth and stress-free with a clear, step-by-step process.
        </p>
      </div>

      <div className="row g-4">
        {/* Personalized Guidance */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-52.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Personalized Guidance</h5>
            <p className="text-muted small">
              Our consultants provide tailored advice and support at every stage, helping you prepare with clarity and confidence.
            </p>
          </div>
        </div>

        {/* Faster Processing Support */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-51.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Faster Processing Support</h5>
            <p className="text-muted small">
              "Receive timely assistance at every step, ensuring your application stays on track and stress-free."
            </p>
          </div>
        </div>

        {/* Affordable Consultancy */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-50.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Affordable Consultancy</h5>
            <p className="text-muted small">
              "Access expert visa consultancy at affordable fees, delivering quality services with real value for your investment."
            </p>
          </div>
        </div>

        {/* Trusted Worldwide */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-53.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Trusted Worldwide</h5>
            <p className="text-muted small">
              "We are trusted for providing professional, transparent, and reliable guidance that helps clients move forward with confidence in their Canada job visa applications."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;