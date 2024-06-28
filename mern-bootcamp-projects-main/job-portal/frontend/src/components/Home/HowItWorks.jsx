import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3 style={{fontFamily:"poppins "}}>How Job Finder Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus style={{fill:"orange"}} />
              <p>Create Account</p>
              <p>
                You can simply Register through your name and email and then continue.
              </p>
            </div>
            <div className="card">
              <MdFindInPage style={{fill:"Orange"}}  />
              <p>Find a Job/Post a Job</p>
              <p className="hover-p">
               Find a Job according to your interest or Post a Job according to your requirement.
              </p>
            </div>
            <div className="card">
              <IoMdSend  style={{fill:"Orange"}}/>
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply for Job of Your Interest or Recruit Suitable Candidates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
