import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  // const details = [
  //   {
  //     id: 1,
  //     title: "1,23,441",
  //     subTitle: "Live Job",
  //     icon: <FaSuitcase />,
  //   },
  //   {
  //     id: 2,
  //     title: "91220",
  //     subTitle: "Companies",
  //     icon: <FaBuilding />,
  //   },
  //   {
  //     id: 3,
  //     title: "2,34,200",
  //     subTitle: "Job Seekers",
  //     icon: <FaUsers />,
  //   },
  //   {
  //     id: 4,
  //     title: "1,03,761",
  //     subTitle: "Employers",
  //     icon: <FaUserPlus />,
  //   },
  // ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1 style={{fontFamily:"poppins"}}>Find a job that suits</h1>
            <h2 style={{fontFamily:"poppins"}}>your interests and skills</h2>
            <p style={{fontSize: "18px",color:"#db7637"}}>
            This is your ultimate destination for finding the perfect job that matches your skills, interests,
             and aspirations. Whether you're an employer looking to hire top talent or a job seeker eager to find 
             your next opportunity, JobZee is here to make the process seamless and efficient.
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        {/* <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default HeroSection;
