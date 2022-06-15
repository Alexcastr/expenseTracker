import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { GlobalProvider } from "../context/GlobalState";

function MyApp({ Component, pageProps }) {
 return (
  <GlobalProvider>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </GlobalProvider>
 );
}

export default MyApp;
