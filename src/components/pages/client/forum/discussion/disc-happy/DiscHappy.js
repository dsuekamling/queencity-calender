import React from 'react';
import './DiscHappy.css';
import ClientNavbar from "../../../../../bars/client-navbar/ClientNavbar";
import Footer from "../../../../../bars/foot/footer";

function DiscHappy() {
  return (
    <div>
      <ClientNavbar />
      <header>
        <h1>Canopy Cocktail & Gardens</h1>
      </header>
      <main>
        <section className="event">
          <img src="https://charlotte.axios.com/wp-content/uploads/2022/07/canopy-outside.jpg" alt="Canopy Cocktails & Garden" />
          <h1>$1 Happy Hour Canopy Cocktail & Gardens</h1>
          <p id="date">Date: April 29th, 2023</p>
        </section>
        <section className="comments">
          <div className="card">
            <h2>Comments</h2>
            <ul id="comment-list">
              <li className="comment">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-01/31/15/tmp/e18506430d41/tmp-name-2-1807-1580485589-0_dblbig.jpg?resize=1200:*" alt="User 1" />
                <div className="comment-details">
                  <div>
                    <p className="username">Bojack Horseman</p>
                    <p className="date">April 29th, 2023</p>
                  </div>
                  <p className="comment-text">I'll be there!</p>
                </div>
              </li>
              <li className="comment">
                <img src="https://pyxis.nymag.com/v1/imgs/31e/b17/ad6bd35c8917a66a004ff177c789cdd992-bojack-horseman-13.rsquare.w700.jpg" alt="User 2" />
                <div className="comment-details">
                  <div>
                    <p className="username">Mr Peanutbutter</p>
                    <p className="date">April 30th, 2023</p>
                  </div>
                  <p className="comment-text">If Bojack will be there then so will I!</p>
                </div>
              </li>
              <li className="comment">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-01/31/15/tmp/e18506430d41/tmp-name-2-1807-1580485589-0_dblbig.jpg?resize=1200:*" alt="User 2" />
                <div className="comment-details">
                  <div>
                    <p className="username">Bojack Horseman</p>
                    <p className="date">April 30th, 2023</p>
                  </div>
                  <p className="comment-text">I have to cancel</p>
                </div>
              </li>
              <li className="comment">
                <img src="https://pyxis.nymag.com/v1/imgs/31e/b17/ad6bd35c8917a66a004ff177c789cdd992-bojack-horseman-13.rsquare.w700.jpg" alt="User 2" />
                <div className="comment-details">
                  <div>
                    <p className="username">Mr Peanutbutter</p>
                    <p className="date">April 30th, 2023</p>
                  </div>
                  <p className="comment-text">:(</p>
                </div>
              </li>
            </ul>
            <button id="add-comment">Add a Comment</button>
            </div>
          </section>
          </main>
          <footer>
          <p>© 2023 Canopy Cocktail & Gardens. All rights reserved.</p>
          </footer>
          <Footer />
          </div>
          );
          }

          export default DiscHappy;