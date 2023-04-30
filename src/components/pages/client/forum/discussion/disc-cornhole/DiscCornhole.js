import React from 'react';
import './DiscCornhole.css';
import ClientNavbar from "../../../../../bars/client-navbar/ClientNavbar";
import Footer from "../../../../../bars/foot/footer";

function DiscCornhole() {
  return (
    <div>
      <ClientNavbar />
      <header>
        <h1>Cornhole Tournament at Triple C Brewing</h1>
      </header>
      <main>
        <section className="event">
          <img src="https://assets3.thrillist.com/v1/image/2834519/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" alt="Cornhole tournament at a local bar" />
          <h1>Cornhole Tournament at Triple C Brewing</h1>
          <p id="date">Date: April 29th, 2023</p>
        </section>
        <section className="comments">
          <div className="card">
            <h2>Comments</h2>
            <ul id="comment-list">
              <li className="comment">
                <img src="https://www.famousbirthdays.com/faces/grandma-lill-image.jpg" alt="User 1" />
                <div className="comment-details">
                  <div>
                    <p className="username">Grandma</p>
                    <p className="date">April 29th, 2023</p>
                  </div>
                  <p className="comment-text">Google cookie recipes for grandson.</p>
                </div>
              </li>
              <li className="comment">
                <img src="https://hips.hearstapps.com/hmg-prod/images/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*" alt="User 2" />
                <div className="comment-details">
                  <div>
                    <p className="username">Drake</p>
                    <p className="date">April 30th, 2023</p>
                  </div>
                  <p className="comment-text">I love playing Cornhole with the homies.</p>
                </div>
              </li>
              <li className="comment">
                <img src="https://i.ytimg.com/vi/hcmM7t0oofE/maxresdefault.jpg" alt="User 2" />
                <div className="comment-details">
                  <div>
                    <p className="username">Pro Cornhole Player</p>
                    <p className="date">April 30th, 2023</p>
                  </div>
                  <p className="comment-text">Cornhole isn't just a game, it's my life.</p>
                </div>
              </li>
            </ul>
            <button id="add-comment">Add a Comment</button>
            </div>
          </section>
          </main>
          <footer>
          <p>© 2023 Triple C Brewing. All rights reserved.</p>
          </footer>
          <Footer />
          </div>
          );
          }

          export default DiscCornhole;