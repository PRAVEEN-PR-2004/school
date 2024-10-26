const Form = () => {
  return (
    <form
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
          transition: "box-shadow 0.3s ease", // Smooth transition
        }}
        onFocus={(e) =>
          (e.target.style.boxShadow = "0 4px 8px -2px rgba(255, 182, 193, 0.8)")
        } // Glow effect
        onBlur={(e) => (e.target.style.boxShadow = "none")} // Remove glow
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
        onFocus={(e) =>
          (e.target.style.boxShadow = "0 4px 8px -2px rgba(255, 182, 193, 0.8)")
        }
        onBlur={(e) => (e.target.style.boxShadow = "none")}
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
        onFocus={(e) =>
          (e.target.style.boxShadow = "0 4px 8px -2px rgba(255, 182, 193, 0.8)")
        }
        onBlur={(e) => (e.target.style.boxShadow = "none")}
      />
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
  );
};

export default Form;
