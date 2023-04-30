import React from "react";
import './Forum.css';
import ClientNavbar from "../../../bars/client-navbar/ClientNavbar";
import Footer from "../../../bars/foot/footer";
import { Link } from 'react-router-dom';


function Forum() {
  return (
    <>
          <ClientNavbar />
          <section className="forum-section">
      <h1>Current Events Forum</h1>
      <div className="forum-container1">
        <div className="forum-post">
          <img src="https://thecypressofcharlotte.com/wp-content/uploads/2021/08/06439116-D637-444F-844D-9631E674F710.jpg" alt="An event occuring" />
          <h3>Charlotte Symphony - Beethoven &amp; Tchaikovsky</h3>
          <p className="post-date">April 28th, 2023</p>
          <p className="post-comments">5 comments</p>
          <Link to='/DiscSymph'>Join the Discussion</Link>
        </div>
        <div className="forum-post">
          <img src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlotteparent.com/content/uploads/data-import/0c557e36/GastonFarmersMkt.png" alt="More events going on" />
          <h3>Queen City Market</h3>
          <p className="post-date">May 5th, 2023</p>
          <p className="post-comments">3 comments</p>
          <Link to='/DiscMarket'>Join the Discussion</Link>
        </div>
        <div className="forum-post">
          <img src="https://assets3.thrillist.com/v1/image/2834519/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" alt="Yet another event" />
          <h3>Cornhole Tournament at Triple C Brewing</h3>
          <p className="post-date">May 12th, 2023</p>
          <p className="post-comments">1 comment</p>
          <Link to='/DiscCornhole'>Join the Discussion</Link>
        </div>
        <div className="forum-post">
          <img src="https://charlotte.axios.com/wp-content/uploads/2022/07/canopy-outside.jpg" alt="Events galore" />
          <h3>1$ Happy Hour at Canopy Cocktails &amp; Garden</h3>
          <p className="post-date">May 12th, 2023</p>
          <p className="post-comments">1 comment</p>
          <Link to='/DiscHappy'>Join the Discussion</Link>
        </div>
      </div>
    </section>

    <Footer />
    
    </>

  );
}

export default Forum;
