import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [news, setNews] = useState([]);
  const neswUrl = "https://hit-backend.onrender.com/news";
  const enquiriesUrl = "https://hit-backend.onrender.com/enquiries";

  useEffect(() => {
    axios
      .get(neswUrl)
      .then((res) => {
        setNews(res.data);
        console.log(res.data);
      })
      .catch((erro) => console.log("error in fetching the news" + { erro }));
  }, []);

  const addData = (e) => {
    e.preventDefault();
    axios
      .post(`enquiriesUrl/`, {
        name,
        email,
        phone,
        subject,
        message,
      })
      .then((res) => {
        alert("Thank you for registering ");
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
        setSubject("");
        console.log(res.data);
      })
      .catch((er) => alert(er));
  };

  return (
    <div className="container mt-5 pt-5">
      <hr></hr>
      <div>
        <div className="marquee-container bg-info text-white py-2">
          {" "}
          <div className="marquee-content">
            {" "}
            <span>
              <marquee>
                {news?.map((a) => {
                  return a.News;
                })}
              </marquee>
            </span>{" "}
          </div>{" "}
        </div>
        <hr></hr>

        <img
          src="https://hyderabadittrainings.com/images/slider/DESK1-min.jpg "
          style={{ width: "100%" }}
          alt="side-img"
        ></img>
        <hr></hr>
      </div>
      <section style={{ display: "flex" }}>
        <div style={{ width: "60%", padding: "10px" }}>
          <aside>
            <h1>
              Welcome to{" "}
              <span style={{ color: "red" }}>Hyderabad IT Trainings</span>
            </h1>
            <br />
            <p>
              Hyderabad IT Trainings is a Hyderabad based Training Institute
              delivering classroom and online trainings in India, USA and UK,
              Australia. We are Providing high quality training is our core
              value. We offer both classroom and online training on niche
              technologies which are in high demand. All our trainers are IT
              professionals with rich experience.
              <br />
              <br />
              <br />
              Hyderabad IT Trainings is a leading training and placement company
              in hyderabad managed by industry experts with more than 9+ years
              of experience in leading MNC Companies. We are wellknown for our
              practical approach towards training that enables students to gain
              realtime exposure.
              <br />
              <br />
              <br />
              Hyderabad IT Trainings is a one-stop shop for IT courses, Web
              Development services & Recruitment services. Hyderabad IT
              Trainings concentrates on its vision of building up strong client
              and business partnerships. To this end, Hyderabad IT Trainings
              offers Real-time and placement focuses training services.
            </p>
          </aside>
        </div>
        <div style={{ width: "45%" }}>
          <div className="container mt-2 ">
            {" "}
            <div className="card">
              {" "}
              <div className="card-header bg-primary text-white text-center">
                {" "}
                <h3>Register Now</h3>{" "}
              </div>{" "}
              <div className="card-body">
                {" "}
                <form onSubmit={addData}>
                  {" "}
                  <div className="mb-3">
                    {" "}
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />{" "}
                  </div>{" "}
                  <div className="mb-3">
                    {" "}
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>{" "}
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                  </div>{" "}
                  <div className="mb-3">
                    {" "}
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>{" "}
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />{" "}
                  </div>{" "}
                  <div className="mb-3">
                    {" "}
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />{" "}
                  </div>{" "}
                  <div className="mb-3">
                    {" "}
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>{" "}
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>{" "}
                  </div>{" "}
                  <button
                    type="submit"
                    className="btn btn-primary "
                    value="submit"
                  >
                    Submit
                  </button>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
