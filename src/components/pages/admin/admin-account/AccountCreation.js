import React from "react";
import './AccountCreation.css';
import ClientNavbar from "../../../bars/client-navbar/ClientNavbar";
import Footer from "../../../bars/foot/footer";

function AccountCreation() {
  return (
    <>
    <ClientNavbar />

        <section className="account-section">
      <div className="form-container">
        <h1>Create an Account</h1>
        <form action="" method="post">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          <label htmlFor="business-name">Business Name:</label>
          <input type="text" id="business-name" name="business-name" required />

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />

          <label htmlFor="event-capacity">Event Capacity:</label>
          <input type="text" id="event-capacity" name="event-capacity" required />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </section>
    <Footer />
    
    </>

  );
}

export default AccountCreation;
