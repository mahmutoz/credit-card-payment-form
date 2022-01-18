import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';

function Container() {
  const [numbers, setNumbers] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <div className="container">
      <Card numbers={numbers} name={name} date={date} cvv={cvv} />
      <Form
        numbers={numbers}
        setNumbers={setNumbers}
        name={name}
        setName={setName}
        date={date}
        setDate={setDate}
        cvv={cvv}
        setCvv={setCvv}
      />
    </div>
  );
}

export default Container;
