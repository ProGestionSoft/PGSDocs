import React, { useState } from 'react';
import styles from '@site/src/components/Playground/0LC.module.css';

const LeaveRequest = () => {
  const [leaveRequest, setLeaveRequest] = useState({
    employeeName: '',
    leaveType: 'Vacation',
    startDate: '',
    endDate: '',
    reason: '',
  });
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const leaveTypes = ['Vacation', 'Sick Leave', 'Personal', 'Compassionate'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaveRequest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitRequest = () => {
    if (leaveRequest.employeeName && leaveRequest.startDate && leaveRequest.endDate) {
      setLeaveRequests([...leaveRequests, { ...leaveRequest, id: Date.now(), status: 'Pending' }]);
      setIsSubmitted(true);
      setLeaveRequest({
        employeeName: '',
        leaveType: 'Vacation',
        startDate: '',
        endDate: '',
        reason: '',
      });
    } else {
      alert('Please fill out all required fields.');
    }
  };

  const handleApproveRequest = (id) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: 'Approved' } : request
    );
    setLeaveRequests(updatedRequests);
  };

  const handleRejectRequest = (id) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    );
    setLeaveRequests(updatedRequests);
  };

  return (
    <div className="leave-request-container">
      <h2>Leave Request</h2>

      <div className="leave-request-form">
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          value={leaveRequest.employeeName}
          onChange={handleInputChange}
        />
        <select
          name="leaveType"
          value={leaveRequest.leaveType}
          onChange={handleInputChange}
        >
          {leaveTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="startDate"
          value={leaveRequest.startDate}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="endDate"
          value={leaveRequest.endDate}
          onChange={handleInputChange}
        />
        <textarea
          name="reason"
          placeholder="Reason for Leave"
          value={leaveRequest.reason}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmitRequest}>Submit Request</button>
      </div>

      {isSubmitted && <p className="confirmation-message">Your leave request has been submitted.</p>}

      <div className="leave-requests-list">
        <h3>Leave Requests</h3>
        <ul>
          {leaveRequests.map((request) => (
            <li key={request.id} className="leave-request-item">
              <span>
                {request.employeeName} - {request.leaveType} ({request.startDate} to {request.endDate})
              </span>
              <p>{request.reason}</p>
              <p>Status: <strong>{request.status}</strong></p>
              <button onClick={() => handleApproveRequest(request.id)}>Approve</button>
              <button onClick={() => handleRejectRequest(request.id)}>Reject</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaveRequest;
