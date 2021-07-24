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
                <div>
                    <img src="https://img.icons8.com/ultraviolet/32/000000/email-open--v2.png"/>
                    <input placeholder="Email"/>
                </div>
                <div>
                    <img src="https://img.icons8.com/office/32/000000/password.png"/>
                    <input placeholder="Password"/>
                </div>
                <button>Login</button>
            </form>
            </div>
        </div>
    )
}
export default DocSignin;