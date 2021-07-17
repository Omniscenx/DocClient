import React from 'react';
import Image from 'next/image'
import doctor from '../../../public/doctor.svg'
import styles from '../Form.module.scss'

const DocSignin = () => {
    return(
        <div className={styles.body}>
            <div className={styles.main}>
            <Image src={doctor} height={500} width={500} alt="docter"></Image>
            <form className={styles.form}>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                <button>Login</button>
            </form>
            </div>
        </div>
    )
}
export default DocSignin;