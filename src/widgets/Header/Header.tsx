import clsx from 'clsx';
import React, { memo } from 'react';

import styles from './header.module.scss';

const Header = () => {
  return (
    <section className={styles.header}>
      <h1 className={clsx(styles.headerInfo, styles.moveup)}>
        <span className={styles.title}>GraphWay</span>
        is a
        <div className={styles.scrollContainer}>
          <span className={clsx(styles.scroll, styles.scrollAnim)}>
            <div className={styles.scrollItem}>beautiful</div>
            <div className={styles.scrollItem}>modern</div>
            <div className={styles.scrollItem}>technological</div>
            <div className={styles.scrollItem}>comfortable</div>
          </span>
        </div>
        <p className={styles.bottomParagraph}>
          instrument to create and play with graphs
        </p>
      </h1>
      <p className={clsx(styles.animatedBottomParagraph)}>
        Unleash Your Creativity and Dive into the World of Graphs with GraphWay!
      </p>
    </section>
  );
};

export default memo(Header);
