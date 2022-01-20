import React from 'react';
import NumberFormat from 'react-number-format';

function Form({
  numbers,
  setNumbers,
  name,
  setName,
  month,
  setMonth,
  year,
  setYear,
  cvv,
  setCvv,
  flip,
  setFlip,
}) {
  const getMonths = (months) => {
    let content = [];
    for (let i = 1; i <= months; i++) {
      content.push(
        <option key={i} value={i.toString().padStart(2, 0)}>
          {i.toString().padStart(2, 0)}
        </option>
      );
    }
    return content;
  };
  const getYears = (years) => {
    let content = [];
    let date = new Date().getFullYear();
    for (let i = date; i <= years; i++) {
      content.push(
        <option key={i} value={i.toString().padStart(2, 0)}>
          {i.toString().padStart(2, 0)}
        </option>
      );
    }
    return content;
  };

  return (
    <form>
      <div className="number-input">
        <label htmlFor="number">Card Number</label>
        <NumberFormat
          id="number"
          format="#### #### #### ####"
          mask="*"
          inputMode="numeric"
          onChange={(e) => setNumbers(e.target.value)}
        />
      </div>
      <div className="holder-name-input">
        <label htmlFor="holder-name">Holder Name</label>
        <input
          id="holder-name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          minLength="6"
          maxLength="18"
          autoComplete="off"
        />
      </div>
      <div className="input-bottom">
        <div className="date-input">
          <label htmlFor="month">Expiration Date</label>
          <div className="select-group">
            <select
              defaultValue="Month"
              id="month"
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="Month" disabled>
                Month
              </option>
              {getMonths(12)}
            </select>
            <select
              defaultValue="Year"
              id=""
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="Year" disabled>
                Year
              </option>
              {getYears(2035)}
            </select>
          </div>
        </div>
        <div className="cvv-input">
          <label htmlFor="cvv">CVV</label>
          <NumberFormat
            id="cvv"
            autoComplete="off"
            format="####"
            mask="*"
            inputMode="numeric"
            onChange={(e) => setCvv(e.target.value)}
            onFocus={() => setFlip(true)}
            onBlur={() => setFlip(false)}
          />
        </div>
      </div>
      <button>SUBMIT</button>
    </form>
  );
}

export default Form;
