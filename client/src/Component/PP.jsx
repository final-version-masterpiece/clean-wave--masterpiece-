import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Profile = () => {
  const [userData, setUserData] = useState({
    id: "", // Replace with the actual user ID
    username: "",
    email: "",
    phone_number: "",
    password: "",
    avatar: "",
    coverPhoto: "",
  });

  useEffect(() => {
    const id = Cookies.get("id"); // Replace with the actual user ID
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((response) => {
        console.log("User Data:", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data from the server:", error);
      });
  }, []);

  const handleCoverPhotoChange = async (e) => {
    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("coverPhoto", file);

      const response = await axios.post(
        `http://localhost:4000/users/${userData.id}/upload-cover-photo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const updatedUserData = {
          ...userData,
          coverPhoto: response.data.coverPhoto,
        };
        setUserData(updatedUserData);
      } else {
        console.error("Failed to upload cover photo.");
      }
    } catch (error) {
      console.error("Error uploading cover photo:", error);
    }
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const response = await axios.post(
        `http://localhost:4000/users/${userData.id}/upload-avatar`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const updatedUserData = { ...userData, avatar: response.data.avatar };
        setUserData(updatedUserData);
      } else {
        console.error("Failed to upload avatar.");
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = Cookies.get("id"); // Replace with the actual user ID
      
      const response = await axios.put(
        `http://localhost:4000/users/${id}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("User data updated successfully!");
      } else {
        alert("Failed to update user data.");
      }
    } catch (error) {
      alert("Error updating user data:", error);
    }
  };

  // ... (previous code)

  return (
    <div>
      <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
        <img
          src={userData.coverPhoto}
          alt=""
          className="bg w-full h-full object-cover object-center absolute z-0"
        />
        <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <img
            src={userData.avatar}
            className="h-36 w-36 object-cover rounded-full"
          />
          <h1 className="text-2xl font-semibold ">{userData.username}</h1>
          <label
            htmlFor="avatarInput"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-1 px-3 rounded cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
            style={{ zIndex: 10 }}
          >
            Change Avatar
          </label>
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
          <label
            htmlFor="coverPhotoInput"
            className="absolute bottom-4 right-4 mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer  hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Change Cover Photo
          </label>
          <input
            id="coverPhotoInput"
            type="file"
            accept="image/*"
            onChange={handleCoverPhotoChange}
            className="hidden"
          />
        </div>
      </div>
      <form onSubmit={handleFormSubmit} className="mt-4 text-center p-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="nameInput"
              className="block text-sm font-medium text-gray-500"
            >
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="nameInput"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                className="mt-1 p-2 border rounded-md w-full max-w-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="emailInput"
              className="block mt-2 text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="emailInput"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="mt-1 p-2 border rounded-md w-full max-w-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phoneInput"
              className="block mt-2 text-sm font-medium text-gray-500"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phoneInput"
                value={userData.phone_number}
                onChange={(e) =>
                  setUserData({ ...userData, phone_number: e.target.value })
                }
                className="mt-1 p-2 border rounded-md w-full max-w-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="passwordInput"
              className="block mt-2 text-sm font-medium text-gray-500"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="passwordInput"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                className="mt-1 p-2 border rounded-md w-full max-w-md"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
