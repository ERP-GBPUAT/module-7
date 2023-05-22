import { React } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Profile () {
    return (
      <>
        <div className="black-box">
          <FontAwesomeIcon
            icon={faUser}
            className="text-primary"
            style={{ fontSize: "7rem" }}
          />
          <div>
            <h2 className="user-name">Nitin Rayal</h2>
            <h3 className="user-name">Information Technology</h3>
            <h4 className="user-name">55102</h4>
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
        <table class="table table-bordered caption-top">
        <caption>List of Complaint(s)</caption>
          <thead class='table-dark'>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Complaint</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Theft</td>
              <td>18/08/2022</td>
              <td>21/08/2022</td>
              <td>In progress</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Hostel Fight</td>
              <td>11/05/2022</td>
              <td>13/05/2022</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </>
    );
}

export default Profile;
