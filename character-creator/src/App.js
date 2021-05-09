import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import styles from './bg.module.css'

function App() {
  return (
    <>
      <div className={styles.perspective}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
