import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import './styles/Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_zfwnwn7",
        "template_9dj7she",
        { message },
        "rO_ViQcJPmnSQJbSj"
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setMessage("");
          setIsSending(false);
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="message-box">
        <textarea
          value={message}
          onChange={handleInputChange}
          placeholder="hey there!"
          className="message-input"
        />
        <div className="button-container">
          {/* Back Button */}
          <button
            onClick={() => window.location.href = "/hero"}
            className="back-btn"
          >
            go back
          </button>

          {/* Send Button */}
          <button
            className={`send-btn ${isSending ? "sending" : ""}`}
            onClick={handleSend}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
        {status && <p className={`status ${status.includes("success") ? "success" : "error"}`}>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
