import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

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
      .post(enquiriesUrl, { name, email, phone, subject, message })
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
    <div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 d-flex justify-content-center">
        {/* Contact Form */}
        <div className="col-md-5">
          <div className="card bg-secondary text-white p-4 shadow-lg rounded" style={{ width: "100%" }}>
            <div className="card-header text-center bg-primary text-white">
              <h4>Quick Enquiry</h4>
            </div>
            <div className="card-body">
              <form onSubmit={addData}>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="2"
                    placeholder="Enter message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-5 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-start">
          <h3 className="text-danger mb-3">Contact Information</h3>
          <p><FaMapMarkerAlt className="me-2 text-primary" /> House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hyderabad, Telangana- 081</p>
          <p><FaPhone className="me-2 text-success" /> 8184919984</p>
          <p><FaEnvelope className="me-2 text-warning" /> udayabhaskar209@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
