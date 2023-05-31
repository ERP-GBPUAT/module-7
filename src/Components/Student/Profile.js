import { React, useState} from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FilterDropDown from "../../Containers/Dropdown";
import InfoComplaint from "./InfoComplaint"
import Modal from "./Modal"

function Profile ({isstudent}) {
  const [showModal, setShowModal] = useState(false);
  //  const navigate = useNavigate();
  //  function home(e) {
  //    navigate(`/home`);
  //  }
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
    console.log(isstudent);
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
              <h4>Total Complaints</h4>
              <h4>0</h4>
            </div>
          </div>
          <div className="blue-box">
            <div className="leaves">
              <h4>Active Complaint(s)</h4>
              <h4>0</h4>
            </div>
          </div>
          <div className="green-box">
            <div className="leaves">
              <h4>Complaint(s) closed</h4>
              <h4>0</h4>  
            </div>
          </div>
        </div>
        <FilterDropDown style = {{
          marginLeft:"20px"
        }}/>
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
            <tr>
              <th scope="row">1</th>
              <td onClick={openModal}>Electricity</td>
              <td>18/02/2023</td>
              <td>In progress</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td onClick={openModal}>Furniture</td>
              <td>14/04/2023</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
        {showModal && (
        <Modal onClose={closeModal}>
          <InfoComplaint isstudent = {isstudent} setShowModal = {setShowModal} />
        </Modal>
      )}
        
      </>
    );
}

export default Profile;
