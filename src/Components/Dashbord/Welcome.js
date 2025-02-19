import React from "react";

const Welcome = () => {
  const imgg =
    "https://t3.ftcdn.net/jpg/00/87/96/94/360_F_87969436_JUsGJZaZZFoE4801mO82ok517qpazvu8.jpg";
  return (
    <div className="container mt-5 pt-5">
      <img src={imgg} alt="welcom-img" className="col-12 col-lg-12" />
    </div>
  );
};

export default Welcome;
