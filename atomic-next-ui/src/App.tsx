import React from 'react';
import logo from './logo.svg';
import Container from '@atomic-next/container';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.applogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
          Learn React
        </a>
        <Container as="section" col="1fr">djfndkjfn</Container>
        <Container col="1fr 2fr">djfndp[pkjfn</Container>
        <Container col="1fr" >djfndkjfn</Container>
      </header>
    </div>
  );
}

export default App;
