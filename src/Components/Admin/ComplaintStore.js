import "./ComplaintStore.css";
function ComplaintStore({setShowPunishmentModal}) {
  return (
    <div className="complaint_box">
      <div className="row1">
        <div className="name">Arundeep</div>
        <div className="date">16 oct 22</div>
      </div>
      <div className="row2">55101</div>
      <div className="row3">
        <div className="type">ABCD</div>
        <div className="leave_det">
          chor hcohotrhaopjsdajkl;kdjasl;kdj
        </div>
      </div>
      <div className="row5">
        <div className="approve" onClick={()=>{
          setShowPunishmentModal(true);
        }}>Approve</div>
        <div className="approve">Forward</div>
        <div className="reject">Reject</div>
      </div>
    </div>
  );
}

export default ComplaintStore;
