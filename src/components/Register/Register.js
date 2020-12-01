import React, { useState } from 'react';

const Register = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    fetch('https://safe-brushlands-14752.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange('home');
        }
      });
  };

  return (
    <article className='br4 mt6 w-80 w-two-thirds-m w-40-l mw6 shadow-3 center formBack'>
      <main className='pa4 white-70'>
        <div className='measure center'>
          <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
            <legend className='f4 fw6 ph0 mh0'>Register</legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='name'>
                Name
              </label>
              <input
                className='b pa2 input-reset ba inputBack hover-bg-black-70 white w-100 b--black-10'
                type='text'
                name='name'
                id='name'
                onChange={(event) => onNameChange(event)}
              />
            </div>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                Email
              </label>
              <input
                className='b pa2 input-reset ba inputBack hover-bg-black-70 white w-100 b--black-10'
                type='email'
                name='email-address'
                id='email-address'
                onChange={(event) => onEmailChange(event)}
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='password'>
                Password
              </label>
              <input
                className='b pa2 input-reset ba inputBack hover-bg-black-70 white w-100 b--black-10'
                type='password'
                name='password'
                id='password'
                onChange={(event) => onPasswordChange(event)}
              />
            </div>
          </fieldset>
          <div className=''>
            <input
              className='white-70 b ph3 pv2 input-reset hover-bg-black-70 ba b--black-10 br4 inputBack grow pointer f6 dib mr2'
              type='submit'
              value='Register'
              onClick={() => onSubmitRegister()}
            />
            <input
              className='white-70 b ph3 pv2 input-reset hover-bg-black-70 ba b--black-10 br4 inputBack grow pointer f6 dib ml2'
              type='button'
              value='Go back'
              onClick={() => onRouteChange('signin')}
            />
          </div>
        </div>
      </main>
    </article>
  );
};
export default Register;
