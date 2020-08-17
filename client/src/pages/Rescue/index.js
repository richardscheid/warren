import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/warren-logo.png';

export default function Rescue({ history }) {
  const account = getAccount(history);

  const [amount, setAmount] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (amount > account.balance) {
      alert(`Saldo insuficiente! Limite é de R$ ${account.balance}`);
      return;
    }

    await api.post('/transactions', { amount, type: 1 });

    history.push('/');
  }

  function getAccount({ location: { state } }) {
    return state ? state.detail : '';
  }

  return (
    <>
      <div className='image-container'>
        <img src={logo} alt='Awesome Warren' />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          id='amount'
          min='1'
          type='number'
          placeholder='Valor a ser resgatado'
          required
          autoComplete='off'
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <div className='card-container'>
          <div className='card'>
            <div className='balance-content'>
              <p>saldo atual </p>
              <p>{`R$ ${account.balance}`}</p>
            </div>
          </div>

          <div className='card'>
            <div className='balance-content'>
              <p>saldo esperado </p>
              <p>{`R$ ${account.balance - Number(amount)}`}</p>
            </div>
          </div>
        </div>

        <div className='button-content'>
          <Link to='/'>
            <button className='btn back'>Voltar</button>
          </Link>

          <button className='btn' type='submit'>
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
