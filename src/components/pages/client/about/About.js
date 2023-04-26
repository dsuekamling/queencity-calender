import React from 'react';
import './About.css';
import ClientNavbar from '../../../bars/client-navbar/ClientNavbar';
import Footer from '../../../bars/foot/footer';
function AboutPage() {
  return (
    <>
      <ClientNavbar />
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <div className="intro-content">
            <h2>Connecting You with the Queen City</h2>
            <div className="intro-image">
              <img src="https://live.staticflickr.com/7896/47415884702_b7875918a6_b.jpg" alt="people attending an event" className="aboutimg" />
            </div>
            <p>Queen City Calendar is your go-to source for finding events in Charlotte. Our mission is to connect individuals and families with the community by providing comprehensive information on upcoming public events. Whether you're looking for a family-friendly festival, a foodie event, or a night out with friends, we've got you covered.</p>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value">
              <img src="https://media.istockphoto.com/id/1153816876/photo/smiling-group-of-people-walking-together-outdoors.jpg?s=612x612&w=0&k=20&c=fmWuzI08_wlIHy2Y3Ovs0ZnZgtMPYKN3ecHML51qw78=" alt="icon for value 1" />
              <h3>Community</h3>
              <p>We are committed to building a sense of community by fostering connections between individuals and organizations.</p>
            </div>
            <div className="value">
              <img src="https://media.istockphoto.com/id/1331470022/photo/indian-white-collar-male-worker-in-wheelchair-having-cheerful-discussion-leading-conversation.jpg?s=612x612&w=0&k=20&c=dL5cYkW-we2uudznnEg05lWA0FVZR1BlylkQfOr6GtY=" alt="icon for value 2" />
              <h3>Inclusivity</h3>
              <p>We believe that everyone should feel welcome and included in the events we promote and the communities we serve.</p>
            </div>
            <div className="value">
              <img src="https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/0x0.jpg?format=jpg&width=1200" alt="icon for value 3" />
              <h3>Creativity</h3>
              <p>We celebrate creativity and innovation in all its forms, and we are passionate about showcasing the diversity of Charlotte's cultural scene.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;
