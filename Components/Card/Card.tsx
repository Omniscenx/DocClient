import React from 'react';
import Head from 'next/head';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <div>
      <Head>
        <title>Patient's Dashboard</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.front}>
              <div className={styles.topPic}>
                <div className={styles.photo}></div>
              </div>
              <div className={styles.avatar}></div>
              <div className={styles.details}>
                <h5>Date: 26-07-2021</h5>
                <h5>Time: 11 A.M.</h5>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.info}>
                  <h3>Dr. Ananya Gupta</h3>
                  <h4>General Physician</h4>
                  <div className={styles.buttonGroup}>
                    <button className={styles.button1}>Start Chat</button>
                    <button className={styles.button2}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
