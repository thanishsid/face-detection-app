import React, { useState } from 'react';
import './Login.css';

const Login = ({ loadUser, onRouteChange }) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
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
            <legend className='f4 fw6 ph0 mh0'>Sign In</legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                Email
              </label>
              <input
                className='white pa2 input-reset inputBack ba hover-bg-black-70 w-100 b--black-10'
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
                className='b white pa2 input-reset ba inputBack hover-bg-black-70 w-100 b--black-10'
                type='password'
                name='password'
                id='password'
                onChange={(event) => onPasswordChange(event)}
              />
            </div>
          </fieldset>
          <div className=''>
            <input
              className='white-70 b ph3 pv2 input-reset hover-bg-black-70 ba b--black-10 br4 inputBack grow pointer f6 dib'
              type='submit'
              value='Sign in'
              onClick={() => onSubmitSignIn()}
            />
          </div>
          <div className='lh-copy mt3 pointer inline-flex'>
            <p
              onClick={() => onRouteChange('register')}
              className='f6 glow grow white o-60'
            >
              Don't have an account? Click here.
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};
export default Login;
