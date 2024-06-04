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
          console.log('Fetched data:', response);
          setData(response);
        } catch (err) {
          console.error('Error fetching data:', err);
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
              <Image src={item.img} alt={item.name} width={500} height={500} />
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
