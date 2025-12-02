import React, { useState } from 'react';
import coverImage from '../Images/faqcover.jpeg'

export default function VisaFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a Canadian work visa?",
      answer: "A Canada Job Visa—also known as a work permit—gives foreign nationals the legal right to work in Canada for a specific period of time. Depending on the type, it can be employer-specific (tied to one employer) or an open work permit (allowing you to work for multiple employers)."
    },
    {
      question: "What is the process to apply for a Canadian work visa?",
      answer: "The process typically involves obtaining a job offer from a Canadian employer, getting a Labour Market Impact Assessment (LMIA) if required, gathering necessary documents, and submitting an application through IRCC online portal or at a visa application center."
    },
    {
      question: "How long does it take to get a Canada job visa?",
      answer: "Processing times vary depending on the type of work permit and where you're applying from. Generally, it can take anywhere from a few weeks to several months. Express Entry applications are typically processed faster."
    },
    {
      question: "Is a Labour Market Impact Assessment (LMIA) required?",
      answer: "An LMIA is required for most employer-specific work permits to prove that hiring a foreign worker won't negatively impact the Canadian labour market. However, some work permits are LMIA-exempt under certain international agreements or programs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* Carousel Section */}
      <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div 
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                padding: '60px 20px'
              }}
            >
              <div className="container">
                <h1 className="display-4 fw-bold mb-4">FAQ</h1>
                <p className="mb-2">The Canada Job Visa FAQ section is here to answer the most common questions about working in Canada.</p>
                <p className="mb-2">From understanding visa types and document requirements to learning about processing times and LMIA details,</p>
                <p className="mb-2">we provide clear, reliable information to guide you through each stage of the application process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left side - Image */}
            <div className="col-lg-5 mb-4 mb-lg-0 text-center">
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/skills-1.png" 
                alt="Family with luggage" 
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Right side - FAQ */}
            <div className="col-lg-7">
              <div className="mb-2" style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>
                Frequent Answer Question
              </div>
              <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#333' }}>
                Quick Answers To Your Visa Queries
              </h2>

              <div className="accordion" id="visaAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="card border-0 mb-3" style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <div className="card-header bg-white border-0 p-0">
                      <button
                        className="btn btn-link text-decoration-none w-100 text-start d-flex justify-content-between align-items-center p-3"
                        style={{ color: '#333', fontSize: '16px', fontWeight: '600' }}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span>{faq.question}</span>
                        <span style={{ fontSize: '20px', color: '#999', transition: 'transform 0.3s', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    <div 
                      className="collapse show"
                      style={{ 
                        display: openIndex === index ? 'block' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="card-body pt-0 px-3 pb-3" style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
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
    </>
  );
}