import React from "react";

function Contact() {
  return (
    <section className="contact">

      <h2>Let's Talk</h2>

    <form action="https://formspree.io/f/mwvrppyk" method="POST">

        <div className="name-row">

          <div className="input-group">
            <label>First Name</label>
            <input type="text" name="fname" />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input type="text" name="lname" />
          </div>

        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" name="email" />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>

        <button type="submit">Send Message</button>

      </form>

    </section>
  );
}

export default Contact;