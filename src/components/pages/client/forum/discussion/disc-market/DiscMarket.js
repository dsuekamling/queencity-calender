import React from 'react';
import './DiscMarket.css';
import ClientNavbar from "../../../../../bars/client-navbar/ClientNavbar";
import Footer from "../../../../../bars/foot/footer";

function DiscMarket() {
  return (
    <div>
      <ClientNavbar />
      <header>
        <h1>Queen City Market</h1>
      </header>
      <main>
        <section className="event">
          <img src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlotteparent.com/content/uploads/data-import/0c557e36/GastonFarmersMkt.png" alt="Charlotte Symphony - Beethoven & Tchaikovsky" />
          <h1>Queen City Market</h1>
          <p id="date">Date: April 29th, 2023</p>
        </section>
        <section className="comments">
          <div className="card">
            <h2>Comments</h2>
            <ul id="comment-list">
              <li className="comment">
                <img src="https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571" alt="User 1" />
                <div className="comment-details">
                  <div>
                    <p className="username">Samuel Jackson</p>
                    <p className="date">April 29th, 2023</p>
                  </div>
                  <p className="comment-text">Great food available here. The avocados were a little overripe in my opinion however.</p>
                </div>
              </li>
              <li className="comment">
                <img src="https://stylesatlife.com/wp-content/uploads/2019/10/Types-of-Fish-Species-In-World-and-Their-Facts.jpg" alt="User 2" />
                <div className="comment-details">
                  <div>
                    <p className="username">Goldfish</p>
                    <p className="date">April 30th, 2023</p>
                  </div>
                  <p className="comment-text">Glub glub glub glub glub glub.</p>
                </div>
              </li>
              <li className="comment">
                <img src="https://t4.ftcdn.net/jpg/03/58/96/39/360_F_358963916_Vuvp2pKr5eVv5LQ0iNriU3Q0Lfc80vhL.jpg" alt="User 2" />
                <div className="comment-details">
                  <div>
                    <p className="username">Generic Hipster</p>
                    <p className="date">April 30th, 2023</p>
                  </div>
                  <p className="comment-text">I really love shopping at these market events. I get to buy locally sourced organic food and brag about it my friends to make myself feel superior.</p>
                </div>
              </li>
              <li className="comment">
                <img src="https://hips.hearstapps.com/hmg-prod/images/johnnydepp.jpg" alt="User 2" />
                <div className="comment-details">
                  <div>
                    <p className="username">Johnny Depp</p>
                    <p className="date">April 30th, 2023</p>
                  </div>
                  <p className="comment-text">I love coming to these events.</p>
                </div>
              </li>
            </ul>
            <button id="add-comment">Add a Comment</button>
            </div>
          </section>
          </main>
          <footer>
          <p>© 2023 Charlotte Symphony. All rights reserved.</p>
          </footer>
          <Footer />
          </div>
          );
          }

          export default DiscMarket;
