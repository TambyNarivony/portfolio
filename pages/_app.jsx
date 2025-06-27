import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  // Charger Bootstrap JS uniquement côté client
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;