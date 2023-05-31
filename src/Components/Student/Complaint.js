import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
function Complaint (
  {isstudent,setShowModal}
) {
    // const [userData,setUSerData] = useState(JSON.parse(localStorage.getItem("user")))
    // const [complaint,setComplaint]=useState({date:"",studentID:"",desc:""})

    // const onComplaintSubmit = async(e)=>{
    //   e.preventDefault();

    //    try {
    //     const res = await fetch('http://localhost:8080/complaint/add/:',{
    //     method:"POST",
    //     header:{
    //       "Content-type":"application/json",
    //       "token":localStorage.getItem('token'),
    //     },
    //     body:JSON.stringify({"complainee":complaint.studentId,"complainant":user?.id,"description":complaint.desc})
    //   })
    //   const data = await res.json();
    //   console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    const [complaintdata , setComplaintData] = useState({});
    return (
      <div class="container">
        <h5 className="col-md-4">Complainant Details-:</h5>
        <form class="row g-3">          
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Student ID 
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
          
          <form class="row g-3 bottom">          
  
          <div class="col-16">
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
