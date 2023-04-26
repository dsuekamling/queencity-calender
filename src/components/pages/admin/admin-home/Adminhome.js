import React from 'react';
import './Adminhome.css';

function Adminhome() {
  return (
    <div>
      <div className="banner">
        <div className="welcome-box">
          <h1>Welcome Event Hosts!</h1>
        </div>
      </div>

      <section>
        <div className="split">
          <div className="split-text">
            <h2>Help build the Community!</h2>
            <img className="homeimg" src="https://fltmag.com/wp-content/uploads/2020/06/unnamed.png" alt="A park in Charlotte" />
            <p>Are you looking for a way to get more involved in the local Charlotte community? Become an event host on Queen City Calendar! Our platform allows you to create and promote your own events, connect with like-minded individuals, and make a positive impact in the community. By hosting events, you can share your interests and passions with others, create new experiences and memories, and contribute to the vibrant culture of Charlotte. Sign up today and start making a difference in your community!</p>
          </div>

          <div className="split-text">
            <h2>Become an Event Host!</h2>
            <img className="homeimg" src="https://images.squarespace-cdn.com/content/v1/55b140cee4b0f7770edcc039/1489595202979-YNA956SH6P4GI7J44WXQ/hosting-a-live-event" alt="A park in Charlotte" />
            <p>If you have an account with us you can start posting your events onto the Queen City Calendar. Simply click the 'Make an Event' tab, submit your event, and then after a brief evaluation period by our moderators it'll be put up on the Queen City Calendar for everyone to see. You can also stay up to date with people's experiences at your event through our forum page.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Adminhome;

