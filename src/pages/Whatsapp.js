import React, { useState } from "react";

const Whatsapp = () => {
  // Array of predefined phone numbers (include country codes, e.g., "919345882002")
  const phoneNumbers = ["919345882002", "918610223477", "919345882002"];

  // State to hold the user input message
  const [userMessage, setUserMessage] = useState("");

  // Function to handle message input change
  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  // Function to send WhatsApp messages to all predefined numbers
  const sendWhatsAppMessages = () => {
    if (userMessage.trim()) {
      phoneNumbers.forEach((number) => {
        const url = `https://wa.me/${number}?text=${encodeURIComponent(
          userMessage
        )}`;
        window.open(url, "_blank"); // Opens each link in a new tab
      });
    } else {
      alert("Please enter a message to send.");
    }
  };

  return (
    <div>
      <h2>Send WhatsApp Message to Multiple Contacts</h2>
      <textarea
        value={userMessage}
        onChange={handleInputChange}
        placeholder="Type your message here"
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={sendWhatsAppMessages}>
        Send Message to All Contacts
      </button>
    </div>
  );
};

export default Whatsapp;
