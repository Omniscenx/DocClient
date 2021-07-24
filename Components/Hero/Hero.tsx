import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import illustration from '../../public/landingillustration.jpg';

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>TELADOC</h1>
          <span>
            Online doctor consultation in 15 mins with 1000+ Top Specialist Doctors.
            <br />
            Chat with a Doctor from 100+ Specialties including General Physicians
          </span>
          <div className={styles.buttons}>
            <button className={styles.patient}>As a Patient</button>
            <button className={styles.doctor}>As a Doctor</button>
          </div>
        </div>

        <div className={styles.image}>
          <Image src={illustration} height={600} width={800} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
