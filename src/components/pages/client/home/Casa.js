import React from 'react';
import './Casa.css'
import ClientNavbar from '../../../bars/client-navbar/ClientNavbar';
import Footer from '../../../bars/foot/footer';

function Casa() {
  return (
    <>
      <ClientNavbar />

      <div className="banner">
        <div className="welcome-box">
          <h1>Welcome to the Queen City!</h1>
        </div>
      </div>
      <section>
        <div className="split">
          <img className="homeimg" src="https://d2j8c2rj2f9b78.cloudfront.net/uploads/get-to-know-charlotte-the-queen-city/content/iStock_63929361_LARGE-for-web.jpg" alt="Overview of Charlotte" />
          <div className="split-text">
            <h2>Queen City Calendar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices auctor arcu in fringilla. Integer lobortis justo ac lobortis luctus.</p>
          </div>
        </div>
        <img className="homeimg" src="https://media.radissonhotelsamericas.com/image/destination-pagesus/localattraction/20828-139885-f63245703_3xl.jpg?impolicy=HomeHero" alt="A park in Charlotte" />
        <div className="split">
          <div className="split-text">
            <h2>Explore what Charlotte has to offer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices auctor arcu in fringilla. Integer lobortis justo ac lobortis luctus.</p>
          </div>
          
        </div>
        <div className="card-container">
          <div className="card-casa">
            <img src="https://www.corneliustoday.com/wp-content/uploads/2020/12/OMB-evening-e1608224054272-750x429.jpg" alt="A brewery" />
            <div className="card-text">
              <h3>Olde Mecklenburg Brewery</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices auctor arcu in fringilla.</p>
            </div>
          </div>
          <div className="card-casa">
            <img src="https://assets.simpleviewinc.com/simpleview/image/upload/crm/lakenorman/Nascar-Hall-of-Fame_6c369251-5056-a36a-08c07ae3b8bf1793.jpg" alt="The Nascar Hall of Fame" />
            <div className="card-text">
              <h3>Nascar Hall of Fame</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices auctor arcu in fringilla.</p>
            </div>
          </div>
          <div className="card-casa">
            <img src="https://www.ourstate.com/wp-content/uploads/2020/09/USNWC-51_Photo-Credit-Courtesy-of-the-U.S.-National-Whitewater-Center-1140x600-1-scaled.jpg" alt="The Whitewater Center" />
            <div className="card-text">
              <h3>U.S National Whitewater Center</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices auctor arcu in fringilla.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Casa;
