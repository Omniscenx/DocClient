import Head from 'next/head';
import PatientDashboard from '../Components/PatientDashboard/PatientDashboard';

export default function patientDashboard() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <PatientDashboard />
    </div>
  );
}
