import React from "react";
import NavBar from "../navBar";
import "./index.css";

function Home() {
  return (
    <section className='section'>
      <div className='background'>
        <NavBar />
        <div className='containerFirstSection'>
          <div className='containerTitle'>
            <h3>seja </h3>
            <h1>powergym</h1>
          </div>

          <div className='containerSpan'>
            <span>
              O aluno em primeiro lugar: treino e atendimento focados nos seus
              objetivos!
            </span>
          </div>

          <div className='containerAbout'>
            <p>
              A academia PowerGym existe com o propósito de oferecer aos seus
              alunos uma experiência diferenciada de treino e condicionamento
              físico.
            </p>
          </div>

          <div className='container100'>
            <div className='container100Children'>
              <div className='containerRound'>
                <span>100%</span>
              </div>
              <p>Propósito</p>
            </div>
            <div className='container100Children'>
              <div className='containerRound'>
                <span>100%</span>
              </div>
              <p>Estrutura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
