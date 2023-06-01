import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
function InfoComplaint (
  {isstudent,setShowModal,modalData}
) {
   
    const [complaintdata , setComplaintData] = useState({});
    console.log("modaldata",modalData);
    return (
      <div class="container">
        <h5 className="col-md-4">Complainant Details-:</h5>
        <form class="row g-3">          
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">Name:</label>
            
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Registration ID: {modalData.studentid ? modalData.studentid : ""}
            </label>
            
          </div>
          
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Name of Hostel:{modalData.hostel_name}
            </label>
            
          </div>
          
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Room No.: {modalData.room}
            </label>
            
          </div>

          <div class="col-md-4">
            <label for="inputAddress2" class="form-label">
              Registration date: {modalData.reg_date}
            </label>
            
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Mobile Number: {modalData.phone}
            </label>
            
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Type Of Complaint: {modalData.type_of_complaint}
            </label>
           
          </div>
          
          </form>
          
                 
  
          <div class="col-12 bottom">
            <label for="autoSizingInput" class="form-label ">
              Complaint in Breif: {modalData.description}
            </label>
            
          </div>
          
          
      </div>
    );
}

export default InfoComplaint;