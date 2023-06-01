import "./ComplaintStore.css";
import ActionDropdown from "./ActionDropdown";
import { Button } from "antd";
function ComplaintStore({setShowPunishmentModal,complaints,openModal}) {
  return (
    // <div className="complaint_box">
    //   <div className="row1">
    //     <div className="name">Arundeep</div>
    //     <div className="date">16 oct 22</div>
    //   </div>
    //   <div className="row2">55101</div>
    //   <div className="row3">
    //     <div className="type">ABCD</div>
    //     <div className="leave_det">
    //       chor hcohotrhaopjsdajkl;kdjasl;kdj
    //     </div>
    //   </div>
    //   <div className="row5">
    //     <div className="approve" onClick={()=>{
    //       setShowPunishmentModal(true);
    //     }}>Approve</div>
    //     <div className="approve">Forward</div>
    //     <div className="reject">Reject</div>
    //   </div>
    // </div>
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
                <td onClick={()=>openModal(curr)}>{curr.type_of_complaint}</td>
                <td>{curr.reg_date}</td>
                <td>{curr.status}</td>
                <tf><><ActionDropdown/> <Button type="link" style={{
                  marginLeft:"10px",
                }}>Edit</Button></></tf>
               </tr>
              }))
            }
          </tbody>
        </table>
  );
}

export default ComplaintStore;
