import React, { Component } from 'react';
import Image from '../Body/Image';
import { GIF_LOADER } from '../lib/config';
import { handleLoader } from '../lib/rxSubject';

export class loaderHoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.rxJShandler = handleLoader.subscribe((loading) => {
      if (loading) {
        if (this.state.loading) return;
        this.setIntervalID = setInterval(() => {
          const loaderImg = document.querySelector('img#instacare-gif-loader-55134');
          if (loaderImg) {
            loaderImg.src = GIF_LOADER;
          } else {
            clearInterval(this.setIntervalID);
          }
        }, 2000);
      } else {
        clearInterval(this.setIntervalID);
      }
      this.setState({ loading });
    });
    this.setIntervalID = '';
  }

  componentWillUnmount() {
    if (this.rxJShandler) {
      this.rxJShandler.unsubscribe();
    }
    clearInterval(this.setIntervalID);
  }

  render() {
    return (
      <div>
        {this.state.loading && (
          <div className="customLoaderScreen">
            <Image width={75} src={GIF_LOADER} id="instacare-gif-loader-55134" alt="InstaCare Loader" />
          </div>
        )}
      </div>
    );
  }
}

export default loaderHoc;
