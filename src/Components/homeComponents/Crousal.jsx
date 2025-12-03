import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../context/appContext';
import coverImage from '../../Images/i1.jpg'
import { getCdnUrl } from '../../utils/cdnImage'
import { Link } from 'react-scroll';
const Crousal = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [uploading, setUploading] = useState(false); // New loading state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { handleFileUpdate, userData, setUserData, createUser, inputRef, createUserLoader, siteData } = useContext(AppContext);

  // Wrapper for file change to handle loading
  const uploadImage = (fieldName) => async (e) => {
    setUploading(true);
    try {
      await handleFileUpdate(e, fieldName);
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const color = "#FF7729"

  return (
    <div
      className="container-fluid py-5 d-flex justify-content-center align-items-center flex-wrap mainCarousal"
      style={{
        height: '800px',
        backgroundImage:
          `url(${getCdnUrl(coverImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 119, 41, 0.6)',
          zIndex: 1,
        }}
      />


      {/* Content row */}
      <div className="row w-100 position-relative" style={{ zIndex: 2 }}>
        <div className={`col-md-6 ${isMobile ? 'col-12 mb-4' : ''} d-flex align-items-center flex-column justify-content-center`}>
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className={`${isMobile ? 'fw-bold display-4' : 'display-5 fw-bold px-5'} heading`}
            style={{ color: 'white' }}
          >
            Travel Embassy Job- Work Beyond Borders
          </h1>

          <p className="text-light">From embassy vacancies to global travel jobs, we make your job search simple, secure, and stress-free. Find real opportunities, get expert help, and start your international journey today.</p>
          {/* <Link class="btn btn-primary border-light border-2" to="loan-form" role="button" style={{ backgroundColor: '#FF7729', color: 'white' }} type="button" >Job Apply</Link> */}

        </div>

        <div className="col-md-6 d-flex justify-content-center  align-items-center my-3">
          <div
            className='p-4 flex-wrap'
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{
           
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
          
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <div
                style={{
                  backgroundColor: '#108515',
                  borderRadius: '10px',
                  padding: '8px',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              > */}
              {/* <span style={{ fontSize: '20px' }}>📞</span> */}
              {/* </div> */}
            
            </div>
            {/* <span
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#108515'
              }}
            >
              
            </span> */}
            {/* <p className="text-light fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus explicabo magnam, ipsum enim quos corporis aspernatur, consequatur tenetur, ad omnis quis! Est vero doloremque, fuga inventore non sequi? Accusamus.</p> */}
            <Link class="btn btn-primary border-light border-2 px-4 py-2 car-btn" to="loan-form" role="button" style={{ backgroundColor: '#FF7729', color: 'white' }} type="button" >Start Your Application</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousal;