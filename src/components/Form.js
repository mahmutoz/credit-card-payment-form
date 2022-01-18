import React from 'react';
import InputMask from 'react-input-mask';
function Form({
  numbers,
  setNumbers,
  name,
  setName,
  date,
  setDate,
  cvv,
  setCvv,
}) {
  if (numbers) {
  }
  return (
    <form>
      <InputMask
        className="card-number-input"
        mask="9999 9999 9999 9999"
        maskChar=" "
        onChange={(e) => setNumbers(e.target.value)}
      ></InputMask>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        minlength="6"
        maxlength="20"
      />
      <input
        type="number"
        onChange={(e) => setDate(e.target.value)}
        min="4"
        max="4"
      />
    </form>
  );
}

export default Form;
