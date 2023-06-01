import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ComplaintStore from './ComplaintStore';
import FilterDropDown from '../../Containers/Dropdown';
import PunishmentModal from '../../Containers/PunishmentModal';
function Aprofile() { 
    const [complaints,setComplaints] = useState();
    const [showpunishmentmodal,setShowPunishmentModal] = useState(false);
    const [stats,setStats] = useState({})

    const getstats = async()=>{
      await fetch("http://localhost:8080/hostelcomplaint/get_stats_hostel",{
        headers : {
          "Content-Type":"application/json",
        }
      }).then((res)=>res.json()).then((data)=>{
        setStats(JSON.parse(data.data));
      })
    }
    const getfilteredComplaints = async(status)=>{
      await fetch(`http://localhost:8080/hostelcomplaint/get_filtered_complaints_hostel?status=${status}`,{
        method:"GET",
        headers : {
          "Content-Type":"application/json",
        }
      }).then((res)=>res.json()).then((data)=>{
        setComplaints(data.data);
      })
    }
    const getComplaints = async()=>{
      await fetch("http://localhost:8080/hostelcomplaint/get_all_complaints_hostel",{
        method:"GET",
        headers : {
          "Content-Type":"application/json",
        }
      }).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setComplaints(data.data);
      })
    }
    useEffect(()=>{
      getComplaints();
      getstats();
    },[])
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
            <h2 className="user-name">Govind Verma</h2>
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
        <FilterDropDown style={{
          marginLeft :"20px"
        }}/>
        {showpunishmentmodal ? <PunishmentModal setShowPunishmentModal = {setShowPunishmentModal}/>:<div className="leave">
           <ComplaintStore complaints={complaints} setShowPunishmentModal = {setShowPunishmentModal}/>
        </div>}
      </>
  )
}

export default Aprofile