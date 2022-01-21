import React from 'react';
import chip from '../img/chip.svg';
import wave from '../img/wave.svg';
import PaymentIcon from 'react-payment-icons';

function Card({ numbers, name, month, year, cvv, flip, cardType }) {
  return (
    <div className={flip ? 'card flip' : 'card'}>
      <div className="front">
        <div className="card-top">
          <figure className="left-icons">
            <img src={chip} alt="chip" />
            <img src={wave} alt="wave" />
          </figure>
          <figure>
            <PaymentIcon
              id={cardType?.[0]?.type.split('-')[0] || 'visa'}
              style={{ width: 70 }}
              className="payment-icon"
            />
          </figure>
        </div>
        <div className="card-body">
          <span className="subtitle">Card Number</span>
          <span className="card-number">
            {numbers || '**** **** **** ****'}
            <svg
              fill="white"
              height="50"
              width="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </span>
        </div>
        <div className="card-bottom">
          <div className="card-holder">
            <span className="subtitle">Holder Name</span>
            <span className="card-holder-name">{name || '***** *****'}</span>
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
          <span className="signature">{name || 'john Doe'}</span>
          <span className="cvv">{cvv}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
