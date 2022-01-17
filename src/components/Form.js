import React from 'react';
import InputMask from 'react-input-mask';
function Form({ numbers, setNumbers }) {
  if (numbers) {
  }
  return (
    <form>
      <InputMask
        mask="9999 9999 9999 9999"
        maskChar=" "
        onChange={(e) => setNumbers(e.target.value)}
      ></InputMask>
    </form>
  );
}

export default Form;
