import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ComplaintStore from './ComplaintStore';
import FilterDropDown from '../../Containers/Dropdown';
import PunishmentModal from '../../Containers/PunishmentModal';
import { useLocation } from 'react-router-dom';
import { Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Analysis from '../../Containers/Analysis';
function Aprofile() { 
    const [complaints,setComplaints] = useState();
    const [showpunishmentmodal,setShowPunishmentModal] = useState(false);
    const [stats,setStats] = useState({});
    const [punishmentcomplaintid,setpunishmentcomplaintid] = useState();
    const [showinfomodal,setShowmodal] = useState(false);
    const temp = JSON.parse(window.localStorage.getItem("userdetails"));
    const [admin,setadmin] = useState(temp);
    const [showforwardmodal,setShowForwardModal] = useState(false);
    const [forwardnote , setforwardnote] = useState("");
    const approvecomplaint = async(complaint_id)=>{
      await fetch("http://localhost:8080/hostelcomplaint/approve_complaint_hostel",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          complaint_id:complaint_id
        })
      }).then((res)=>res.json()).then((data)=>{
        console.log(data);
      })
    }

    const rejectcomplaint = async(complaint_id,reg_note) =>{
      await fetch("http://localhost:8080/hostelcomplaint/reject_complaint_hostel",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          complaint_id:complaint_id,
          reg_note:reg_note
        })
      }).then((res)=>res.json()).then((data)=>{
        console.log("rej_complaint",data);
      })
    }
    const forward_complaint = async(complaint_id,note)=>{
      await fetch("http://localhost:8080/hostelcomplaint/forward_complaint_hostel",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          complaint_id:complaint_id,
          forward_note : note
        })
      }).then((res)=>res.json()).then((data)=>{
        console.log(data);
      })
    }
    const getstats = async(level)=>{
      await fetch(`http://localhost:8080/hostelcomplaint/get_stats_hostel?level=${level}`,{
        headers : {
          "Content-Type":"application/json",
        }
      }).then((res)=>res.json()).then((data)=>{
        setStats(JSON.parse(data.data));
      })
    }
    const getfilteredComplaints = async(status,level)=>{
      await fetch(`http://localhost:8080/hostelcomplaint/get_filtered_complaints_hostel?status=${status}&level=${level}`,{
        method:"GET",
        headers : {
          "Content-Type":"application/json",
        }
      }).then((res)=>res.json()).then((data)=>{
        setComplaints(data.data);
      })
    }
    const getfilteredComplaintsbylvl = async(lvl)=>{
      await fetch(`http://localhost:8080/hostelcomplaint/get_filtered_complaints_hostel?lvl=${lvl}`,{
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
      // getComplaints();
      getfilteredComplaintsbylvl(admin.level);
      getstats(admin.level);
    },[])
    return (
      <>
      <div className="black-box">
      <FontAwesomeIcon
        icon={faUser}
        className="text-primary"
        style={{ fontSize: "7rem" }}
      />
      <div className="detail">
        <h2 className="user-name">{admin.name} {`(${admin.designation})`}</h2>
        <h3 className="user-name">{admin.branch}</h3>
        <h2 className="user-name">{admin.reg_id}</h2>
      </div>
      <div className="green-box">
        <div className="leaves">
          <h6>Pending Complaint(s)</h6>
          <h6>{stats.pending_count}</h6>
        </div>
      </div>
      <div className="blue-box">
        <div className="leaves">
          <h6>Approved Complaint(s)</h6>
          <h6>{stats.approved_count}</h6>
        </div>
      </div>
      <div className="red-box">
        <div className="leaves">
          <h6>Rejected Complaint(s)</h6>
          <h6>{stats.rej_count}</h6>
        </div>
      </div>
    </div>
    {/* <Analysis/> */}
    <FilterDropDown getfilteredComplaints={getfilteredComplaints} admin = {admin}style={{
      marginLeft :"20px"
    }}/>
    {showpunishmentmodal ? <PunishmentModal  reject_complaint = {rejectcomplaint}setShowPunishmentModal = {setShowPunishmentModal} forward_complaint={forward_complaint} punishmentcomplaintid = {punishmentcomplaintid}/>:<div className="leave">
       <ComplaintStore 
       punishmentcomplaintid = {punishmentcomplaintid}
       setpunishmentcomplaintid = {setpunishmentcomplaintid}
       complaints={complaints} 
       setShowPunishmentModal = {setShowPunishmentModal} 
       approvecomplaint = {approvecomplaint}
       rejectcomplaint = {rejectcomplaint}
       admin = {admin}
       forward_complaint = {forward_complaint}
       setShowForwardModal={setShowForwardModal}
       />
    </div>}
    <Modal open={showforwardmodal} onOk={()=>{
      forward_complaint(punishmentcomplaintid,forwardnote);
      setShowForwardModal(false);
    }} onCancel={()=>setShowForwardModal(false)} >
      <h3>Add Forward Note</h3>
      <TextArea  onChange={(e)=>setforwardnote(e.target.value)}/>
    </Modal>
  </>);
}

export default Aprofile