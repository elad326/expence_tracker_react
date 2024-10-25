import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpensess = () => {

  const { transactions } = useContext(GlobalContext);

  let plus = 0 ;
  let minus = 0;

  transactions.map((transaction) => {
    if(transaction.amount > 0){
      plus += transaction.amount;
    }else{
      minus -= transaction.amount;
    }
  });

  return (
    
    <div className="inc-exp-container">
        <div>
            <h4>הכנסות</h4>
            <p id="money-plus" className="money plus">+ {plus.toFixed(2)} ש"ח </p>
        </div>
        <div>
            <h4>הוצאות</h4>
            <p id="money-minus" className="money minus">- {minus.toFixed(2)} ש"ח </p>
        </div>
    </div>

  )
}

export default IncomeExpensess