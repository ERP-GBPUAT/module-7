import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
function InfoComplaint (
  {isstudent,setShowModal}
) {
   
    const [complaintdata , setComplaintData] = useState({});
    return (
      <div class="container">
        <h2 className="topbox">Complainant Details-:</h2>
        <form class="row g-3">  
             
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">Name:</h5>
            
          </div>
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Registration ID:
            </h5>
            
          </div>
          
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Name of Hostel:
            </h5>
            
          </div>
          
          
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Room No.:
            </h5>
            
          </div>

          <div class="col-md-4">
            <h5 for="inputAddress2" class="form-label">
              Registration date:
            </h5>
            
          </div>
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Mobile Number:
            </h5>
            
          </div>
          <div class="col-md-4">
            <h5 for="autoSizingInput" class="form-label">
              Type Of Complaint:
            </h5>
           
          </div>
          
          </form>
          
                 
  
          <div class="col-12 bottom">
            <h5 for="autoSizingInput" class="form-label ">
              Complaint in Breif:
            </h5>
            
          </div>
          
          
      </div>
    );
}

export default InfoComplaint;