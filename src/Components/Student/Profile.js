import { React, useEffect, useState} from "react";
// import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FilterDropDown from "../../Containers/Dropdown";
import InfoComplaint from "./InfoComplaint";
import {Modal,Button,Space} from "antd"
import Complaint from "./Complaint";
import { InfoCircleOutlined } from "@ant-design/icons";

function Profile ({isstudent}) {
  const [showModal, setShowModal] = useState(false);
  const [complaints,setComplaints] = useState();
  const [modalData,setModalData] = useState();
  const [stats,setStats] = useState({});
  const [complaintmodal,setcomplaintmodal] = useState(false);
  //  const navigate = useNavigate();
  //  function home(e) {
  //    navigate(`/home`);
  //  }

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
    },[complaintmodal])
    const openModal = (data) => {
      setShowModal(true);
      console.log("modaldatain openmodal",data);
      setModalData(data);
    };
    const closeModal = () => {
      setShowModal(false);
    };
    console.log(isstudent);
    console.log("complaintdata",complaints);
    return (
      <>
        <div className="black-box">
          <FontAwesomeIcon
            icon={faUser}
            className="text-primary"
            style={{ fontSize: "7rem" }}
          />
          <div>
            <h2 className="user-name">Aman Panwar</h2>
            <h3 className="user-name">Information Technology</h3>
            <h4 className="user-name">55077</h4>
          </div>
          <div className="red-box">
            <div className="leaves">
              <h4>Approved Complaint</h4>
              <h4>{ stats.approved_count }</h4>
            </div>
          </div>
          <div className="blue-box">
            <div className="leaves">
              <h4>Active Complaint(s)</h4>
              <h4>{stats.pending_count}</h4>
            </div>
          </div>
          <div className="green-box">
            <div className="leaves">
              <h4>Complaint(s) closed</h4>
              <h4>{stats.rej_count}</h4>  
            </div>
          </div>
        </div>
        <div style={{
            position:"relative",
            marginTop:"30px",
            marginLeft:"100px",
            marginBottom:"50px",
        }}>
    <Space wrap>
    <Button type="primary"
    onClick={()=>setcomplaintmodal(true)} 
    size="large"
    ss={{
      textAlign:"center",
      backgroundColor:"#23292F",
      color:"white",
      fontSize:"19px",
      fontWeight:"500",
  }}
    >Raise a Complaint</Button>
  </Space>
        </div>
        <FilterDropDown style = {{
          marginLeft:"20px",
          position:"relative",
          top:"80px",
          left:"20px",
        }}
        getfilteredComplaints = {getfilteredComplaints}
        />
        <table class="table table-bordered caption-top">
        <caption>List of Complaint(s)</caption>
          <thead class='table-dark'>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Type of Complaint</th>
              <th scope="col">Complaint date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              complaints && (complaints.map((curr,count)=>{
                return <tr>
                <th scope="row">{count+1}</th>
                <td onClick={()=>openModal(curr)}>{curr.type_of_complaint}</td>
                <td>{curr.reg_date}</td>
                <td>{curr.status}</td>
               </tr>
              }))
            }
            {/* <th scope="col">S.No.</th>
              <th scope="col" onClick={openModal}>Type of Complaint</th>
              <th scope="col">Complaint date</th>
              <th scope="col">Status</th> */}

          </tbody>
        </table>
        {showModal && (
          <InfoComplaint isstudent = {isstudent} setShowInfoModal = {setShowModal} modalData = {modalData} showinfomodal = {showModal}/>
      )}
      <Modal open={complaintmodal} width={"1000px"}  closable={true} onCancel={()=>setcomplaintmodal(false)} footer={null}>
      <Complaint isstudent = {isstudent} setShowModal = {setcomplaintmodal} />
      </Modal> 
      </>
    );  
}

export default Profile;
