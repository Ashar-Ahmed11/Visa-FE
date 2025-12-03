import React from 'react'
import VisaImg from '../Images/visa1.jpeg'
import VisaImg1 from '../Images/aboutus2.jpg'

const Visa = () => {
  return (
    <div>
      <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${VisaImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Visa</h1>
         <p className="mb-2">Rely on Travels Embassy for professional documentation review and step-by-step visa consultancy. We focus on transparency, professionalism, and personalized guidance—supporting you with clear information and assistance at every stage of your job visa process.</p>
         <p className="mb-2">Disclaimer: Travels Embassy is a private consultancy. We are not affiliated with the Government of Canada and do not guarantee visa approval

</p>
              {/* <h5 className="mb-3">Need Help with Canada Job Visas?</h5>
              <p className="mb-2">offering clear information and step-by-step support based on publicly available guidelines.</p>
              <p className="mb-4">Our team is here to assist you with personalized advice and guidance.</p>
              <p className="small fst-italic">
                Disclaimer: Canada Job Guide is a private consultancy. We are not affiliated with<br/>
                the Government of Canada and do not guarantee visa approval.
              </p> */}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        {/* <div className="carousel-item">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=400&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Get Started Today</h1>
              <h5 className="mb-3">Professional Visa Consultancy Services</h5>
              <p className="mb-2">Expert guidance for your Canadian immigration journey</p>
              <p className="mb-2">Personalized support tailored to your needs</p>
              <p className="mb-4">Let us help you achieve your Canadian dream</p>
            </div>
          </div>
        </div> */}

        {/* Slide 3 */}
        {/* <div className="carousel-item">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Reach Out Now</h1>
              <h5 className="mb-3">We're Here to Help</h5>
              <p className="mb-2">Connect with our experienced consultants</p>
              <p className="mb-2">Get answers to all your visa questions</p>
              <p className="mb-4">Start your application process with confidence</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Carousel Controls */}
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#contactCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#contactCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}

      {/* Carousel Indicators */}
      {/* <div className="carousel-indicators">
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}
    </div>
    <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Your One-Stop Solution For All Visa Needs</h2>
          <p className="text-muted">Expert guidance on visa requirements and eligibility criteria.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Visa Consultation */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100  p-4" >
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-35.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Visa Consultation</h5>
              <p className="small">
                Get personalized consultancy from Travels Embassy to explore the right visa pathway and better understand immigration policies and requirements before applying.
              </p>
            </div>
          </div>

          {/* Online Application */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-36-1.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Online Application</h5>
              <p className="text-muted small">
                Get step-by-step consultancy from Travels Embassy to help you prepare your visa application with clarity and confidence based on publicly available guidelines.
              </p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-35-1.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Customer Support</h5>
              <p className="text-muted small">
                Receive friendly and informative support from Travels Embassy, with our team offering guidance and consultancy at every stage of the visa process.
              </p>
            </div>
          </div>

          {/* Work Visa */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-35-2.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Work Visa</h5>
              <p className="text-muted small">
                Want to build your career abroad? Our work visa can create opportunities to explore international careers. At Travels Embassy, we provide professional consultancy for skilled and unskilled workers, helping you understand work applications for Canada, Saudi Arabia, Malaysia, Oman, UAE, and other popular destinations, based on publicly available requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Hassle-Free Applications */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div 
              className="position-relative text-white p-5 rounded"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${VisaImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="fw-bold mb-4">Experience Hassle-Free Visa Applications</h2>
                  <p className="mb-0">
                    At Travels Embassy, we simplify the visa process, so you can focus on your future. Our experienced team provides clear step-by-step guidance and professional document support, helping you navigate each stage of your application with compliance and ease. From consultation to submission, we ensure a process that is accurate, transparent, and tailored to your needs. We are a private consultancy and encourage clients to verify information with official sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5" style={{backgroundColor: '#ff7f50'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Stay Informed With Our Newsletter</h2>
            <p className="mb-0">Get updated information, news, insight or promotions.</p>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <input 
                type="email" 
                className="form-control py-3" 
                placeholder="Enter your email address"
                style={{borderRadius: '5px 0 0 5px'}}
              />
              <button 
                className="btn btn-dark px-4" 
                type="button"
                style={{borderRadius: '0 5px 5px 0'}}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Visa
