import React, {useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();


  const handelsignout = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/products");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  return (
    <div className=" py-4 mx-3">
      <div className="">
        {user && (
          <ul className="flex justify-end items-center gap-4">
          
            <li className="p-2 ml-0 font-normal tracking-wider">
              <Link className="link" to="/products">
                Home
              </Link>
            </li>
            <li className="p-2 ml-0  font-normal tracking-wider">
              <a href="#">Email</a>
            </li>
            <li className="p-2 ml-0  font-normal tracking-wider">
              <Link to={"/cart"}>
                Cart{" "}
                {cartItems.items.length > 0 && `(${cartItems.items.length})`}
              </Link>
            </li>
            {user && (
              <li className="p-2 ml-0  font-normal tracking-wider">
                <button
                  className="py-2 px-4 my-2 bg-red-700 text-white rounded-md "
                  onClick={handelsignout}
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
