import { Component } from "react";
import './css/style.css';
import CloseMenu from './img/close-menu.svg';
import BurgerMenu from './img/burger-menu.svg';
import HomeImg from './img/Home image.png';
import Logo from './img/Logo.png';
import Rectangle from './img/Rectangle 1.jpg';

interface State {
  navClosed: boolean
}

export default class Landing extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      navClosed: true
    }
  }

  private hideNav = () => {
    this.setState({ navClosed: true});
    document.querySelector('body')?.classList.remove('no-scroll');
  }

  private showHideNav = () => {
    this.setState({ navClosed: !this.state.navClosed});
    document.querySelector('body')?.classList.toggle('no-scroll');
  }

  render() {
    return(
      <div id="landing-container">
        <header id="header">
          <img src={Logo} alt="DelivAir" id="logo" />
          <nav className={this.state.navClosed ? "closed" : ""} id="landing-nav">          
            <div className="content">
              <a href="#partners" onClick={this.hideNav}>OUR PARTNERS</a>
              <a href="#tariffs" onClick={this.hideNav}>TARIFFS</a>
              <a href="#q_a" onClick={this.hideNav}>Q&A</a>
              <a href="#header" onClick={this.hideNav}>HOME</a>
              <a href="#contact-us" className="blue-button" onClick={this.hideNav}>GET IT NOW</a>
              <button className="mobile-navbar-button-container" onClick={this.showHideNav} >
                <img src={CloseMenu} alt="Close" id="mobile-navbar-close-button" className="mobile-navbar-button"/>
              </button>
            </div>
          </nav>
          <button className="mobile-navbar-button-container" onClick={this.showHideNav} >
            <img src={BurgerMenu} alt="Menu" id="mobile-navbar-open-button" className="mobile-navbar-button" />
          </button>
        </header>
        <section id="home">
          <h1>
            Get your order faster then ever before With our drones!
          </h1>
          <img src={HomeImg} alt="Drone" />
          <span id="details">DETAILS</span>
        </section>

        <section id="q_a">

          <section>

            <h3>How can we do this?</h3>
            <div className="line"></div>
            <p>Using drones we can deliver small packages (less then 15 kg) through air.
              Using this transport rout we avoid overloaded ground routs, 
              which means your package will be delivered as fast as it is possible.</p>

          </section>
          <section>

            <h3>How fast?</h3>
            <div className="line"></div>
            <p>Our drons can fligth at a speed of 120 km/h! 
              In additional they don`t have to stop at traffic lights or to skip pedestrians. 
              So, according to our expirience, you will get you package less then 
              20 minutes after ordering.</p>

          </section>
          <section>

            <h3>How fast?</h3>
            <div className="line"></div>
            <p>Drones become more and more cheap. Even big drones, that are
              necessary to carry packages, cost not much. Due to this using drones as currier even
              cheaper than using human.</p>

          </section>

        </section>

        <section id="tariffs">

          <h2 className="sub-heading">Our tariffs</h2>
          <div className="content">

            <div className="tariff">

              <span className="price">0.00</span>
              <h3>Partner program</h3>
              <p>You can get delivery absolutly for free buying products from our partners.</p>
              <a href="#partners" className="blue-button">GET IT NOW</a>

            </div>
            <div className="tariff">

              <span className="price">0.99</span>
              <h3>Light package</h3>
              <p>You can get delivery of ever package which has weight less than 5 kg. <br/>
                *By preliminary agreement.</p>
              <a href="#contact-us" className="blue-button">GET IT NOW</a>

            </div>
            <div className="tariff">

              <span className="price">1.99</span>
              <h3>Heavy package</h3>
              <p>You can get delivery of ever package which has weight up to 15 kg. <br/>
                *By preliminary agreement.</p>
              <a href="#contact-us" className="blue-button">GET IT NOW</a>

            </div>

          </div>

        </section>

        <section id="contact-us">

          <h2 className="sub-heading">Contact us</h2>

          <p>
            To agree about delivery of your<br/>
            own package
          </p>

          <form action="post">

            <input type="text" name="name" placeholder="Name" />

            <input type="tel" name="phone" placeholder="Phone" />

            <input type="email" name="email" placeholder="Email" />

            <div className="select-container">

              <select name="tariff">
                <option>Choose your tariff</option>
                <option value="1">Light package</option>
                <option value="2">Heavy package</option>
              </select>

            </div>

            <textarea name="commentary" cols={30} rows={3} placeholder="Commentary"></textarea>

            <button type="submit" className="blue-button">SUBMIT</button>

          </form>

        </section>

        <section id="partners">
          
          <h2 className="sub-heading">Our partners</h2>

          <div className="content">

            <div className="partner">
        
              <img src={Rectangle} alt="Partner logo" />
              <div className="text">

                <h3>Partner 1</h3>
                <a href="http://www.partner1.com" rel="noreferrer" target="_blank">www.partner1.com</a>

              </div>
        
            </div>
            <div className="partner">
        
              <img src={Rectangle} alt="Partner logo" />
              <div className="text">

                <h3>Partner 1</h3>
                <a href="http://www.partner1.com" rel="noreferrer" target="_blank">www.partner1.com</a>

              </div>
        
            </div>
            <div className="partner">
        
              <img src={Rectangle} alt="Partner logo" />
              <div className="text">

                <h3>Partner 1</h3>
                <a href="http://www.partner1.com" rel="noreferrer" target="_blank">www.partner1.com</a>

              </div>
        
            </div>
            <div className="partner">
        
              <img src={Rectangle} alt="Partner logo" />
              <div className="text">

                <h3>Partner 1</h3>
                <a href="http://www.partner1.com" rel="noreferrer" target="_blank">www.partner1.com</a>

              </div>
        
            </div>
            <div className="partner">
        
              <img src={Rectangle} alt="Partner logo" />
              <div className="text">

                <h3>Partner 1</h3>
                <a href="http://www.partner1.com" rel="noreferrer" target="_blank">www.partner1.com</a>

              </div>
        
            </div>
            <div className="partner">
        
              <img src={Rectangle} alt="Partner logo" />
              <div className="text">

                <h3>Partner 1</h3>
                <a href="http://www.partner1.com" rel="noreferrer" target="_blank">www.partner1.com</a>

              </div>
        
            </div>
            
          </div>

        </section>
      </div>
    );
  }
}