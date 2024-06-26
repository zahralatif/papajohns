"use client";

import React, { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";
import Spinner from "../Spinner";

const Home = ({ selectedMenuItem }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForDefaultMenu = async () => {
      try {
        let response;
        if (selectedMenuItem) {
          response = await fetchData(
            `https://api.mirafgan.me/papajohns/${selectedMenuItem}`
          );
        } else {
          response = await fetchData(
            `https://api.mirafgan.me/papajohns/papadias`
          );
        }
        setData(response);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDataForDefaultMenu();
  }, [selectedMenuItem]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data ? (
        <div className="menu-detail">
          {data.map((item) => (
            <div key={item.id}>
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={100}
                className="mb-5"
              ></Image>
              <h2>{item.name}</h2>
              <p>{item.composition}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
