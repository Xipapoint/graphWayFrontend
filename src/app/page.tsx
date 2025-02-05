'use server';

import Header from '@/widgets/Header/Header';
import NavBar from '@/widgets/NavBar/NavBar';
import React from 'react';

import styles from './page.module.css';

const Home = async () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <Header />
    </div>
  );
};
export default Home;
