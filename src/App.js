import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-8 bg-white rounded shadow-lg">
        {userData && (
          <div className="flex">
            <img
              className="w-38 h-38 object-cover mr-4"
              src={userData.picture.large}
              alt="User"
            />
            <div>
              <div className="mb-3 font-bold text-gray-700">
                {`${userData.name.first} ${userData.name.last}`}
              </div>
              <p className="mb-3 font-normal text-gray-700">{userData.gender}</p>
              <p className="mb-3 font-normal text-gray-700">
                {userData.phone}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                {userData.location.city}, {userData.location.country}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
