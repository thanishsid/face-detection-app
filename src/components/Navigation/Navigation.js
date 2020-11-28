import React from 'react';

const Navigation = ({ onSignOut }) => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '1em',
      }}
    >
      <p
        className='f3 link dim black underline pointer'
        onClick={() => onSignOut()}
      >
        Sign Out
      </p>
    </nav>
  );
};
export default Navigation;
