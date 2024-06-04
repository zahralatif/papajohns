'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleSelectMenuItem = (menuItem) => {
    console.log(`Selected menu item: ${menuItem}`);
    setSelectedMenuItem(menuItem);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header onSelectMenuItem={handleSelectMenuItem} />
        {React.cloneElement(children, { selectedMenuItem })}
      </body>
    </html>
  );
}
