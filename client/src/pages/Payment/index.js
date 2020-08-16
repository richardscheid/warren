import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/warren-logo.png';

import './styles.css';

export default function Payment({ history }) {
  const account = getAccount(history);

  const [amount, setAmount] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post('/transactions', { amount, type: 3 });

    history.push('/');
  }

  function getAccount({ location: { state } }) {
    return state ? state.account : '';
  }

  return (
    <>
      <div className='image-container'>
        <img src={logo} alt='Awesome Warren' />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          id='amount'
          placeholder='Valor a ser pago'
          required
          autoComplete='off'
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <div className='button-content'>
          <Link to='/'>
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
