import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
function Complaint () {
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
            />
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Name of Advisor
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter the name of advisor"
            />
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Name of Hostel
            </label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Hostel Name</option>
                <option value="1">Tagore Bhawan</option>
                <option value="2">Patel Bhawan</option>
                <option value="3">Silver Jubilee Bhawan</option>
                <option value="4">Vishvesharya Bhawan</option>
                <option value="5">Saraswati Bhawan</option>
                <option value="6">Mandakini Bhawan</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Room No.
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your room no."
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
            />
          </div>
  <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Year of Student
            </label>
            <select class="form-select" aria-label="Default select example">
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
            <textarea class="form-control" id="textArea" rows="4"></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end col-12">
            <button type="submit" class="btn btn-dark me-md-2">
              Reset
            </button>
            <button type="submit" class="btn btn-danger">
              Register
            </button>
          </div>
          </form>
      </div>
    );
}

export default Complaint;
