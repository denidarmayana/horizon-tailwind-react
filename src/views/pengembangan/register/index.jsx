import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

export default function Register() {
  const username = localStorage.getItem("username");
  const [usersData, setUserData] = useState(null); // State to hold the user data
  const [loading, setLoading] = useState(true); // State to track loading

  const fetchUserData = async () => {
    const loginData = {
      username: username,
    };

    try {
      const response = await fetch("/api/jaringan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "SebaraKey2024",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log(data);
      setUserData(data); // Update state with fetched user data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex w-full pb-8 h-auto justify-center">
        <div className="tree">
          <ul className="bg-red-500">
            {loading ? ( // Show a loading message while the data is being fetched
              <div>Loading...</div>
            ) : usersData ? ( // Render UserCard only when data is available
              <UserCard user={usersData} />
            ) : (
              <div>No user data found</div> // Handle the case where no user data is available
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
