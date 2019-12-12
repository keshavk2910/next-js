import React from 'react'
import App from 'next/app'
import Router from 'next/router'
let cachedScrollPositions = [];

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  componentDidMount() {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
          let shouldScrollRestore;
    
          Router.events.on('routeChangeStart', () => {
            cachedScrollPositions.push([window.scrollX, window.scrollY]);
          });
    
          Router.events.on('routeChangeComplete', () => {
            setTimeout(() => {
            if (shouldScrollRestore) {
              const { x, y } = shouldScrollRestore;
              window.scrollTo(x, y);
              shouldScrollRestore = false;
            }
        }, 10);
          });
    
          Router.beforePopState(() => {
            const [x, y] = cachedScrollPositions.pop();
            shouldScrollRestore = { x, y };
    
            return true;
          });
        }
    
}
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
