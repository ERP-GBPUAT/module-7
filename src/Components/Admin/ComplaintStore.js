import "./ComplaintStore.css";
import ActionDropdown from "./ActionDropdown";
import { useState } from "react";
import { Modal } from 'antd';
import { faL } from "@fortawesome/free-solid-svg-icons";
function ComplaintStore({
  setpunishmentcomplaintid,
  punishmentcomplaintid,
  setShowPunishmentModal,complaints,
  forward_complaint,
  approvecomplaint,
  rejectcomplaint
}) {

  const [showinfomodal,setShowInfoModal] = useState(false);
  const [infodata,setinfodata] = useState({});
  return (
    <>
    <table class="table table-bordered caption-top">
        <caption>List of Complaint(s)</caption>
          <thead class='table-dark'>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Type of Complaint</th>
              <th scope="col">Complaint date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              complaints && (complaints.map((curr,count)=>{
                return <tr>
                <th scope="row">{count+1}</th>
                <td onClick={()=>{
                  setinfodata(curr);
                  setShowInfoModal(true);
                }}>{curr.type_of_complaint}</td>
                <td>{curr.reg_date}</td>
                <td>{curr.status}</td>
                <tf><>
                <ActionDropdown 
                setpunishmentcomplaintid = {setpunishmentcomplaintid}
                punishmentcomplaintid = {punishmentcomplaintid}
                forward_complaint = {forward_complaint} 
                approvecomplaint = {approvecomplaint} 
                rejectcomplaint = {rejectcomplaint} 
                complaint_id={curr.id} 
                setShowPunishmentModal = {setShowPunishmentModal}/> 
                </></tf>
               </tr>
              }))
            }
          </tbody>
        </table>
        {/* <InfoComplaint 
        showinfomodal = {showinfomodal}
        setShowInfoModal = {setShowInfoModal}
        infodata = {infodata}
        /> */}

      <Modal title="Basic Modal" open={showinfomodal} onCancel={()=>setShowInfoModal(false)} closable={true} footer={null} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ComplaintStore;
