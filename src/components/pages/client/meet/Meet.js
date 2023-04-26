import React from 'react';
import './Meet.css';

function Meet() {
  return (
    <>
      <section id="team">
        <h1>Meet the Team</h1>

        <div className="card">
          <img src="../images/andres.jpeg" alt="Developer 1" />
          <div className="info">
            <h3>Andres Barreras</h3>
            <br />
            <p className="quote">"The world may be a dumpster fire, but a supportive community can be the water that puts it out."</p>
            <br />
            <p className="bio">Andres is a junior software developer working for Mecklenburg County. He was born and raised in Charlotte, not many people can say that because most folks move here. He loves that everyone loves Charlotte and wants to come, however the traffic on I-77 is getting kinda bad so maybe folks ought to stay where they are for a bit.</p>
          </div>

        </div>



        <div className="card">
          <img src="../images/daniel.png" alt="Developer 2" />
          <div className="info">
            <h3>Daniel Suekamling</h3>
            <br />
            <p className="quote">"The universe may be vast and uncaring, but we have each other to share the journey with."</p>
            <br />
            <p className="bio">Daniel is a junior software engineer also employed by Mecklenburg County, origins unknown. However, he loves Charlotte just like the rest of us. Daniel personally enjoys the traffic on I-77 because he says that it gives him time to listen to his podcasts.</p>
          </div>

        </div>


      </section>

      <section id="why-us">
        <h2>Why Queen City Calendar?</h2>
        <div className="img-container">
          <img src="https://d2j8c2rj2f9b78.cloudfront.net/uploads/FIREBIRD-18.jpg" alt="The firebird sculpture in downtown Charlotte" />
        </div>
        <p>We created Queen City Calendar to solve a problem we saw in our community. We noticed that there was no centralized source for information on local events, which made it difficult for people to find out about and attend events in the Charlotte area. We wanted to create a tool that would make it easy for locals to stay up to date on all the exciting events happening in our city.</p>
      </section>
    </>
  );
}

export default Meet;
