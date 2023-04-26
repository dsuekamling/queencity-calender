import React from 'react';
import './Adminforum.css';

function Adminforum() {
  return (
    <section className="forum-section">
      <h1>Community Event Forum</h1>
      <h2>Event Name</h2>
      <div className="forum-container">
        <div className="forum-post">
          <h3>Post Title</h3>
          <p>Post Content</p>
        </div>
      </div>
      <form className="forum-form">
        <h3>Create a New Post</h3>
        <input type="text" placeholder="Post Title" />
        <textarea placeholder="Post Content" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Adminforum;
