import React from 'react';
import chip from '../img/chip.svg';
import PaymentIcon from 'react-payment-icons';

function Card({ numbers, name, month, year, cvv, flip }) {
  console.log('number', typeof numbers);
  return (
    <div className={flip ? 'card flip' : 'card'}>
      <div className="front">
        <div className="card-top">
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
        </div>
        <div className="card-body">
          <span className="subtitle">Card Number</span>
          <span className="card-number">
            {numbers || '**** **** **** ****'}
          </span>
        </div>
        <div className="card-bottom">
          <div className="card-holder">
            <span className="subtitle">Holder Name</span>
            <span className="card-holder-name">{name || '****** ****'}</span>
          </div>
          <div className="card-date">
            <span className="subtitle">Expiration Date</span>
            <span className="date-field">
              <span className="valid-thru">Valid Thru</span>
              <span>
                <span>
                  {month === null ? 'mm/' : month?.toString()?.padEnd(3, '/')}
                </span>
                <span>{year?.substring(2, 4) || 'yy'}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="back">
        <div className="strip"></div>
        <div className="cvv-field">
          <span className="signature">{name || 'Mahmut ÖZ'}</span>
          <span className="cvv">{cvv}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
