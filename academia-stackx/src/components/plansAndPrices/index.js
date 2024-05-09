import React, { useState, useEffect } from "react";
import Combos from "../combos";
import Title from "../title";
import ImgPlans from "../imgPlans";
import gymimg01 from "../../img/gymimg01.jpg";
import gymimg02 from "../../img/gymimg02.jpg";
import gymimg03 from "../../img/gymimg03.jpg";
import Values from "../values";
import Button from "../button";
import Register from "../register";
import Modal from "../modal";
import "./index.css";

const listItens = [
  {
    title: "Combo 1",
    src: gymimg01,
    alt: "imagem combo 1",
    value: "99,90",
  },
  {
    title: "Combo 2",
    src: gymimg02,
    alt: "imagem combo 2",
    value: "119,90",
  },
  {
    title: "Combo 3",
    src: gymimg03,
    alt: "imagem combo 3",
    value: "159,90",
  },
];

function PlansAndPrices() {
  const [selectedCombo, setSelectedCombo] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedCombo(index);
  };

  const handleCloseModal = () => {
    setSelectedCombo(null);
  };

  const handlePurchase = () => {
    alert(
      `Cadastro para o combo ${
        selectedCombo + 1
      } realizado com sucesso! Entraremos em contato em 24h.
       `
    );
    handleCloseModal();
  };

  useEffect(() => {
    if (selectedCombo !== null) {
      console.log(`Modal aberto`);
    } else {
      console.log(`Modal fechado`);
    }
  }, [selectedCombo]);

  return (
    <div className='plansAndPrices'>
      <Combos />
      {listItens.map(function (item, index) {
        return (
          <div className='plansContainerFather' key={index}>
            <div className='plansContainer'>
              <Title title={item.title} />
              <ImgPlans src={item.src} alt={item.alt} />
              <Values value={item.value} />
              <Button
                className='buttonBuy'
                onClick={() => handleOpenModal(index)}
                text='Comprar'
              />
            </div>
            <div className='modal'>
              <Modal
                onClose={handleCloseModal}
                isOpen={selectedCombo === index}
              >
                <Register />
                <Button
                  className='buttonRegister'
                  onClick={handlePurchase}
                  text='Enviar'
                />
              </Modal>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlansAndPrices;
