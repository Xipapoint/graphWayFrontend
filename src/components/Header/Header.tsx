import React, { useEffect, useRef, useState } from 'react'
import styles from './header.module.scss'

const Header = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.classList.add(styles.scrollAnim);
      }
      if(h1Ref.current){
        h1Ref.current.classList.add(styles.moveup)
      }
        if(pRef.current){
          pRef.current.classList.add(styles.moveup)
        }


  }, []);
  return (
    <section className={styles.header}>
        <h1 className={styles.headerInfo} style={{animationDelay: '0.8s'}} ref={h1Ref}>
          <span className={styles.title}>GraphWay</span>
          is a 
          <div className={styles.scrollContainer} style={{overflow: 'hidden', height: '66px'}} >
            <span className={styles.scroll} style={{animationDelay: '3s'}} ref={scrollRef}>  
              <div className={styles.scrollItem}>beautiful</div>
              <div className={styles.scrollItem}>modern</div>
              <div className={styles.scrollItem}>technological</div>
              <div className={styles.scrollItem}>comfortable</div>
            </span>
          </div>
          instrument to create and play with graphs
        </h1>
        <p style={{color: 'white', fontSize:'30px', animationDelay: '2s'}}  ref={pRef}>
          Unleash Your Creativity and Dive into the World of Graphs with GraphWay!
        </p>
    </section>
  )
}

export default Header