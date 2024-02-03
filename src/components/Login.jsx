import React, { useRef, useState } from "react";
import { checkvalidatedata } from "../utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const [isloginform, setisloginform] = useState(true);
  const [errormsg, seterrmsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const togglesignin = () => {
    setisloginform(!isloginform);
  };

  const handelbuttonclick = (e) => {
    e.preventDefault();
    // validate the form data
    const msg = checkvalidatedata(email.current.value, password.current.value);
    seterrmsg(msg);
    if (msg) return;

    if (!isloginform) {
      //sign up login
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrmsg(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <section>
      
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
        {isloginform ? "Sign in to your account" : "Sign Up to your account"}
          
        </h2>
        <form onSubmit={(e) => {
          e.preventDefault();
        }} className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900" >
                {' '}
                Email address{' '}
              </label>
              <div className="mt-2">
                <input ref={email}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email" 
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Password{' '}
                </label>
              </div>
              <div className="mt-2">
                <input ref={password}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <div>
              <p>{errormsg}</p>
            </div>
            <div>
              <button type="button" onClick={handelbuttonclick} className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
              {isloginform ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <p className="py-4 cursor-pointer" onClick={togglesignin}>
          {isloginform
            ? "New to Netflix? Sign Up Now"
            : "Email Already Register. Please Sign In"}
        </p>
          </div>
        </form>
      </div>
    </div>
  </section>
  );
};

export default Login;

