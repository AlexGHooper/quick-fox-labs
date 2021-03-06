import React from 'react'
import Product from '../components/product'
import './products.scss';

import makeVisible from '../hooks/makeVisible'


import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';

export default function Products({ title, copy, productData }) {

  const [bodyContent, isVisible] = makeVisible();

  const settings = {
    className: "product-carousel",
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    slidesToShow: 3,
    initialSlide: 1,
    speed: 500,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        }
      },
    ]
  };

  return (
    <section className="section section--products" ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
        <h2>
          {title}
        </h2>
        <p>
          {copy}
        </p>
        <Slider {...settings}>
          {productData.map(item => (
            <Product
              extras={item.extras ? true : false}
              icon={item.icon}
              name={item.name}
              type={item.type}
              forTxt={item.forTxt}
              cost={item.cost}
              costDetails={item.costDetails}
              productDetails={item.productDetails}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}