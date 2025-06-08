import React from 'react';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import SEO from '../components/SEO';

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <SEO {...(pageProps.seo || {})} />
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
