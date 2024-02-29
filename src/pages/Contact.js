function Contact() {
  let message = "Good day!";
  const date = new Date();
  const hour = date.getHours();
  if ((hour > 12) & (hour <= 18)) {
    message = "Good afternoon";
  } else if (hour > 18) message = "Good evening";
  else message = "Good morning";

  return (
    <div>
      <h2>{new Date().toLocaleDateString()}</h2>
      <span>{message + " Misheck"}</span>
      <p>
        <input
          type="text"
          maxLength={5}
          style={{ color: "red", border: "3px solid red" }}
          alt="Enter age"
          spellCheck={true}
        />
      </p>
    </div>
  );
}

export default Contact;
