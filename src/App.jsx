// @ts-check
import React from 'react';
import { MenuItem } from './MenuItem';
import './styles.scss';
import phone from './phone.svg';
import map from './map.svg';
import happycow from './happy-cow.svg';
import yelp from './yelp.svg';
import instagram from './instagram.svg';
import facebook from './fb.svg';
import logo from './sgv-logo.png';
import bkg from './bkg.jpg';
import menuJSON from './menu.json';
import hero from './hero.jpg';

console.log(menuJSON);

export default function App() {
  return (
    <div className="App">
      <header className="sgv-header">
        <div className="sgv-nav-header">
          <div className="sgv-contact">
            <a
              href="https://goo.gl/maps/oodryCSysbdYLKho9"
              className="sgv-contact-link"
            >
              <img src={map} className="contact-icon" /> 10522 McFadden Ave.
              Garden Grove 92843
            </a>
          </div>
          <div className="sgv-contact">
            <a href="tel:+16572316607" className="sgv-contact-link">
              <img src={phone} className="contact-icon" />
              <span className="contact-phone">657-231-6607</span>
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.happycow.net/reviews/saigon-vegan-garden-grove-166207">
              <img src={happycow} alt="reviews" id="customer-review-hc" />
            </a>
            <a href="https://www.yelp.com/biz/saigon-vegan-garden-grove-2">
              <img src={yelp} alt="reviews" id="customer-review-yelp" />
            </a>
            <a href="https://www.instagram.com/sgvegan/">
              <img src={instagram} alt="reviews" id="customer-review-ig" />
            </a>
            <a href="https://www.facebook.com/SGVeganGG/">
              <img src={facebook} alt="reviews" id="customer-review-fb" />
            </a>
          </div>
        </div>
      </header>
      <div className="sgv-hero" style={{ '--hero': `url(${hero})` }}>
        <div className="sgv-hero-inner">
          <h1 className="sgv-hero-heading">
            <small>Welcome to</small>
            <br /> Saigon Vegan <br /> Nhà Hàng Chay
          </h1>
          <p className="sgv-hero-content">
            Join us for delicious Vietnamese plant-based, home-style cooking!
            <br /> 100% Vegan Cuisine
          </p>
          <button className="order-button">
            <a href="tel:+16572316607">Order Now for Pick-Up </a>{' '}
          </button>
        </div>
      </div>
      <div className="hours">
        <h3>
          <strong>
          Vegan Restaurant in Garden Grove!
            <br />
            Hours: 11am- 8pm Closed on Tuesdays
          </strong>
        </h3>
        <p>
          <em>
            **Gluten Free (GF) available upon request on certain items** <br />
            **Please advise server of any food allergies**
            <br />
            🥜 Items contains peanuts
            <br />
            Menu prices are subject to change due to market availability.
          </em>
        </p>
      </div>
      <div className="sgv-menu" style={{ '--bkg': `url(${bkg})` }}>
        <img src={logo} alt="sgv logo" id="logo" />
        <div className="sgv-menu-items">
          <div className="left-column">
            <h2>Appetizers</h2>

            {menuJSON.appetizers.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}

            <h2>Entrees</h2>
            {menuJSON.entrees.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}
          </div>
          <div className="right-column">
            <h2>On Bread</h2>

            {menuJSON.onBread.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}

<h2>Dessert</h2>

{menuJSON.dessert.map((item, i) => (
  <MenuItem key={i} item={item} />
))}

            <h2>Drinks</h2>

            {menuJSON.drinks.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}
            
            <h2>Sides / Extra</h2>

            {menuJSON.sides.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}

            <h2>Party Trays</h2>

            {menuJSON.trays.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
      <footer className="sgv-footer">
        <div className="sgv-nav-footer">
          <div className="sgv-contact">
            <a href="tel:+16572316607" className="sgv-contact-link">
              <img src={phone} className="contact-icon" />
              657-231-6607
            </a>
          </div>
          <div className="sgv-contact">
            <a
              href="https://goo.gl/maps/oodryCSysbdYLKho9"
              className="sgv-contact-link"
            >
              <img src={map} className="contact-icon" /> 10522 McFadden Ave.
              Garden Grove 92843
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
