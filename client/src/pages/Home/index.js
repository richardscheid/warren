import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';
import api from '../../services/api';

import './styles.css';

export default function Dashboard({ history }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function loadTransactions() {
      const response = await api.get('/transactions');
      console.log(response.data);
      setTransactions(response.data);
    }

    loadTransactions();
  }, []);

  function handleEdit(transaction) {
    history.push({
      pathname: '/transaction',
      state: { detail: transaction },
    });
  }

  function getTransactionType(type) {
    return type === 1 ? 'Resgate' : type === 2 ? 'Depósito' : 'Pagamento';
  }

  return (
    <>
      <div className='home-container'>
        <header>
          <h1>Warren</h1>
        </header>
      </div>

      <ul className='home-list'>
        {transactions.map((transaction) => (
          <li key={transaction._id} onClick={() => handleEdit(transaction)}>
            <p className='place'>{getTransactionType(transaction.type)}</p>
            <ul>
              <li className='bottom-text'>
                <p className='date'>{`${moment(transaction.createdAt).format(
                  'DD/MM/YYYY HH:mm'
                )}`}</p>
                <p className='split'></p>
                <p className='amout'>{`R$ ${transaction.amount ?? ' 0'}`}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>

      <div className='button-content'>
        <Link to='/deposit'>
          <button className='btn'>Depósito</button>
        </Link>

        <Link to='/payment'>
          <button className='btn'>Pagamento</button>
        </Link>

        <Link to='/rescue'>
          <button className='btn'>Resgate</button>
        </Link>
      </div>
    </>
  );
}
