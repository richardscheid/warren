import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Rescue({ history }) {
  const account = getAccount(history);

  const [amount, setAmount] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post('/transactions', { amount, type: 2 });

    history.push('/home');
  }

  function getAccount({ location: { state } }) {
    return state ? state.account : '';
  }

  return (
    <>
      <div className='title-container'>
        <header>
          <h1>Resgate</h1>
        </header>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          id='amount'
          placeholder='Valor a ser resgatado'
          required
          autoComplete='off'
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <div className='button-content'>
          <Link to='/home'>
            <button className='btn'>Voltar</button>
          </Link>

          <button className='btn' type='submit'>
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
