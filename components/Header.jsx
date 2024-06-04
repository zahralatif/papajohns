"use client";

import React, { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";

const Header = ({ onSelectMenuItem }) => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetchData(
          "https://api.mirafgan.me/papajohns/menu"
        );
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
      <nav className="flex justify-between items-center my-10 background">
        <div className="logo">
          <Image
            className="nav-img"
            src="https://www.papajohns.az/img/content/pj_logo_web_new.png"
            alt="papajohns logo"
            width="272"
            height="132"
          ></Image>
        </div>
        {/* <ul className="flex justify-between gap-5">
          {menu.map((item) => (
            <li
              key={item.slug}
              onClick={() => {
                console.log(`Menu item clicked: ${item.slug}`);
                onSelectMenuItem(item.slug);
              }}
              className="cursor-pointer menu-item"
            >
              {item.name}
            </li>
          ))}
        </ul> */}
        <ul className="flex justify-between gap-5">
          {menu.map((item) => (
            <li key={item.slug} className="cursor-pointer menu-item">
              <Link
                href={`/${item.slug}`}
                onClick={() => {
                  console.log(`Menu item clicked: ${item.slug}`);
                  onSelectMenuItem(item.slug);
                }}
                className="menu-item hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
