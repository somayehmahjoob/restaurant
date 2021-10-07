import React, { Component } from 'react';
import ImageGallery from "react-image-gallery";

const PREFIX_URL = "../assets/images/";

export default class SlideShowComponent extends Component {
  render() {
    const images = [
      {
        original: `${PREFIX_URL}mgg-vitchakorn-slid.jpg`,
      },
      {
        original: `${PREFIX_URL}bern-fresen-slider.jpg`,
      },
    ];
    return (
      <ImageGallery
        items={images}
        showBullets={false}
        // showIndex={true}
        showThumbnails={false}
        lazyLoad={true}
        autoPlay={true}
        showPlayButton={false}
      />
    );
  }
}
