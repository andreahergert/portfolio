import React from 'react';

const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: '#58C2C7',
  },
};

function Header() {
  return (
    <header style={styles.header} className='nav justify-content-center'>
      <h1>Andrea Hergert</h1>
    </header>
  );
}

export default Header;
