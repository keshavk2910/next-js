import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'

let cachedScrollPositions = [];

Router.events.on('routeChangeStart', url => {
  NProgress.configure({ easing: 'ease', speed: 600, minimum: 0.5 }).start()
})
Router.events.on('routeChangeComplete', () => NProgress.done(true))
Router.events.on('routeChangeError', () => NProgress.done())


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
    return  <>
    <Head>
    {/* Import CSS for nprogress */}
    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
  </Head>
  <Component {...pageProps} />
  </>
  }
}

export default MyApp
