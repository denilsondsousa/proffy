import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import logo from "../../assets/images/logo.svg";
import landing from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="landing-page">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Logo - Proffy" />
          <h2>A melhor plataforma de estudos online.</h2>
        </div>
        <img src={landing} alt="Landing Img" className="hero-img" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Giver Classes" />
            Dar Aulas
          </Link>
        </div>
        <span className="total-connections">
          {totalConnections} alunos conectados!
          <img src={purpleHeartIcon} alt="Purple Heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
