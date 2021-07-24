import React from 'react';
import styles from './Form.module.scss'

const Form = () => {
    return(
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
    )
}
export default Form;