import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';


const D = () => {

  useEffect(() => {
    AOS.init();
    
  }, []);
  return (
    <div><div>
        <br></br>
    <div data-aos="fade-up" className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:rounded-lg lg:h-full"
            style={{
              backgroundImage:
                'url("https://wdy.h-cdn.co/assets/16/13/4000x2666/gallery-1459452050-gettyimages-122619539.jpg")'
            }}
          />
        </div>
        <div id='k' className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 className="text-3xl text-gray-800 font-bold">
          
          Why Should You ? <span className="text-indigo-600">Choose Us</span>
          </h2>
          <p id="tt" className="mt-4 text-gray-600">
          Our cleaning services website stands out as a reliable and professional solution for all your cleaning needs. We take pride in our commitment to delivering a spotless and hygienic environment for our clients. With a team of dedicated and experienced professionals, we offer a wide range of cleaning services tailored to your specific requirements. What sets us apart is our unwavering dedication to quality and customer satisfaction. We use eco-friendly cleaning products and the latest industry-standard equipment to ensure the highest cleaning standards while minimizing our environmental footprint. Whether it's residential, commercial, or specialized cleaning services, our website is your go-to destination for a pristine, stress-free, and healthier living or working space.
          </p>
          <div className="mt-8">
          {/* <a href="http://">
         <button class="bn632-hover bn28" id="button">Learn More</button>
         </a>  */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <br></br><br></br><br></br>
  </div>
  )
}

export default D