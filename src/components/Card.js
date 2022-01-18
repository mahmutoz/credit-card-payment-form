import React from 'react';
import chip from '../img/chip.svg';
import PaymentIcon from 'react-payment-icons';

function Card({ numbers, name, date, cvv }) {
  return (
    <div className="card">
      <div className="front">
        <header>
          <figure>
            <img src={chip} alt="chip" />
          </figure>
          <figure>
            <PaymentIcon
              id="paypal"
              style={{ width: 50 }}
              className="payment-icon"
            />
          </figure>
        </header>
        <div className="card-body">{numbers}</div>
        <div className="card-bottom">
          <div className="card-holder">{name}</div>
          <div className="card-date">{date}</div>
        </div>
      </div>
      <div className="back">arka</div>
    </div>
  );
}

export default Card;
