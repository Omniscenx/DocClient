import Head from 'next/head'
import DocSignin from '../Components/Form/Doctor/DocSignin'

export default function Login() {
    return(
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <DocSignin />
        </div>
    )
}