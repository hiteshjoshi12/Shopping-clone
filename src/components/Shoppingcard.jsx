// Shoppingcard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Shoppingcard = ({ image, price, description }) => {
  const maxDescriptionLength = 150;
  const shortenedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength - 3) + "..."
      : description;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 m-4 transition-transform ease-in-out duration-150 transform hover:scale-105">
      <img src={image} alt="logo" className="w-full aspect-[3/2] h-40 object-contain rounded-t-lg mb-4" />
      <h1 className="text-lg font-bold mb-2">{price}💲</h1>
      <p className="text-sm mb-4">{shortenedDescription}</p>
      <Link to={"/cart"}>
      <button type="button" className="bg-black text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        ADD TO CART
      </button>
        </Link>
    </div>
  );
};

export default Shoppingcard;
