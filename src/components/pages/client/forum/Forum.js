import React from "react";
import './Forum.css';
import ClientNavbar from "../../../bars/client-navbar/ClientNavbar";
import Footer from "../../../bars/foot/footer";
function Forum() {
  return (
    <>
          <ClientNavbar />
          <section className="forum-section">
      <h1>Current Events Forum</h1>
      <div className="forum-container">
        <div className="forum-post">
          <img src="https://thecypressofcharlotte.com/wp-content/uploads/2021/08/06439116-D637-444F-844D-9631E674F710.jpg" alt="Event Image" />
          <h3>Charlotte Symphony - Beethoven &amp; Tchaikovsky</h3>
          <p className="post-date">April 28th, 2023</p>
          <p className="post-comments">5 comments</p>
          <a href="#">Join the Discussion</a>
        </div>
        <div className="forum-post">
          <img src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlotteparent.com/content/uploads/data-import/0c557e36/GastonFarmersMkt.png" alt="Event Image" />
          <h3>Queen City Market</h3>
          <p className="post-date">May 5th, 2023</p>
          <p className="post-comments">3 comments</p>
          <a href="#">Join the Discussion</a>
        </div>
        <div className="forum-post">
          <img src="https://assets3.thrillist.com/v1/image/2834519/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" alt="Event Image" />
          <h3>Cornhole Tournament at Triple C Brewing</h3>
          <p className="post-date">May 12th, 2023</p>
          <p className="post-comments">1 comment</p>
          <a href="#">Join the Discussion</a>
        </div>
        <div className="forum-post">
          <img src="https://charlotte.axios.com/wp-content/uploads/2022/07/canopy-outside.jpg" alt="Event Image" />
          <h3>1$ Happy Hour at Canopy Cocktails &amp; Garden</h3>
          <p className="post-date">May 12th, 2023</p>
          <p className="post-comments">1 comment</p>
          <a href="#">Join the Discussion</a>
        </div>
      </div>
    </section>

    <Footer />
    
    </>

  );
}

export default Forum;
