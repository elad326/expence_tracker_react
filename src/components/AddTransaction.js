import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {

    e.preventDefault();

    // create new transaction obj 
    // based on the states in this comp 
    // the form values stores in text and amount states 
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: parseFloat(amount)
    };

    addTransaction(newTransaction);

    // after adding one - clear the state and fields val to a new one 
    setText('');
    setAmount('');

  };

  return (

    <div>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                >Amount <br />
                (negative - expense, positive - income)</label>
            <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction