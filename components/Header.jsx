"use client";

import React, { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetchData";

const Header = ({ onSelectMenuItem }) => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetchData("https://api.mirafgan.me/papajohns/menu");
        if (response && Array.isArray(response.menu)) {
          setMenu(response.menu);
        } else {
          throw new Error("Menu data is not in the expected format");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    getMenu();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <nav className="flex justify-between items-center my-5 mx-20">
        <div className="logo">PapaJohns</div>
        <ul className="flex justify-between gap-10">
          {menu.map((item) => (
            <li
              key={item.slug}
              onClick={() => {
                console.log(`Menu item clicked: ${item.slug}`);
                onSelectMenuItem(item.slug);
              }}
              className="cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
