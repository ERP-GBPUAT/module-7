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
        <h2 className="topbox">Complainant Details-:</h2>
        <form class="row g-3">  
             
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">Name:</h5>
            
          </div>
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Registration ID: {modalData.studentid ? modalData.studentid : ""}
            </h5>
            
          </div>
          
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Name of Hostel:{modalData.hostel_name}
            </h5>
            
          </div>
          
          
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Room No.: {modalData.room}
            </h5>
            
          </div>

          <div class="col-md-4">
            <h5 for="inputAddress2" class="form-label">
              Registration date: {modalData.reg_date}
            </h5>
            
          </div>
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Mobile Number: {modalData.phone}
            </h5>
            
          </div>
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Type Of Complaint: {modalData.type_of_complaint}
            </h5>
           
          </div>
          
          </form>
          
                 
  
          <div class="col-12 bottom">
            <h5 for="autoSizingInput" class="form-label ">
              Complaint in Breif: {modalData.description}
            </h5>
            
          </div>
          
          
      </div>
    );
}

export default InfoComplaint;