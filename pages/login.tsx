import Head from 'next/head'
import DocSignin from '../Components/Form/Doctor/DocSignin'
import PatientSignin from '../Components/Form/Patient/PatientSignin'

export default function Login() {
    return(
        <div>
            <Head>
                <title>Login</title>
            </Head>
            {/* <DocSignin /> */}
            <PatientSignin />
        </div>
    )
}