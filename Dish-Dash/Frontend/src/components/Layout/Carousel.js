import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };

    // Define an array of image URLs
    const imageUrls = [
      "https://b.zmtcdn.com/data/dish_photos/bdf/462497db473e9f0932e77681ada53bdf.jpg",
      "https://b.zmtcdn.com/data/pictures/7/19727737/d685bb96acd7976b7a3a8788d2e004d6.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/5/20110075/e8cf1c58f2bb217f3d85ff50b7fe39a3_o2_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/8/19543558/364fd9cd488c2cca4504ae99e3530f11.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/9/51039/99b002b985def493b463c925ba4c70f6.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/adxirgdok9fcgbiwcyzt",
    ];

    return (
      <div className="slider-container">
        <h2>Popular Dishes ...</h2>
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index}>
              <div className="image-container">
                <img src={url} alt={`${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
