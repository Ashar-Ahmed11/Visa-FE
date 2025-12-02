import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import AppContext from '../context/appContext';

const AllUser = () => {
  const { fetchUsers, users, siteData, setSiteData, adminToken } = useContext(AppContext);
  const history = useHistory()

  if (!adminToken) {
    history.push("/admin")
  }

  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);
  const [savedStatuses, setSavedStatuses] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const openModal2 = (userId) => {
    const user = users.find((u) => u._id === userId);
    setSelectedUser(user);
    setShowModal(true);
  };


  useEffect(() => {
    const fetchData = async () => {
      setLoadingUsers(true);
      await fetchUsers();
      setLoadingUsers(false);
    };

    fetchData();

    const modal = document.getElementById('loanStatusModal');
    function handleModalClose() {
      setSelectedStatus('');
      setCurrentUserId(null);
    }
    modal?.addEventListener('hidden.bs.modal', handleModalClose);
    return () => modal?.removeEventListener('hidden.bs.modal', handleModalClose);
  }, []);

  const openModal1 = (userId) => {
    setCurrentUserId(userId);
    setSelectedStatus(savedStatuses[userId] || '');
    const modal = new window.bootstrap.Modal(document.getElementById('loanStatusModal'));
    modal.show();
  };

  // Updated: pass id and loanStatus to update function
  const loanStatusUpdation = async (id, loanStatus) => {
    const token = adminToken;
    if (!id || !loanStatus) return;

    try {
      const response = await fetch(`https://akhuwatasaanbe.vercel.app/api/user/update-loan-status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ loanStatus }),
      });

      const resData = await response.json();

      if (response.ok) {
        // Update savedStatuses and siteData if needed
        setSavedStatuses(prev => ({ ...prev, [id]: loanStatus }));
        setSiteData(prev => ({ ...prev, loanStatus: resData.user.loanStatus }));
      } else {
        alert(resData.error || "Failed to update application status");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating application status");
    }
  };

  const handleSave = () => {
    if (!selectedStatus || !currentUserId) {
      alert('Please select a status.');
      return;
    }
    loanStatusUpdation(currentUserId, selectedStatus);

    const modal = window.bootstrap.Modal.getInstance(document.getElementById('loanStatusModal'));
    modal.hide();
  };

  return (
    <>
      {loadingUsers && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr className='h4'>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Job</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {[...users].reverse().map((user, index) => (
              <tr key={user._id} onClick={() => openModal2(user._id)} style={{ cursor: 'pointer' }}>
                <th scope="row">{index + 1}</th>
                <td className='h4'>{user.firstName} {user.lastName}</td>
                <td className='h4'>{user.job}</td>
                <td className='h4'>{user.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="container mt-4">
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4 mb-4" key={user._id}>
              <div className="card" style={{ width: "100%" }}>
                <img src={user.paymentScreenshot} className="card-img-top" alt="User" />
                <div className="card-body">
                  <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Phone: {user.phoneNumber}</p>
                  <p className="card-text">CNIC: {user.cnic}</p>
                  <p className="card-text">Address: {user.address}</p>
                  <p className="card-text">Application Amount: {user.loanAmount}</p>
                  <p className="card-text">
                    Application Status: <strong>{savedStatuses[user._id] || user.loanStatus}</strong>
                  </p>
                  <button className="btn btn-primary" onClick={() => openModal1(user._id)}>
                    Update Loan Status
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Status update modal removed */}



      {showModal && selectedUser && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">User Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              {/* <p className="card-text">
                    Loan Status: <strong>{savedStatuses[user._id] || user.loanStatus}</strong>
                  </p> */}
              <div className="modal-body h4">
                <p ><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>WhatsApp No:</strong> {selectedUser.phoneNumber}</p>
                <p><strong>Job:</strong> {selectedUser.job}</p>
                <p><strong>Country:</strong> {selectedUser.country}</p>
                <p><strong>Address:</strong> {selectedUser.address}</p>
                <div className='my-5'>
                  <p><strong>Passport Size Photo:</strong><br />
                    <img className='card-img-top' src={selectedUser.passportSizePhotoImage} alt="Passport Size Photo" width={200} />
                  </p>
                  <p><strong>CNIC Front:</strong><br />
                    <img className='card-img-top' src={selectedUser.frontCnic} alt="Front CNIC" width={200} />
                  </p>
                  <p><strong>CNIC Back:</strong><br />
                    <img className='card-img-top' src={selectedUser.backCnic} alt="Back CNIC" width={200} />
                  </p>
                  <p><strong>Passport Front:</strong><br />
                    <img className='card-img-top' src={selectedUser.passportFrontImage} alt="Passport Front" width={200} />
                  </p>
                  <p><strong>Passport Back:</strong><br />
                    <img className='card-img-top' src={selectedUser.passportBackImage} alt="Passport Back" width={200} />
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default AllUser;
