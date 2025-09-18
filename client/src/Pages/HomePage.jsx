import React from "react";
import { useStoreAuth } from "../store/useAuthStore";

const HomePage = () => {
 
  const { authUser } = useStoreAuth();
  console.log("Auth User:", authUser)
  return (
    authUser && (
      <div className="min-h-screen bg-gray-900 p-20">
        <h1 className="text-white">Home Page</h1>
      </div>
    )
  );
};

export default HomePage;
