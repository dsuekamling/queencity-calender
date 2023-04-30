import React from 'react';
import './DiscSymph.css';
import ClientNavbar from "../../../../../bars/client-navbar/ClientNavbar";
import Footer from "../../../../../bars/client-navbar/ClientNavbar";

function DiscSymph() {
  return (
    <div>
      <ClientNavbar />
      <header>
        <h1>Charlotte Symphony - Beethoven & Tchaikovsky</h1>
      </header>
      <main>
        <section className="event">
          <img src="https://thecypressofcharlotte.com/wp-content/uploads/2021/08/06439116-D637-444F-844D-9631E674F710.jpg" alt="Charlotte Symphony - Beethoven & Tchaikovsky" />
          <h1>Charlotte Symphony - Beethoven & Tchaikovsky</h1>
          <p id="date">Date: April 28th, 2023</p>
        </section>
        <section className="comments">
  <div className="card">
    <h2>Comments</h2>
    <ul id="comment-list">
      <li className="comment">
        <img src="https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg" alt="User 1" />
        <div className="comment-details">
          <div>
            <p className="username">Tony Stark</p>
            <p className="date">April 29th, 2023</p>
          </div>
          <p className="comment-text">Great show! Loved the score from John Williams..</p>
        </div>
      </li>
      <li className="comment">
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/220615162812-02-barbie-movie-gosling.jpg?c=16x9&q=h_720,w_1280,c_fill" alt="User 2" />
        <div className="comment-details">
          <div>
            <p className="username">Ryan Gosling</p>
            <p className="date">April 30th, 2023</p>
          </div>
          <p className="comment-text">I am Ryan Gosling.</p>
        </div>
      </li>
    </ul>
    <button id="add-comment">Add a Comment</button>
  </div>
</section>

      </main>
      <footer>
        <p>&copy; 2023 Charlotte Symphony. All rights reserved.</p>
      </footer>
      <Footer />
    </div>
  );
}

export default DiscSymph;
