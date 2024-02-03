import React, { useEffect, useState } from "react";
import Shoppingcard from "./Shoppingcard";

const Hero = () => {
  const [shoppingData, setShoppingData] = useState([]);

  async function getdata() {
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    console.log(response);
    setShoppingData(response);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="flex justify-around flex-wrap w-full md:w-5/6 lg:ml-24 min-h-full">
        {shoppingData.map((data) => (
          <Shoppingcard key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};

export default Hero;
