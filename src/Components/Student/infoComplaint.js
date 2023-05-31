import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
function InfoComplaint (
  {isstudent,setShowModal}
) {
   
    const [complaintdata , setComplaintData] = useState({});
    return (
      <div class="container">
        <h5 className="col-md-4">Complainant Details-:</h5>
        <form class="row g-3">          
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">Name:</label>
            
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Registration ID:
            </label>
            
          </div>
          
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Name of Hostel:
            </label>
            
          </div>
          
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Room No.:
            </label>
            
          </div>

          <div class="col-md-4">
            <label for="inputAddress2" class="form-label">
              Registration date:
            </label>
            
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Mobile Number:
            </label>
            
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Type Of Complaint:
            </label>
           
          </div>
          
          </form>
          
                 
  
          <div class="col-12 bottom">
            <label for="autoSizingInput" class="form-label ">
              Complaint in Breif:
            </label>
            
          </div>
          
          
      </div>
    );
}

export default InfoComplaint;