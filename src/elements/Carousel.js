import React from 'react'
import Slider from "react-slick";

export default function Carousel({data, setCarousel}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const type = data[0].substr(-3)
    console.log(type)

    if( type === 'm4v'){

        return (
            <div id='carousel-container'>
                <div className="container">

                    <video playsInline autoPlay loop>
                        <source src={data[0]} type='video/mp4'/>
                    </video>


                </div>
                <span className='x' onClick={() => setCarousel(false)}>✖</span>
            </div>
        )
    }else {
        return (
            <div id='carousel-container'>
                <div className="container">
                    <Slider {...settings}>
                        {data.map(dat => (
                            <div key={dat}>
                                <img src={dat} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <span className='x' onClick={() => setCarousel(false)}>✖</span>
            </div>
        )
    }

}
