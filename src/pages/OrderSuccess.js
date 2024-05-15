import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartasync } from "../features/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/Auth/Authslice";
import { resetOrder } from "../features/Order/OrderSlice";
import { useState } from "react";
export default function OrderSuccess() {
  const params = useParams();
  //   console.log(params.id);
  // const user = useSelector(selectLoggedInUser);
  // const dispatch = useDispatch();
  // //certain thing that has to be done only once at the point of execution
  // useEffect(() => {
  //   //reset cart

  //   dispatch(resetCartasync(user.id));

  //   //reset current cart
  //   dispatch(resetOrder());
  // }, [dispatch]);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      {/*{!params.id && <Navigate to="/" replace={true}></Navigate>}*/}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div>
            <h1
              className="text-base font-semibold text-indigo-600 text-9xl ease-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              🎉🛍️
            </h1>
            {isHovered && <p>Hurray! Bonus coins are added</p>}
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Order Successfully placed
          </h1>
          <h2 className="mt-6 text-bold leading-7 text-gray-600">
            Order Number #
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            You can check your Order in My account
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">
              <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go back home
              </button>
            </Link>
            {/* Link your portfolio here*/}
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
