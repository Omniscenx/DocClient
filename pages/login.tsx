import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DocSignin from '../Components/Form/Doctor/DocSignin'

export default function Login() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Login</title>
            </Head>
            <DocSignin />
        </div>
    )
}