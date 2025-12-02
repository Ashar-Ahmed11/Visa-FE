import React from 'react'

const Cards = () => {
  const color = "#FF7729"
  return (

    <div className='' style={{ backgroundColor: '#f7f8f9' }}>
      <div className='container text-center' >
      {/* <p className='w-70% text-center'>Travel Embassy Job Apply</p> */}
      <p className='w-70% text-center' style={{paddingTop:'26px'}}>Travel Embassy Job Apply</p>
      
      <h1 ><b>What We Offer</b></h1>
        <h1><b>Your First Step To A Brighter Future</b></h1>
        <div className="row mt-5 d-flex justify-content-center flex-wrap">
          {[
            { icon: 'fa-money', title: 'Job Apply for Individuals', desc: 'Clear eligibility and easy tracking. Stay updated at every step.' },
            { icon: 'fa-suitcase', title: 'Business Job Apply', desc: 'Simple process, quick decisions, minimal documentation.' },
            { icon: 'fa-eye', title: 'Home Job Apply', desc: 'Support for your home-related needs with a fast process.' },
            { icon: 'fa-heart', title: 'Wedding Job Apply', desc: 'Manage big-day needs with flexible, fast approvals.' },
            { icon: 'fa-refresh', title: 'Car Job Apply', desc: 'Flexible options and quick approvals, hassle-free.' },
          ].map((card, i) => (
            <div className={`col-md-4 col-12 mt-4 ${i >= 3 ? 'mb-4' : ''}`} key={card.title}>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="h-100 card border-0 rounded-4"
                style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.08)', transition: 'transform .2s ease, box-shadow .2s ease', overflow: 'hidden' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 35px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'; }}
              >
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${color}, #ffb84d)` }} />
                <div className="card-body text-start p-4">
                  <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 56, height: 56, borderRadius: 12, background: 'rgba(255,119,41,0.12)' }}>
                    <i className={`fa ${card.icon}`} aria-hidden="true" style={{ fontSize: 26, color }}></i>
                  </div>
                  <h5 className="card-title fw-bold">{card.title}</h5>
                  <p className="card-text mb-4 text-muted">{card.desc}</p>
                  <a
                    href="/"
                    className="btn border-0"
                    style={{ backgroundColor: color, color: '#fff', boxShadow: '0 6px 16px rgba(255,119,41,0.35)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,119,41,0.5)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 6px 16px rgba(255,119,41,0.35)'; }}
                  >
                    Contact Us&nbsp;→
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
