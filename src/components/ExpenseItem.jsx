import React from 'react';
import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
import Card from './Card';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!');
  };
  return (
    <Card className='expense-item'>
      <ExpenceDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
