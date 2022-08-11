// import Layout from '../components/layout'

import Layout from "../components/layout";

import "reset-css";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
