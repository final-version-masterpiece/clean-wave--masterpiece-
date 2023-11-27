import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Detelis = () => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]); // حالة لتخزين عناصر عربة التسوق
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/Sarvices/${id}`)
      .then(response => {
        setProduct(response.data);
import Card from './Card';

const Detelis = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log("dddddddddddddddddddddd",id)
    // Make an Axios GET request to your server's API endpoint for product details
    axios.get(`http://localhost:4000/Sarvices/${id}`)
      .then(response => {
        setProduct(response.data);
        console.log("fffffffffffffffffffffffffffffffff",product)
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  // إضافة المنتج إلى عربة التسوق
  const addToCart = () => {
    setCart([...cart, product]);

    Swal.fire({
      icon: 'success',
      title: 'Successfully added to cart',
      showConfirmButton: true,
      timer: 5000, // Set a timer for 5 seconds (adjust as needed)
      confirmButtonText: 'OK',
    });
  };
  


  return (
    <div>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2">
              <div className="sticky top-0 z-10 overflow-hidden">
          <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
            <img
              src={product.image}
              alt=""
              className="object-cover w-full lg:h-full "
              
            />
          </div>
    
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 ">
        <div className="lg:pl-20">
          <div className="mb-8 ">
     
            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
            {product.title}
            </h2>
            <div className="flex items-center mb-6">
              {/* <ul className="flex mr-2">
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                  </a>
                </li>
              </ul> */}
              {/* <p className="text-xs dark:text-gray-400 ">
                (2 customer reviews)
              </p> */}
            </div>
            <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
           {product.content}
            </p>
            <p id='priceee' className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400">
              <span>{product.price}</span>
            
            </p>
          </div>
 

      
          <div className="flex flex-wrap items-center -mx-4 ">
            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
             <Link to="/BookNow">
              
             < button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                Book Now
              </button>
              
              </Link> 
            </div>
          
          </div>
          <div id='osa' className="flex flex-wrap items-end -mx-4 justify-end">
          <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
            
            <button
          onClick={addToCart} // انقر على هذا الزر لإضافة المنتج إلى عربة التسوق
          className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
        >
          Add to Cart
        </button>

            

      </div>
          
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Detelis