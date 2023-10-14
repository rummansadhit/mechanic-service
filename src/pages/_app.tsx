import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import {rrfProps, store }from '../store'; // Update with the path to your store file
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
       <ReactReduxFirebaseProvider {...rrfProps}>

       <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>


       </ReactReduxFirebaseProvider>

    </Provider>
  );
}
