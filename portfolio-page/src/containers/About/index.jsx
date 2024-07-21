import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContainer";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaReact } from "react-icons/fa";    
import { SiMysql, SiMongodb } from "react-icons/si"; 
import { DiNodejsSmall } from "react-icons/di";

const personalDetails = [
  {
    label: "Name",
    value: "Fathimath Sajna S",
  },
  {
    label: "Gender",
    value: "female",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "sajnaasshafi@gmail.com",
  },
  {
    label: "Contact No",
    value: "000045265",
  },
];

const jobSummary =
  "Enthusiastic and motivated web developer, adept in HTML CSS and JavaScript, with 1 year of experience in backend development using Node.js, Express, and MySQL. Eager to apply my skills in creating robust server-side applications and managing databases. Passionate about continuous learning and adapting to new technologies. Seeking an entry-level position where I can contribute effectively to projects while further developing my abilities as a developer.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>React Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <SiMongodb size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiNodejsSmall size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <SiMysql size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;