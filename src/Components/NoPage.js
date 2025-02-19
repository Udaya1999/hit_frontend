import React from "react";

const NoPage = () => {
  const imgg = "https://media.tenor.com/y9lCShkJiaEAAAAi/404-error-404.gif";

  return (
    <div className="container mt-5 pt-5">
      <img
        src={imgg}
        alt="gif-img-404-status"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default NoPage;
