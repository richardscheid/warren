import React, { useState, useEffect } from 'react';

import moment from 'moment';
import api from '../../services/api';
import logo from '../../assets/warren-logo.png';

import './styles.css';

export default function Home({ history }) {
  const [account, setAccount] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function loadTransactions() {
      const response = await api.get('/transactions');
      setTransactions(response.data);
    }

    loadTransactions();
  }, []);

  useEffect(() => {
    async function loadAccount() {
      const response = await api.get('/accounts');
      setAccount(response.data);
    }

    loadAccount();
  }, []);

  function getTransactionType(type) {
    return type === 1 ? 'Resgate' : type === 2 ? 'Depósito' : 'Pagamento';
  }

  function formatNumber(amount) {
    return new Intl.NumberFormat().format(amount);
  }

  function toDepositPage() {
    pushTo('/deposit');
  }

  function toPaymentPage() {
    pushTo('/payment');
  }

  function toRescuePage() {
    pushTo('/rescue');
  }

  function pushTo(path) {
    history.push({
      pathname: path,
      state: { detail: account },
    });
  }

  return (
    <>
      <div className='image-container'>
        <img src={logo} alt='Awesome Warren' />
      </div>

      <div className='balance-container'>
        <p>Saldo: </p>
        <p>{`R$ ${formatNumber(account.balance)}`}</p>
      </div>

      <ul className='home-list'>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            <p className='type'>{getTransactionType(transaction.type)}</p>
            <ul>
              <li className='bottom-text'>
                <p className='date'>{`${moment(transaction.createdAt).format(
                  'DD/MM/YYYY HH:mm'
                )}`}</p>
                <p className='split'></p>
                <p className='amount'>{`R$ ${
                  formatNumber(transaction.amount) ?? ' 0'
                }`}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>

      <div className='button-content'>
        <button className='btn' onClick={toDepositPage}>
          Depósito
        </button>

        <button className='btn' onClick={toPaymentPage}>
          Pagamento
        </button>

        <button className='btn' onClick={toRescuePage}>
          Resgate
        </button>
      </div>
    </>
  );
}
