import React from 'react';

const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: '#ceb4a1',
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
