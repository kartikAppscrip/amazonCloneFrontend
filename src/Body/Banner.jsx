import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
    return <div className="position-relative banner">
        <Carousel
            autoPlay
            infiniteLoop
            showStatus
            showIndicators={false}
            showThumbs={false}
            interval={5000}
        >
            <div>
                <img className="carousel_Image" loading="lazy" src="https://links.papareact.com/gi1" alt="nothhh" />
            </div>
            <div>
                <img className="carousel_Image" loading="lazy" src="https://links.papareact.com/6ff" alt="nothhh" />
            </div>
            <div>
                <img className="carousel_Image" loading="lazy" src="https://links.papareact.com/7ma" alt="nothhh" />
            </div>
        </Carousel>
        <style jsx>
            {
                `
                .carousel_Image{
                    z-index: -1;
                    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                }
                .banner{
                    margin-bottom: -22%;
                }
                  
                `
            }
        </style>
    </div>;
}

export default Banner;
