import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/warren-logo.png';

export default function Deposit({ history }) {
  const account = getAccount(history);

  const [amount, setAmount] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post('/transactions', { amount, type: 2 });

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
        <Input
          id='amount'
          type='number'
          placeholder='Valor a ser depositado'
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
              <p>{`R$ ${account.balance + Number(amount)}`}</p>
            </div>
          </div>
        </div>

        <div className='button-content'>
          <Link to='/'>
            <Button className='btn back' label='Voltar' />
          </Link>

          <Button className='btn' type='submit' label='Salvar' />
        </div>
      </form>
    </>
  );
}
