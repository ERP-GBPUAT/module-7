import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Modal from './Student/Modal';
import Complaint from './Student/Complaint';
import "./Navbar.css";
// import { useNavigate } from "react-router-dom";

function Navbar() {
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

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={"./images/logo.jpg"} alt="logo" className="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="home">
                <FontAwesomeIcon
                  icon={faHouse}
                  className="text-black"
                  style={{ fontSize: "20px" }}
                />
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </div>
              <div className="leave">
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  style={{ fontSize: "20px" }}
                />
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Complaint
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item" onClick={openModal}>
                        Complaint(s) Registration
                      </button>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item dropdown" href="#" >
                        View Status
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
            {/* <FontAwesomeIcon
                icon={faPowerOff}
                className="text-black"
                style={{ fontSize : "20px" }}
              /> */}
            <form class="d-flex" role="search">
              <button class="btn" type="submit" className="logout">
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="text-black"
                  style={{ fontSize: "20px", marginRight: "8px" }}
                />
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      {showModal && (
        <Modal onClose={closeModal}>
          <Complaint />
        </Modal>
      )}
    </>
  );
}

export default Navbar;
