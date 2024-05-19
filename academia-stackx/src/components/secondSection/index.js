import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

function SecondSection() {
  return (
    <section className='secondSection'>
      <div className='containerSecondSection'>
        <div className='sectionCard'>
          <FontAwesomeIcon
            className='icon'
            icon={faWind}
            size='2xl'
            style={{ color: "#B7B8BA" }}
          />
          <h3>ambiente agradável</h3>
          <p>Ar condicionado e ótima iluminação em toda a academia.</p>
        </div>

        <div className='sectionCard'>
          <FontAwesomeIcon
            className='icon'
            icon={faDumbbell}
            size='2xl'
            style={{ color: "#B7B8BA" }}
          />
          <h3>aparelhagem completa</h3>
          <p>Equipamentos e acessórios completos para os seus exercícios.</p>
        </div>

        <div className='sectionCard'>
          <FontAwesomeIcon
            className='icon'
            icon={faWifi}
            size='2xl'
            style={{ color: "#B7B8BA" }}
          />
          <h3>internet gratuita</h3>
          <p>Acesso à internet para você se conectar durante o treino.</p>
        </div>

        <div className='sectionCard'>
          <FontAwesomeIcon
            className='icon'
            icon={faCar}
            size='2xl'
            style={{ color: "#B7B8BA" }}
          />
          <h3>estacionamento gratuito</h3>
          <p>Estacionamento amplo e gratuito durante todo o treino.</p>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
