import React from 'react';
import Head from 'next/head';
import styles from './BookAppointment.module.scss';
import { Specialist } from './specialist';

const book = () => {
  return (
    <div>
      <Head>
        <title>Book An Appointment</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.searchContainer}>
          <img src="https://img.icons8.com/doodle/150/000000/doctor-male.png" />
          <div className={styles.search}>
            <img src="https://img.icons8.com/material-outlined/50/ff757e/search--v2.png" />
            <input type="search" placeholder="Search Doctors here..."></input>
          </div>
        </div>
        <div className={styles.listContainer}>
          {Specialist.map((i) => (
            <div key={i.speciality} className={styles.specialistCard}>
              <img src={i.image} />
              <span> {i.speciality}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default book;
