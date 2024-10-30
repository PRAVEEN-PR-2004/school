import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3rpwu0u", // Replace with your EmailJS service ID
        "template_f55wwgo", // Replace with your EmailJS template ID
        e.target,
        "jAaB_52VdgdZ0HT2I" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!"); // Success toast
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send email. Please try again."); // Error toast
        }
      );
  };

  return (
    <div>
      <form
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "4rem 1rem",
          margin: "auto",
          maxWidth: "600px",
        }}
      >
        <p
          style={{ fontSize: "2rem", fontWeight: "bold" }}
          className="text-center text-lg-start"
        >
          SEND MAIL
        </p>
        {/* Form fields here... */}
        <label
          style={{
            fontSize: "1.2rem",
            marginBottom: "0.5rem",
            color: "#000",
          }}
        >
          Name
        </label>
        <input
          type="text"
          name="user_name"
          style={{
            marginBottom: "1rem",
            padding: "10px 18px",
            fontSize: "1.2rem",
            backgroundColor: "#f9f9f9",
            border: "none",
            borderBottom: "2px solid #ffb6c1",
            color: "#333",
            borderRadius: "4px 4px 0 0",
            outline: "none",
            transition: "box-shadow 0.3s ease",
          }}
          required
        />
        <label
          style={{
            fontSize: "1rem",
            fontWeight: "400",
            marginBottom: "0.5rem",
            color: "#000",
          }}
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          style={{
            marginBottom: "1rem",
            padding: "10px 18px",
            fontSize: "1.2rem",
            backgroundColor: "#f9f9f9",
            border: "none",
            borderBottom: "2px solid #ffb6c1",
            color: "#333",
            borderRadius: "4px 4px 0 0",
            outline: "none",
            transition: "box-shadow 0.3s ease",
          }}
          required
        />
        <label
          style={{
            fontSize: "1rem",
            fontWeight: "400",
            marginBottom: "0.5rem",
            color: "#000",
          }}
        >
          Message
        </label>
        <textarea
          name="message"
          style={{
            marginBottom: "1rem",
            padding: "10px 18px",
            fontSize: "1.2rem",
            backgroundColor: "#f9f9f9",
            border: "none",
            borderBottom: "2px solid #ffb6c1",
            color: "#333",
            borderRadius: "4px 4px 0 0",
            outline: "none",
            minHeight: "100px",
            transition: "box-shadow 0.3s ease",
          }}
          required
        />
        {/* Other fields: Email, Message, Submit */}
        <input
          type="submit"
          value="SEND"
          style={{
            padding: "10px 18px",
            fontSize: "1.2rem",
            backgroundColor: "#ffb6c1",
            color: "#000",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        />
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Form;
