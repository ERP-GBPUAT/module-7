import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ComplaintStore from './ComplaintStore';

function Aprofile() { 
    const [complaints,setComplaints] = useState([]);
    const fetchAllComplaints = async()=>{
      try {
        const res = await fetch('http://localhost:8080/?/getByLevel/:',{
        method:"GET",
        header:{
          "Content-type":"application/json",
          "token":localStorage.getItem('token'),
        }
      })
      const data = await res.json();
      setComplaints(data);
      } catch (error) {
        console.log(error);
      }
      
    }
    return (
      <>
        <div className="black-box">
          {/* <img src={"./images/user.png"} alt="logo" className="user" /> */}
          <FontAwesomeIcon
            icon={faUser}
            className="text-primary"
            style={{ fontSize: "7rem" }}
          />
          <div className="detail">
            <h2 className="user-name">Ashok Kumar</h2>
            <h3 className="user-name">Information Technology</h3>
          </div>
          <div className="red-box">
            <div className="leaves">
              <h6>Pending Complaint(s)</h6>
              <h6>15</h6>
            </div>
          </div>
          <div className="blue-box">
            <div className="leaves">
              <h6>Approved Complaint(s)</h6>
              <h6>8</h6>
            </div>
          </div>
          <div className="green-box">
            <div className="leaves">
              <h6>Rejected Complaint(s)</h6>
              <h6>7</h6>
            </div>
          </div>
        </div>
        <div className="leave">
           <ComplaintStore complaints={complaints}/>
        </div>
      </>
  )
}

export default Aprofile