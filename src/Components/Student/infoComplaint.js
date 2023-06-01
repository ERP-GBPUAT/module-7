// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './styles.css';
// function InfoComplaint (
//   {isstudent,setShowModal,modalData}
// ) {
   
//     const [complaintdata , setComplaintData] = useState({});
//     console.log("modaldata",modalData);
//     return (
//       <div class="container">
//         <h2 className="topbox">Complainant Details-:</h2>
//         <form class="row g-3">  
             
//           <div class="col-md-4">
//             <h6 for="autoSizingInput" class="form-label">Name:</h6>
//             <div className="col-md-6 info"><label></label></div>
            
            
//           </div>
//           <div class="col-md-4">
//             <h6 for="autoSizingInput" class="form-label">
//               Registration ID: 
//             </h6>
//             <div class="col-md-6 info">
//             <label>
//               {modalData.studentid ? modalData.studentid : ""}
//               </label>
//             </div>
            
//           </div>
          
//           <div class="col-md-4">
//             <h6 for="autoSizingInput" class="form-label">
//               Name of Hostel:
//             </h6>
//             <div className="col-md-6 info">
//             <label>{modalData.hostel_name}</label>
//             </div>
            
//           </div>
//           <div class="col-md-4">
//             <h6 for="autoSizingInput" class="form-label">
//               Room No.: 
//             </h6>
//             <div class="md-col-6 info">
//             <label>{modalData.room}</label>
//             </div>
//           </div>

//           <div class="col-md-4">
//             <h6 for="inputAddress2" class="form-label">
//               Registration date: 
//             </h6>
//             <div class="col-md-6 info">
//             <label>{modalData.reg_date}</label>
//             </div>
//           </div>
//           <div class="col-md-4">
//             <h6 for="autoSizingInput" class="form-label">
//               Mobile Number: 
//             </h6>
//             <div class="col-md-6 info">
//             <label>{modalData.phone}</label>
//             </div>
//           </div>
//           <div class="col-md-4">
//             <h6 for="autoSizingInput" class="form-label">
//               Type Of Complaint: 
//             </h6>
//             <div class="md-col-6 info">
//             <label>{modalData.type_of_complaint}</label>
//             </div>
//           </div>
//           <div class="col-12">
//             <h6 for="autoSizingInput" class="form-label ">
//               Complaint in Breif: 
//             </h6>
//             <div class="col-md-6 info">
//             <label>{modalData.description}</label>
//             </div>
//           </div>
          
//           </form>
//       </div>
//     );
// }

// // export default InfoComplaint;

import './styles.css';
import { Button, Modal } from 'antd';
import { useState } from 'react';
const InfoComplaint = ({
  setShowInfoModal,
  showinfomodal,
  modalData
}) => {
  return (
    <>
      <Modal open={showinfomodal} onCancel={()=>setShowInfoModal(false)} closable={true} footer={null} className="info top-box" width={1000} >
      <h4 className="topbox">Complainant Details-:</h4>
      <div className='infobox'>
        <div className='leftinfo'>
          <p>Name :</p>
          <p>Registration ID :</p>
          <p>Name of Hostel :</p>
          <p>Room Number :</p>
          <p>Registration Date :</p>
          <p>Moblie Number :</p>
          <p>Type of Complaint:</p>
          
        </div>
        <div>
          <p>{modalData.name}</p>
          <p>{modalData.studentid}</p>
          <p>{modalData.hostel_name}</p>
          <p>{modalData.room}</p>
          <p>{modalData.reg_date}</p>
          <p>{modalData.phone}</p>
          <p>{modalData.type_of_complaint}</p>
          
        </div>
        
      </div>
      <p className='leftinfo'>Complaint in Breif:</p>
      <p>{modalData.description}</p>

      </Modal>
    </>
  );
};
export default InfoComplaint;