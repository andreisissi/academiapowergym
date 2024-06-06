import React from "react";
import Input from "../input";
import "./index.css";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulário enviado");
  };

  return (
    <div className='formModal'>
      <form className='form' onSubmit={handleSubmit}>
        <Input type='text' placeholder='Nome' />
        <Input type='email' placeholder='E-mail' />
      </form>
    </div>
  );
}

export default Register;
