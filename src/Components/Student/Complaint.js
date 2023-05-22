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
              Department
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your Department"
              value={complaintdata.department ? complaintdata.department : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"department":e.target.value})
              }}
            />
          </div>
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Name of Advisor
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter the name of advisor"
              value={complaintdata.advisor_name ? complaintdata.advisor_name : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"advisor_name":e.target.value})
              }}
            />
          </div>}
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
          </form>
          <h5 className="mt-3">Complainee Details-:</h5>
          <form class="row g-3">          
          <div class="col-md-4">
            <label for="inputAddress2" class="form-label">
              Event Date
            </label>
            <input
              type="date"
              class="form-control"
              id="inputAddress2"
              value={complaintdata.event_date ? complaintdata.event_date : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"event_date":e.target.value})
              }}
            />
          </div>
  <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Year of Student
            </label>
            <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                setComplaintData({...complaintdata,"student_year":e.target.value})
              }}
              value={complaintdata.student_year ? complaintdata.student_year : ""} 
              >
                <option selected>Select Year</option>
                <option value="1">1 year</option>
                <option value="2">2 year</option>
                <option value="3">3 year</option>
                <option value="4">4 year</option>
            </select>
          </div>
          <div class="col-12">
            <label for="autoSizingInput" class="form-label ">
              Incident Description
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
