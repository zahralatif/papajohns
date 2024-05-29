"use client"

import React, { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";

const Home = ({ selectedMenuItem }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedMenuItem) {
      const getData = async () => {
        try {
          console.log(`Fetching data for: ${selectedMenuItem}`);
          const response = await fetchData(`https://api.mirafgan.me/papajohns/${selectedMenuItem}`);
          setData(response);
        } catch (err) {
          setError(err.message);
        }
      };

      getData();
    }
  }, [selectedMenuItem]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h1>{selectedMenuItem} Data</h1>
          {data.map(item => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              {/* <img src={item.img} alt={item.name} /> */}
              <Image src={item.img} alt={item.name} ></Image>
              <p>{item.composition}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Please select a menu item.</div>
      )}
    </div>
  );
};

export default Home;
