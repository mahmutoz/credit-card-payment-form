import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';

function Container() {
  const [numbers, setNumbers] = useState('');

  return (
    <div className="container">
      <Card numbers={numbers} />
      <Form numbers={numbers} setNumbers={setNumbers} />
    </div>
  );
}

export default Container;
