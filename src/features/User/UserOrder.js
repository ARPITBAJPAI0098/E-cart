import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchloggedinuserorderasync, selectuserorders } from "./Userslice";
import { selectLoggedInUser } from "../Auth/Authslice";
export default function UserOrder() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectuserorders);
  //jaisi hi uspage me jae turant sare order dikh jane chahie
  useEffect(() => {
    dispatch(fetchloggedinuserorderasync(user.id));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <div>
             <div className="mx-auto max-w-3xl px-4 sm:px-3 lg:px-6 mt-15 bg-white rounded-md p-2 text-gray-400">
        <div>
          <h1 class="text-6xl font-bold text-center text-blue-600 mb-8">
            Cart
          </h1>{" "}
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={item.thumbnail}>{item.title}</a>
                          </h3>
                          <p className="ml-4">${item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.brand}
                        </p>
                      </div>
                      <div className="flex flex-0 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline  mr-3 text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty
                          </label>
                      
                        </div>

                        <div className="flex">
                          <button
                            onClick={(e) => handleremove(e, item.id)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalamount}</p>
            </div>
            <div className="flex justify-between text-base  font-medium text-gray-900">
              <p>Total Items In Cart</p>
              <p>{totalitems} items</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link to="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
      ))}
    </div>
  );
}
