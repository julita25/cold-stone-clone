import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="foot-container">
      <section className="footer-subs">
        {/* contents inside a section are related to each other */}
        <p className="footer-heading">
          Flavours are endesless in cold stone
        </p>
        <p className="footer-txt">
          Enter your email so we can send you the latest new flavors and offers!
        </p>
        <div className="form-input">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
            />
          </form>
          <button className="sub-btn" type="button">Subscribe</button>
        </div>
      </section>
      <div className="links">
        <div className="wrapper">
          <div className="link-items">
            <h2>About us</h2>
            <Link to="./">Our brand goal</Link>
            <Link to="./">Reviews</Link>
            <Link to="./">Our partners</Link>
            <Link to="./">Cold stone embassadors</Link>
          </div>
          <div className="link-items">
            <h2>Lets Interact</h2>
            <Link to="./">Suggestions</Link>
            <Link to="./">Leave your review</Link>
            <Link to="./">Become an embassador</Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="link-items">
            <h2>Catering</h2>
            <Link to="./">Our services</Link>
            <Link to="./">Our products</Link>
            <Link to="./">Holidays, Parties and Events</Link>

          </div>
          <div className="link-items">
            <h2>Careers</h2>
            <Link to="./">Find Job in your city</Link>
            <Link to="./">Main Headqueaters</Link>
            <Link to="./">Workplace policy</Link>
            <Link to="./">Jobs FAQ</Link>

          </div>
        </div>
        <section className="social-media">
          <div className="media-wrapper">
            <div className="logo" />
            <small className="website-rights">COLD STONE @ 2020</small>
            <div className="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default Footer;
