import React from 'react';
import Image from 'next/image';
import doctor from '../../../public/doctor.svg';
import styles from '../Form.module.scss';
import Form from '../Form';

const DocSignin = () => {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <Image src={doctor} height={600} width={600} alt="docter"></Image>
        <Form></Form>
      </div>
    </div>
  );
};
export default DocSignin;
