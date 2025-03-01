'use client'
import React, { useEffect } from "react";
import axiosInstance from "../../lib/axios";

export default function Page() {
  useEffect(() => {
    // Fetch data from the /no-auth endpoint
    axiosInstance
      .get("/posts/no-auth")
      .then((response) => {
        // Log the response data to the console
        console.log("Response Data:", response.data);
      })
      .catch((error) => {
        // Log any errors to the console
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return <div>Test</div>;
}