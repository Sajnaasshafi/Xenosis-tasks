// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import './style.scss';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    }

    const handleNavigateToResume = () => {
        navigate('/resume');
    }

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I am SAJNA,
                    <br/>
                    React Developer
                </h1>
            </div>
            <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateY(550px)",
                }}
                end={{
                    transform: "translateY(0px)",
                }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                    <button onClick={handleNavigateToResume}>Download Resume</button>
                </div>
                <div className="home__icon">
                <FaFacebook size={20} color="var( --yellow-theme-main-color)" />
                <FaInstagram size={20} color="var( --yellow-theme-main-color)" />
                <FaTwitter size={20} color="var( --yellow-theme-main-color)" />
                <FaGithub size={20} color="var( --yellow-theme-main-color)" />
                </div>

                
            </Animate>
        </section>
    );
}

export default Home;
