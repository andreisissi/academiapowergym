import React from "react";
import "./index.css";

function Footer() {
  const submit = (event) => {
    event.preventDefault();
    alert(
      "Agradecemos sua mensagem. Entraremos em contato o mais breve possível!"
    );
  };

  return (
    <div className='backgroundFooter'>
      <div className='containerInfo'>
        <h2>contato</h2>
        <p>Horários:</p>
        <p>Segunda a Sexta: Das 5h às 23h</p>
        <p>Sábado: Das 9h às 17h</p>
        <p>Domingo e Feriados: Das 8h às 12h</p>
        <p className='fone'>Telefone para contato: (47)99999-9999</p>
      </div>
      <div className='containerForm'>
        <form className='formFooter'>
          <input type='text' placeholder='Nome Completo' />
          <input type='email' placeholder='Email' />
          <textarea cols='30' rows='7' placeholder='Mensagem' />
          <button onClick={submit}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
