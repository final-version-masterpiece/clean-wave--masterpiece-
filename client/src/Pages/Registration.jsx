import React, { useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";

const Registration = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    return passwordRegex.test(password);
  };

  const validatephone_number = (phone_number) => {
    return /^07\d{8}$/.test(phone_number);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Perform input validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!validatephone_number(phone_number)) {
      setError("Please enter a valid phone number");
      return;
    }

    try {
      // Send the data to the server using Axios or another method
      const response = await axios.post("http://127.0.0.1:3001/register", {
        username: username,
        email: email,
        password: password,
        phone_number: phone_number,
      });

      // Handle the response as per your application's needs
    // Use SweetAlert2 directly without creating a separate instance
    const result = await Swal.fire({
      icon: 'success',
      title: 'Successfully logged in',
      text: `Welcome ${response.data}`,
      showConfirmButton: true,
      timer: 5000, // Set a timer for 5 seconds (adjust as needed)
      confirmButtonText: 'OK',
    });

      // window.location.href = "/Login";
    
    } catch (error) {
      setError("An error occurred during registration: " + error.message);
    }
  };

  const handleGoogleRegistration = async () => {
    // Implement Google Sign Up logic here
    // You can use a library like Firebase Authentication for Google Sign Up
    try {
      // Example using Firebase Authentication
      // const googleProvider = new firebase.auth.GoogleAuthProvider();
      // const result = await firebase.auth().signInWithPopup(googleProvider);
      // const user = result.user;
      // console.log(user);

      // Redirect or perform additional actions after Google Sign Up
    } catch (error) {
      setError("An error occurred during Google Sign Up: " + error.message);
    }
  };

  return (
    <div>
      <>
        {/* component */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Aqaba-Jordan.jpg')",
          }}
        />
        <div
          id="reg"
          className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5"
        >
          <div
            className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
            style={{ maxWidth: 1000 }}
          >
            <div className="md:flex w-full">
              <div
                id="fff"
                className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10"
              >
                <div>
                  <img
                    className="osama"
                    src="https://www.allen.ac.in/apps2324/assets/images/reset-password.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div id="regg" className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">Sign Up</h1>
                  <p className="text-center">
                    Enter your information to Sign Up
                  </p>
                </div>
                <div>
                  <div>
                    <div>
                      <label
                        htmlFor="userName"
                        className="text-xs font-semibold px-1"
                      >
                        {" "}
                        User Name
                      </label>

                      <div id="s" className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          onChange={(e) => setUserName(e.target.value)}
                          value={username}
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Ahmad"
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label
                        htmlFor=""
                        className="text-xs font-semibold px-1"
                      >
                        Email
                      </label>

                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Ahmad@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label
                        htmlFor=""
                        className="text-xs font-semibold px-1"
                      >
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div id="ssssss" className="w-full px-3 mb-12">
                      <label
                        htmlFor=""
                        className="text-xs font-semibold px-1"
                      >
                        Phone Number
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          onChange={(e) => setphone_number(e.target.value)}
                          value={phone_number}
                          type="phone number"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="00962700000000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <form onSubmit={handleRegistration}>
                        <div id="google" className="w-full flex justify-center">
                          <button
                            onClick={handleGoogleRegistration}
                            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                          >
                            <svg
                              className="h-6 w-6 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="800px"
                              height="800px"
                              viewBox="-0.5 0 48 48"
                              version="1.1"
                            >
                              <title>Google-color</title>
                              <desc>Created with Sketch.</desc>
                              <defs> </defs>
                              <g
                                id="Icons"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Color-"
                                  transform="translate(-401.000000, -860.000000)"
                                >
                                  <g
                                    id="Google"
                                    transform="translate(401.000000, 860.000000)"
                                  >
                                    <path
                                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                      id="Fill-1"
                                      fill="#FBBC05"
                                    >
                                      {" "}
                                    </path>{" "}
                                    <path
                                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                      id="Fill-2"
                                      fill="#EB4335"
                                    >
                                      {" "}
                                    </path>{" "}
                                    <path
                                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                      id="Fill-3"
                                      fill="#34A853"
                                    >
                                      {" "}
                                    </path>{" "}
                                    <path
                                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                      id="Fill-4"
                                      fill="#4285F4"
                                    >
                                      {" "}
                                    </path>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>{" "}
                            </svg>
                            <span>Continue with Google</span>
                          </button>
                        </div>
                        <br></br>
                        <button
                          type="submit"
                          id="button"
                          className="bn632-hover bn28"
                        >
                          Sign Up
                        </button>
                      </form>
                      {error && <div className="text-red-500">{error}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"></div>
      </>
    </div>
  );
};

export default Registration;




// import React, { useState } from "react";
// import axios from "axios";

// const Registration = () => {
//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleRegistration = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:4000/user", {
//         username: username,
//         email: email,
//         password: password,
//         phoneNumber: phoneNumber,
//       });

//       console.log(response.data);

//       alert("Successfully registered");

//       // Redirect to the login page after successful registration
//       window.location.href = "/login";
//     } catch (error) {
//       alert("An error occurred during registration: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <>
//         {/* component */}
//         <style
//           dangerouslySetInnerHTML={{
//             __html:
//               "@import url('https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Aqaba-Jordan.jpg')",
//           }}
//         />
//         <div
//           id="reg"
//           className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5"
//         >
//           <div
//             className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
//             style={{ maxWidth: 1000 }}
//           >
//             <div className="md:flex w-full">
//               <div
//                 id="fff"
//                 className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10"
//               >
//                 <div>
//                   <img
//                     className="osama"
//                     src="https://www.allen.ac.in/apps2324/assets/images/reset-password.jpg"
//                     alt=""
//                   />
//                 </div>
//               </div>
//               <div id="regg" className="w-full md:w-1/2 py-10 px-5 md:px-10">
//                 <div className="text-center mb-10">
//                   <h1 className="font-bold text-3xl text-gray-900">Sign Up</h1>
//                   <p className="text-center">
//                     Enter your information to Sign Up
//                   </p>
//                 </div>
//                 <div>
//                   <div>
//                     <div>
//                       <label
//                         htmlFor="userName"
//                         className="text-xs font-semibold px-1"
//                       >
//                         {" "}
//                         User Name
//                       </label>

//                       <div id="s" className="flex">
//                         <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                           <i className="mdi mdi-account-outline text-gray-400 text-lg" />
//                         </div>
//                         <input
//                           onChange={(e) => setUserName(e.target.value)}
//                           value={username}
//                           type="text"
//                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                           placeholder="Ahmad"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <br></br>
//                   <div className="flex -mx-3">
//                     <div className="w-full px-3 mb-5">
//                       <label
//                         htmlFor=""
//                         className="text-xs font-semibold px-1"
//                       >
//                         Email
//                       </label>

//                       <div className="flex">
//                         <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                           <i className="mdi mdi-email-outline text-gray-400 text-lg" />
//                         </div>
//                         <input
//                           onChange={(e) => setEmail(e.target.value)}
//                           value={email}
//                           type="email"
//                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                           placeholder="Ahmad@example.com"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex -mx-3">
//                     <div className="w-full px-3 mb-12">
//                       <label
//                         htmlFor=""
//                         className="text-xs font-semibold px-1"
//                       >
//                         Password
//                       </label>
//                       <div className="flex">
//                         <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                           <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
//                         </div>
//                         <input
//                           onChange={(e) => setPassword(e.target.value)}
//                           value={password}
//                           type="password"
//                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                           placeholder="************"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex -mx-3">
//                     <div id="ssssss" className="w-full px-3 mb-12">
//                       <label
//                         htmlFor=""
//                         className="text-xs font-semibold px-1"
//                       >
//                         Phone Number
//                       </label>
//                       <div className="flex">
//                         <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                           <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
//                         </div>
//                         <input
//                           onChange={(e) => setPhoneNumber(e.target.value)}
//                           value={phoneNumber}
//                           type="phone number"
//                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                           placeholder="00962700000000"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex -mx-3">
//                     <div className="w-full px-3 mb-5">
//                       <form onSubmit={handleRegistration}>
//                         {/* ... input fields */}
//                         <button
//                           type="submit"
//                           id="button"
//                           className="bn632-hover bn28"
//                         >
//                           Sign Up
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}

//         <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"></div>
//       </>
//     </div>
//   );
// };

// export default Registration;
