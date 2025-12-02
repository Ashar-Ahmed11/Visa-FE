import React from 'react'
import b1 from '../Images/b1.jpg'
import b2 from '../Images/b2.jpg'
import b3 from '../Images/b3.jpg'
import Blogimg from '../Images/blog.jpg'



const Blog = () => {
  return (
    <div>
         <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Blogimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Blog and Articles</h1>
              <p className="mb-2">“Our blog provides the latest updates, tips, and insights on visa applications, immigration policies, study abroad programs, work permits, and international travel. Whether you’re planning to study, work, or settle abroad, we offer reliable information and practical guidance to help you make informed decisions.”

 

</p>
              {/* <h5 className="mb-3">Need Help with Canada Job Visas?</h5>
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
      <div className="text-center mb-5">
        <h2 className="fw-bold">Discover Our Latest News</h2>
        <h2 className="fw-bold">And Expert Blogs</h2>
      </div>

      <div className="row g-4">
        {/* Blog 1 - Lee Cadesky */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b3}
              className="card-img-top" 
              alt="Restaurant"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#ff6b35'}}>
                Lee Cadesky: Innovating Food With Purpose
              </h5>
              <p className="text-muted small">
                Lee Cadesky, Director of Meal Solutions at Maple Leaf Foods, has built a uniquely creative career path—from aerospace engineering to a master's in dairy science, and later pioneering insect-based protein innovation—before joining Maple Leaf Foods in 2020. Today, Lee leads innovation across well-known brands like B. Holiday® Luncheon Meat and Tenderflake® Lard while advancing plant-based alternatives solutions. Under her leadership, products like Schneider's egg bites and sandwiches have quickly gained traction, capturing 20% of the savory frozen breakfast market since their 2024 launch.
              </p>
            </div>
          </div>
        </div>

        {/* Blog 2 - Visible Support */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b1}
              className="card-img-top" 
              alt="Visa Documents"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#ff6b35'}}>
                Visible Support: Pride, Belonging & Consistent Allyship
              </h5>
              <p className="text-muted small">
                In today's environment, where 2SLGBTQIA+ rights continue to face challenges in parts of Canada and the U.S., active and consistent support is more important than ever. "Pride is a time to celebrate the contributions and resilience of the 2SLGBTQIA+ community. It's a moment to uplift diverse voices and proudly affirm that everyone deserves the right to live openly, authentically, and safely."
              </p>
            </div>
          </div>
        </div>

        {/* Blog 3 - How To Apply */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b2}
              className="card-img-top" 
              alt="Passports and Flags"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#ff6b35'}}>
                How To Apply For A Canadian Job Visa – Quick Guide
              </h5>
              <p className="text-muted small">
                Applying for a Canadian job visa can feel complex, but with the right guidance it becomes more manageable. At Canada Job Guide, we help you understand the process step by step. This includes choosing the appropriate work permit type, understanding employer requirements such as LMIA, and preparing essential documents like your passport, job offer letter, proof of work experience, and educational credentials. Our consultancy ensures you stay organized and well-prepared throughout your application journey.
              </p>
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

export default Blog
