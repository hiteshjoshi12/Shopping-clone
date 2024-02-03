import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/CartSlice';

const Shoppingcard = ({ id, image, price, description, title }) => {
  const dispatch = useDispatch();

  const maxDescriptionLength = 150;
  const shortenedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength - 3) + '...'
      : description;

  const handleAddToCartClick = () => {
    dispatch(addToCart({ id, image, price, title }));
    alert("Item Added Succesfully")
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-4 transition-transform ease-in-out duration-150 transform hover:scale-105">
      <img src={image} alt="logo" className="w-full aspect-[3/2] h-40 object-contain rounded-t-lg mb-4" />
      <h1 className="text-lg font-bold mb-2">{price}💲</h1>
      <p className="text-sm mb-4">{shortenedDescription}</p>
      <button type="button" onClick={handleAddToCartClick} className="bg-black text-white px-3 py-1 rounded-md text-sm font-semibold ">
      ADD TO CART
      </button>
    </div>
  );
};

export default Shoppingcard;
