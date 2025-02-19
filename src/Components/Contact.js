import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      .then(() => {
        // Show toast notification
        toast.success(`Thank you ${name}, we will get in touch with you.`, {
          position: "top-right",
          autoClose: 3000,
        });

        // Reset form fields
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
        setSubject("");
      })
      .catch((er) => alert(er));
  };

  return (
    <div
  className="d-flex justify-content-center align-items-center"
  style={{
    background: "#121212",
    padding: "20px",
    minHeight: "100vh", // Allows natural height expansion
    paddingBottom: "80px", // Prevents footer collision in mobile view
  }}
>

      <ToastContainer />
      <div
        className="d-flex flex-wrap gap-4 p-4 shadow-lg rounded"
        style={{
          maxWidth: "950px",
          width: "100%",
          background: "#1c1c1c",
          borderRadius: "12px",
        }}
      >
        {/* Contact Form */}
        <div
          className="p-4 flex-grow-1"
          style={{
            minWidth: "300px",
            flex: "1",
            background: "#1c1c1c",
            minHeight: "470px",
            borderRadius: "12px",
            boxShadow: "0px 0px 15px rgba(255,255,255,0.1)",
          }}
        >
          <h3 className="text-center text-white mb-4">Contact Us</h3>
          <form onSubmit={addData}>
            {[
              { type: "text", value: name, setter: setName, placeholder: "Name" },
              { type: "email", value: email, setter: setEmail, placeholder: "Email" },
              { type: "tel", value: phone, setter: setPhone, placeholder: "Phone No" },
              { type: "text", value: subject, setter: setSubject, placeholder: "Subject" },
            ].map((field, index) => (
              <div className="mb-3" key={index}>
                <input
                  type={field.type}
                  className="form-control  text-black border-0"
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  required
                  style={{ color: "white" }}
                />
              </div>
            ))}
            <div className="mb-3">
              <textarea
                className="form-control  text-black border-0"
                rows="3"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ color: "white" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-success w-100 fw-bold"
              style={{
                borderRadius: "8px",
                fontSize: "18px",
                padding: "10px",
                transition: "0.3s",
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div
          className="p-4 flex-grow-1"
          style={{
            minWidth: "300px",
            flex: "1",
            background: "#1c1c1c",
            minHeight: "470px",
            borderRadius: "12px",
            boxShadow: "0px 0px 15px rgba(255,255,255,0.1)",
          }}
        >
          <h3 className="text-center text-white mb-4">Contact Information</h3>
          <p className="text-white">
            <FaMapMarkerAlt className="me-2 text-primary" /> House No 40, Third Floor, Vittalrao
            Nagar, Madhapur, Hyderabad, Telangana-081
          </p>
          <p className="text-white">
            <FaPhone className="me-2 text-success" /> 8184919984
          </p>
          <p className="text-white">
            <FaEnvelope className="me-2 text-warning" /> udayabhaskar209@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
