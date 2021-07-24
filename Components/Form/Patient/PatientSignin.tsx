import React from 'react';
import Image from 'next/image';
import patient from '../../../public/patient.svg'
import styles from '../Form.module.scss';
import Form from '../Form';

const PatientSignin = () => {
    return (
        <div className={styles.body}>
          <div className={styles.main}>
            <Image src={patient} height={700} width={700} alt="patient"></Image>
            <Form></Form>
          </div>
        </div>
      );
}
export default PatientSignin;