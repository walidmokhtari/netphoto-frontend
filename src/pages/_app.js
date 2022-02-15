import '../styles/styles.scss';
import MainLayout from "../components/layouts/MainLayout";
import { CartContextProvider } from '../context/CartContext';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
       <CartContextProvider>
        <MainLayout>
          <Component {...pageProps}/>
        </MainLayout>
      </CartContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
