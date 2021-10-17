import React, { Component } from 'react';
import ImageGallery from "react-image-gallery";

const PREFIX_URL = "../assets/images/";

export default class SlideShow extends Component {
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
        showIndex={false}
        showThumbnails={false}
        lazyLoad={true}
        autoPlay={true}
        showPlayButton={false}
        slideInterval={9000}
        showFullscreenButton = {false}
        swipingTransitionDuration={1000}
      />
    );
  }
}
