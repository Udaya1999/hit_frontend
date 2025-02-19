import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const enquiriesUrl = "https://hit-backend.onrender.com/enquiries";

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
    <div className="container mt-5 pt-5" >
      <hr></hr>
      <section style={{ display: "flex" }}>
          <div style={{ width: '45%' }}>
          <div className="container mt-2 " >
            {" "}
            <div className="card">
              {" "}
              <div className="card-header bg-primary text-white text-center">
                {" "}
                <h3>Quick Enquiry</h3>{" "}
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
        <br />
        
        <div style={{ width: "50%", marginTop: "70px" ,marginLeft:"50px"}}>
          <h2 style={{ color: "red" }}>Address</h2>
          <br></br>
          <p>
            House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City
            Main Road, Hyderabad, Telangana- 081
          </p>
          <br />
          <p>phone: 8184919984</p>
          <br />
          <p>
            Email : udayabhaskar209@gmail.com
            <br />
            udaya.konka@inf0sys.com
          </p>
        </div>
      </section>
      <br />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243604.77474955222!2d78.21989137812503!3d17.444170900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c1d3e53%3A0x2d84d6e311a69e21!2sHyderabad%20IT%20Trainings%20-%20Python%20Java%20MERN%20Full%20Stack%20Web%20Development%20React%20JS%20PHP%20UI%20UX%20Design%20Training%20Institute%20Hyderabad!5e0!3m2!1sen!2sin!4v1713793879270!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{
            width: "80%",
            textAlign: "center",
            height: "550px",
            marginLeft: "150px",
          }}
        ></iframe>
        <br />
      </div>
    </div>
  );
};

export default Contact;

