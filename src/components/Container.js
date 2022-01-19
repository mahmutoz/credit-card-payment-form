import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';

function Container() {
  const [numbers, setNumbers] = useState(null);
  const [name, setName] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [cvv, setCvv] = useState(null);

  return (
    <div className="container">
      <Card numbers={numbers} name={name} month={month} year={year} cvv={cvv} />
      <Form
        numbers={numbers}
        setNumbers={setNumbers}
        name={name}
        setName={setName}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cvv={cvv}
        setCvv={setCvv}
      />
    </div>
  );
}

export default Container;
