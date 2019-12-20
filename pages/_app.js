import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import {Provider} from "react-redux";
import {makeStore} from "../redux/store";
import withRedux from "next-redux-wrapper";

let cachedScrollPositions = [];

Router.events.on('routeChangeStart', url => {
  NProgress.configure({ easing: 'ease', speed: 600, minimum: 0.5 }).start()
})
Router.events.on('routeChangeComplete', () => NProgress.done(true))
Router.events.on('routeChangeError', () => NProgress.done())


class MyApp extends App {

  static async getInitialProps({Component, ctx}) {

    return {
        pageProps: {
            // Call page-level getInitialProps
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
    };

}
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
    const {Component, pageProps, store} = this.props;
    return  <>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  </>
  }
}

export default withRedux(makeStore, {debug: true})(MyApp);
