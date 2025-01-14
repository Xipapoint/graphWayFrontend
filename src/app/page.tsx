import Header from '@/widgets/Header/Header';
import NavBar from '@/widgets/NavBar/NavBar';
import React, { memo } from 'react';

import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <Header />
    </div>
  );
};
export default memo(Home);
