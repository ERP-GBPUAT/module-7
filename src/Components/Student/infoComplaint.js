import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
function Complaint (
  {isstudent,setShowModal}
) {
   
    const [complaintdata , setComplaintData] = useState({});
    return (
      <div class="container">
        <h5 className="col-md-4">Complainant Details-:</h5>
        <form class="row g-3">          
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your name..."
              value={complaintdata.name ? complaintdata.name : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"name":e.target.value})
              }}
              // value={userData?.name}
            />
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Registration ID 
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your Registration ID"
              value={complaintdata.department ? complaintdata.department : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"department":e.target.value})
              }}
            />
          </div>
          
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Name of Hostel
            </label>
            <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                setComplaintData({...complaintdata,"hostel_name":e.target.value})
              }}
              value={complaintdata.hostel_name ? complaintdata.hostel_name : ""} 
              >
                <option selected>Select Hostel Name</option>
                <option value="1">Tagore Bhawan</option>
                <option value="2">Patel Bhawan</option>
                <option value="3">Silver Jubilee Bhawan</option>
                <option value="4">Vishvesharya Bhawan</option>
                <option value="5">Saraswati Bhawan</option>
                <option value="6">Mandakini Bhawan</option>
            </select>
          </div>}
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Wing Number
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter Wing Number"
              value={complaintdata.advisor_name ? complaintdata.advisor_name : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"advisor_name":e.target.value})
              }}
            />
          </div>}
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Room No.
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your room no."
              value={complaintdata.room_number ? complaintdata.room_number : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"room_number":e.target.value})
              }}
            />
          </div>}
          <div class="col-md-4">
            <label for="inputAddress2" class="form-label">
              Registration date
            </label>
            <input
              type="date"
              class="form-control"
              id="inputAddress2"
              value={complaintdata.reg_date ? complaintdata.reg_date  : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"reg_date":e.target.value})
              }}
            />
          </div>
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your Mobile no."
              value={complaintdata.mobile_number ? complaintdata.mobile_number : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"mobile_number":e.target.value})
              }}
            />
          </div>}
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Type Of Complaint
            </label>
            <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                setComplaintData({...complaintdata,"hostel_name":e.target.value})
              }}
              value={complaintdata.hostel_name ? complaintdata.hostel_name : ""} 
              >
                <option selected>Select Type of Compliant</option>
                <option value="1">Electricity</option>
                <option value="2">Furniture</option>
                <option value="3">Mess</option>
                <option value="4">Drinking Water</option>
                <option value="5">Others</option>
            </select>
          </div>}
          
          </form>
          
          <form class="row g-3">          
  
          <div class="col-12">
            <label for="autoSizingInput" class="form-label ">
              Explain the complaint in Breif:
            </label>
            <textarea class="form-control" id="textArea" rows="4" onChange={(e)=>{
                setComplaintData({...complaintdata,"incident_description":e.target.value})
              }}
              value={complaintdata.incident_description ? complaintdata.incident_description : ""} 
              ></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end col-12">
            <button type="submit" class="btn btn-dark me-md-2" onClick={()=>{
              setComplaintData({});
            }}>
              Reset
            </button>
            <button type="submit" class="btn btn-danger" onClick={()=>{
              setShowModal(false);
            }}>
              Register
            </button>
          </div>
          </form>
      </div>
    );
}

export default Complaint;