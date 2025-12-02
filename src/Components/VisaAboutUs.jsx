import React from 'react'
import coverImage1 from '../Images/aboutus1.jpeg'
import coverImage2 from '../Images/aboutus2.jpeg'
import coverImage3 from '../Images/faqcover.jpeg'

const VisaAboutUs = () => {
  return (
    <div>
       <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${coverImage3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">About Us</h1>
              {/* <h5 className="mb-3">Need Help with Canada Job Visas?</h5>
              <p className="mb-2">Have questions about Canadian job visas or related immigration options?</p>
              <p className="mb-2">At Canada Job Guide, we provide consultancy services,</p>
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
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src={coverImage1}
              alt="Visa Documents"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6">
            <p className="text-muted mb-2">About Us</p>
            <h2 className="fw-bold mb-3">Your Stress-Free Path To Visa Success</h2>
            <p className="text-muted mb-3">
              At Canada Job Guide, we focus on accuracy and professionalism in every consultation. 
              Our team reviews your documents for completeness and provides guidance based on 
              publicly available Canadian immigration standards.
            </p>
            <p className="text-muted mb-4">
              We help you understand the visa application process and its criteria; we support you in 
              organizing and completing forms correctly.
            </p>
            <p className="text-muted mb-4">
              Disclaimer: Canada Job Guide is a private consultancy. We are not affiliated with the 
              Government of Canada and do not guarantee visa approval.
            </p>
            
            <div className="row mb-4">
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">5 Years Of Experience</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Answer Pending Replies</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Expert Team Members</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Best Quality Services</span>
              </div>
            </div>
            
            <button className="btn btn-warning text-white px-4">Learn more</button>
          </div>
        </div>
      </div>

      {/* Middle Section - Values */}
      <div className="py-5" style={{backgroundColor: '#2d1b4e'}}>
        <div className="container">
          <div className="text-center text-white mb-5">
            <p className="mb-2">Our Values</p>
            <h2 className="fw-bold">Take The First Step: Unlock Your Visa Potential</h2>
          </div>
          
          <div className="row g-4">
            {/* Our Mission */}
            <div className="col-lg-4">
              <div className="card h-100 p-4">
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                  <i className="bi bi-bullseye"></i>
                </div>
                <h5 className="fw-bold mb-3">Our Mission</h5>
                <p className="text-muted small">
                  Make the best visa choices your Canadian immigration journey with clarity. Your success starts with informed decisions, and we're here to help you achieve it. We're here to offer clear information and guidance to help you better understand the visa process. We aim to be a trusted, professional resource in Canadian immigration consultancy. Disclaimer: Canada Job Guide is a private consultancy. We are not affiliated with the Government of Canada and do not guarantee visa approval.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="col-lg-4">
              <div className="card h-100 p-4" style={{backgroundColor: '#ff6b35', color: 'white'}}>
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i className="bi bi-eye"></i>
                </div>
                <h5 className="fw-bold mb-3">Our Vision</h5>
                <p className="small">
                  To lead the Job Guides, our vision is to be a reliable source for consultancy in Canadian immigration and to provide accessible, clear, and professional guidance. We aim to simplify the immigration and assist process by providing key information and document support. We want to be recognized for providing consultations based on publicly available guidelines. We are a private consultancy and encourage clients to visit official government websites such as IRCC for policy details and to verify any information we provide. We are not affiliated with the Government of Canada and do not guarantee visa approval.
                </p>
              </div>
            </div>

            {/* Our Achievements */}
            <div className="col-lg-4">
              <div className="card h-100 p-4">
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                  <i className="bi bi-trophy"></i>
                </div>
                <h5 className="fw-bold mb-3">Our Achievements</h5>
                <p className="text-muted small">
                  Over the years, Canada Job Guide has built a reputation for accuracy, professional, and client-friendly consultancy. We take pride in helping hundreds of individuals and applicants. Known for transparency and professionalism, we provide guidance, document reviews, and support that helps applicants understand the visa application process. Our achievements include building trust, staying relevant with clarity and confidence. Disclaimer: Canada Job Guide is a private consultancy. We are not affiliated with the Government of Canada and do not guarantee visa approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Hassle-Free */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3 ">Experience Hassle-Free Visa Applications</h2>
            <p className=" mb-4">
              At Canada Job Guide, we provide consultancy services that guide you through every step of your visa application. From initial documentation to submission, we ensure you have the tools to apply correctly and confidently. We are a private consultancy, and we encourage our clients to verify all information with official government sources. Disclaimer: Canada Job Guide is a private consultancy. We are not affiliated with the Government of Canada and do not guarantee visa approval.
            </p>
            <button className="btn btn-warning text-white px-4">Contact Now</button>
          </div>
          <div className="col-lg-6">
            <img 
              src={coverImage2}
              alt="Canadian Flag"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div>
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
    </div>
  )
}

export default VisaAboutUs
