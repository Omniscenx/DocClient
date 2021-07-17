import React from 'react';
import Image from 'next/image'
import docter from '../../../public/doctor.svg'
import styles from '../Form.module.scss'

const DocSignin = () => {
    return(
        <div className={styles.form}>
            <Image src={docter} height={500} width={500} alt="docter"></Image>
            <form>
                <label>Email</label>
                <input/>
                <label>Password</label>
                <input />
            </form>
        </div>
    )
}
export default DocSignin;