import { useDispatch, useSelector } from "react-redux";
import {removeFromCart,increaseQuantity,decreaseQuantity,selectCartItems,} from "../utils/CartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(selectCartItems);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const calculateTotal = () => {
    const total = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  
    
    return parseFloat(total.toFixed(2));
  };

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
        Shopping Cart
      </h1>

      {products.map((product) => (
        <div key={product.id} className="py-4">
          <li className="grid grid-cols-3 ">
            <div className=" flex items-center justify-center ">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 aspect-[3/4] object-contain rounded-md mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold text-black ">
                  {product.title.split(",")[0]}
                </h3>
                <p className="text-sm font-medium text-gray-900">
                  💲{product.price}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => handleDecreaseQuantity(product.id)}
                className="h-7 w-7 bg-gray-200 text-gray-600 rounded-md mr-1"
              >
                -
              </button>
              <input
                type="text"
                className="mx-2 h-7 w-9 text-center border rounded-md"
                value={product.quantity}
                readOnly
              />
              <button
                type="button"
                onClick={() => handleIncreaseQuantity(product.id)}
                className="h-7 w-7 bg-gray-200 text-gray-600 rounded-md ml-1"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleRemoveFromCart(product.id)}
              className="text-xs font-medium text-red-500 ml-4"
            >
              Remove
            </button>
          </li>
        </div>
      ))}

      {/* Order summary */}
      <div className="mt-8 p-4 bg-white rounded-md">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Price Details
        </h2>
        <div className="flex justify-between">
          <p className="text-sm text-gray-800">
            Price ({products.length} items)
          </p>
          <p className="text-sm font-medium text-gray-900">
            💲 {calculateTotal()}
          </p>
        </div>
        <div className="flex justify-between pt-2">
          <p className="text-sm text-gray-800">Delivery Charges</p>
          <p className="text-sm font-medium text-green-700">Free</p>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-2">
          <p className="text-base font-medium text-gray-900">Total Amount</p>
          <p className="text-base font-medium text-gray-900">
            💲 {calculateTotal()}
          </p>
        </div>
        <div>
          <button className="bg-black text-white px-3 py-2 my-3 rounded-md text-sm font-semibold hover:bg-black/80">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
