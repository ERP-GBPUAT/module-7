import { React, useEffect, useState} from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FilterDropDown from "../../Containers/Dropdown";
import InfoComplaint from "./InfoComplaint";
import Modal from "./Modal"

function Profile ({isstudent}) {
  const [showModal, setShowModal] = useState(false);
  const [complaints,setComplaints] = useState();
  const [modalData,setModalData] = useState();
  const [stats,setStats] = useState({});
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
    },[])
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
        <FilterDropDown style = {{
          marginLeft:"20px"
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
          </tbody>
        </table>
        {showModal && (
        <Modal onClose={closeModal}>
          <InfoComplaint isstudent = {isstudent} setShowModal = {setShowModal} modalData = {modalData}/>
        </Modal>
      )}
        
      </>
    );
}

export default Profile;
